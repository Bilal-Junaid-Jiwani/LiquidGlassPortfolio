import { useState, useEffect, useLayoutEffect } from "react";
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";
import { projects, skills, timeline, stats } from "@shared/schema";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Button } from "@/components/ui/button";

import { PersonalAssistant } from "@/components/personal-assistant";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem("theme");
      return savedTheme !== "light";
    }
    return true;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const isDarkMode = savedTheme === "dark";
    setIsDark(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating Glass Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full sm:w-[95%] max-w-7xl">
        <div className="glass-card rounded-3xl px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-black bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent"
            data-testid="link-logo"
          >
            BJ.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="button-desktop-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="button-desktop-nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="button-desktop-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              data-testid="button-desktop-nav-contact"
            >
              Contact
            </button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full glass"
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-full"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-6 space-y-4 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              data-testid="button-mobile-nav-contact"
            >
              Contact
            </button>
            <div className="pt-4 border-t border-border/50">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="w-full justify-start gap-2 glass"
                data-testid="button-mobile-theme-toggle"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar stats={stats} />

      {/* About Section */}
      <AboutSection timeline={timeline} />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="relative py-12 border-t border-border/30">
        <div className="absolute inset-0 glass -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-4 sm:gap-6 mb-6">
            <a
              href="https://github.com/Bilal-Junaid-Jiwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover-elevate active-elevate-2 transition-all duration-200"
              data-testid="link-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-junaid-jiwani/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover-elevate active-elevate-2 transition-all duration-200"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@bilaljiwani.dev"
              className="glass-card p-3 rounded-full hover-elevate active-elevate-2 transition-all duration-200"
              data-testid="link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Bilal Junaid Jiwani. All rights reserved.
          </p>
        </div>
      </footer>
      <PersonalAssistant />
    </div>
  );
}
