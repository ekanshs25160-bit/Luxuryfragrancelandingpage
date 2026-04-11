import { motion } from "motion/react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Aarav Desai",
    image: "https://images.unsplash.com/photo-1761328559705-3addc2496c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBldmVuaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=400",
    review: "Oud Noir Exclusif is simply hypnotic. The dry-down is pure royalty. People stop to ask what I'm wearing.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1647984356140-d6aab249b002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwcGVyZnVtZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=400",
    review: "Silk Santal lasts over 10 hours on my skin. It's elegant, non-intrusive, yet entirely memorable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram R.",
    image: "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZHMlMjBzbW9rZSUyMGZvcmVzdCUyMG91ZHxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=400",
    review: "The projection on Vetiver Smoke is incredible. I layered it and it created a completely new aura.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ishita Patel",
    image: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU5MjkxMTR8MA&ixlib=rb-4.1.0&q=80&w=400",
    review: "Finally a fragrance that doesn't fade. Aromaras understands luxury. Worth every penny.",
    rating: 5,
  },
  {
    id: 5,
    name: "Rohan Kumar",
    image: "https://images.unsplash.com/photo-1761078739411-2ccb6e956c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcmVkJTIwdmVsdmV0JTIwc2lsayUyBmx1eHVyeXxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=400",
    review: "The attention to detail in their formulation is remarkable. This is prestige fragrance done right.",
    rating: 5,
  },
  {
    id: 6,
    name: "Anaya Singh",
    image: "https://images.unsplash.com/photo-1690893631932-2ad83b51afcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMGxpbmVuJTIwc3VubGlnaHQlMjBicmlnaHQlMjBuYXR1cmV8ZW58MXx8fHwxNzc1OTI3MjIzfDA&ixlib=rb-4.1.0&q=80&w=400",
    review: "A fragrance that truly reflects sophistication. Every time I wear it, I feel elevated.",
    rating: 5,
  },
];

export function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const extendedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-32 px-6 md:px-16 bg-light scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-brand mb-6 tracking-[0.05em] font-medium">
            What Our Clients Say
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Scrolling Container */}
          <style>{`
            @keyframes scroll-testimonials {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .testimonials-carousel {
              display: flex;
              animation: scroll-testimonials 40s linear infinite;
              width: 200%;
            }

            .testimonials-carousel:hover {
              animation-play-state: paused;
            }

            .testimonial-card {
              flex: 0 0 calc(100% / 6);
              min-width: 280px;
            }

            @media (max-width: 768px) {
              .testimonial-card {
                flex: 0 0 calc(100% / 3);
                min-width: 200px;
              }

              .testimonials-carousel {
                animation: scroll-testimonials 30s linear infinite;
              }
            }
          `}</style>

          <div className="testimonials-carousel">
            {extendedTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-card px-4">
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 hover:scale-105 transform"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Review Text */}
                  <p className="text-dark text-sm md:text-base leading-relaxed mb-6 font-sans min-h-[80px]">
                    "{testimonial.review}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 border-t border-light pt-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-brand font-semibold tracking-wide">
                        {testimonial.name}
                      </h4>
                      <p className="text-secondary text-xs uppercase tracking-[0.1em] font-medium">
                        Verified Client
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-dark/70 font-sans text-sm tracking-wide mb-6">
            Join hundreds of satisfied fragrance connoisseurs
          </p>
          <button className="px-10 py-4 bg-brand text-light hover:bg-dark font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm hover:-translate-y-1">
            Share Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}
