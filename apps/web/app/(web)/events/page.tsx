import Evnets from "@/components/pages/Events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Discover the latest events organized by Nagar Palika Parishad, Etah - Stay updated with community activities and initiatives.",
};

export default function EventsPage() {
  return (
    <div>
      <Evnets />
    </div>
  );
}
