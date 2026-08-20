"use client";

import type { FormEvent, ReactNode } from "react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
  Check,
  KeyRound,
  LoaderCircle,
  MessageSquareText,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Trash2,
  TriangleAlert,
  UsersRound,
  X,
} from "lucide-react";

import AdminAccessDenied from "@/components/admin/AdminAccessDenied";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  useCreateRole,
  useDeleteRole,
  usePermissions,
  useRoles,
  useUpdateRole,
  useUpdateRolePermissions,
} from "@/hooks/use-rbac";
import { useCurrentUser } from "@/hooks/use-users";
import { hasPermission } from "@/lib/admin-roles";
import type {
  Permission as RbacPermission,
  Role,
} from "@/types/rbac";

const groupIcons: Record<string, LucideIcon> = {
  contacts: MessageSquareText,
  grievances: TriangleAlert,
  roles: KeyRound,
  permissions: ShieldCheck,
  users: UsersRound,
};

const groupTitles: Record<string, string> = {
  contacts: "Contact Submissions",
  grievances: "Public Grievances",
  roles: "Roles & Permissions",
  permissions: "Permission Settings",
  users: "Users",
};

const roleToneClasses = [
  "bg-blue-600 text-white",
  "bg-rose-500 text-white",
  "bg-sky-500 text-white",
  "bg-violet-500 text-white",
  "bg-emerald-500 text-white",
];

function formatTitle(value: string) {
  return value
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, letter =>
      letter.toUpperCase()
    );
}

function createRoleKey(
  roleName: string,
  existingRoles: Role[]
) {
  const baseKey =
    roleName
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "") || "custom_role";

  let nextKey = baseKey;
  let index = 2;

  while (
    existingRoles.some(role => role.key === nextKey)
  ) {
    nextKey = `${baseKey}_${index}`;
    index += 1;
  }

  return nextKey;
}

function getPermissionKeys(role?: Role) {
  return role?.permissions.map(
    permission => permission.key
  ) ?? [];
}

function getPermissionSignature(keys: string[]) {
  return [...keys].sort().join("|");
}

function getRoleIconClassName(
  role: Role,
  index: number
) {
  if (role.key === "admin") {
    return "bg-rose-500 text-white";
  }

  if (
    role.key.includes("clerk") ||
    role.key === "head_clerk"
  ) {
    return "bg-blue-600 text-white";
  }

  if (
    role.key.includes("operator") ||
    role.key === "computer_operator"
  ) {
    return "bg-sky-500 text-white";
  }

  if (role.key === "user") {
    return "bg-slate-500 text-white";
  }

  return roleToneClasses[
    index % roleToneClasses.length
  ];
}

function getPermissionTitle(
  permission: RbacPermission
) {
  return permission.label || formatTitle(permission.key);
}

function getGroupTitle(group: string) {
  return groupTitles[group] ?? formatTitle(group);
}

