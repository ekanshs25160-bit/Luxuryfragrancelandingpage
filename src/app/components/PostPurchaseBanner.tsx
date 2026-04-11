import { motion } from "motion/react";
import { Gift, ArrowRight } from "lucide-react";

export function PostPurchaseBanner() {
  return (
    <section className="bg-[#2D004B] text-white py-16 px-6 md:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Decorative radial gradients for luxury feel */}
      <div className="absolute top-[-50%] left-[-10%] w-[30%] h-[200%] bg-[#D4AF37]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-50%] right-[-10%] w-[30%] h-[200%] bg-[#FFFFFF]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 text-[#D4AF37]">
            <Gift className="w-5 h-5" />
            <p className="font-sans uppercase text-[10px] tracking-[0.2em] font-bold">
              The Post-Purchase Loyalty Loop
            </p>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl tracking-[0.05em] mb-4">
            Love your Discovery Sample?
          </h3>
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed tracking-wide max-w-lg mx-auto md:mx-0">
            Get 100% of your sample cost off your first full-size 50ml bottle. Valid for your next purchase.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-sm w-full md:w-auto text-center shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="font-sans text-[10px] text-white/50 uppercase tracking-[0.15em] mb-3">
            Your Unique Voucher Code
          </p>
          <div className="font-serif text-3xl text-[#D4AF37] tracking-[0.15em] mb-6 select-all cursor-pointer">
            AROM-DISC-100
          </div>
          <button className="w-full bg-[#D4AF37] hover:bg-white text-[#2D004B] py-4 px-8 font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
            Redeem Full Size
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
