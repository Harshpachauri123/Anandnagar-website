import RtiAct from "@/components/pages/RtiAct";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RTI Act",
  description: "Learn about the Right to Information (RTI) Act and how it empowers citizens to access information from public authorities.",
};

export default function RtiActPage() {
  return (
    <div>
      <RtiAct />
    </div>
  );
} 
