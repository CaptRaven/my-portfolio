"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="outline" className="border-blue-400/20 text-blue-300">
          {project.category}
        </Badge>
        <p className="text-sm text-zinc-500">
          {project.role} • {project.timeline}
        </p>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-base leading-7 text-zinc-300">{project.summary}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Problem
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Solution
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{project.solution}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Technical Architecture
        </p>
        <p className="mt-3 text-sm leading-7 text-zinc-300">{project.architecture}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Key Features
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-200"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        {project.impact && project.impact.length > 0 ? (
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Impact
            </p>
            <div className="mt-3 space-y-2">
              {project.impact.map((item) => (
                <p key={item} className="text-sm text-white">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
          <Link href={`/projects/${project.slug}`}>View Case Study</Link>
        </Button>
        <Button asChild>
          <Link href={project.demoUrl} target="_blank">
            Demo
          </Link>
        </Button>
        <Button asChild variant="ghost" className="text-zinc-300 hover:bg-white/5 hover:text-white">
          <Link href={project.githubUrl} target="_blank">
            GitHub
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
