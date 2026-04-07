"use client";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c0f]/80 backdrop-blur-md">
      <div className="container-spacing flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-white">
          {profile.siteTitle}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/contact" ? pathname === "/contact" : pathname === "/";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm text-gray-300 transition-colors hover:text-white",
                  active && "text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden md:inline-flex">
            <Link href="/#work">View Work</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="open menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex h-full flex-col">
          <SheetHeader>
            <SheetTitle>{profile.siteTitle}</SheetTitle>
            <SheetClose onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
            </SheetClose>
          </SheetHeader>
          <div className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-gray-300 hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto">
            <Button asChild className="mt-6 w-full">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </Sheet>
    </header>
  );
}
