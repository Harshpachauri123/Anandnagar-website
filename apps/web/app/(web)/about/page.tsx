import AboutUs from "@/components/pages/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Nagar Palika Parishad, Etah - Our mission, vision, and commitment to serving the community.",
};
export default function AboutPage() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}
