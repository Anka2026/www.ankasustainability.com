/**
 * Home hero visual: Executive Sustainability Dashboard.
 * Decorative only — no user-facing copy, aria-hidden.
 */
import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="relative w-full max-w-3xl select-none md:max-w-4xl lg:max-w-none"
      aria-hidden
    >
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_40px_90px_-52px_rgba(15,23,42,0.55),0_0_0_1px_rgba(8,145,178,0.08)] ring-1 ring-inset ring-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(8,145,178,0.14),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(255,255,255,0.08),transparent_60%)]" />
        <Image
          src="/images/home-hero-dashboard.png"
          alt=""
          width={1536}
          height={864}
          priority
          className="h-auto w-full max-h-[min(48vh,380px)] object-contain object-center sm:max-h-[min(46vh,400px)] md:max-h-[min(48vh,440px)] lg:max-h-[min(56vh,520px)] xl:max-h-[min(54vh,560px)] 2xl:max-h-[min(52vh,600px)]"
        />
      </div>

      {/* Grounding line — international / structured */}
      <div className="pointer-events-none absolute -bottom-3 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
