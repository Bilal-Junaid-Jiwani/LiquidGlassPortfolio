import { TimelineItem } from "@shared/schema";
import { ArrowDownRight } from "lucide-react";

interface Props {
  timeline: TimelineItem[];
}

export function AboutSection({ timeline }: Props) {
  return (
    <section id="about" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <p className="text-[#F15A24] font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F15A24] inline-block"></span>
                The Journey
              </p>
              <h2 className="text-[clamp(3rem,6vw,6rem)] font-black tracking-tighter uppercase leading-[0.85] mb-8">
                Intelligent <br/> Solutions <br/> That Scale.
              </h2>
              <div className="w-full max-w-[200px] h-2 bg-foreground mb-12"></div>
              <p className="text-xl text-muted-foreground leading-relaxed font-semibold max-w-sm">
                I am a Full-Stack Developer and Agentic AI Engineer passionate about building intelligent, scalable, and automation-driven applications. I specialize in turning complex ideas into functional products that don't just execute commands, but think, adapt, and grow.
              </p>
            </div>
          </div>

          {/* Right Column: Timeline / Experience */}
          <div className="lg:col-span-7">
             <div className="flex flex-col">
                <h3 className="text-3xl font-black uppercase tracking-widest mb-16 pb-8 border-b-4 border-foreground flex items-center justify-between">
                  Experience & Education
                  <ArrowDownRight className="w-10 h-10 text-muted-foreground" />
                </h3>
                
                <div className="flex flex-col">
                  {timeline.map((item, i) => (
                    <div key={item.id} className="group flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-16 py-12 border-b border-border/50 hover:bg-muted/30 transition-colors px-4 -mx-4 rounded-xl">
                      
                      <div className="md:w-1/3 shrink-0">
                         <span className="text-5xl md:text-7xl font-black tracking-tighter text-muted-foreground/30 group-hover:text-[#F15A24] transition-colors">
                           {item.year}
                         </span>
                      </div>
                      
                      <div className="md:w-2/3 mt-2">
                         <h4 className="text-2xl font-black text-foreground uppercase tracking-tight mb-4 group-hover:text-[#F15A24] transition-colors">
                           {item.title}
                         </h4>
                         <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                           {item.description}
                         </p>
                      </div>

                    </div>
                  ))}
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
