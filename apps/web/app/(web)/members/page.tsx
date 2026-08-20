

import Members from "@/components/pages/members";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member List",
  description: "Discover the range of services provided by Nagar Panchayat Anandnagar - From civic amenities to public welfare initiatives.",
};

export default function MembersPage() {
  return (
    <div>
      <Members/>
    </div>
  );
}
