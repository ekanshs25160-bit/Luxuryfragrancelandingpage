import { motion } from "motion/react";
import { Play, ShoppingBag } from "lucide-react";

const REELS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1647984356140-d6aab249b002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwcGVyZnVtZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=600",
    title: "The Art of Application",
    product: "Silk Santal",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1773527142309-80df44147512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2xhc3MlMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=600",
    title: "Macro Mist",
    product: "Oud Noir Exclusif",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1764265930328-72716076e3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGUlMjBldmVuaW5nJTIwZ29sZHxlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=600",
    title: "Evening Elegance",
    product: "Velvet Orchid",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1761328559705-3addc2496c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBldmVuaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=600",
    title: "The Gentleman's Aura",
    product: "Vetiver Smoke",
  },
];

export function Reels() {
  return (
    <section className="py-24 bg-brand text-light overflow-hidden">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 tracking-[0.05em] font-medium">
            In Motion
          </h2>
          <p className="font-sans text-light/70 max-w-md tracking-wide">
            Experience the aura. A curated lookbook of our community defining their presence.
          </p>
        </div>
        <button className="uppercase tracking-widest text-accent text-sm font-sans font-semibold border-b border-accent pb-1 hover:text-light hover:border-light transition-colors">
          Follow @Aromaras
        </button>
      </div>

      <div className="pl-6 md:pl-16 flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar w-full">
        {REELS.map((reel) => (
          <motion.div
            key={reel.id}
            className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden snap-center group cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url('${reel.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-dark)]/10 via-transparent to-[var(--color-brand-dark)]/80" />
            
            {/* Play Button Indicator */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-light/10 backdrop-blur-md flex items-center justify-center border border-light/20 group-hover:scale-110 transition-transform duration-500">
                <Play className="w-6 h-6 text-light ml-1" fill="currentColor" />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-4">
              <div>
                <h4 className="font-serif text-lg text-light mb-1 tracking-wide">{reel.title}</h4>
                <p className="font-sans text-light/60 text-xs uppercase tracking-widest">{reel.product}</p>
              </div>
              <button className="w-full py-3 bg-accent hover:bg-light text-brand font-sans text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors rounded-sm">
                <ShoppingBag className="w-4 h-4" /> Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Hide scrollbar styles locally */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
