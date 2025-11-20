import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.alpha})`;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-6"
    >
      {/* Animated Background */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-40" />
      <div className="absolute inset-0 gradient-mesh -z-10" />

      {/* Floating Glass Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full glass-card blur-3xl animate-float opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full glass-card blur-3xl animate-float-slow opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main Glass Card */}
        <div className="glass-card rounded-3xl p-12 md:p-16 mb-8 hover-elevate transition-all duration-500">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            data-testid="text-hero-name"
          >
            <span className="bg-gradient-to-r from-primary via-chart-3 to-primary bg-clip-text text-transparent">
              Muhammad Bilal
            </span>
          </h1>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground"
            data-testid="text-hero-title"
          >
            Full-Stack Developer
          </h2>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            data-testid="text-hero-description"
          >
            A passionate backend developer skilled in Django, Node.js, and n8n, with a
            strong interest in creating end-to-end web solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="rounded-full text-lg px-8 py-6 glass-card hover-elevate active-elevate-2 transition-all duration-200 group"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-full text-lg px-8 py-6 glass-card hover-elevate active-elevate-2 transition-all duration-200 group"
              data-testid="button-download-cv"
            >
              <a href="#" download>
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        {/* Floating Skill Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Django", "Node.js", "Python", "n8n", "WordPress"].map(
            (skill) => (
              <div
                key={skill}
                className="glass-card rounded-full px-4 py-2 text-sm font-medium hover-elevate transition-all duration-200 animate-float"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                }}
                data-testid={`badge-skill-${skill.toLowerCase()}`}
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
