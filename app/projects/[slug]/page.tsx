import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllProjects, getProjectBySlug } from "@/data/projects";
import { ArrowLeftRight, ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden pb-20 pt-24">
      <div className="container mx-auto px-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeftRight className="h-4 w-4" />
          Back to selected work
        </Link>

        <section className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/40 p-8 md:p-12">
          <Badge variant="outline" className="border-blue-400/20 text-blue-300">
            {project.category}
          </Badge>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href={project.demoUrl} target="_blank">
                Demo <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
              <Link href={project.githubUrl} target="_blank">
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <h2 className="text-2xl font-semibold text-white">Problem Breakdown</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.problem}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <h2 className="text-2xl font-semibold text-white">Solution</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.solution}</p>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h2 className="text-2xl font-semibold text-white">My Approach</h2>
            <div className="mt-5 space-y-4">
              {project.approach.map((item) => (
                <p key={item} className="text-sm leading-7 text-zinc-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h2 className="text-2xl font-semibold text-white">Architecture</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{project.architecture}</p>
            <div className="mt-5 space-y-4">
              {project.architectureDetails.map((item) => (
                <p key={item} className="text-sm leading-7 text-zinc-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <h2 className="text-2xl font-semibold text-white">Challenges + Tradeoffs</h2>
            <div className="mt-5 space-y-4">
              {project.tradeoffs.map((item) => (
                <p key={item} className="text-sm leading-7 text-zinc-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <h2 className="text-2xl font-semibold text-white">How I Would Scale This</h2>
            <div className="mt-5 space-y-4">
              {project.productionScale.map((item) => (
                <p key={item} className="text-sm leading-7 text-zinc-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">
            <h2 className="text-2xl font-semibold text-white">Stack + Links</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              {project.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className="block text-sm text-blue-300 hover:text-blue-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            {project.impact && project.impact.length > 0 ? (
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Impact
                </p>
                {project.impact.map((item) => (
                  <p key={item} className="text-sm text-white">
                    {item}
                  </p>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
