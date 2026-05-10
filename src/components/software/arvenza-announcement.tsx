import Image from "next/image";

import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type TranslatorLike = IntlTranslator & ((key: string, values?: Record<string, string>) => string);

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ArvenzaAnnouncement({ t }: Props) {
  const tt = t as TranslatorLike;

  return (
    <div
      id="arvenza-announcement"
      className={cn(
        "mt-10 scroll-mt-24 sm:mt-12",
        "rounded-3xl border border-border/55 bg-gradient-to-br from-white via-surface to-[var(--accent-soft)]/[0.12]",
        "p-6 shadow-[0_28px_90px_-52px_rgba(15,23,42,0.42),0_0_0_1px_rgba(8,145,178,0.06)] sm:p-8 lg:p-10",
        "ring-1 ring-inset ring-primary/[0.05]",
      )}
      role="region"
      aria-labelledby="arvenza-announcement-title"
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.41fr)_minmax(0,0.59fr)] lg:items-center lg:gap-10 xl:gap-12",
        )}
      >
        <div className="flex w-full min-w-0 justify-center lg:justify-start">
          <Image
            src="/branding/arvenza-logo.png"
            alt={tt("arvenzaAnnouncement.logoAlt")}
            width={1040}
            height={468}
            quality={100}
            priority
            className={cn(
              "h-auto w-full object-contain",
              "max-w-[300px] sm:max-w-[min(100%,340px)]",
              "lg:max-w-[460px] xl:max-w-[520px]",
              "rounded-[28px]",
              "drop-shadow-[0_22px_56px_rgba(15,23,42,0.14),0_8px_24px_rgba(8,145,178,0.08)]",
            )}
            sizes="(max-width: 1024px) 300px, (max-width: 1280px) 460px, 520px"
          />
        </div>

        <div className="min-w-0 space-y-3 sm:space-y-3.5 lg:space-y-4 lg:py-1">
          <h3
            id="arvenza-announcement-title"
            className="text-balance text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl"
          >
            {tt("arvenzaAnnouncement.title")}
          </h3>

          <p className="max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.66]">
            {tt("arvenzaAnnouncement.description")}
          </p>

          <p className="max-w-3xl text-pretty text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.62]">
            {tt("arvenzaAnnouncement.secondDescription")}
          </p>

          <p
            className={cn(
              "max-w-3xl border-l-2 border-accent/40 pl-4 text-xs font-semibold leading-relaxed tracking-[0.02em]",
              "text-primary/95 sm:text-[0.8125rem] sm:leading-[1.58]",
            )}
          >
            {tt("arvenzaAnnouncement.footnote")}
          </p>

          <p className="pt-0.5 text-[0.6875rem] font-medium tracking-[0.04em] text-muted-foreground sm:text-xs">
            {tt("arvenzaAnnouncement.attribution")}
          </p>
        </div>
      </div>
    </div>
  );
}
