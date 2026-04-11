import { motion } from "motion/react";
import { useState } from "react";
import { Clock, Wind, ShoppingBag } from "lucide-react";

type Product = {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
  longevity: string;
  sillage: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Oud Saffron",
    type: "Extrait de Parfum",
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTkyOTExNHww&ixlib=rb-4.1.0&q=80&w=1080",
    longevity: "12+ Hours",
    sillage: "Enormous",
  },
  {
    id: "2",
    name: "Neroli Blanc",
    type: "Eau de Parfum",
    price: "₹6,200",
    image: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU5MjkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    longevity: "8+ Hours",
    sillage: "Moderate",
  },
  {
    id: "3",
    name: "Midnight Rose",
    type: "Extrait de Parfum",
    price: "₹9,000",
    image: "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTkyOTExNHww&ixlib=rb-4.1.0&q=80&w=1080",
    longevity: "14+ Hours",
    sillage: "Heavy",
  }
];

export function ProductGrid() {
  return (
    <section className="bg-[#FFFFFF] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D004B] font-bold tracking-[0.1em] mb-4">
            THE COLLECTION
          </h2>
          <p className="font-sans text-[#2D004B]/60 text-sm tracking-widest uppercase">
            Curated High-Performance Extracts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<"8ML" | "50ML">("50ML");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative h-[450px] w-full perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 backface-hidden bg-[#FAFAFA] border border-gray-100 p-8 flex flex-col items-center text-center shadow-sm">
          <div className="w-full h-48 mb-8 relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
          <p className="font-sans text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-2">
            {product.type}
          </p>
          <h3 className="font-serif text-2xl text-[#2D004B] font-bold tracking-[0.05em] mb-3">
            {product.name}
          </h3>
          <p className="font-sans text-sm text-[#2D004B]/70 tracking-wide mt-auto">
            {product.price}
          </p>
        </div>

        {/* BACK SIDE (Flipped) */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#2D004B] border border-[#D4AF37]/30 p-8 flex flex-col justify-center text-white text-center shadow-xl">
          <h3 className="font-serif text-2xl text-[#D4AF37] font-bold tracking-[0.05em] mb-6">
            {product.name}
          </h3>
          
          {/* Performance Icons */}
          <div className="flex flex-col gap-4 mb-8 text-left max-w-[200px] mx-auto w-full border-t border-white/10 pt-6">
            <div className="flex items-center gap-3 font-sans text-xs tracking-widest uppercase">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 w-16">Longevity</span>
              <span className="text-white font-bold ml-auto">{product.longevity}</span>
            </div>
            <div className="flex items-center gap-3 font-sans text-xs tracking-widest uppercase">
              <Wind className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-white/80 w-16">Sillage</span>
              <span className="text-white font-bold ml-auto">{product.sillage}</span>
            </div>
          </div>

          {/* Size Selection Bubbles */}
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedSize("8ML"); }}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-sans text-[10px] font-bold tracking-wider transition-all ${
                selectedSize === "8ML" 
                  ? "bg-[#D4AF37] text-[#2D004B]" 
                  : "bg-transparent border border-white/30 text-white hover:border-[#D4AF37]"
              }`}
            >
              8ML
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedSize("50ML"); }}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-sans text-[10px] font-bold tracking-wider transition-all ${
                selectedSize === "50ML" 
                  ? "bg-[#D4AF37] text-[#2D004B]" 
                  : "bg-transparent border border-white/30 text-white hover:border-[#D4AF37]"
              }`}
            >
              50ML
            </button>
          </div>

          <button className="w-full bg-white hover:bg-[#D4AF37] text-[#2D004B] py-4 font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 mt-auto">
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
      </motion.div>
    </div>
  );
}
