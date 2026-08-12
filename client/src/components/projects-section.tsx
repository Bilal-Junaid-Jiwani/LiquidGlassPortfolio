import { Project } from "@shared/schema";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Props {
  projects: Project[];
}

export function ProjectsSection({ projects }: Props) {
  return (
    <section id="work" className="relative w-full py-32 bg-[#F15A24] overflow-hidden">
      
      {/* Background Crosshair Grid (SVG Pattern) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crosshairs-projects" width="250" height="250" patternUnits="userSpaceOnUse">
              <line x1="125" y1="120" x2="125" y2="130" stroke="white" strokeWidth="1" />
              <line x1="120" y1="125" x2="130" y2="125" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshairs-projects)" />
        </svg>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-8 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <p className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
              Portfolio
            </p>
            <h2 className="text-[clamp(4rem,10vw,10rem)] font-sans font-black text-white tracking-tighter uppercase leading-[0.85]">
              Featured <br/> Work.
            </h2>
          </div>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, index) => (
            <div key={project.id} className={`group flex flex-col gap-12 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              
              {/* Massive Background Text behind Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none mix-blend-overlay">
                <h3 className="text-[clamp(6rem,18vw,20rem)] font-sans font-black text-white/50 tracking-tighter leading-none whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {project.title.split(' ')[0]}
                </h3>
              </div>

              {/* Image Container (Takes up half width, massive styling) */}
              <div className="w-full md:w-[60%] relative z-10">
                <a href={project.liveLink || '#'} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] overflow-hidden bg-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition-shadow duration-500">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.33,1,0.68,1)]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-700 text-4xl font-black uppercase">
                      No Image
                    </div>
                  )}
                  {/* Overlay Darken on Hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </a>
              </div>

              {/* Text / Info Block */}
              <div className="w-full md:w-[40%] flex flex-col relative z-20">
                 <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0,3).map(tech => (
                      <span key={tech} className="bg-white text-[#F15A24] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-sm">
                        {tech}
                      </span>
                    ))}
                 </div>
                 
                 <h3 className="text-4xl md:text-6xl font-sans font-black text-white tracking-tighter uppercase mb-6 leading-[0.9]">
                   {project.title}
                 </h3>
                 
                 <p className="text-white/80 font-medium text-lg leading-relaxed mb-10 max-w-md">
                   {project.description}
                 </p>
                 
                 {project.liveLink && (
                   <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                      className="inline-flex items-center gap-4 bg-black text-white px-8 py-5 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 self-start shadow-xl">
                     Live Preview <ExternalLink className="w-4 h-4" />
                   </a>
                 )}
              </div>

            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-32 flex justify-center">
          <a href="https://github.com/Bilal-Junaid-Jiwani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-black uppercase tracking-widest bg-black text-white px-10 py-6 rounded-full hover:bg-white hover:text-black transition-colors shadow-2xl hover:scale-105 transform duration-300">
            View All Work <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
