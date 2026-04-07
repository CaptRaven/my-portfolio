import { ProjectCard } from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { getAllProjects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies covering AI systems, mobile product engineering, and backend architecture.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen overflow-x-hidden pb-20 pt-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Selected Work"
          subtitle="A focused portfolio of three projects built to show product judgment, technical depth, and delivery range."
        />
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
