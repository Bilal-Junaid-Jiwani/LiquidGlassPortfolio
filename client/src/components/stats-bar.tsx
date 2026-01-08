import { motion } from "framer-motion";

export function StatsBar() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Total Contributors", value: "50+" },
    { label: "Tech Stack Mastery", value: "15+" },
  ];

  return (
    <div className="w-full bg-primary text-white py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center relative group">
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-5xl font-black mb-2"
              >
                {stat.value}
              </motion.span>
              <span className="text-sm md:text-base font-medium opacity-90 uppercase tracking-wider">{stat.label}</span>

              {/* Divider for desktop */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
