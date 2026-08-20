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

export const userSchema = z.object({
  id: z.coerce.number().int().positive(),
  name: backendString,
  email: backendString,
  role: backendString,
  clerk_id: backendString,
});

export type User = z.infer<typeof userSchema>;

export type UpdateUserData = Partial<
  Pick<User, "name" | "email" | "role">
>;
