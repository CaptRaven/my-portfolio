"use client";

import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-spacing py-20 md:py-28">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-300"
        >
          AI Product Engineer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl"
        >
          {profile.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-6 max-w-3xl text-lg text-gray-300 md:text-xl"
        >
          {profile.valueProposition}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
        >
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="#work">View Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-white/10 px-8 text-base hover:bg-white/5"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
