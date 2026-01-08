import { useState, useLayoutEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { projects, skills, timeline } from "@shared/schema";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";

import { PersonalAssistant } from "@/components/personal-assistant";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    // FORCE Light Mode
    document.documentElement.classList.remove("dark");
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Floating White Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full sm:w-[90%] max-w-7xl px-4 transition-all duration-300">
        <div className="bg-white/80 rounded-full px-6 py-4 flex items-center justify-between shadow-lg backdrop-blur-md border border-white/20">
          <a
            href="#home"
            className="text-2xl font-black text-foreground tracking-tight hover:text-primary transition-colors"
            data-testid="link-logo"
          >
            M.Bilal<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-2 rounded-full text-sm font-bold text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                data-testid={`button-desktop-nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 border-0"
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full text-foreground hover:bg-muted"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 rounded-3xl p-6 space-y-4 animate-in fade-in slide-in-from-top-4 shadow-xl border border-border mx-4 backdrop-blur-md">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-3 text-lg font-bold text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0"
                data-testid={`button-mobile-nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar />

      {/* About Section */}
      <AboutSection timeline={timeline} />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative py-12 bg-muted/30 border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Bilal-Junaid-Jiwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-white hover:scale-110 text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-junaid-jiwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white hover:bg-white hover:scale-110 text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@bilaljiwani.dev"
              className="p-3 rounded-full bg-white hover:bg-white hover:scale-110 text-muted-foreground hover:text-primary transition-all duration-300 shadow-sm hover:shadow-md"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm font-medium" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Bilal Junaid Jiwani. All rights reserved.
          </p>
        </div>
      </footer>
      <PersonalAssistant />
    </div>
  );
}
