

"use client"
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";
import { CreateContactData } from "@/types/contact"; 
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "@/services/contact-api";

export const contactQueryKeys = {
  all: ["contacts"] as const,

  detail: (id: number) =>
    ["contacts", "detail", id] as const,
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

// Saare contacts fetch karne ka hook
export function useContacts(
  options: AdminQueryOptions = {}
) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: contactQueryKeys.all,
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getAllContacts({ token });
    },
    enabled:
      (options.enabled ?? true) &&
      isLoaded &&
      !!isSignedIn,
  });
}

// Ek contact ko ID se fetch karne ka hook
export function useContact(id: number) {
  const { getToken, isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: contactQueryKeys.detail(id),
    queryFn: async () => {
      const token = await requireClerkToken(getToken);

      return getContactById(id, { token });
    },
    enabled: id > 0 && isLoaded && !!isSignedIn,
  });
}

// Contact create karne ka hook
export function useCreateContact() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createContact,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });
    },
  });
}

// Contact update karne ka hook
export function useUpdateContact() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation<void, Error, {
    id: number;
    data: Partial<CreateContactData>;
  }>({
    mutationFn: async ({
      id,
      data,
    }) => {
      const token = await requireClerkToken(getToken);

      return updateContact(id, data, { token });
    },

    onSuccess: async (_result, variables) => {
      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });

      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.detail(variables.id),
      });
    },
  });
}

// Contact delete karne ka hook
export function useDeleteContact() {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async (id: number) => {
      const token = await requireClerkToken(getToken);

      return deleteContact(id, { token });
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: contactQueryKeys.all,
      });
    },
  });
}
