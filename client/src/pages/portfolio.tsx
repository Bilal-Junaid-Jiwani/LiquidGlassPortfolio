import { useState, useLayoutEffect, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, skills, timeline } from "@shared/schema";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { PersonalAssistant } from "@/components/personal-assistant";

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative selection:bg-[#F15A24] selection:text-white font-sans">
      
      {/* Global Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-10 z-0 mix-blend-multiply"></div>

      {/* Transparent Minimalist Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F15A24]/90 backdrop-blur-md shadow-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            className={`text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity flex items-start ${scrolled ? 'text-white' : 'text-white mix-blend-difference'}`}
          >
            Bilal<span className="text-sm mt-1">®</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {[
              { name: "Home", count: null },
              { name: "Services", count: null },
              { name: "About", count: null },
              { name: "Work", count: null },
              { name: "Contact", count: null }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name.toLowerCase() === 'home' ? 'home' : item.name.toLowerCase())}
                className={`text-[13px] font-bold hover:opacity-70 transition-opacity flex items-center gap-1 uppercase tracking-widest ${scrolled ? 'text-white' : 'text-white mix-blend-difference'}`}
              >
                {item.name} {item.count && <span className="opacity-50 text-[10px]">({item.count})</span>}
              </button>
            ))}
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`hover:opacity-70 transition-opacity flex flex-col gap-[5px] items-end ${scrolled ? 'text-white' : 'text-white mix-blend-difference'}`}
          >
            <div className={`w-8 h-[2px] transition-all ${scrolled ? 'bg-white' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
            <div className={`w-6 h-[2px] transition-all ${scrolled ? 'bg-white' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px] w-8' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-24 left-0 w-full bg-[#0A0A0A] border-b border-white/10 p-6 space-y-4 shadow-xl">
            {["Home", "Services", "About", "Work", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase())}
                className="block w-full text-left py-6 text-4xl font-black text-white hover:text-[#F15A24] transition-colors border-b border-white/10 last:border-0 uppercase tracking-tighter"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div id="home">
          <HeroSection />
        </div>

        <div className="bg-background">
          <div id="services">
            <ServicesSection />
          </div>

          <div id="about">
            <AboutSection timeline={timeline} />
          </div>

          <div id="skills">
            <SkillsSection skills={skills} />
          </div>

          <div id="work">
            <ProjectsSection projects={projects} />
          </div>

          <div id="testimonials">
            <TestimonialsSection />
          </div>

          <div id="contact">
            <ContactSection />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#0A0A0A] text-white border-t border-white/10 overflow-hidden pt-24 pb-12 z-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-5 space-y-6">
              <p className="text-2xl font-bold leading-relaxed text-white/80 max-w-md">
                Focused on building intelligent, scalable, and automation-driven applications.
              </p>
              <div className="pt-8">
                <p className="text-sm text-white/50 mb-1 uppercase tracking-widest font-bold">Call Me</p>
                <a href="tel:+923082887469" className="text-2xl font-black hover:text-[#F15A24] transition-colors">
                  +92 308 2887469
                </a>
              </div>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-8 text-sm">
              <div>
                <p className="text-[#F15A24] font-bold mb-6 text-xs uppercase tracking-widest">Navigation</p>
                <ul className="space-y-4 font-bold uppercase tracking-wide">
                  {[
                    { label: 'Home', id: 'home' },
                    { label: 'About Me', id: 'about' },
                    { label: 'Work', id: 'work' },
                    { label: 'Contact', id: 'contact' }
                  ].map((link) => (
                    <li key={link.label}>
                      <button 
                        onClick={() => scrollToSection(link.id)} 
                        className="hover:text-[#F15A24] transition-colors uppercase tracking-wide font-bold"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[#F15A24] font-bold mb-6 text-xs uppercase tracking-widest">Social</p>
                <ul className="space-y-4 font-bold uppercase tracking-wide">
                  {[
                    {name: 'Github', url: 'https://github.com/Bilal-Junaid-Jiwani/'}, 
                    {name: 'LinkedIn', url: 'https://www.linkedin.com/in/bilal-junaid-jiwani/'}, 
                    {name: 'Email', url: 'mailto:muhammadjunaidjiwani@gmail.com'}
                  ].map((social) => (
                    <li key={social.name}>
                      <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#F15A24] transition-colors group">
                        {social.name}
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-black mb-6 uppercase">Newsletter</h3>
                <div className="flex flex-col gap-4">
                  <input type="email" placeholder="you@example.com" className="bg-black/50 border border-white/20 rounded-md px-4 py-4 text-sm focus:outline-none focus:border-[#F15A24] transition-colors text-white"/>
                  <button className="bg-[#F15A24] text-white font-black uppercase tracking-widest py-4 rounded-md text-sm hover:bg-white hover:text-black transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-white/10 pt-12 flex flex-col md:flex-row items-end justify-between gap-6">
            <h1 className="text-giant font-sans text-white tracking-tighter w-full text-center md:text-left select-none relative">
              Bilal<sup className="text-4xl md:text-6xl absolute top-4 md:top-8 ml-2 text-[#F15A24]">®</sup>
            </h1>
          </div>
        </div>
      </footer>
      <PersonalAssistant />
    </div>
  );
}
