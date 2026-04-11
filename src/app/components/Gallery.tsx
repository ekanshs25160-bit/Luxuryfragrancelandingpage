import { motion } from "motion/react";

const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1705899853374-d91c048b81d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzU5MjkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Elegance",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NTkyOTExNHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1761328559705-3addc2496c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBpbiUyMHN1aXQlMjBldmVuaW5nJTIwbHV4dXJ5fGVufDF8fHx8MTc3NTkyNzIyNHww&ixlib=rb-4.1.0&q=80&w=800",
    title: "Sophistication",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1647984356140-d6aab249b002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFwcGx5aW5nJTIwcGVyZnVtZSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzU5MjcyMjR8MA&ixlib=rb-4.1.0&q=80&w=800",
    title: "Grace",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1765954079511-572f7c0072d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwZXJmdW1lJTIwbHV4dXJ5JTIwbW9kZWx8ZW58MXx8fHwxNzc1OTI5MTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Heritage",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1642698215110-87817f1fbe0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwd29vZHMlMjBzbW9rZSUyMGZvcmVzdCUyMG91ZHxlbnwxfHx8fDE3NzU5MjcyMjN8MA&ixlib=rb-4.1.0&q=80&w=1200",
    title: "Mystique",
    span: "col-span-1 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6 md:px-16 bg-light scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.2em] text-accent font-sans text-xs font-bold mb-4">
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand mb-8 tracking-[0.05em] font-medium">
            Gallery of Moments
          </h2>
          <div className="w-16 h-px bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative group overflow-hidden rounded-sm shadow-lg ${image.span}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-6">
                <div>
                  <h3 className="font-serif text-2xl text-light font-medium tracking-wide">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
