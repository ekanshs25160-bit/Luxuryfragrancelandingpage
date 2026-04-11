import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, ShoppingBag } from "lucide-react";

export type Product = {
  id: string;
  title: string;
  notes: string;
  images: { default: string; hover: string };
  prices: { "8ML": number; "50ML": number };
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
      <div className="relative w-full aspect-[4/5] bg-brand-secondary overflow-hidden mb-6">
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

        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end bg-gradient-to-t from-[var(--color-brand-dark)]/80 via-[var(--color-brand-dark)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full py-4 border border-light text-light uppercase tracking-widest text-sm font-semibold hover:bg-light hover:text-brand transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add to Bag - ₹{product.prices[selectedSize]}
          </button>
        </div>

        {/* Trust Icons Layer */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="bg-light/90 backdrop-blur text-brand rounded-full px-3 py-1 flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider shadow-sm" title={`Occasion: ${product.occasion}`}>
            {product.occasion === "Night" ? <Moon className="w-3 h-3 text-accent" /> : <Sun className="w-3 h-3 text-accent" />}
            {product.occasion}
          </div>
        </div>
      </div>

      {/* Info Layer */}
      <div className="text-center flex flex-col items-center">
        <h3 className="font-serif text-2xl text-brand mb-1 tracking-[0.05em] font-medium">
          {product.title}
        </h3>
        <p className="text-secondary uppercase text-xs tracking-[0.2em] font-medium mb-5">
          {product.notes}
        </p>

        <div className="flex gap-2 bg-brand-secondary/50 p-1 rounded-full border border-light mb-3">
          {(["8ML", "50ML"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                selectedSize === size
                  ? "bg-brand text-light shadow-md"
                  : "bg-transparent text-secondary hover:text-brand"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        
        <p className="text-accent font-sans font-semibold text-lg tracking-wide">
          ₹{product.prices[selectedSize].toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}
