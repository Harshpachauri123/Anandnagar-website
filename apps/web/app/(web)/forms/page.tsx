import CitizenForms from "@/components/pages/CitizenForms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citizen Forms",
  description: "Access and download various citizen forms provided by Nagar Palika Parishad, Etah.",
};

export default function CitizenFormsPage() {
  return (
    <div>
      <CitizenForms />
    </div>
  );
}
