import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Moon, Sun, ShoppingBag } from "lucide-react";

export type Product = {
  id: string;
  title: string;
  notes: string;
  images: { default: string; hover: string };
  prices: { "8ML": number; "50ML": number };
  longevity: string;
  occasion: "Day" | "Night" | "Versatile";
};

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"8ML" | "50ML">("50ML");

  return (
    <div 
      className="flex flex-col w-full font-sans max-w-[400px] mx-auto group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Aspect Ratio: 4:5 */}
      <div className="relative w-full aspect-[4/5] bg-[#F3E5F5] overflow-hidden mb-6">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.img
              key="default"
              src={product.images.default}
              alt={`${product.title} Bottle`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          ) : (
            <motion.img
              key="hover"
              src={product.images.hover}
              alt={`${product.title} Lifestyle`}
              className="absolute inset-0 w-full h-full object-cover scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </AnimatePresence>

        {/* Hover Action Layer */}
        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full py-4 border border-white text-white uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-[#2D004B] transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add to Bag - ₹{product.prices[selectedSize]}
          </button>
        </div>

        {/* Trust Icons Layer */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-white/90 backdrop-blur text-[#2D004B] rounded-full px-3 py-1 flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider shadow-sm" title={`Longevity: ${product.longevity}`}>
            <Clock className="w-3 h-3 text-[#D4AF37]" /> {product.longevity}
          </div>
          <div className="bg-white/90 backdrop-blur text-[#2D004B] rounded-full px-3 py-1 flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider shadow-sm" title={`Occasion: ${product.occasion}`}>
            {product.occasion === "Night" ? <Moon className="w-3 h-3 text-[#D4AF37]" /> : <Sun className="w-3 h-3 text-[#D4AF37]" />}
            {product.occasion}
          </div>
        </div>
      </div>

      {/* Info Layer */}
      <div className="text-center flex flex-col items-center">
        <h3 className="font-serif text-2xl text-[#2D004B] mb-1 tracking-[0.05em] font-medium">
          {product.title}
        </h3>
        <p className="text-gray-500 uppercase text-xs tracking-[0.2em] font-medium mb-5">
          {product.notes}
        </p>

        {/* Variant Toggle Pills */}
        <div className="flex gap-2 bg-[#F3E5F5]/50 p-1 rounded-full border border-gray-100 mb-3">
          {(["8ML", "50ML"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedSize === size
                  ? "bg-[#2D004B] text-white shadow-md"
                  : "bg-transparent text-gray-500 hover:text-[#2D004B]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        
        <p className="text-[#D4AF37] font-sans font-semibold text-lg tracking-wide">
          ₹{product.prices[selectedSize].toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}
