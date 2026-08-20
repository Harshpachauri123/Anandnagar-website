"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import {
  createRole,
  deleteRole,
  getPermissions,
  getRoleById,
  getRoles,
  updateRole,
  updateRolePermissions,
} from "@/services/rbac-api";
import type {
  CreateRoleData,
  Role,
  UpdateRoleData,
  UpdateRolePermissionsData,
} from "@/types/rbac";

export const rbacQueryKeys = {
  permissions: ["rbac", "permissions"] as const,
  roles: ["rbac", "roles"] as const,
  role: (id: number) =>
    ["rbac", "roles", id] as const,
};

type AdminQueryOptions = {
  enabled?: boolean;
};

async function requireClerkToken(
  getToken: (
    options?: { skipCache?: boolean }
  ) => Promise<string | null>
) {
  const token = await getToken({
    skipCache: true,
  });

  if (!token) {
    throw new Error(
      "Clerk session token nahi mila. Please dobara sign in karo."
    );
  }

  return token;
}

export function usePermissions(
  options: AdminQueryOptions = {}
) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: rbacQueryKeys.permissions,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getPermissions({ token });
    },
    enabled:
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
    retry: false,
  });
}

export function useRoles(
  options: AdminQueryOptions = {}
) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: rbacQueryKeys.roles,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getRoles({ token });
    },
    enabled:
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
    retry: false,
  });
}

export function useRole(
  id: number,
  options: AdminQueryOptions = {}
) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: rbacQueryKeys.role(id),
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getRoleById(id, { token });
    },
    enabled:
      id > 0 &&
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
    retry: false,
  });
}

export function useCreateRole() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<Role, Error, CreateRoleData>({
    mutationFn: async data => {
      const token = await requireClerkToken(getToken);

      return createRole(data, { token });
    },

    onSuccess: async role => {
      await queryClient.invalidateQueries({
        queryKey: rbacQueryKeys.roles,
      });

      await queryClient.setQueryData(
        rbacQueryKeys.role(role.id),
        role
      );
    },
  });
}

export function useUpdateRole() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<
    Role,
    Error,
    { id: number; data: UpdateRoleData }
  >({
    mutationFn: async ({ id, data }) => {
      const token = await requireClerkToken(getToken);

      return updateRole(id, data, { token });
    },

    onSuccess: async role => {
      await queryClient.invalidateQueries({
        queryKey: rbacQueryKeys.roles,
      });

      await queryClient.setQueryData(
        rbacQueryKeys.role(role.id),
        role
      );
    },
  });
}

export function useDeleteRole() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<void, Error, number>({
    mutationFn: async id => {
      const token = await requireClerkToken(getToken);

      return deleteRole(id, { token });
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: rbacQueryKeys.roles,
      });
    },
  });
}

export function useUpdateRolePermissions() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<
    Role,
    Error,
    {
      id: number;
      data: UpdateRolePermissionsData;
    }
  >({
    mutationFn: async ({ id, data }) => {
      const token = await requireClerkToken(getToken);

      return updateRolePermissions(id, data, {
        token,
      });
    },

    onSuccess: async role => {
      await queryClient.invalidateQueries({
        queryKey: rbacQueryKeys.roles,
      });

      await queryClient.setQueryData(
        rbacQueryKeys.role(role.id),
        role
      );
    },
  });
}
