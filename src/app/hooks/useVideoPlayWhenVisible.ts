import { type RefObject, useEffect } from "react";

/** Fine-grained thresholds so `intersectionRatio` updates reliably while scrolling. */
const RATIO_THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);

export type UseVideoPlayWhenVisibleOptions = {
  /** Play when visible portion exceeds this ratio (default 0.8 = 80%). */
  minVisibleRatio?: number;
};

/**
 * Plays a muted video when more than `minVisibleRatio` of it is visible in the viewport,
 * pauses otherwise. Intended for multiple reel cards, each with its own ref + hook instance.
 */
export function useVideoPlayWhenVisible(
  videoRef: RefObject<HTMLVideoElement | null>,
  options?: UseVideoPlayWhenVisibleOptions
) {
  const minVisibleRatio = options?.minVisibleRatio ?? 0.8;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.intersectionRatio > minVisibleRatio) {
          void video.play().catch(() => {
            /* autoplay may be blocked before user gesture; ignore */
          });
        } else {
          video.pause();
        }
      },
      { threshold: RATIO_THRESHOLDS }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [videoRef, minVisibleRatio]);
}
