import { profile } from "@/data/profile";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-spacing py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-semibold text-white">{profile.siteTitle}</div>
            <p className="mt-2 max-w-xl text-sm text-gray-400">
              AI product engineering across mobile, backend, and model-powered workflows.
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-400">
            <Link href={`mailto:${profile.contact.email}`} className="block hover:text-white">
              {profile.contact.email}
            </Link>
            <Link href={profile.contact.github} target="_blank" className="block hover:text-white">
              GitHub
            </Link>
            <Link href={profile.contact.linkedin} target="_blank" className="block hover:text-white">
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} {profile.siteTitle}
        </div>
      </div>
    </footer>
  );
}
