import PublicGrievance from "@/components/pages/publicGrievance";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Grievance",
  description: "Submit your grievances to Nagar Palika Parishad, Etah - We are here to address your concerns and improve community services.",
};

export default function PublicGrievancePage() {
  return (
    <div>
      <PublicGrievance />
    </div>
  );
}
