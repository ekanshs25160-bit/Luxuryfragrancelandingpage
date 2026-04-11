import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CategoryBanners } from "../components/CategoryBanners";
import { HighlightReel } from "../components/HighlightReel";
import { ProductGrid } from "../components/ProductGrid";
import { Gallery } from "../components/Gallery";
import { FAB } from "../components/FAB";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-light font-sans selection:bg-brand selection:text-accent scroll-smooth">
      <Header />
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-28">
        <Hero />
        <ProductGrid />
        <CategoryBanners />
        <Gallery />
        <HighlightReel />
        <Footer />
      </div>
      <FAB />
    </main>
  );
}
