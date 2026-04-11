import { motion } from "motion/react";
import { Star, MessageCircle, Heart, Briefcase } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Aarav Desai",
    handle: "@aarav_d",
    text: "Oud Noir is simply hypnotic. First spray is intense but the dry-down is pure royalty. People stop to ask what I'm wearing.",
    tag: "Compliment Getter",
    icon: <Heart className="w-4 h-4" />,
    product: "Oud Noir Exclusif",
    isVideo: true,
    thumbnail: "https://images.unsplash.com/photo-1761328559705-3addc2496c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBldmVuaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 2,
    name: "Priya Sharma",
    handle: "@priyaxstyle",
    text: "Silk Santal lasts over 10 hours on my skin. It’s elegant, non-intrusive, yet entirely memorable. Highly recommended for daily wear.",
    tag: "Office Friendly",
    icon: <Briefcase className="w-4 h-4" />,
    product: "Silk Santal",
    isVideo: false,
    thumbnail: "https://images.unsplash.com/photo-1647984356140-d6aab249b002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwcGVyZnVtZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    id: 3,
    name: "Vikram R.",
    handle: "@vikram_roys",
    text: "The projection on Vetiver Smoke is nuclear. I layered it with a fresh aquatic scent and it created a completely new aura. Beautiful.",
    tag: "Layering Master",
    icon: <MessageCircle className="w-4 h-4" />,
    product: "Vetiver Smoke",
    isVideo: false,
    thumbnail: "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZHMlMjBzbW9rZSUyMGZvcmVzdCUyMG91ZHxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export function SocialProof() {
  return (
    <section className="py-32 px-6 md:px-16 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.2em] text-[#D4AF37] font-sans text-xs font-bold mb-4">
            The Scent Verdict
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D004B] mb-8 tracking-[0.05em] font-medium">
            Subjective Reactions.<br/>Objective Performance.
          </h2>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              className="bg-white p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col justify-between group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
            >
              <div>
                {/* Emotional Context Tag */}
                <div className="inline-flex items-center gap-2 bg-[#F3E5F5] text-[#2D004B] text-[10px] font-sans uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm mb-8">
                  {review.icon} {review.tag}
                </div>

                <div className="flex text-[#D4AF37] mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-serif text-lg md:text-xl text-gray-800 leading-relaxed mb-10 tracking-wide">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full bg-gray-200 bg-cover bg-center border border-gray-200"
                  style={{ backgroundImage: `url('${review.thumbnail}')` }}
                />
                <div>
                  <h4 className="font-sans text-sm font-bold text-[#2D004B] uppercase tracking-wider">
                    {review.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">
                    {review.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
