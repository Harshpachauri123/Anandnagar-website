

import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";

import {
  contactSchema,
  type Contact,
  type CreateContactData,
} from "@/types/contact";


const CONTACT_ENDPOINT = "/contact/";

type ProtectedApiOptions = {
  token?: string | null;
};

// POST: naya contact submit karna
export async function createContact(
  data: CreateContactData
): Promise<Contact> {
  const response = await apiRequest<unknown>(
    CONTACT_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(data)
    }
  );

  return contactSchema.parse(response);
}
// GET ALL

export async function getAllContacts(
  options: ProtectedApiOptions = {}
): Promise<Contact[]> {
  const response = await apiRequest<unknown>(
    CONTACT_ENDPOINT,
    {
      token: options.token,
    }
  );
  return z.array(contactSchema).parse(response);
}
  
// get by id
export async function getContactById(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<Contact> {
  const response = await apiRequest<unknown>(
    `${CONTACT_ENDPOINT}${id}`,
    {
      method: "GET",
      token: options.token,
    }
  );
  return contactSchema.parse(response);
}

// put 
export async function updateContact(
  id: number,
  data: Partial<CreateContactData>,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${CONTACT_ENDPOINT}${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      token: options.token,
    }
  );
}
// delete
export async function deleteContact(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${CONTACT_ENDPOINT}${id}`,
    {
      method: "DELETE",
      token: options.token,
    }
  );
}
