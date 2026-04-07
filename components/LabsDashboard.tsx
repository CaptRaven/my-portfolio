"use client";

import { useState } from "react";
import { VercelProject } from "@/lib/vercel";
import { ExternalLink, Search, Server, AlertCircle, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface LabsDashboardProps {
  initialProjects: VercelProject[];
}

export function LabsDashboard({ initialProjects }: LabsDashboardProps) {
  const [search, setSearch] = useState("");
  const [projects] = useState<VercelProject[]>(initialProjects);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Search Filter */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search experiments..."
          className="pl-10 bg-zinc-900/50 border-white/10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Projects List */}
      <div className="grid gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            const isReady = project.targets?.production?.readyState === "READY";
            const deployUrl = project.targets?.production?.url;
            
            return (
              <div
                key={project.id}
                className="group flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors"
              >
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
                    <Server className="h-5 w-5 text-zinc-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>{project.framework || "Other"}</span>
                      <span>•</span>
                      <span>
                        Updated {new Date(project.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                   <Badge variant="outline" className={`
                      ${isReady ? 'text-green-500 border-green-500/20 bg-green-500/10' : 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10'}
                   `}>
                      {isReady ? (
                         <span className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" /> READY
                         </span>
                      ) : (
                         <span className="flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {project.targets?.production?.readyState || 'UNKNOWN'}
                         </span>
                      )}
                   </Badge>

                   {deployUrl ? (
                      <Button asChild variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary">
                         <Link href={`https://${deployUrl}`} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                         </Link>
                      </Button>
                   ) : (
                      <Button size="sm" variant="ghost" disabled className="opacity-50">
                         <ExternalLink className="h-4 w-4" />
                      </Button>
                   )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-xl">
            <p className="text-muted-foreground">No experiments found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
