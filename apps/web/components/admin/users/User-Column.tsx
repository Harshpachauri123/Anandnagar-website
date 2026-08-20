"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { User } from "@/types/user";
import UserActions from "./User-Actions";
import UserRoleSelect from "./User-Role-Select";

export const userColumns: ColumnDef<User>[] = [
  {
    id: "serial",
    header: "S.No.",
    cell: ({ row }) => (
      <span className="font-semibold text-slate-700">
        {row.index + 1}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <span className="font-semibold text-slate-900">
        {row.original.name || "Not provided"}
      </span>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <span className="text-sm text-slate-700">
        {row.original.email || "Not provided"}
      </span>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <UserRoleSelect user={row.original} />
    ),
  },
  {
    accessorKey: "clerk_id",
    header: "Clerk ID",
    cell: ({ row }) => (
      <p
        title={row.original.clerk_id}
        className="max-w-[320px] truncate font-mono text-xs text-slate-600"
      >
        {row.original.clerk_id}
      </p>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <UserActions user={row.original} />
    ),
  },
];
