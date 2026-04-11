import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Search, User, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Threshold for changing to solid background
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // According to the prompt, text should be white when navbar is solid (#2D004B) 
  // or over the dark hero video. In both cases, text remains white.
  // The structure is Left-Aligned Links, Centered Logo, Right-Aligned Utility.

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-8 md:px-16 py-5 transition-all duration-500",
        isScrolled ? "bg-[#2D004B] shadow-2xl" : "bg-gradient-to-b from-black/60 to-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Left - Navigation Links */}
      <nav className="flex-1 hidden lg:flex items-center gap-6 xl:gap-8 text-[10px] xl:text-[11px] font-sans font-semibold uppercase tracking-[0.1em] text-white">
        <Link to="/" className="hover:text-[#D4AF37] transition-colors hover:scale-105 transform origin-left">
          Home
        </Link>
        <Link to="/#about" className="hover:text-[#D4AF37] transition-colors hover:scale-105 transform origin-left">
          About Us
        </Link>
        <Link to="/#collection" className="hover:text-[#D4AF37] transition-colors hover:scale-105 transform origin-left">
          Collection
        </Link>
        <Link to="/#blogs" className="hover:text-[#D4AF37] transition-colors hover:scale-105 transform origin-left">
          Blogs
        </Link>
        <Link to="/#contact" className="hover:text-[#D4AF37] transition-colors hover:scale-105 transform origin-left">
          Contact Us
        </Link>
      </nav>

      {/* Center - Brand Logo */}
      <div className="flex-1 flex justify-center">
        <Link to="/">
          <h1 className="font-serif text-3xl md:text-4xl text-white tracking-[0.15em] font-bold">
            AROMARAS
          </h1>
        </Link>
      </div>

      {/* Right - Utilities */}
      <div className="flex-1 flex items-center justify-end gap-7 text-white">
        <button className="hover:text-[#D4AF37] transition-colors hover:scale-110 transform">
          <Search className="w-5 h-5 stroke-[1.5]" />
        </button>
        <button className="hover:text-[#D4AF37] transition-colors hover:scale-110 transform hidden sm:block">
          <User className="w-5 h-5 stroke-[1.5]" />
        </button>
        <button className="hover:text-[#D4AF37] transition-colors relative hover:scale-110 transform">
          <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
          <span className="absolute top-[2px] right-[-2px] w-2 h-2 bg-[#D4AF37] rounded-full ring-2 ring-transparent" />
        </button>
      </div>
    </motion.header>
  );
}
