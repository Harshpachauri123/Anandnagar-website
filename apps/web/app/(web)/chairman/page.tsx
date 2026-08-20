import ChairmanProfile from "@/components/pages/ChairmanProfile"; 
import type { Metadata } from "next";  

export const metadata: Metadata = {
  title: "Chairman Profile",
  description: "Profile of the Chairman of Nagar Palika Parishad, Etah",
};

export default function ChairmanProfilePage() {
  return (
    <div>
      <ChairmanProfile />
    </div>
  );
}
