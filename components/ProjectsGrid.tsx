"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "AI",
    "Fintech",
    "Edtech",
    "Logistics",
    "Web",
    "Mobile",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 ${
              filter === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
