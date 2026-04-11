import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ARCHETYPES = [
  {
    id: "bold",
    title: "Bold & Seductive",
    desc: "Command the room with velvet shadows and provocative spices.",
    image: "https://images.unsplash.com/photo-1761078739411-2ccb6e956c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVkJTIwdmVsdmV0JTIwc2lsayUyMGx1eHVyeXxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=800",
    layout: "col-span-12 md:col-span-7 h-[600px]",
    textColor: "text-white",
  },
  {
    id: "fresh",
    title: "Fresh & Calm",
    desc: "A bright morning breath of linen, citrus, and sunlight.",
    image: "https://images.unsplash.com/photo-1690893631932-2ad83b51afcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGxpbmVuJTIwc3VubGlnaHQlMjBicmlnaHQlMjBuYXR1cmV8ZW58MXx8fHwxNzc1OTI3MjIzfDA&ixlib=rb-4.1.0&q=80&w=800",
    layout: "col-span-12 md:col-span-5 h-[450px] md:mt-[150px]",
    textColor: "text-[#2D004B]",
  },
  {
    id: "mysterious",
    title: "Mysterious",
    desc: "Get lost in the intoxicating haze of oud, smoke, and ancient woods.",
    image: "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTInd29vZHMlMjBzbW9rZSUyMGZvcmVzdCUyMG91ZHxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1200",
    layout: "col-span-12 md:col-span-12 h-[500px]",
    textColor: "text-white",
  }
];

export function PersonalityFinder() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row justify-between items-end">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D004B] mb-6 tracking-[0.05em]">
              Find Your Archetype
            </h2>
            <p className="font-sans text-gray-600 leading-relaxed tracking-wide">
              We transcend generic filters. Discover the scent profile that matches the energy you wish to project.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 uppercase tracking-widest text-[#D4AF37] font-sans font-semibold border-b border-[#D4AF37] pb-1 hover:text-[#2D004B] hover:border-[#2D004B] transition-colors">
            View All Profiles <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {ARCHETYPES.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group overflow-hidden ${item.layout}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <span className="uppercase text-[#D4AF37] font-sans tracking-[0.2em] text-xs font-bold mb-3">
                  Archetype 0{index + 1}
                </span>
                <h3 className={`font-serif text-3xl md:text-4xl text-white mb-4 tracking-[0.05em]`}>
                  {item.title}
                </h3>
                <div className="overflow-hidden h-0 group-hover:h-20 transition-all duration-500 ease-in-out">
                  <p className="text-white/80 font-sans text-sm md:text-base max-w-sm mb-4">
                    {item.desc}
                  </p>
                  <button className="text-[#D4AF37] font-sans uppercase tracking-widest text-xs font-bold flex items-center gap-2 hover:text-white transition-colors">
                    Explore <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
