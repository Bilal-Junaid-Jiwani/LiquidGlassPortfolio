import { Skill } from "@shared/schema";
import {
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiPython, SiDjango, SiMongodb, SiPostgresql, SiGit, SiDocker,
  SiHtml5, SiCss3, SiBootstrap, SiFirebase, SiWordpress, SiGooglesearchconsole
} from "react-icons/si";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  skills: Skill[];
}

// Icon mapping helper
const getSkillIcon = (name: string) => {
  const icons: Record<string, any> = {
    "JavaScript": SiJavascript,
    "React": SiReact,
    "Next.js": SiNextdotjs,
    "Tailwind CSS": SiTailwindcss,
    "Node.js": SiNodedotjs,
    "Python": SiPython,
    "Django": SiDjango,
    "MongoDB": SiMongodb,
    "PostgreSQL": SiPostgresql,
    "Git & GitHub": SiGit,
    "Docker": SiDocker,
    "HTML": SiHtml5,
    "CSS": SiCss3,
    "Bootstrap": SiBootstrap,
    "Firebase": SiFirebase,
    "WordPress": SiWordpress,
    "SEO": SiGooglesearchconsole,
    "n8n": () => <span className="font-black text-xs">n8n</span> // Custom text icon for n8n if icon missing
  };
  return icons[name] || SiJavascript;
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  // Triple the skills list to ensure seamless marquee loop
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="container mx-auto max-w-7xl text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-secondary/10 rounded-full mb-6">
          <span className="text-secondary font-bold text-xs uppercase tracking-widest px-4">My Tech Stack</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
          Making apps with recent technologies.
        </h2>
        <p className="font-cursive text-xl md:text-2xl text-muted-foreground/60 italic font-medium">
          Never miss a task, deadline or idea.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-10 mask-gradient-x">
        {/* Row 1 - Left to Right */}
        <div className="flex gap-8 md:gap-16 w-max animate-marquee mb-12 hover:pause">
          {marqueeSkills.slice(0, 15).map((skill, i) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <div key={`${skill.id}-1-${i}`} className="flex flex-col items-center justify-center gap-2 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:bg-white transition-all duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" />
                </div>
                {/* <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{skill.name}</span> */}
              </div>
            )
          })}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex gap-8 md:gap-16 w-max animate-marquee-reverse hover:pause">
          {marqueeSkills.slice(0, 15).reverse().map((skill, i) => {
            const Icon = getSkillIcon(skill.name);
            return (
              <div key={`${skill.id}-2-${i}`} className="flex flex-col items-center justify-center gap-2 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-secondary/5 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:bg-white transition-all duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Side Gradients for Fade Effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
