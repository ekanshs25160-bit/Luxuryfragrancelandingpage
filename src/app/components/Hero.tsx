import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Mockup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1771762013405-ad64577dfc55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwZGFyayUyMHNtb2tlJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyM3ww&ixlib=rb-4.1.0&q=80&w=2000')" }}
      />
      
      {/* Linear Gradient Overlay for text legibility (Lattafa Style) */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent" />
      
      {/* Floating Smoke Particles Placeholder */}
      <motion.div 
        className="absolute bottom-0 left-[-20%] w-[70%] h-[60%] bg-brand-secondary/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ y: [0, -60, 0], x: [0, 40, 0], scale: [1, 1.2, 1], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ y: [0, 40, 0], x: [0, -40, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-24 w-full mt-20">
        <motion.p
          className="font-sans uppercase text-[10px] md:text-xs tracking-[0.3em] font-semibold text-accent mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          A Regal Lab Identity
        </motion.p>
        
        {/* Bold Centered Headline */}
        <motion.h1
          className="font-serif text-6xl md:text-7xl lg:text-8xl text-light tracking-[0.1em] leading-[1.1] mb-8 capitalize font-bold drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          REDEFINE<br/>YOUR AURA.
        </motion.h1>

        <motion.p
          className="font-sans text-white max-w-lg text-sm md:text-base leading-relaxed tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          Discover a prestige curation of deep ouds, fresh citrus, and vibrant spices. Crafted for unparalleled performance and lasting sillage.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <button className="px-10 py-4 bg-[var(--color-brand-light)]/10 backdrop-blur-sm border border-[var(--color-brand-light)] hover:bg-[var(--color-brand-light)] text-light hover:text-brand font-sans text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 w-full sm:w-auto shadow-2xl hover:-translate-y-1 rounded-sm">
            Experience the Collection
          </button>
          
          {/* Ghost Button CTA */}
          <button className="px-10 py-4 bg-transparent border border-light hover:bg-light/10 hover:border-accent hover:text-accent text-light font-sans text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 rounded-sm">
            Find Your Signature
          </button>
        </motion.div>
      </div>
    </section>
  );
}
