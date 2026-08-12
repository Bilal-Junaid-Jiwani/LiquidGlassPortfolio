import { Quote, User } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background relative z-10 border-t border-border overflow-hidden">
      
      {/* Massive Marquee */}
      <div className="w-full flex overflow-hidden whitespace-nowrap mb-32 opacity-20">
        <div className="animate-marquee inline-block">
           <span className="text-[12rem] font-black uppercase tracking-tighter mx-8">
              CREATIVE IMPACT • RESULTS DRIVEN • 
           </span>
           <span className="text-[12rem] font-black uppercase tracking-tighter mx-8">
              CREATIVE IMPACT • RESULTS DRIVEN • 
           </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 -mt-40 md:-mt-56">
        
        <div className="bg-[#F15A24] text-white p-12 md:p-24 rounded-3xl shadow-2xl relative">
          <Quote className="absolute top-12 left-12 w-24 h-24 text-white/20 rotate-180" />
          
          <div className="relative z-10">
             <h3 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.2] mb-12 uppercase max-w-3xl">
               BILAL TRANSFORMED OUR COMPLEX REQUIREMENTS INTO A STUNNING, SEAMLESS DIGITAL EXPERIENCE. HIS ATTENTION TO DETAIL AND TECHNICAL EXPERTISE IS UNMATCHED.
             </h3>
             
             <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                 <User className="w-8 h-8 text-white/70" />
               </div>
               <div>
                 <p className="font-bold text-xl uppercase tracking-widest">Client Feedback</p>
                 <p className="text-white/70 font-semibold text-sm">Verified Project</p>
               </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
