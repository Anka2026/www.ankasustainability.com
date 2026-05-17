import { Briefcase, Calendar, Globe, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { goldMicroHairlineClassName } from "@/lib/brand-gold-accent";
import { cn } from "@/lib/utils";

export type FounderTrustItem = Readonly<{
  headline: string;
}>;

const TRUST_ICONS: readonly LucideIcon[] = [Calendar, Globe, Layers, Briefcase];

function TrustCell({ headline, icon: Icon }: FounderTrustItem & { icon: LucideIcon }) {
  return (
    <div
      className={cn(
        "flex min-h-[7.25rem] flex-col justify-between rounded-xl border border-border/70 bg-background px-4 py-4 sm:min-h-[7.5rem] sm:px-5 sm:py-5",
        "shadow-[0_14px_36px_-26px_rgba(15,23,42,0.16)] ring-1 ring-inset ring-primary/[0.04]",
      )}
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.1] text-accent"
        aria-hidden
      >
        <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.85} />
      </span>
      <p className="mt-3 text-pretty text-sm font-semibold leading-snug tracking-tight text-primary sm:text-[0.9375rem] sm:leading-[1.45]">
        {headline}
      </p>
    </div>
  );
}

type Props = Readonly<{
  items: readonly FounderTrustItem[];
  className?: string;
}>;

export function AboutFounderStatsBand({ items, className }: Props) {
  if (items.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn("absolute inset-x-0 top-0 z-[1] max-w-[12rem]", goldMicroHairlineClassName())}
        aria-hidden
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
        {items.slice(0, 4).map((item, index) => (
          <TrustCell
            key={item.headline}
            {...item}
            icon={TRUST_ICONS[index] ?? Briefcase}
          />
        ))}
      </div>
    </div>
  );
}
