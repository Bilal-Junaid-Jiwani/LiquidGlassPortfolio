import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-background relative z-10 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white text-black p-8 md:p-16 rounded-3xl border border-border shadow-xl">
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 shadow-md">
               <img src="/bilalnew1.png" alt="Bilal" className="w-full h-full object-cover object-top" />
            </div>
            <div>
               <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tighter uppercase mb-2">
                 Let's Create <br/> Together.
               </h2>
               <p className="text-zinc-500 font-medium text-sm md:text-base">Ready to start your next project?</p>
            </div>
          </div>

          <a 
            href="mailto:muhammadjunaidjiwani@gmail.com"
            className="flex items-center gap-3 bg-[#F15A24] text-white px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-[#F15A24]/30 shrink-0"
          >
            Contact Me <ArrowRight className="w-5 h-5" />
          </a>
          
        </div>
        
      </div>
    </section>
  );
}
