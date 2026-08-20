import Services from "@/components/pages/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover the range of services provided by Nagar Palika Parishad, Etah - From civic amenities to public welfare initiatives.",
};

export default function ServicesPage() {
  return (
    <div>
      <Services />
    </div>
  );
}
