import Gallery from "@/components/pages/Gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore the photo gallery of Nagar Palika Parishad, Etah - Showcasing events, initiatives, and community engagement.",
};

export default function GalleryPage() {
  return (
    <div>
      <Gallery />
    </div>
  );
} 
