import Department from "@/components/pages/department";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Departments",
  description: "Explore the various departments of Nagar Palika Parishad, Etah - Learn about their functions and services.",
};

export default function DepartmentPage() {
  return (
    <div>
      <Department />
    </div>
  );
}
