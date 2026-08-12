import { Skill } from "@shared/schema";
import { Sparkles } from "lucide-react";

interface Props {
  skills: Skill[];
}

export function SkillsSection({ skills }: Props) {
  // Extract just the names for the marquee
  const allSkillNames = skills.map(s => s.name).join(" • ");

  return (
    <section className="py-32 bg-background relative z-10 border-t border-border overflow-hidden">
      
      {/* Top Heading */}
      <div className="max-w-[1400px] mx-auto px-6 mb-24">
         <p className="text-[#F15A24] font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F15A24] inline-block"></span>
            Expertise
         </p>
         <h2 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]">
            Technical <br/> Arsenal.
         </h2>
      </div>

      {/* Massive Infinite Marquee */}
      <div className="w-full flex overflow-hidden whitespace-nowrap mb-24 bg-[#0A0A0A] text-[#F15A24] py-8 rotate-2 scale-110 shadow-2xl">
        <div className="animate-marquee inline-block">
           <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8">
              {allSkillNames} • {allSkillNames} • 
           </span>
           <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mx-8">
              {allSkillNames} • {allSkillNames} • 
           </span>
        </div>
      </div>

      {/* Grid of prominent skills */}
      <div className="max-w-[1400px] mx-auto px-6 mt-32">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['frontend', 'backend', 'tools'].map(category => {
              const categorySkills = skills.filter(s => s.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category} className="border-t-[8px] border-foreground pt-8 hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-3xl font-black uppercase tracking-widest mb-8 text-foreground flex items-center justify-between">
                    {category}
                    <Sparkles className="w-6 h-6 text-[#F15A24]" />
                  </h4>
                  <div className="flex flex-col gap-4">
                    {categorySkills.map(skill => (
                      <div key={skill.id} className="flex justify-between items-center group cursor-pointer p-4 border border-border/50 hover:border-foreground transition-colors bg-muted/10">
                        <span className="text-xl font-bold uppercase tracking-tight group-hover:text-[#F15A24] transition-colors">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
         </div>
      </div>

    </section>
  );
}
