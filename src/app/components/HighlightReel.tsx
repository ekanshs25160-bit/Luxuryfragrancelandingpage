import { useRef } from "react";
import { motion } from "motion/react";
import { useVideoPlayWhenVisible } from "../hooks/useVideoPlayWhenVisible";

export type HighlightReelItem = {
  id: string;
  src: string;
  shopHref?: string;
};

/** Public sample clip for dev; swap for your own 9:16 brand assets in `/public/videos/`. */
const SAMPLE_MP4 = "https://www.w3schools.com/html/mov_bbb.mp4";

const DEFAULT_REELS: HighlightReelItem[] = [
  { id: "1", src: SAMPLE_MP4, shopHref: "#collection" },
  { id: "2", src: SAMPLE_MP4, shopHref: "#collection" },
  { id: "3", src: SAMPLE_MP4, shopHref: "#collection" },
  { id: "4", src: SAMPLE_MP4, shopHref: "#collection" },
  { id: "5", src: SAMPLE_MP4, shopHref: "#collection" },
];

const cardShadow =
  "shadow-[0_16px_48px_-12px_rgba(45,0,75,0.22),0_4px_16px_-4px_rgba(45,0,75,0.12)]";

function ReelCard({ item }: { item: HighlightReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoPlayWhenVisible(videoRef, { minVisibleRatio: 0.8 });

  return (
    <div
      className={`relative shrink-0 w-[min(72vw,280px)] sm:w-[300px] md:w-[320px] snap-start snap-always rounded-sm overflow-hidden bg-[var(--color-brand-dark)]/5 ${cardShadow}`}
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={item.src}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-brand-dark)]/35 via-transparent to-transparent" />

        <div className="absolute bottom-4 right-4 pointer-events-auto">
          <a
            href={item.shopHref ?? "#collection"}
            className="inline-flex items-center justify-center px-4 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] border border-accent text-accent bg-transparent hover:bg-accent hover:text-brand transition-colors duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}

type HighlightReelProps = {
  items?: HighlightReelItem[];
};

export function HighlightReel({ items = DEFAULT_REELS }: HighlightReelProps) {
  return (
    <section className="bg-light py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 md:mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-brand/80 mb-4">
            THE FRAGRANCE IN REAL LIFE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-brand font-semibold tracking-[0.06em]">
            Moments in Motion
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full"
      >
        <div
          className="
            flex gap-5 md:gap-6 overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            scroll-smooth
            pl-6 md:pl-16 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]
            pr-6 md:pr-16 lg:pr-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]
            pb-2
            [scrollbar-width:none] [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {items.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
