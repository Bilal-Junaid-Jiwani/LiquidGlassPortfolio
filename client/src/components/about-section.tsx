import { TimelineItem } from "@shared/schema";

interface AboutSectionProps {
  timeline: TimelineItem[];
}

export function AboutSection({ timeline }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-16"
          data-testid="heading-about"
        >
          About <span className="bg-gradient-to-r from-primary to-chart-3 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-chart-3 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative glass-card rounded-3xl p-2 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=600&fit=crop"
                alt="Bilal Junaid Jiwani"
                className="w-full aspect-square object-cover rounded-2xl"
                data-testid="img-profile"
              />
            </div>
          </div>

          {/* Journey Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6" data-testid="heading-journey">
              My Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-journey-description">
              I'm a passionate developer skilled in Django, Node.js, and n8n, with a strong
              interest in creating end-to-end web solutions. I also enjoy working on modern
              frontend designs to deliver smooth and engaging user experiences.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={item.id} className="relative pl-8" data-testid={`card-timeline-${item.id}`}>
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-chart-3" />
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-1.5 top-5 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                  <div className="glass-card rounded-xl p-4 hover-elevate transition-all duration-200">
                    <h4 className="text-lg font-semibold mb-1" data-testid={`text-timeline-title-${item.id}`}>
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm" data-testid={`text-timeline-description-${item.id}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
