import { TimelineItem } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  timeline: TimelineItem[];
}

export function AboutSection({ timeline }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Col - Image Composition */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] w-full max-w-md mx-auto lg:ml-0 bg-muted">
              <img
                src="/WhatsApp Image 2025-10-19 at 14.38.25_24722ce9.webp"
                alt="Bilal Junaid Jiwani"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-bold uppercase tracking-widest text-sm mb-1 opacity-80">Based in</p>
                <h3 className="text-3xl font-black">Karachi, PK.</h3>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-10 right-0 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] hidden md:block animate-in fade-in slide-in-from-right-8 delay-300">
              <p className="font-black text-4xl text-primary mb-1">100%</p>
              <p className="text-sm font-bold text-muted-foreground leading-tight">Client Satisfaction Rate</p>
            </div>
          </div>

          {/* Right Col - Story & Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h4 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Who I Am</h4>
              <h2 className="text-5xl md:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Designing the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Future Web.</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              I'm <span className="text-foreground font-bold">Bilal Jiwani</span>, a full-stack developer who bridges the gap between engineering and aesthetics. My journey started with a curiosity for how things work, evolving into a passion for building seamless digital ecosystems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in <strong>Python, JavaScript, and modern frameworks</strong>, I don't just write code; I craft experiences. Whether it's a complex backend architecture or a pixel-perfect frontend, I bring precision and creativity to every project.
            </p>

            {/* Experience Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {timeline.slice(0, 2).map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-colors group">
                  <span className="text-sm font-black text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 inline-block">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button className="rounded-full px-8 py-6 text-lg font-bold bg-foreground text-background hover:bg-foreground/90 shadow-xl" asChild>
                <a href="#contact">Start a Project <ArrowUpRight className="ml-2 w-5 h-5" /></a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
