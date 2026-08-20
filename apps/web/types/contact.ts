

import { z } from "zod";

const backendString = z.preprocess(
  value => {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value);
  },
  z.string().trim()
);

// data is sent to backend from contact form
export const createContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "2 characters"),
  
  email: z
    .string()
    .trim()
    .email("valid email address"),
  
  phone: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Valid 10-digit mobile number "
    ),
  subject: z
    .string()
    .trim()
    .min(3, "3 character"),
  
  message: z
    .string()
    .trim()
    .min(2, "2"),
  
});

// contact is coming to admin dashboard from backend
export const contactSchema = createContactSchema.extend({
  id: z.number().int().positive(),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required"),
  created_at: backendString.optional(),
  updated_at: backendString.optional(),
});
//  data type of contact form
export type CreateContactData = z.infer<typeof createContactSchema>;

// data type of admin table

export type Contact = z.infer<typeof contactSchema>;
