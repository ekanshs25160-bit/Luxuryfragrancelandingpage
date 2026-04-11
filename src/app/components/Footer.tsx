import { FormEvent, useState } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const footerBg = "var(--color-brand-dark)";
const inputBg = "var(--color-brand-secondary)";

const linkClass =
  "block text-sm text-light/90 hover:text-accent transition-colors py-1";

export function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    setEmail("");
  }

  return (
    <footer
      id="contact"
      style={{ backgroundColor: footerBg }}
      className="text-light scroll-mt-24 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14">
          <div className="sm:col-span-2 lg:col-span-3 flex justify-center lg:justify-start">
            <div
              className="relative w-36 h-36 md:w-40 md:h-40 shrink-0 rounded-full flex items-center justify-center border-2 border-accent bg-dark shadow-[inset_0_0_48px_rgba(122,46,77,0.06)]"
              aria-hidden
            >
              <div className="absolute inset-2 rounded-full border border-accent/35" />
              <div className="relative z-10 text-center px-4">
                <p className="font-serif text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-accent mb-1">
                  A Regal Lab
                </p>
                <p className="font-serif text-xl md:text-2xl font-semibold tracking-[0.2em] text-accent leading-tight">
                  AROMARAS
                </p>
              </div>
            </div>
          </div>

          <nav className="lg:col-span-2" aria-label="Get in touch">
            <h3 className="text-[15px] font-semibold text-light mb-5 tracking-wide">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className={linkClass}>
                  Our story
                </a>
              </li>
              <li>
                <a href="/#contact" className={linkClass}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className={linkClass}>
                  Find Us Nearby
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <nav aria-label="Policies">
              <h3 className="text-[15px] font-semibold text-white mb-5 tracking-wide">
                Our Policies
              </h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <a href="#" className={linkClass}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className={linkClass}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2.5 border border-accent text-accent hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="p-2.5 border border-accent text-accent hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="p-2.5 border border-accent text-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="text-[15px] font-semibold text-light mb-4 tracking-wide">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-light/80 leading-relaxed mb-6 max-w-md">
              subscribe to get notified about product launches, special offers and company news.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-md">
              <label htmlFor="footer-email" className="sr-only">
                Your Email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: inputBg }}
                className="w-full px-4 py-3.5 text-sm text-light placeholder:text-light/45 border border-light/25 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 bg-accent text-light text-xs font-bold uppercase tracking-[0.2em] hover:bg-dark transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-light/10 py-6 md:py-8 px-6">
        <p className="text-center text-[11px] md:text-xs uppercase tracking-[0.12em] text-light/85">
          COPYRIGHT © {new Date().getFullYear()}, Aromaras Fragrances Private Limited
        </p>
      </div>
    </footer>
  );
}
