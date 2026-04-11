import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FAB() {
  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 bg-accent hover:bg-dark text-light shadow-2xl rounded-full px-5 py-4 flex items-center justify-center gap-3 font-sans text-xs uppercase font-bold tracking-widest transition-all hover:scale-105"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden md:inline">Speak with a Scent Expert</span>
    </motion.button>
  );
}
