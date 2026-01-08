import { Button } from "@/components/ui/button";
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagram, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export function HeroSection() {
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/bilaljiwani", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/bilaljiwani", label: "LinkedIn" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden pt-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-[10%] w-12 h-12 rounded-full border-4 border-primary/20 animate-bounce delay-700" />
      <div className="absolute bottom-20 left-[10%] w-8 h-8 bg-primary/20 rotate-45 animate-spin-slow" />
      <div className="absolute top-1/2 left-[5%] w-4 h-4 rounded-full bg-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">

          {/* Text Content */}
          <div className="flex-1 text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wider uppercase">
                Frontend Developer
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-foreground mb-4 leading-tight">
                Hey, This is <br />
                <span className="text-primary">Bilal</span> Jiwani
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-lg">
                An interactive Web Developer building pixel-perfect digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-secondary hover:bg-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Let's Talk
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-2 border-secondary/20 text-secondary hover:bg-secondary/5 font-bold"
              >
                View Projects
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 text-muted-foreground"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image & Floating Icons */}
          <div className="flex-1 relative flex justify-center animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              {/* Main Circle Background */}
              <div className="absolute inset-0 bg-secondary/5 rounded-full" />
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white">
                {/* Replaced placeholder with actual image path or placeholder if not available. Assuming user hasn't provided new one yet, keeping same src */}
                <img
                  src="/WhatsApp Image 2025-10-19 at 14.38.25_24722ce9.webp"
                  alt="Bilal Jiwani"
                  className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 -left-4 bg-primary text-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-20"
              >
                <div className="text-3xl font-bold">3+</div>
                <div className="text-xs leading-tight font-medium opacity-90">
                  Years of<br />Experience
                </div>
              </motion.div>

              {/* Orbiting Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full z-10 pointer-events-none"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-xl">
                  <SiReact className="w-8 h-8 text-[#61DAFB]" />
                </div>
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl">
                  <SiNextdotjs className="w-8 h-8 text-black" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-xl">
                  <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />
                </div>
                <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl">
                  <SiTypescript className="w-8 h-8 text-[#3178C6]" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
