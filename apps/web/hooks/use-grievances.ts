

"use client";

import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

import type {
  CreateGrievanceData,
  Grievance,
} from "@/types/public-grievance";

import {
  createGrievance,
  deleteGrievance,
  getAllGrievances,
  getGrievanceById,
  updateGrievance,
} from "@/services/grievance-api";

export const grievanceQueryKeys = {
  all: ["grievances"] as const,

  detail: (id: number) =>
    ["grievances", "detail", id] as const,
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

/*
 * GET ALL GRIEVANCES
 */
export function useGrievances(
  options: AdminQueryOptions = {}
) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: grievanceQueryKeys.all,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getAllGrievances({ token });
    },
    enabled:
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
    retry: false,
  });
}

/*
 * GET GRIEVANCE BY ID
 */
export function useGrievance(id: number) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: grievanceQueryKeys.detail(id),
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getGrievanceById(id, { token });
    },
    enabled: id > 0 && isLoaded && !!isSignedIn,
    retry: false,
  });
}

/*
 * CREATE GRIEVANCE
 */
export function useCreateGrievance() {
  const queryClient = useQueryClient();

  return useMutation<Grievance, Error, CreateGrievanceData>({
    mutationFn: createGrievance,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });
    },
  });
}

/*
 * UPDATE GRIEVANCE
 */
export function useUpdateGrievance() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<
    void,
    Error,
    { id: number; data: Partial<CreateGrievanceData> }
  >({
    mutationFn: async ({ id, data }) => {
      const token = await requireClerkToken(getToken);

      return updateGrievance(id, data, { token });
    },

    onSuccess: async (_result, variables) => {
      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });

      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.detail(variables.id),
      });
    },
  });
}

/*
 * DELETE GRIEVANCE
 */
export function useDeleteGrievance() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<void, Error, number>({
    mutationFn: async (id) => {
      const token = await requireClerkToken(getToken);

      return deleteGrievance(id, { token });
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: grievanceQueryKeys.all,
      });
    },
  });
}
