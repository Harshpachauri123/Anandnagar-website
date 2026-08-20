
import { z } from "zod";


export const createGrievanceSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(
      2,
      "Name must contain at least 2 characters"
    )
    .max(
      120,
      "Name cannot exceed 120 characters"
    ),

  mobile_number: z
    .string()
    .trim()
    .min(
      7,
      "Mobile number must contain at least 7 characters"
    )
    .max(
      20,
      "Mobile number cannot exceed 20 characters"
    )
    .regex(
      /^[1-9]\d{9}$/,
      "Please enter a valid 10-digit mobile number"
    ),

  email: z
    .string()
    .trim()
    .email(
      "Please enter a valid email address"
    ),

  complaint_category: z
    .string()
    .trim()
    .min(
      2,
      "Please select a complaint category"
    )
    .max(
      120,
      "Complaint category cannot exceed 120 characters"
    ),

  municipal_ward: z
    .string()
    .trim()
    .min(
      2,
      "Please select a municipal ward"
    )
    .max(
      60,
      "Municipal ward cannot exceed 60 characters"
    ),
   
  incident_address: z
    .string()
    .trim()
    .min(
      5,
      "Incident address must contain at least 5 characters"
    )
    .max(
      255,
      "Incident address cannot exceed 255 characters"
    ),

  description: z
    .string()
    .trim()
    .min(
      10,
      "Description must contain at least 10 characters"
    ),
});

/*
 * Backend se grievance create hone ke baad
 * id ke saath complete response aayega.
 * Admin table ke liye backend response tolerant rakha hai,
 * taaki purane/blank records poori table ko fail na karein.
 */
const backendString = z.preprocess(
  value => {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value);
  },
  z.string().trim()
);

export const grievanceSchema = z.preprocess(
  value => {
    if (
      typeof value !== "object" ||
      value === null
    ) {
      return value;
    }

    const record = value as Record<string, unknown>;

    return {
      ...record,
      full_name:
        record.full_name ?? record.name ?? "",
      mobile_number:
        record.mobile_number ?? record.phone ?? "",
      municipal_ward:
        record.municipal_ward ?? record.ward ?? "",
    };
  },
  z.object({
    id: z
      .coerce
      .number()
      .int()
      .positive(),

    full_name: backendString,
    mobile_number: backendString,
    email: backendString,
    complaint_category: backendString,
    municipal_ward: backendString,
    incident_address: backendString,
    description: backendString,
    created_at: backendString.optional(),
    updated_at: backendString.optional(),
  })
);

/*
 * POST request ka type.
 * Isme id nahi hogi.
 */
export type CreateGrievanceData = z.infer<
  typeof createGrievanceSchema
>;

/*
 * Backend response aur admin table ka type.
 * Isme id hogi.
 */
export type Grievance = z.infer<
  typeof grievanceSchema
>;
