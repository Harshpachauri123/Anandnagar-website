import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";
import {
  userSchema,
  type User,
  type UpdateUserData,
} from "@/types/user";

const USER_ENDPOINT = "/user/";

type ProtectedApiOptions = {
  token?: string | null;
};

export async function getAllUsers(
  options: ProtectedApiOptions = {}
): Promise<User[]> {
  const response = await apiRequest<unknown>(
    USER_ENDPOINT,
    {
      token: options.token,
    }
  );

  return z.array(userSchema).parse(response);
}

export async function getCurrentUser(
  options: ProtectedApiOptions = {}
): Promise<User> {
  const response = await apiRequest<unknown>(
    `${USER_ENDPOINT}me`,
    {
      token: options.token,
    }
  );

  return userSchema.parse(response);
}

export async function getUserById(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<User> {
  const response = await apiRequest<unknown>(
    `${USER_ENDPOINT}${id}`,
    {
      token: options.token,
    }
  );

  return userSchema.parse(response);
}

export async function updateUser(
  id: number,
  data: UpdateUserData,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${USER_ENDPOINT}${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      token: options.token,
    }
  );
}

export async function deleteUser(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${USER_ENDPOINT}${id}`,
    {
      method: "DELETE",
      token: options.token,
    }
  );
}
