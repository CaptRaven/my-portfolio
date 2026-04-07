import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact an AI product engineer for senior roles, consulting work, or product collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 pt-24">
      <ContactSection />
    </main>
  );
}
