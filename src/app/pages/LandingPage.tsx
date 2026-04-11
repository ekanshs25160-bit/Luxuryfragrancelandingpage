import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CategoryBanners } from "../components/CategoryBanners";
import { HighlightReel } from "../components/HighlightReel";
import { ProductGrid } from "../components/ProductGrid";
import { FAB } from "../components/FAB";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-[#2D004B] selection:text-[#D4AF37] scroll-smooth">
      <Header />
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-28">
        <Hero />
        <ProductGrid />
        <CategoryBanners />
        <HighlightReel />
        <Footer />
      </div>
      <FAB />
    </main>
  );
}
