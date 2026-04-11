import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CategoryBanners } from "../components/CategoryBanners";
import { ProductGrid } from "../components/ProductGrid";
import { PostPurchaseBanner } from "../components/PostPurchaseBanner";
import { FAB } from "../components/FAB";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-[#2D004B] selection:text-[#D4AF37] scroll-smooth">
      <Header />
      <Hero />
      <ProductGrid />
      <CategoryBanners />
      <PostPurchaseBanner />
      <FAB />

      <footer className="bg-[#1A002A] text-white py-16 px-10 md:px-24 text-center border-t border-white/5">
        <p className="font-serif text-3xl mb-4 tracking-[0.15em] font-medium">AROMARAS</p>
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/50 mb-10">
          A Regal Lab Identity
        </p>
        <div className="flex justify-center gap-10 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#D4AF37] mb-10 flex-wrap">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Journal</a>
          <a href="#" className="hover:text-white transition-colors">Retail Locations</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="font-sans text-[10px] uppercase tracking-widest text-white/30">
          © {new Date().getFullYear()} Aromaras. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
