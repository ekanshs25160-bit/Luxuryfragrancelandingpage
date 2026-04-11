import { ProductCard, type Product } from "./ProductCard";

const PRODUCTS: Product[] = [
  {
    id: "oud-noir",
    title: "Oud Noir Exclusif",
    notes: "Oud | Saffron | Dark Rose",
    images: {
      default: "https://images.unsplash.com/photo-1773527142309-80df44147512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2xhc3MlMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=800",
      hover: "https://images.unsplash.com/photo-1761328559705-3addc2496c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBldmVuaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=800",
    },
    prices: { "8ML": 2499, "50ML": 12999 },
    longevity: "12+ Hrs",
    occasion: "Night",
  },
  {
    id: "silk-santal",
    title: "Silk Santal",
    notes: "Sandalwood | Vanilla | Iris",
    images: {
      default: "https://images.unsplash.com/photo-1773527142309-80df44147512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZ2xhc3MlMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=800",
      hover: "https://images.unsplash.com/photo-1647984356140-d6aab249b002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwcGVyZnVtZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=800",
    },
    prices: { "8ML": 1999, "50ML": 9999 },
    longevity: "8+ Hrs",
    occasion: "Versatile",
  }
];

export function ProductShowcase() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <p className="uppercase tracking-[0.2em] text-[#D4AF37] font-sans text-xs font-bold mb-4">
            The Master Collection
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#2D004B] mb-8 tracking-[0.05em] font-medium">
            Curated Signatures
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
