import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "AI Product Engineer Portfolio",
    template: "%s | AI Product Engineer Portfolio",
  },
  description:
    "Recruiter-focused portfolio for an AI product engineer building mobile apps, backend systems, and production-ready AI workflows.",
  openGraph: {
    type: "website",
    title: "AI Product Engineer Portfolio",
    description: profile.valueProposition,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Engineer Portfolio",
    description: profile.valueProposition,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <body className="font-grotesk antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
