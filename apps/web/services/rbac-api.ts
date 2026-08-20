import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";
import {
  createRoleSchema,
  permissionSchema,
  roleSchema,
  updateRolePermissionsSchema,
  updateRoleSchema,
  type CreateRoleData,
  type Permission,
  type Role,
  type UpdateRoleData,
  type UpdateRolePermissionsData,
} from "@/types/rbac";

const PERMISSIONS_ENDPOINT = "/api/permissions";
const ROLES_ENDPOINT = "/api/roles";

type ProtectedApiOptions = {
  token?: string | null;
};

export async function getPermissions(
  options: ProtectedApiOptions = {}
): Promise<Permission[]> {
  const response = await apiRequest<unknown>(
    PERMISSIONS_ENDPOINT,
    {
      token: options.token,
    }
  );

  return z.array(permissionSchema).parse(response);
}

export async function getRoles(
  options: ProtectedApiOptions = {}
): Promise<Role[]> {
  const response = await apiRequest<unknown>(
    ROLES_ENDPOINT,
    {
      token: options.token,
    }
  );

  return z.array(roleSchema).parse(response);
}

export async function getRoleById(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<Role> {
  const response = await apiRequest<unknown>(
    `${ROLES_ENDPOINT}/${id}`,
    {
      token: options.token,
    }
  );

  return roleSchema.parse(response);
}

export async function createRole(
  data: CreateRoleData,
  options: ProtectedApiOptions = {}
): Promise<Role> {
  const payload = createRoleSchema.parse(data);
  const response = await apiRequest<unknown>(
    ROLES_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(payload),
      token: options.token,
    }
  );

  return roleSchema.parse(response);
}

export async function updateRole(
  id: number,
  data: UpdateRoleData,
  options: ProtectedApiOptions = {}
): Promise<Role> {
  const payload = updateRoleSchema.parse(data);
  const response = await apiRequest<unknown>(
    `${ROLES_ENDPOINT}/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
      token: options.token,
    }
  );

  return roleSchema.parse(response);
}

export async function deleteRole(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${ROLES_ENDPOINT}/${id}`,
    {
      method: "DELETE",
      token: options.token,
    }
  );
}

export async function updateRolePermissions(
  id: number,
  data: UpdateRolePermissionsData,
  options: ProtectedApiOptions = {}
): Promise<Role> {
  const payload =
    updateRolePermissionsSchema.parse(data);
  const response = await apiRequest<unknown>(
    `${ROLES_ENDPOINT}/${id}/permissions`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
      token: options.token,
    }
  );

  return roleSchema.parse(response);
}
