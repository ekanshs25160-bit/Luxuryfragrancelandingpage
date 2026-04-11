import { motion } from "motion/react";
import { Beaker, FlaskConical, Wind } from "lucide-react";

const DATA = [
  {
    title: "Oud Noir Exclusif",
    longevity: 95,
    sillage: 88,
    concentration: "30% Extrait de Parfum",
  },
  {
    title: "Silk Santal",
    longevity: 75,
    sillage: 60,
    concentration: "20% Eau de Parfum",
  },
  {
    title: "Vetiver Smoke",
    longevity: 85,
    sillage: 80,
    concentration: "25% Parfum Intense",
  },
];

export function PerformanceMatrix() {
  return (
    <section className="py-32 px-6 md:px-16 bg-brand-secondary text-brand border-t border-b border-light">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/3 text-center lg:text-left">
          <Beaker className="w-12 h-12 text-accent mb-6 mx-auto lg:mx-0" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-[0.05em] font-medium">
            The Layering Lab
          </h2>
          <p className="font-sans text-dark leading-relaxed mb-8 tracking-wide">
            Our extraits are formulated with a minimum 25% oil concentration. We engineer each scent profile for maximum longevity and sillage, designed specifically to perform under diverse climates. Uncompromising endurance.
          </p>
          <button className="uppercase tracking-widest text-brand font-sans text-sm font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            Discover Our Process
          </button>
        </div>

        <div className="lg:w-2/3 w-full bg-light p-8 md:p-12 shadow-xl rounded-sm border border-brand/10">
          <h3 className="uppercase text-xs font-sans tracking-[0.2em] font-bold text-secondary mb-10 text-center">
            Performance Architecture Matrix
          </h3>

          <div className="space-y-12">
            {DATA.map((item, i) => (
              <div key={item.title} className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="md:w-1/3 text-center md:text-right w-full">
                  <h4 className="font-serif text-xl text-brand font-medium tracking-wide">
                    {item.title}
                  </h4>
                  <p className="font-sans text-accent text-[10px] uppercase tracking-widest mt-1">
                    {item.concentration}
                  </p>
                </div>
                
                <div className="flex-1 w-full space-y-4">
                  {/* Longevity Bar */}
                  <div className="w-full">
                    <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest text-secondary mb-1 font-bold">
                      <span className="flex items-center gap-1"><FlaskConical className="w-3 h-3" /> Longevity</span>
                      <span>{item.longevity}%</span>
                    </div>
                    <div className="w-full h-1 bg-light rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-brand"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.longevity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>

                  {/* Sillage Bar */}
                  <div className="w-full">
                    <div className="flex justify-between text-[10px] font-sans uppercase tracking-widest text-secondary mb-1 font-bold">
                      <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> Sillage / Projection</span>
                      <span>{item.sillage}%</span>
                    </div>
                    <div className="w-full h-1 bg-light rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.sillage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2 + 0.5, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
