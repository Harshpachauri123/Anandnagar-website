import Schemes from "@/components/pages/Schemes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schemes",
  description: "Explore the various schemes and initiatives undertaken by Nagar Palika Parishad, Etah to enhance community welfare and development.",
};

export default function SchemesPage() {
  return (
    <div>
      <Schemes />
    </div>
  );
}
