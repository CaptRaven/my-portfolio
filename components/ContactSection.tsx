import { ContactForm } from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Contact"
          subtitle="For senior roles, consulting work, or product engineering collaborations."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <p className="text-lg font-medium text-white">
              The fastest way to reach me is by email.
            </p>
            <div className="mt-8 space-y-5 text-sm text-zinc-300">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Email</p>
                <Link href={`mailto:${profile.contact.email}`} className="mt-2 block text-base text-white hover:text-blue-300">
                  {profile.contact.email}
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">GitHub</p>
                <Link href={profile.contact.github} target="_blank" className="mt-2 block text-base text-white hover:text-blue-300">
                  {profile.contact.github}
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">LinkedIn</p>
                <Link href={profile.contact.linkedin} target="_blank" className="mt-2 block text-base text-white hover:text-blue-300">
                  {profile.contact.linkedin}
                </Link>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
