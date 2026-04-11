import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CategoryBanners() {
  return (
    <section className="bg-[#FFFFFF] flex flex-col">
      <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D004B] font-bold tracking-[0.1em] mb-4">
            THE CATEGORIES
          </h2>
          <p className="font-sans text-[#2D004B]/60 text-sm tracking-widest uppercase">
            Curated High-Performance Extracts
          </p>
        </motion.div>
      {/* ROW 1: Technical Narrative (Left) & Bottle Shot (Right) */}
      <div className="flex flex-col-reverse md:flex-row w-full min-h-[80vh] relative overflow-hidden group">
        
        {/* Left Side: Technical Narrative (Text) */}
        <div className="md:w-1/2 w-full bg-[#FFFFFF] text-[#2D004B] flex flex-col justify-center px-10 md:px-24 py-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-sans uppercase text-[10px] tracking-[0.2em] font-semibold text-[#D4AF37] mb-4">
              Scent Architecture
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-[0.1em] mb-8 leading-tight">
              PRECISION<br/>CRAFTED
            </h2>
            <p className="font-sans text-[#2D004B]/70 text-sm md:text-base leading-[1.8] tracking-wide max-w-md mb-12">
              Our lab focuses on unparalleled extraction techniques. By isolating the purest molecules of absolute oud and saffron, we achieve a concentration level built specifically to perform in the demanding heat of the Indian subcontinent.
            </p>
            <button className="text-[#D4AF37] hover:text-[#2D004B] font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 w-max border-b-2 border-[#D4AF37] hover:border-[#2D004B] pb-1 flex items-center gap-2 group/btn">
              Shop The Masterpieces
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: High-res Bottle Shot */}
        <div className="md:w-1/2 w-full h-[50vh] md:h-auto relative z-10 bg-gray-50 flex items-center justify-center p-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU5MjkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080')", transformOrigin: 'center center' }}
          />
        </div>
      </div>

      {/* ROW 2: Lifestyle Imagery (Left) & Category Title (Right) */}
      <div className="flex flex-col md:flex-row w-full min-h-[80vh] relative overflow-hidden group">
        
        {/* Left Side: Lifestyle Image */}
        <div className="md:w-1/2 w-full h-[50vh] md:h-auto relative z-10 bg-black">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1765954079511-572f7c0072d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwZXJmdW1lJTIwbHV4dXJ5JTIwbW9kZWx8ZW58MXx8fHwxNzc1OTI5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080')" }}
          />
          {/* Subtle gradient to blend into the right panel */}
          <div className="absolute inset-y-0 right-[-10%] w-[20%] bg-gradient-to-r from-transparent to-[#2D004B] hidden md:block" />
        </div>

        {/* Right Side: Category Title and Description */}
        <div className="md:w-1/2 w-full bg-[#2D004B] text-white flex flex-col justify-center px-10 md:px-24 py-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="font-sans uppercase text-[10px] tracking-[0.2em] font-semibold text-[#D4AF37] mb-4">
              Saanjh Ouds • Evening Ritual
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold tracking-[0.1em] mb-8 leading-tight">
              THE MIDNIGHT<br/>SERIES
            </h2>
            <p className="font-sans text-white/70 text-sm md:text-base leading-[1.8] tracking-wide max-w-md mb-12">
              A deep chiaroscuro of smoky woods, rich saffron, and intoxicating oud. 
              Engineered to project through evening mist and command attention without saying a word. Perfectly designed for the Indian night.
            </p>
            <button className="px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D004B] font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500 w-max group/btn flex items-center gap-3">
              Explore The Series
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
