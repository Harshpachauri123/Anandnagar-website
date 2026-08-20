"use client";

import { useMemo } from "react";

import DataTable from "@/components/admin/DataTable";
import type { User } from "@/types/user";

import { userColumns } from "./User-Column";

type UserTableProps = {
  data: User[];
};

export default function UserTable({
  data,
}: UserTableProps) {
  const sortedData = useMemo(
    () =>
      [...data].sort((firstUser, secondUser) =>
        firstUser.id - secondUser.id
      ),
    [data]
  );

  return (
    <DataTable
      columns={userColumns}
      data={sortedData}
      searchPlaceholder="Search by name, email, role or Clerk ID"
      emptyMessage="No signup users found"
    />
  );
}
