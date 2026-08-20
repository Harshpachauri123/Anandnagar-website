

"use client";

import { useMemo } from "react";

import DataTable from "@/components/admin/DataTable";
import type { Contact } from "@/types/contact";

import { contactColumns } from "./Contact-Column";

type ContactTableProps = {
  data: Contact[];
};

export default function ContactTable({
  data,
}: ContactTableProps) {
  const sortedData = useMemo(
    () =>
      [...data].sort((firstContact, secondContact) =>
        firstContact.id - secondContact.id
      ),
    [data]
  );

  return (
    <DataTable
      columns={contactColumns}
      data={sortedData}
      searchPlaceholder="Search by name, email, phone or subject"
      emptyMessage="No contact submissions found"
    />
  );
}
