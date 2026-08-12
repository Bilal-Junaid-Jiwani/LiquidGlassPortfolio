import { ArrowUpRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "Agentic AI Solutions",
      desc: "Building autonomous AI solutions, multi-agent systems, and integrating LLMs (Gemini, OpenAI) into secure workflows that think and adapt to real business needs."
    },
    {
      num: "02",
      title: "Full-Stack Engineering",
      desc: "Architecting scalable web applications from scratch using React, Next.js, Node.js, Django, and Python. Focusing on secure, robust backends and modern frontends."
    },
    {
      num: "03",
      title: "Automation & Workflows",
      desc: "Engineering complex automation pipelines using n8n and advanced Prompt Engineering to reduce manual overhead and bridge the gap between traditional architecture and AI."
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0A0A0A] text-white relative z-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-24">
          <p className="text-[#F15A24] font-bold uppercase tracking-[0.2em] text-xs mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F15A24] inline-block"></span>
            What I Do
          </p>
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black tracking-tighter uppercase leading-[0.85]">
            Core <br/> Competencies.
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/20">
          {services.map((service, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-white/20 hover:border-transparent transition-colors overflow-hidden cursor-pointer">
              
              {/* Massive Hover Background Fill */}
              <div className="absolute inset-0 bg-[#F15A24] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] z-0"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full px-4">
                <span className="text-4xl md:text-6xl font-black text-white/20 group-hover:text-black/50 transition-colors duration-300">
                  {service.num}
                </span>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-black transition-colors duration-300 w-full md:w-1/3">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-white/60 group-hover:text-black/80 font-medium max-w-xl transition-colors duration-300">
                  {service.desc}
                </p>
              </div>

              {/* Hover Icon */}
              <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/20 group-hover:border-black group-hover:bg-black text-white group-hover:text-white transition-all transform group-hover:scale-110 mr-4">
                <ArrowUpRight className="w-6 h-6" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
