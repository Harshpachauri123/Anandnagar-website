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

export const permissionSchema = z.object({
  id: z.coerce.number().int().positive(),
  key: backendString,
  label: backendString,
  group: backendString,
  description: backendString.optional().default(""),
  created_at: backendString,
});

export const roleSchema = z.object({
  id: z.coerce.number().int().positive(),
  key: backendString,
  name: backendString,
  description: backendString.optional().default(""),
  is_system: z.coerce.boolean(),
  created_at: backendString,
  permissions: z.array(permissionSchema).default([]),
});

export const createRoleSchema = z.object({
  name: z.string().trim().min(2).max(120),
  key: z.string().trim().max(80).optional(),
  description: z.string().trim().optional(),
  permission_keys: z.array(z.string().trim()).default([]),
});

export const updateRoleSchema = z.object({
  name: z.string().trim().min(2).max(120),
  description: z.string().trim().optional(),
});

export const updateRolePermissionsSchema = z.object({
  permission_keys: z.array(z.string().trim()),
});

export type Permission = z.infer<typeof permissionSchema>;
export type Role = z.infer<typeof roleSchema>;
export type CreateRoleData = z.infer<
  typeof createRoleSchema
>;
export type UpdateRoleData = z.infer<
  typeof updateRoleSchema
>;
export type UpdateRolePermissionsData = z.infer<
  typeof updateRolePermissionsSchema
>;
