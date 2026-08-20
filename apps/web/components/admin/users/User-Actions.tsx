"use client";

import { FormEvent, useState } from "react";
import {
  Eye,
  LoaderCircle,
  Trash2,
  X,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select";
import {
  useCurrentUser,
  useDeleteUser,
  useUpdateUser,
} from "@/hooks/use-users";
import { useRoles } from "@/hooks/use-rbac";
import {
  getUserRoleOptions,
  hasPermission,
} from "@/lib/admin-roles";
import type { User } from "@/types/user";

type UserActionsProps = {
  user: User;
};

export default function UserActions({
  user,
}: UserActionsProps) {
  const { data: currentUser } = useCurrentUser();
  const canUpdate = hasPermission(
    currentUser?.role,
    "users.update"
  );
  const canDelete = hasPermission(
    currentUser?.role,
    "users.delete"
  );

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role || "user");

  const updateUserMutation = useUpdateUser();
  const deleteUserMutation = useDeleteUser();
  const { data: roles = [] } = useRoles({
    enabled: canUpdate,
  });
  const roleOptions = getUserRoleOptions(roles);

  function openEditDialog() {
    setName(user.name);
    setEmail(user.email);
    setRole(user.role || "user");
    setIsEditing(true);
  }

  async function handleUpdate(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!canUpdate) {
      return;
    }

    try {
      await updateUserMutation.mutateAsync({
        id: user.id,
        data: {
          name: name.trim(),
          email: email.trim(),
          role,
        },
      });

      setIsEditing(false);
    } catch {
      // Error message is shown from the mutation state.
    }
  }

  async function handleDelete() {
    if (!canDelete) {
      return;
    }

    const confirmed = window.confirm(
      `Delete ${user.name || user.email || "this user"}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteUserMutation.mutateAsync(user.id);
    } catch (error) {
      window.alert(
        error instanceof Error
          ? error.message
          : "User delete nahi ho paya."
      );
    }
  }

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          title="View and edit user"
          aria-label="View and edit user"
          onClick={openEditDialog}
        >
          <Eye />
        </Button>

        <Button
          type="button"
          variant="destructive"
          size="icon-sm"
          title={
            canDelete
              ? "Delete user"
              : "Only admin can delete users"
          }
          aria-label="Delete user"
          disabled={
            !canDelete || deleteUserMutation.isPending
          }
          onClick={handleDelete}
        >
          {deleteUserMutation.isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <Trash2 />
          )}
        </Button>
      </div>

      {isEditing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`edit-user-${user.id}`}
        >
          <form
            onSubmit={handleUpdate}
            className="w-full max-w-md rounded-xl bg-white p-5 text-slate-900 shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id={`edit-user-${user.id}`}
                  className="text-lg font-semibold"
                >
                  View / Edit User
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Database ID yahin dikhegi.
                </p>
              </div>

              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                title="Close"
                aria-label="Close"
                onClick={() => setIsEditing(false)}
              >
                <X />
              </Button>
            </div>

            <div className="mt-5 grid gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Database ID
                </p>
                <p className="mt-1 font-mono text-sm font-semibold text-slate-900">
                  {user.id}
                </p>
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`user-name-${user.id}`}>
                  Name
                </Label>
                <Input
                  id={`user-name-${user.id}`}
                  value={name}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  placeholder="Enter name"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`user-email-${user.id}`}>
                  Email
                </Label>
                <Input
                  id={`user-email-${user.id}`}
                  type="email"
                  value={email}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="Enter email"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`user-role-${user.id}`}>
                  Role
                </Label>
                <NativeSelect
                  id={`user-role-${user.id}`}
                  className="w-full"
                  value={role}
                  disabled={!canUpdate}
                  onChange={(event) =>
                    setRole(event.target.value)
                  }
                >
                  {roleOptions.map((roleOption) => (
                    <NativeSelectOption
                      key={roleOption.key}
                      value={roleOption.key}
                    >
                      {roleOption.label}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Clerk ID
                </p>
                <p className="mt-1 break-words font-mono text-xs font-medium text-slate-900">
                  {user.clerk_id || "Not provided"}
                </p>
              </div>
            </div>

            {updateUserMutation.error && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {updateUserMutation.error.message}
              </p>
            )}

            {deleteUserMutation.error && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                {deleteUserMutation.error.message}
              </p>
            )}

            <div className="mt-6 flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  !canUpdate ||
                  updateUserMutation.isPending
                }
              >
                {updateUserMutation.isPending && (
                  <LoaderCircle className="animate-spin" />
                )}
                Save
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
