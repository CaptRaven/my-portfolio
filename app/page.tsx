import AboutEdgeSection from "@/components/AboutEdgeSection";
import ContactSection from "@/components/ContactSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Hero from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { getAllProjects } from "@/data/projects";

export default function Home() {
  const featuredProjects = getAllProjects().slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden">
      <Hero />

      <section id="work" className="w-full border-t border-white/5 py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Selected Work"
            subtitle="Three case studies that show how I frame product problems, build the system, and think about real-world delivery."
          />
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <AboutEdgeSection />
      <ExpertiseSection />
      <ContactSection />
    </main>
  );
}
