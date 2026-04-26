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
        "rounded-[1.9rem] border border-slate-200/90 bg-gradient-to-b from-white via-white to-slate-50/90",
        "shadow-[0_32px_88px_-48px_rgba(15,23,42,0.52),0_0_0_1px_rgba(8,145,178,0.1),inset_0_1px_0_0_rgba(255,255,255,0.92)]",
        "ring-1 ring-inset ring-slate-900/[0.04]",
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
