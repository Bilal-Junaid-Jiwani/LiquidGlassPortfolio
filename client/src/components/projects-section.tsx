import { useState } from "react";
import { Project } from "@shared/schema";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-32 text-center md:text-left">
          <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">Portfolio</span>
          <h2 className="text-5xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
            Selected <br className="hidden md:block" />
            <span className="text-muted-foreground/20">Works.</span>
          </h2>
        </div>

        {/* Vertical Magazine Layout */}
        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center group cursor-pointer ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Side */}
              <div className="w-full md:w-3/5 relative">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-video bg-zinc-50 border border-zinc-100">
                  <div className="absolute inset-0 bg-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm uppercase tracking-widest">View</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Offset Border */}
                <div className={`absolute top-8 ${index % 2 !== 0 ? 'left-8' : '-right-8'} w-full h-full border-2 border-primary/20 rounded-[2rem] -z-10 hidden md:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`} />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/5 relative">
                {/* Big Number Background */}
                <span className="absolute -top-20 -left-12 text-[12rem] font-black text-muted-foreground/5 select-none -z-10 leading-none">
                  0{index + 1}
                </span>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-border rounded-full text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group/btn pt-4">
                    Explore Case Study
                    <ArrowUpRight className="w-5 h-5 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="bg-white border-none p-0 overflow-hidden max-w-6xl rounded-3xl shadow-2xl">
            <div className="grid lg:grid-cols-[1.5fr_1fr] h-[85vh] md:h-[700px]">
              {/* Image Side - Larger */}
              <div className="relative h-64 lg:h-full bg-muted">
                <img src={selectedProject?.image} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col overflow-y-auto bg-white relative">
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 rounded-full hover:bg-muted z-10">
                  <X className="w-6 h-6 opacity-50" />
                </Button>

                <div className="flex-1">
                  <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Project Details</span>
                  <h2 className="text-4xl md:text-5xl font-black text-secondary leading-none mb-8">{selectedProject?.title}</h2>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject?.technologies.map(t => (
                      <span key={t} className="px-4 py-2 bg-secondary/5 text-secondary text-sm font-bold rounded-lg border border-secondary/10">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="prose prose-lg text-muted-foreground">
                    <p>{selectedProject?.longDescription}</p>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-border">
                  {selectedProject?.liveLink && (
                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-16 rounded-xl text-lg shadow-xl shadow-primary/20" asChild>
                      <a href={selectedProject.liveLink} target="_blank">
                        Visit Live Site <ArrowUpRight className="ml-2 w-6 h-6" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
