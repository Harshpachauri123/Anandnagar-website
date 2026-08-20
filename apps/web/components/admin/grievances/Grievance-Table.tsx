

"use client";

import { useMemo } from "react";

import DataTable from "@/components/admin/DataTable";
import type { Grievance } from "@/types/public-grievance";

import { grievanceColumns } from "./Grievance-Column";

type GrievanceTableProps = {
  data: Grievance[];
};

export default function GrievanceTable({
  data,
}: GrievanceTableProps) {
  const sortedData = useMemo(
    () =>
      [...data].sort((
        firstGrievance,
        secondGrievance
      ) => firstGrievance.id - secondGrievance.id),
    [data]
  );

  return (
    <DataTable
      columns={grievanceColumns}
      data={sortedData}
      searchPlaceholder="Search by name, email, phone, category or ward"
      emptyMessage="No grievance submissions found"
    />
  );
}
