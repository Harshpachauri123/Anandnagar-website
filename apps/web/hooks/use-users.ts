"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import {
  deleteUser,
  getAllUsers,
  getCurrentUser,
  getUserById,
  updateUser,
} from "@/services/user-api";
import type { UpdateUserData } from "@/types/user";

export const userQueryKeys = {
  all: ["users"] as const,

  me: ["users", "me"] as const,

  detail: (id: number) =>
    ["users", "detail", id] as const,
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

export function useUsers(
  options: AdminQueryOptions = {}
) {
  const {
    getToken,
    isLoaded,
    isSignedIn,
  } = useAuth();

  return useQuery({
    queryKey: userQueryKeys.all,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getAllUsers({ token });
    },
    enabled:
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
    retry: false,
  });
}

export function useCurrentUser() {
  const {
    getToken,
    isLoaded,
    isSignedIn,
  } = useAuth();

  return useQuery({
    queryKey: userQueryKeys.me,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getCurrentUser({ token });
    },
    enabled: isLoaded && !!isSignedIn,
    retry: false,
  });
}

export function useUser(id: number) {
  const {
    getToken,
    isLoaded,
    isSignedIn,
  } = useAuth();

  return useQuery({
    queryKey: userQueryKeys.detail(id),
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getUserById(id, { token });
    },
    enabled: id > 0 && isLoaded && !!isSignedIn,
    retry: false,
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<void, Error, { id: number; data: UpdateUserData }>({
    mutationFn: async ({ id, data }) => {
      const token = await requireClerkToken(getToken);

      return updateUser(id, data, { token });
    },

    onSuccess: async (_result, variables) => {
      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.me,
      });

      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.all,
      });

      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.detail(variables.id),
      });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      const token = await requireClerkToken(getToken);

      return deleteUser(id, { token });
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.me,
      });

      await queryClient.invalidateQueries({
        queryKey: userQueryKeys.all,
      });
    },
  });
}
