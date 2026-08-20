
import PropertyTax from "@/components/pages/PropertyTax";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Tax",
  description: "Explore the property Tax of Nagar Palika Parishad, Etah - Showcasing events, initiatives, and community engagement.",
};

export default function  PropertyTaxPage() {
  return (
    <div>
      <PropertyTax />
    </div>
  );
} 
