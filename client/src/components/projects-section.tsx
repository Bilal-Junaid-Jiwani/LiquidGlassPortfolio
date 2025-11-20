import { useState } from "react";
import { Project } from "@shared/schema";
import { ExternalLink, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          data-testid="heading-projects"
        >
          My <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              data-testid={`card-project-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      
                      className="glass-card rounded-full"
                      data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="glass-card rounded-3xl max-w-[90vw] sm:max-w-xl md:max-w-3xl border-0" data-testid="dialog-project-details">
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl font-black" data-testid="text-modal-project-title">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {selectedProject?.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    
                    className="glass-card rounded-full"
                    data-testid={`badge-modal-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed" data-testid="text-modal-project-description">
                {selectedProject?.longDescription}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {selectedProject?.liveLink && (
                  <Button
                    asChild
                    variant="default"
                    className="rounded-full glass-card hover-elevate"
                    data-testid="button-modal-live-link"
                  >
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Site
                    </a>
                  </Button>
                )}
                {selectedProject?.repoLink && (
                  <Button
                    asChild
                    
                    className="rounded-full glass-card hover-elevate"
                    data-testid="button-modal-repo-link"
                  >
                    <a
                      href={selectedProject.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
