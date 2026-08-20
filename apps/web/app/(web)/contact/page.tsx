import ContactForm from "@/components/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Nagar Palika Parishad, Etah - Contact information and inquiry form.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
