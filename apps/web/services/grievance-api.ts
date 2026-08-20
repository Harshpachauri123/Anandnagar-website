
import { z } from "zod";

import { apiRequest } from "@/lib/api-clients";

import {
  grievanceSchema,
  type CreateGrievanceData,
  type Grievance,
} from "@/types/public-grievance";

const GRIEVANCE_ENDPOINT = "/publicgrievance/";

type ProtectedApiOptions = {
  token?: string | null;
};

// POST: Public grievance submit karna
export async function createGrievance(
  data: CreateGrievanceData
): Promise<Grievance> {
  const response = await apiRequest<unknown>(
    GRIEVANCE_ENDPOINT,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  console.log("BACKEND RESPONSE:", response);

  return grievanceSchema.parse(response);
}

// GET ALL: Saare grievances fetch karna
export async function getAllGrievances(
  options: ProtectedApiOptions = {}
): Promise<Grievance[]> {
  const response = await apiRequest<unknown>(
    GRIEVANCE_ENDPOINT,
    {
      token: options.token,
    }
  );

  return z.array(grievanceSchema).parse(response);
}

// GET BY ID: Single grievance fetch karna
export async function getGrievanceById(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<Grievance> {
  const response = await apiRequest<unknown>(
    `${GRIEVANCE_ENDPOINT}${id}`,
    {
      token: options.token,
    }
  );

  return grievanceSchema.parse(response);
}

// PUT / PATCH: Grievance update karna
export async function updateGrievance(
  id: number,
  data: Partial<CreateGrievanceData>,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${GRIEVANCE_ENDPOINT}${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      token: options.token,
    }
  );
}

// DELETE: Grievance delete karna
export async function deleteGrievance(
  id: number,
  options: ProtectedApiOptions = {}
): Promise<void> {
  await apiRequest<void>(
    `${GRIEVANCE_ENDPOINT}${id}`,
    {
      method: "DELETE",
      token: options.token,
    }
  );
}
