import Staff from "@/components/pages/staff";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staff List",
  description: "Discover the range of services provided by Nagar Panchayat Anandnagar - From civic amenities to public welfare initiatives.",
};

export default function StaffPage() {
  return (
    <div>
      <Staff/>
    </div>
  );
}
