import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Decorative hero visual for /contact. Single asset, no overlays.
 */
export function ContactHeroVisual() {
  return (
    <div
      className={cn(
        "relative w-full max-w-[min(100%,34rem)] select-none",
        "rounded-2xl border border-border/80 bg-[#141c24]",
        "shadow-[var(--shadow-hero-panel)] ring-1 ring-white/[0.06]",
        "overflow-hidden",
      )}
      aria-hidden
    >
      <Image
        src="/images/contact-hero.png"
        alt=""
        width={1024}
        height={682}
        className="h-auto w-full object-contain object-center"
        sizes="(min-width: 1024px) 34rem, 100vw"
        priority
      />
    </div>
  );
}
