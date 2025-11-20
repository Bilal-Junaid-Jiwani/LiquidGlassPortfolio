import { useState } from "react";
import { Skill } from "@shared/schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"frontend" | "backend" | "tools">("frontend");

  const categories = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 glass -z-10" />
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          data-testid="heading-skills"
        >
          Technical <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Skills</span>
        </h2>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={(v) => setActiveCategory(v as any)}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 glass-card p-1 rounded-2xl">
            <TabsTrigger value="frontend" className="rounded-xl data-[state=active]:glass-heavy" data-testid="tab-frontend">
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="rounded-xl data-[state=active]:glass-heavy" data-testid="tab-backend">
              Backend
            </TabsTrigger>
            <TabsTrigger value="tools" className="rounded-xl data-[state=active]:glass-heavy" data-testid="tab-tools">
              Tools
            </TabsTrigger>
          </TabsList>

          {Object.entries(categories).map(([category, categorySkills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="glass-card rounded-2xl p-6 text-center hover-elevate active-elevate-2 transition-all duration-300 group cursor-pointer"
                    data-testid={`card-skill-${skill.id}`}
                  >
                    {/* Circular Progress */}
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-muted/20"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="36"
                          stroke="url(#gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 36}`}
                          strokeDashoffset={`${2 * Math.PI * 36 * (1 - skill.percentage / 100)}`}
                          className="transition-all duration-1000 ease-out"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--chart-3))" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold" data-testid={`text-skill-percentage-${skill.id}`}>
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-sm" data-testid={`text-skill-name-${skill.id}`}>
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
