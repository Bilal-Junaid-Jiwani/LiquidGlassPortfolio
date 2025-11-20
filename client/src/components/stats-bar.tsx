import { useEffect, useState } from "react";

interface StatsBarProps {
  stats: {
    projects: number;
    commits: number;
    technologies: number;
    experience: number;
  };
}

export function StatsBar({ stats }: StatsBarProps) {
  const [counts, setCounts] = useState({
    projects: 0,
    commits: 0,
    technologies: 0,
    experience: 0,
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const increments = {
      projects: stats.projects / steps,
      commits: stats.commits / steps,
      technologies: stats.technologies / steps,
      experience: stats.experience / steps,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        projects: Math.min(Math.floor(increments.projects * step), stats.projects),
        commits: Math.min(Math.floor(increments.commits * step), stats.commits),
        technologies: Math.min(Math.floor(increments.technologies * step), stats.technologies),
        experience: Math.min(Math.floor(increments.experience * step), stats.experience),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(stats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [stats]);

  const statItems = [
    { label: "Projects Completed", value: counts.projects, testId: "stat-projects" },
    { label: "GitHub Commits", value: counts.commits, testId: "stat-commits" },
    { label: "Core Technologies", value: counts.technologies, testId: "stat-technologies" },
    { label: "Years of Experience", value: counts.experience, testId: "stat-experience" },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 glass -z-10" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((item) => (
            <div
              key={item.label}
              className="text-center glass-card rounded-2xl p-4 sm:p-6 hover-elevate transition-all duration-300"
            >
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent mb-2"
                data-testid={item.testId}
              >
                {item.value}+
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
