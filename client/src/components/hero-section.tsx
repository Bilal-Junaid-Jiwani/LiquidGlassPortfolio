import { ArrowUpRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100vh] min-h-[600px] md:min-h-[850px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f05c31' }}>
      
      {/* Background Crosshair Grid (SVG Pattern) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="crosshairs" width="250" height="250" patternUnits="userSpaceOnUse">
              <line x1="125" y1="120" x2="125" y2="130" stroke="white" strokeWidth="1" />
              <line x1="120" y1="125" x2="130" y2="125" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshairs)" />
        </svg>
      </div>

      {/* Massive Background Text (Faded) */}
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
        <h1 className="text-[clamp(10rem,35vw,40rem)] font-sans font-black text-[#dc4518] tracking-tighter leading-none select-none">
          BILAL
        </h1>
      </div>

      <div className="max-w-[1600px] w-full mx-auto px-8 lg:px-16 relative z-10 flex h-full pt-24">
        
        {/* Left Content (Intro Text) */}
        <div className="absolute left-8 lg:left-16 top-[40%] max-w-[280px] z-20 hidden md:block">
          <p className="text-white text-[13px] font-semibold tracking-wide uppercase leading-[1.8]">
            BUILDING INTELLIGENT, SCALABLE, AND AUTOMATION-DRIVEN APPLICATIONS
          </p>
        </div>

        {/* Center Portrait Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-[50%] z-10 w-[150%] md:w-[120%] max-w-[1000px] h-[75vh] md:h-[90vh] flex items-end justify-center pointer-events-none">
          <img 
            src="/bilalnew1.png" 
            alt="Muhammad Bilal" 
            className="w-full h-full object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Bottom Left Foreground Text */}
        <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 lg:left-16 z-20 pointer-events-none">
          <p className="text-white font-bold text-lg md:text-xl mb-[-0.5rem] md:mb-[-1rem]">©2026</p>
          <h2 className="text-[clamp(4rem,18vw,14rem)] font-sans font-black text-white leading-[0.8] tracking-tighter">
            BILAL
          </h2>
        </div>

        {/* Right Floating Card 1 (Polaroid Style) */}
        <div className="hidden lg:flex absolute right-16 top-[35%] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex-col z-20 animate-float-slow">
          <div className="w-56 h-56 bg-zinc-100 mb-3 flex items-center justify-center overflow-hidden border border-zinc-200 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-rose-400 opacity-90 mix-blend-multiply"></div>
             <div className="w-24 h-24 bg-white/40 backdrop-blur-md rounded shadow-lg border border-white/50 z-10"></div>
          </div>
          <div className="flex items-center justify-between text-[11px] font-bold text-black uppercase px-2 pb-1">
             <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-[#f05c31]"/> HIGLAX</span>
             <span className="text-zinc-500">/Agentic AI</span>
          </div>
        </div>

        {/* Right Floating Card 2 (Let's Talk) */}
        <div 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute right-4 md:right-8 lg:right-16 bottom-6 md:bottom-16 bg-[#0A0A0A] p-3 md:p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-3 md:gap-5 z-20 border border-white/5 group hover:border-white/20 transition-all hover:-translate-y-1 cursor-pointer scale-90 md:scale-100 origin-bottom-right"
        >
          <img src="/bilalnew1.png" alt="Avatar" className="w-10 h-10 md:w-14 md:h-14 rounded-lg object-cover object-top bg-zinc-800" />
          <div className="pr-6">
             <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1 flex items-center justify-between w-full">Let's Talk <Sparkles className="w-3 h-3 text-white/30"/></p>
             <p className="text-white font-bold text-sm">Muhammad Bilal</p>
             <p className="text-white/40 text-[11px] font-semibold">Agentic AI Engineer</p>
          </div>
          <div className="w-10 h-10 bg-white text-black rounded flex items-center justify-center group-hover:bg-[#f05c31] group-hover:text-white transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

      </div>
    </section>
  );
}
