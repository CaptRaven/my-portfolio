import AboutEdgeSection from "@/components/AboutEdgeSection";
import ContactSection from "@/components/ContactSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "How this AI product engineer thinks about product strategy, mobile development, and production-ready AI systems.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pb-20 pt-24">
      <AboutEdgeSection />
      <ContactSection />
    </main>
  );
}
