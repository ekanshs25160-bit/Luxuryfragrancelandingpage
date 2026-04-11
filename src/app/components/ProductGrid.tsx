import { motion } from "motion/react";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";

type Product = {
  id: string;
  name: string;
  type: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Oud Saffron",
    type: "Extrait de Parfum",
    price: "₹8,500",
    image: "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTkyOTExNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    name: "Neroli Blanc",
    type: "Eau de Parfum",
    price: "₹6,200",
    image: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU5MjkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    name: "Midnight Rose",
    type: "Extrait de Parfum",
    price: "₹9,000",
    image: "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTkyOTExNHww&ixlib=rb-4.1.0&q=80&w=1080",
  }
];

export function ProductGrid() {
  return (
    <section id="collection" className="bg-[#FFFFFF] py-24 px-6 md:px-16 scroll-mt-24">
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

  return (
    <div className="relative w-full min-h-[450px] flex flex-col bg-[#FAFAFA] border border-gray-100 p-8 shadow-sm">
      <div className="w-full h-48 mb-6 relative shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      <p className="font-sans text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em] mb-2 text-center">
        {product.type}
      </p>
      <h3 className="font-serif text-2xl text-[#2D004B] font-bold tracking-[0.05em] mb-2 text-center">
        {product.name}
      </h3>
      <p className="font-sans text-sm text-[#2D004B]/70 tracking-wide text-center mb-6">
        {product.price}
      </p>

      <div className="flex justify-center gap-4 mb-6">
        <button
          type="button"
          onClick={() => setSelectedSize("8ML")}
          className={`w-12 h-12 rounded-full flex items-center justify-center font-sans text-[10px] font-bold tracking-wider transition-colors ${
            selectedSize === "8ML"
              ? "bg-[#2D004B] text-[#D4AF37]"
              : "bg-transparent border border-[#2D004B]/20 text-[#2D004B] hover:border-[#D4AF37]"
          }`}
        >
          8ML
        </button>
        <button
          type="button"
          onClick={() => setSelectedSize("50ML")}
          className={`w-12 h-12 rounded-full flex items-center justify-center font-sans text-[10px] font-bold tracking-wider transition-colors ${
            selectedSize === "50ML"
              ? "bg-[#2D004B] text-[#D4AF37]"
              : "bg-transparent border border-[#2D004B]/20 text-[#2D004B] hover:border-[#D4AF37]"
          }`}
        >
          50ML
        </button>
      </div>

      <button
        type="button"
        className="w-full bg-[#2D004B] hover:bg-[#3d0863] text-white py-4 font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2 mt-auto"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Bag
      </button>
    </div>
  );
}