export default function AdminRolesPage() {
  const [selectedRoleId, setSelectedRoleId] =
    useState<number | null>(null);
  const [searchValue, setSearchValue] =
    useState("");
  const [showCreateRole, setShowCreateRole] =
    useState(false);
  const [newRoleName, setNewRoleName] =
    useState("");
  const [
    newRoleDescription,
    setNewRoleDescription,
  ] = useState("");
  const [editRoleName, setEditRoleName] =
    useState("");
  const [
    editRoleDescription,
    setEditRoleDescription,
  ] = useState("");
  const [
    draftPermissionKeys,
    setDraftPermissionKeys,
  ] = useState<string[]>([]);
  const [saveMessage, setSaveMessage] =
    useState("");

  const currentUserQuery = useCurrentUser();
  const { data: currentUser } = currentUserQuery;
  const canReadRoles = hasPermission(
    currentUser?.role,
    "roles.read"
  );
  const canReadPermissions = hasPermission(
    currentUser?.role,
    "permissions.read"
  );
  const canCreateRole = hasPermission(
    currentUser?.role,
    "roles.create"
  );
  const canUpdateRole = hasPermission(
    currentUser?.role,
    "roles.update"
  );
  const canDeleteRole = hasPermission(
    currentUser?.role,
    "roles.delete"
  );
  const canUpdatePermissions = hasPermission(
    currentUser?.role,
    "roles.permissions.update"
  );

  const rolesQuery = useRoles({
    enabled: canReadRoles,
  });
  const permissionsQuery = usePermissions({
    enabled: canReadRoles && canReadPermissions,
  });

  const createRoleMutation = useCreateRole();
  const updateRoleMutation = useUpdateRole();
  const deleteRoleMutation = useDeleteRole();
  const updatePermissionsMutation =
    useUpdateRolePermissions();

  const roles = rolesQuery.data ?? [];
  const permissions = permissionsQuery.data ?? [];

  const selectedRole =
    roles.find(role => role.id === selectedRoleId) ??
    roles[0];
  const selectedPermissionSignature =
    getPermissionSignature(
      getPermissionKeys(selectedRole)
    );

  useEffect(() => {
    if (roles.length === 0) {
      setSelectedRoleId(null);
      return;
    }

    const selectedRoleExists = roles.some(
      role => role.id === selectedRoleId
    );

    if (!selectedRoleExists) {
      setSelectedRoleId(roles[0].id);
    }
  }, [roles, selectedRoleId]);

  useEffect(() => {
    if (!selectedRole) {
      setDraftPermissionKeys([]);
      setEditRoleName("");
      setEditRoleDescription("");
      return;
    }

    setDraftPermissionKeys(
      getPermissionKeys(selectedRole)
    );
    setEditRoleName(selectedRole.name);
    setEditRoleDescription(
      selectedRole.description ?? ""
    );
    setSaveMessage("");
  }, [
    selectedRole?.id,
    selectedRole?.name,
    selectedRole?.description,
    selectedPermissionSignature,
  ]);

  const normalizedSearch =
    searchValue.trim().toLowerCase();

  const filteredRoles = useMemo(() => {
    if (!normalizedSearch) {
      return roles;
    }

    return roles.filter(role => {
      return [
        role.name,
        role.key,
        role.description ?? "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
    });
  }, [normalizedSearch, roles]);

  const filteredPermissions = useMemo(() => {
    if (!normalizedSearch) {
      return permissions;
    }

    return permissions.filter(permission => {
      return [
        permission.label,
        permission.key,
        permission.description,
        permission.group,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
    });
  }, [normalizedSearch, permissions]);

  const permissionGroups = useMemo(() => {
    const groupKeys = Array.from(
      new Set(permissions.map(permission => permission.group))
    );

    return groupKeys.map(groupKey => ({
      key: groupKey,
      title: getGroupTitle(groupKey),
      icon: groupIcons[groupKey] ?? ShieldCheck,
    }));
  }, [permissions]);

  const selectedPermissions = useMemo(
    () => new Set(draftPermissionKeys),
    [draftPermissionKeys]
  );
  const hasDraftChanges =
    selectedRolePermissionSignature(selectedRole) !==
    getPermissionSignature(draftPermissionKeys);

  function getGroupPermissions(groupKey: string) {
    return filteredPermissions.filter(
      permission => permission.group === groupKey
    );
  }

  function getRolePermissionCount(
    role: Role,
    groupKey?: string
  ) {
    const rolePermissionKeys =
      getPermissionKeys(role);

    if (!groupKey) {
      return rolePermissionKeys.length;
    }

    const groupPermissionKeys = permissions
      .filter(permission => permission.group === groupKey)
      .map(permission => permission.key);

    return rolePermissionKeys.filter(permissionKey =>
      groupPermissionKeys.includes(permissionKey)
    ).length;
  }

  function togglePermission(permissionKey: string) {
    if (
      !selectedRole ||
      selectedRole.is_system ||
      !canUpdatePermissions
    ) {
      return;
    }

    setSaveMessage("");

    setDraftPermissionKeys(previousKeys => {
      if (previousKeys.includes(permissionKey)) {
        return previousKeys.filter(
          item => item !== permissionKey
        );
      }

      return [...previousKeys, permissionKey];
    });
  }

  async function handleCreateRole(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!canCreateRole) {
      return;
    }

    const trimmedName = newRoleName.trim();

    if (!trimmedName) {
      return;
    }

    try {
      const createdRole =
        await createRoleMutation.mutateAsync({
          name: trimmedName,
          key: createRoleKey(trimmedName, roles),
          description:
            newRoleDescription.trim() || undefined,
          permission_keys: [],
        });

      setSelectedRoleId(createdRole.id);
      setNewRoleName("");
      setNewRoleDescription("");
      setShowCreateRole(false);
      setSaveMessage("Role created successfully.");
    } catch {
      // Mutation error is rendered below the form.
    }
  }

  async function handleUpdateRoleDetails(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (
      !selectedRole ||
      selectedRole.is_system ||
      !canUpdateRole
    ) {
      return;
    }

    try {
      await updateRoleMutation.mutateAsync({
        id: selectedRole.id,
        data: {
          name: editRoleName.trim(),
          description:
            editRoleDescription.trim() || undefined,
        },
      });

      setSaveMessage("Role details updated.");
    } catch {
      // Mutation error is rendered below the form.
    }
  }

  async function handleDeleteRole() {
    if (
      !selectedRole ||
      selectedRole.is_system ||
      !canDeleteRole
    ) {
      return;
    }

    const confirmed = window.confirm(
      `Delete ${selectedRole.name}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteRoleMutation.mutateAsync(
        selectedRole.id
      );

      setSelectedRoleId(null);
      setSaveMessage("Role deleted successfully.");
    } catch {
      // Mutation error is rendered below the panel.
    }
  }

  async function handleSavePermissions() {
    if (
      !selectedRole ||
      selectedRole.is_system ||
      !canUpdatePermissions ||
      !hasDraftChanges
    ) {
      return;
    }

    try {
      await updatePermissionsMutation.mutateAsync({
        id: selectedRole.id,
        data: {
          permission_keys: draftPermissionKeys,
        },
      });

      setSaveMessage("Permissions saved successfully.");
    } catch {
      // Mutation error is rendered below the panel.
    }
  }

  if (currentUser && !canReadRoles) {
    return (
      <AdminAccessDenied description="Your role does not have roles.read permission." />
    );
  }

  const isLoading =
    currentUserQuery.isLoading ||
    rolesQuery.isLoading ||
    permissionsQuery.isLoading;
  const loadError =
    rolesQuery.error ?? permissionsQuery.error;

  return (
    <main className="p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <KeyRound className="h-7 w-7" />
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">
                Access Control
              </p>

              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Roles & Permissions
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Database roles, permissions, and dashboard access settings.
              </p>
            </div>
          </div>

          <Button
            type="button"
            onClick={handleSavePermissions}
            disabled={
              !selectedRole ||
              selectedRole.is_system ||
              !canUpdatePermissions ||
              !hasDraftChanges ||
              updatePermissionsMutation.isPending
            }
            className="h-11 rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700"
          >
            {updatePermissionsMutation.isPending ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            Save changes
          </Button>
        </div>

        {saveMessage && (
          <div className="mb-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
            {saveMessage}
          </div>
        )}

        {isLoading && (
          <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <div className="text-center">
              <LoaderCircle className="mx-auto h-9 w-9 animate-spin text-blue-600" />

              <p className="mt-4 text-sm font-medium text-slate-500">
                Roles and permissions loading...
              </p>
            </div>
          </div>
        )}

        {!isLoading && loadError && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h2 className="font-semibold text-red-700">
              Roles load nahi ho paaye.
            </h2>

            <p className="mt-1 text-sm text-red-600">
              {loadError instanceof Error
                ? loadError.message
                : "Something went wrong"}
            </p>

            <Button
              type="button"
              onClick={() => {
                rolesQuery.refetch();
                permissionsQuery.refetch();
              }}
              className="mt-4 bg-red-600 text-white hover:bg-red-700"
            >
              Try Again
            </Button>
          </div>
        )}

        {!isLoading && !loadError && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-medium text-slate-500">
                {roles.length} records found
              </p>

              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

                <Input
                  type="search"
                  value={searchValue}
                  onChange={event =>
                    setSearchValue(event.target.value)
                  }
                  placeholder="Search role or permission"
                  className="h-11 rounded-xl pl-10"
                />
              </div>
            </div>

            <div className="grid min-h-[620px] lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.25fr)]">
              <aside className="border-b border-slate-200 p-5 lg:border-b-0 lg:border-r">
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <ShieldCheck className="h-5 w-5" />
                      </div>

                      <div>
                        <h2 className="font-bold text-slate-900">
                          Create role
                        </h2>

                        <p className="text-xs font-medium text-slate-500">
                          Add a database role.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="button"
                      onClick={() =>
                        setShowCreateRole(true)
                      }
                      disabled={!canCreateRole}
                      className="h-10 rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4" />
                      New role
                    </Button>
                  </div>

                  {showCreateRole && (
                    <form
                      onSubmit={handleCreateRole}
                      className="mt-4 grid gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-slate-900">
                          New role details
                        </p>

                        <button
                          type="button"
                          onClick={() =>
                            setShowCreateRole(false)
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                          aria-label="Close create role form"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="role-name">
                          Role name
                        </Label>

                        <Input
                          id="role-name"
                          value={newRoleName}
                          onChange={event =>
                            setNewRoleName(
                              event.target.value
                            )
                          }
                          placeholder="Example: Tax Clerk"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="role-description">
                          Description
                        </Label>

                        <Input
                          id="role-description"
                          value={newRoleDescription}
                          onChange={event =>
                            setNewRoleDescription(
                              event.target.value
                            )
                          }
                          placeholder="Short role purpose"
                        />
                      </div>

                      {createRoleMutation.error && (
                        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                          {createRoleMutation.error.message}
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={
                          !newRoleName.trim() ||
                          createRoleMutation.isPending
                        }
                        className="h-10 w-fit rounded-xl bg-slate-900 px-4 text-white hover:bg-blue-700"
                      >
                        {createRoleMutation.isPending && (
                          <LoaderCircle className="h-4 w-4 animate-spin" />
                        )}
                        Create role
                      </Button>
                    </form>
                  )}
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Available Roles ({filteredRoles.length})
                  </p>

                  <div className="space-y-3">
                    {filteredRoles.map((role, index) => {
                      const isSelected =
                        role.id === selectedRole?.id;

                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() =>
                            setSelectedRoleId(role.id)
                          }
                          className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left shadow-sm transition ${
                            isSelected
                              ? "border-blue-300 bg-blue-50 ring-1 ring-blue-200"
                              : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
                          }`}
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${getRoleIconClassName(role, index)}`}
                            >
                              <ShieldCheck className="h-5 w-5" />
                            </div>

                            <div className="min-w-0">
                              <p className="truncate font-bold text-slate-900">
                                {role.name}
                              </p>

                              <p className="truncate text-xs font-medium text-slate-500">
                                {role.key}
                              </p>
                            </div>
                          </div>

                          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] font-bold uppercase text-slate-500">
                            {role.is_system
                              ? "System"
                              : "Custom"}
                          </span>
                        </button>
                      );
                    })}

                    {filteredRoles.length === 0 && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-500">
                        No role matched your search.
                      </div>
                    )}
                  </div>
                </div>
              </aside>

              {selectedRole ? (
                <RoleDetailsPanel
                  selectedRole={selectedRole}
                  permissions={permissions}
                  permissionGroups={permissionGroups}
                  filteredPermissions={filteredPermissions}
                  selectedPermissions={selectedPermissions}
                  draftPermissionKeys={draftPermissionKeys}
                  editRoleName={editRoleName}
                  editRoleDescription={editRoleDescription}
                  setEditRoleName={setEditRoleName}
                  setEditRoleDescription={
                    setEditRoleDescription
                  }
                  canUpdateRole={canUpdateRole}
                  canDeleteRole={canDeleteRole}
                  canUpdatePermissions={
                    canUpdatePermissions
                  }
                  hasDraftChanges={hasDraftChanges}
                  updateRoleMutation={
                    updateRoleMutation
                  }
                  deleteRoleMutation={
                    deleteRoleMutation
                  }
                  updatePermissionsMutation={
                    updatePermissionsMutation
                  }
                  getGroupPermissions={getGroupPermissions}
                  getRolePermissionCount={
                    getRolePermissionCount
                  }
                  togglePermission={togglePermission}
                  handleUpdateRoleDetails={
                    handleUpdateRoleDetails
                  }
                  handleDeleteRole={handleDeleteRole}
                />
              ) : (
                <div className="flex min-h-[420px] items-center justify-center p-6 text-center text-sm font-medium text-slate-500">
                  No role exists yet.
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function selectedRolePermissionSignature(role?: Role) {
  return getPermissionSignature(
    getPermissionKeys(role)
  );
}

function RoleDetailsPanel({
  selectedRole,
  permissions,
  permissionGroups,
  filteredPermissions,
  selectedPermissions,
  draftPermissionKeys,
  editRoleName,
  editRoleDescription,
  setEditRoleName,
  setEditRoleDescription,
  canUpdateRole,
  canDeleteRole,
  canUpdatePermissions,
  hasDraftChanges,
  updateRoleMutation,
  deleteRoleMutation,
  updatePermissionsMutation,
  getGroupPermissions,
  getRolePermissionCount,
  togglePermission,
  handleUpdateRoleDetails,
  handleDeleteRole,
}: {
  selectedRole: Role;
  permissions: RbacPermission[];
  permissionGroups: {
    key: string;
    title: string;
    icon: LucideIcon;
  }[];
  filteredPermissions: RbacPermission[];
  selectedPermissions: Set<string>;
  draftPermissionKeys: string[];
  editRoleName: string;
  editRoleDescription: string;
  setEditRoleName: (value: string) => void;
  setEditRoleDescription: (value: string) => void;
  canUpdateRole: boolean;
  canDeleteRole: boolean;
  canUpdatePermissions: boolean;
  hasDraftChanges: boolean;
  updateRoleMutation: ReturnType<typeof useUpdateRole>;
  deleteRoleMutation: ReturnType<typeof useDeleteRole>;
  updatePermissionsMutation: ReturnType<
    typeof useUpdateRolePermissions
  >;
  getGroupPermissions: (
    groupKey: string
  ) => RbacPermission[];
  getRolePermissionCount: (
    role: Role,
    groupKey?: string
  ) => number;
  togglePermission: (permissionKey: string) => void;
  handleUpdateRoleDetails: (
    event: FormEvent<HTMLFormElement>
  ) => void;
  handleDeleteRole: () => void;
}) {
  return (
    <section className="min-w-0">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-2xl font-bold">
              {selectedRole.name}
            </h2>

            <p className="mt-1 text-sm font-semibold text-blue-100">
              key: {selectedRole.key}
            </p>

            <p className="mt-3 max-w-2xl text-sm font-medium text-blue-50">
              {selectedRole.description ||
                "No description provided."}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase">
              {draftPermissionKeys.length} Permissions
            </span>

            <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase">
              {selectedRole.is_system
                ? "System Role"
                : "Custom Role"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        {selectedRole.is_system ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
            Backend system roles locked hain. Permissions edit karne ke liye
            custom role create karo.
          </div>
        ) : (
          <form
            onSubmit={handleUpdateRoleDetails}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_1.3fr_auto]"
          >
            <div className="grid gap-2">
              <Label htmlFor={`edit-role-name-${selectedRole.id}`}>
                Role name
              </Label>

              <Input
                id={`edit-role-name-${selectedRole.id}`}
                value={editRoleName}
                disabled={!canUpdateRole}
                onChange={event =>
                  setEditRoleName(event.target.value)
                }
                className="h-10 bg-white"
              />
            </div>

            <div className="grid gap-2">
              <Label
                htmlFor={`edit-role-description-${selectedRole.id}`}
              >
                Description
              </Label>

              <Input
                id={`edit-role-description-${selectedRole.id}`}
                value={editRoleDescription}
                disabled={!canUpdateRole}
                onChange={event =>
                  setEditRoleDescription(
                    event.target.value
                  )
                }
                className="h-10 bg-white"
              />
            </div>

            <div className="flex items-end gap-2">
              <Button
                type="submit"
                disabled={
                  !canUpdateRole ||
                  !editRoleName.trim() ||
                  updateRoleMutation.isPending
                }
                className="h-10 bg-slate-900 text-white hover:bg-blue-700"
              >
                {updateRoleMutation.isPending ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <Save className="h-4 w-4" />
                )}
                Details
              </Button>

              <Button
                type="button"
                variant="destructive"
                disabled={
                  !canDeleteRole ||
                  deleteRoleMutation.isPending
                }
                onClick={handleDeleteRole}
                className="h-10"
              >
                {deleteRoleMutation.isPending ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  <Trash2 className="h-4 w-4" />
                )}
                Delete
              </Button>
            </div>
          </form>
        )}

        {(updateRoleMutation.error ||
          deleteRoleMutation.error ||
          updatePermissionsMutation.error) && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {updateRoleMutation.error?.message ||
              deleteRoleMutation.error?.message ||
              updatePermissionsMutation.error?.message}
          </div>
        )}

        {!selectedRole.is_system && (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold ${
              hasDraftChanges
                ? "border-blue-200 bg-blue-50 text-blue-800"
                : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            {hasDraftChanges
              ? "Permission changes ready hain. Save changes click karo."
              : "Permissions backend ke saath synced hain."}
          </div>
        )}

        {permissionGroups.map(group => {
          const groupPermissions =
            getGroupPermissions(group.key);
          const Icon = group.icon;

          if (groupPermissions.length === 0) {
            return null;
          }

          return (
            <PermissionSection
              key={group.key}
              title={group.title}
              icon={Icon}
              selectedCount={getRolePermissionCount(
                {
                  ...selectedRole,
                  permissions: permissions.filter(
                    permission =>
                      selectedPermissions.has(
                        permission.key
                      )
                  ),
                },
                group.key
              )}
              totalCount={
                permissions.filter(
                  permission =>
                    permission.group === group.key
                ).length
              }
            >
              {groupPermissions.map(permission => {
                const isChecked =
                  selectedPermissions.has(
                    permission.key
                  );

                return (
                  <button
                    key={permission.key}
                    type="button"
                    disabled={
                      selectedRole.is_system ||
                      !canUpdatePermissions
                    }
                    onClick={() =>
                      togglePermission(permission.key)
                    }
                    className={`flex min-h-16 items-center gap-3 rounded-2xl border p-4 text-left transition ${
                      isChecked
                        ? "border-blue-200 bg-blue-50 text-blue-800"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50"
                    } ${
                      selectedRole.is_system ||
                      !canUpdatePermissions
                        ? "cursor-not-allowed opacity-60"
                        : ""
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border ${
                        isChecked
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-slate-100 text-transparent"
                      }`}
                    >
                      <Check className="h-4 w-4" />
                    </span>

                    <span className="min-w-0">
                      <span className="block font-bold">
                        {getPermissionTitle(permission)}
                      </span>

                      <span className="mt-0.5 block text-xs font-medium opacity-70">
                        {permission.key}
                      </span>

                      {permission.description && (
                        <span className="mt-1 block text-xs font-medium opacity-70">
                          {permission.description}
                        </span>
                      )}
                    </span>
                  </button>
                );
              })}
            </PermissionSection>
          );
        })}

        {filteredPermissions.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm font-medium text-slate-500">
            No permission matched your search.
          </div>
        )}
      </div>
    </section>
  );
}

function PermissionSection({
  title,
  icon: Icon,
  selectedCount,
  totalCount,
  children,
}: {
  title: string;
  icon: LucideIcon;
  selectedCount: number;
  totalCount: number;
  children: ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-blue-600" />

          <h3 className="font-bold text-slate-900">
            {title}
          </h3>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
          {selectedCount}/{totalCount}
        </span>
      </div>

      <div className="grid gap-3 p-4 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}
