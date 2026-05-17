"use client";

import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

import { cn } from "@/lib/utils";

type FallbackProps = Readonly<{
  title: string;
  badge: string;
  chips: readonly string[];
  /** card strip | modal | service band mini */
  density?: "card" | "modal" | "band";
}>;

/** Rare fallback when no dashboard asset is mapped — no logo tile; neutral premium panel. */
export function SoftwareModuleFallbackVisual({
  title,
  badge,
  chips,
  density = "card",
}: FallbackProps) {
  const chipSlice = chips.slice(0, 3);
  const isModal = density === "modal";
  const isBand = density === "band";

  return (
    <div
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.09] via-sky-50/50 to-slate-100/90 p-4 shadow-[0_12px_36px_-24px_rgba(8,145,178,0.35),inset_0_1px_0_0_rgba(255,255,255,0.88)] ring-1 ring-inset ring-accent/10",
        isModal ? "min-h-[min(42vh,22rem)] p-5 sm:min-h-[24rem]" : isBand ? "min-h-[11.5rem] p-4 sm:min-h-[12.5rem]" : "min-h-[12.5rem] sm:min-h-[14rem]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_0%,rgba(8,145,178,0.22),transparent_55%),radial-gradient(ellipse_at_96%_92%,rgba(15,23,42,0.07),transparent_48%)]"
        aria-hidden
      />
      <div className="relative flex min-h-0 flex-1 flex-col items-center text-center">
        <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
          {badge}
        </p>
        <div className="mt-4 flex flex-1 items-center justify-center py-2" aria-hidden>
          <LayoutDashboard
            className={cn(
              "text-accent/45",
              isModal ? "h-16 w-16" : isBand ? "h-12 w-12" : "h-14 w-14",
            )}
            strokeWidth={1.15}
          />
        </div>
        <p
          className={cn(
            "mt-2 max-w-[min(100%,22rem)] text-pretty text-sm font-semibold leading-snug tracking-tight text-primary sm:text-[0.95rem]",
            isModal && "max-w-[min(100%,26rem)] sm:text-base",
          )}
        >
          {title}
        </p>
        {chipSlice.length > 0 ? (
          <ul className="mt-3 flex max-w-[24rem] flex-wrap justify-center gap-1.5">
            {chipSlice.map((c) => (
              <li
                key={c}
                className="inline-flex rounded-full border border-accent/25 bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-tight text-foreground/90 shadow-[0_1px_2px_rgba(8,145,178,0.08)]"
              >
                {c}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

type PanelProps = Readonly<{
  imageSrc: string | null;
  imageAlt: string;
  fallbackTitle: string;
  previewBadge: string;
  fallbackChips: readonly string[];
  density?: "card" | "modal" | "band";
}>;

export function SoftwareModulePreviewPanel({
  imageSrc,
  imageAlt,
  fallbackTitle,
  previewBadge,
  fallbackChips,
  density = "card",
}: PanelProps) {
  const isModal = density === "modal";
  const isBand = density === "band";

  const frameMin = isModal
    ? "min-h-[min(42vh,22rem)] sm:min-h-[24rem]"
    : isBand
      ? "min-h-[12rem] sm:min-h-[13.5rem]"
      : "min-h-[13.5rem] sm:min-h-[15rem] lg:min-h-[17.5rem]";

  const imageMax = isModal
    ? "max-h-[min(72vh,28rem)] sm:max-h-[min(68vh,30rem)]"
    : isBand
      ? "max-h-[18rem] sm:max-h-[20rem] lg:max-h-[22rem]"
      : "max-h-[min(58vw,23rem)] sm:max-h-[min(48vw,25rem)] lg:max-h-[30rem]";

  return (
    <div className="relative w-full shrink-0">
      <div className="rounded-3xl border border-accent/15 bg-gradient-to-b from-accent/[0.04] via-white to-slate-50/80 p-1 shadow-[0_22px_56px_-40px_rgba(8,145,178,0.28)] ring-1 ring-inset ring-accent/10 sm:p-1.5">
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-50/90 to-white px-1.5 py-2.5 sm:px-2 sm:py-3",
            frameMin,
          )}
        >
          {imageSrc ? (
            <div className="relative flex w-full flex-1 items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1920}
                height={1080}
                quality={92}
                priority={false}
                className={cn(
                  "h-auto w-full object-contain object-center",
                  imageMax,
                )}
                sizes={
                  isBand
                    ? "(max-width: 640px) 92vw, (max-width: 1024px) 40vw, 360px"
                    : isModal
                      ? "(max-width: 640px) calc(100vw - 2rem), min(896px, 90vw)"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                }
              />
            </div>
          ) : (
            <SoftwareModuleFallbackVisual
              title={fallbackTitle}
              badge={previewBadge}
              chips={fallbackChips}
              density={density}
            />
          )}
        </div>
      </div>
    </div>
  );
}
