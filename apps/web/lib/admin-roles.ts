export const USER_ROLES = [
  "user",
  "admin",
  "clerk",
  "operator",
] as const;

export const ADMIN_ROLES = [
  "admin",
  "clerk",
  "operator",
] as const;

export const DASHBOARD_ROLES = ADMIN_ROLES;

export type UserRole =
  (typeof USER_ROLES)[number];

export type AdminRole =
  (typeof ADMIN_ROLES)[number];

export type RoleOption = {
  key: string;
  label: string;
};

export type Permission =
  | "permissions.read"
  | "roles.read"
  | "roles.create"
  | "roles.update"
  | "roles.delete"
  | "roles.permissions.update"
  | "contacts.read"
  | "contacts.update"
  | "contacts.delete"
  | "grievances.read"
  | "grievances.update"
  | "grievances.delete"
  | "users.read"
  | "users.update"
  | "users.delete";

export const ROLE_LABELS: Record<UserRole, string> = {
  user: "User",
  admin: "Admin",
  clerk: "Clerk",
  operator: "Operator",
};

export const ROLE_PERMISSIONS: Record<
  UserRole,
  Permission[]
> = {
  user: [],
  admin: [
    "permissions.read",
    "roles.read",
    "roles.create",
    "roles.update",
    "roles.delete",
    "roles.permissions.update",
    "contacts.read",
    "contacts.update",
    "contacts.delete",
    "grievances.read",
    "grievances.update",
    "grievances.delete",
    "users.read",
    "users.update",
    "users.delete",
  ],
  clerk: [
    "contacts.read",
    "contacts.update",
    "grievances.read",
    "grievances.update",
    "users.read",
  ],
  operator: [
    "contacts.read",
    "grievances.read",
    "users.read",
  ],
};

export function normalizeRole(
  role: unknown
): UserRole {
  if (
    typeof role === "string" &&
    USER_ROLES.includes(role as UserRole)
  ) {
    return role as UserRole;
  }

  return "user";
}

export function isAdminRole(role: unknown) {
  return ADMIN_ROLES.includes(
    normalizeRole(role) as AdminRole
  );
}

export function isDashboardRole(role: unknown) {
  return DASHBOARD_ROLES.includes(
    normalizeRole(role) as AdminRole
  );
}

export function getUserRoleOptions(
  roles: { key: string; name: string }[] = []
): RoleOption[] {
  const backendRoleLabels = new Map(
    roles.map(role => [role.key, role.name])
  );

  const fixedRoleOptions = USER_ROLES.map(role => ({
    key: role,
    label:
      backendRoleLabels.get(role) ?? ROLE_LABELS[role],
  }));

  const customRoleOptions = roles
    .filter(
      role =>
        !USER_ROLES.includes(role.key as UserRole)
    )
    .map(role => ({
      key: role.key,
      label: role.name || role.key,
    }));

  return [
    ...fixedRoleOptions,
    ...customRoleOptions,
  ];
}

export function hasPermission(
  role: unknown,
  permission: Permission
) {
  return ROLE_PERMISSIONS[
    normalizeRole(role)
  ].includes(permission);
}
