import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Decorative hero visual for /insights (Kaynaklar). Single asset, no overlays.
 */
export function InsightsHeroVisual() {
  return (
    <div
      className={cn(
        "relative w-full max-w-[min(100%,36rem)] select-none",
        "rounded-2xl border border-border/80 bg-[#141c24]",
        "shadow-[var(--shadow-hero-panel)] ring-1 ring-white/[0.06]",
        "overflow-hidden",
      )}
      aria-hidden
    >
      <Image
        src="/images/insights-hero.png"
        alt=""
        width={1024}
        height={682}
        className="h-auto w-full object-contain object-center"
        sizes="(min-width: 1024px) 36rem, 100vw"
        priority
      />
    </div>
  );
}
