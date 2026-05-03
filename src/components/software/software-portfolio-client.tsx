"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";
import Image from "next/image";
import * as React from "react";
import { X } from "lucide-react";

import { AppButton } from "@/components/ui/app-button";
import { AgriClimateProductScreenshot } from "@/components/software/agri-climate-product-screenshot";
import { CbamComplianceConsoleProductVisual } from "@/components/software/cbam-compliance-console-product-visual";
import { SoftwarePreviewPlaceholder } from "@/components/software/software-preview-placeholder";
import { homeCardClassName } from "@/lib/home-classes";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type SoftwareModalLabels = Readonly<{
  valueProposition: string;
  whatFor: string;
  teamValue: string;
  coreCapabilities: string;
}>;

export type SoftwarePortfolioProductDto = Readonly<{
  slug: string;
  pill: string;
  title: string;
  summary: string;
  bullets: readonly string[];
  screenshotSrc: string | null;
  screenshotAlt: string;
  demoMailHref: string;
  modalTagline: string;
  modalWhatFor: string;
  modalTeamValue: string;
  /** Optional per-product section headings in the solution modal */
  modalLabelsOverride?: Partial<SoftwareModalLabels>;
  /** Optional caption below the modal product visual */
  modalVisualCaption?: string;
}>;

type Props = Readonly<{
  products: readonly SoftwarePortfolioProductDto[];
  viewSolutionCta: string;
  requestDemoCta: string;
  modalClose: string;
  modalLabels: SoftwareModalLabels;
  defaultModalTagline: string;
  contactCta: string;
}>;

const ACCENT_CTA_BASE = cn(
  "border border-accent/50 bg-accent text-white shadow-[0_12px_32px_-18px_rgba(8,145,178,0.48)] transition-all duration-200",
  "hover:-translate-y-0.5 hover:border-accent/70 hover:bg-[#0a7e96] hover:shadow-[0_20px_44px_-20px_rgba(8,145,178,0.55)]",
  "active:translate-y-0",
);

const PRIMARY_CARD_CTA = cn(
  "w-full max-w-full justify-center text-center leading-snug whitespace-normal px-3 sm:px-4",
  ACCENT_CTA_BASE,
);

const OUTLINE_CARD_BASE = cn(
  "border border-slate-300/90 bg-white/90 text-foreground transition-all duration-200",
  "hover:border-accent/45 hover:bg-[rgba(8,145,178,0.07)] hover:text-primary hover:shadow-sm",
);

const OUTLINE_CARD_CTA = cn(
  "w-full max-w-full justify-center text-center leading-snug whitespace-normal px-3 sm:px-4",
  OUTLINE_CARD_BASE,
);

/** Fixed-height (~200px) preview used on every software portfolio card for visual rhythm. */
function PortfolioCardPreviewStrip({ product }: { product: SoftwarePortfolioProductDto }) {
  return (
    <div className="relative h-[13rem] w-full shrink-0">
      <div className="flex h-full w-full flex-col rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm ring-1 ring-inset ring-slate-900/[0.03]">
        <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl bg-white">
          {product.screenshotSrc ? (
            <Image
              src={product.screenshotSrc}
              alt={product.screenshotAlt || product.title}
              fill
              className="object-contain object-center p-1"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            />
          ) : (
            <SoftwarePreviewPlaceholder variant="card" className="h-full min-h-0 w-full" />
          )}
        </div>
      </div>
    </div>
  );
}

export function SoftwarePortfolioClient({
  products,
  viewSolutionCta,
  requestDemoCta,
  modalClose,
  modalLabels,
  defaultModalTagline,
  contactCta,
}: Props) {
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);
  const active = openSlug ? products.find((p) => p.slug === openSlug) : null;
  const tagline = active?.modalTagline?.trim() || defaultModalTagline;
  const sectionLabels = active
    ? { ...modalLabels, ...active.modalLabelsOverride }
    : modalLabels;

  return (
    <>
      <div className="mt-10 sm:mt-12">
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.slug}
              className={cn(
                homeCardClassName(true),
                "flex h-full flex-col overflow-hidden bg-background transition-shadow duration-300",
                "hover:shadow-[0_28px_64px_-44px_rgba(15,23,42,0.28)]",
              )}
            >
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="shrink-0 px-6 pt-6 sm:px-7 sm:pt-7">
                  <PortfolioCardPreviewStrip product={p} />
                </div>
                <div className="flex min-h-0 flex-1 flex-col px-6 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-5">
                  <div className="shrink-0">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex max-w-[min(100%,18rem)] rounded-full border border-border/80 bg-[var(--section-tint)] px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-muted-foreground">
                        {p.pill}
                      </span>
                    </div>
                    <h3 className="mt-3 text-balance text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1.1rem]">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.58]">
                      {p.summary}
                    </p>
                  </div>
                  <ul className="mt-3 min-h-0 flex-1 space-y-2 border-t border-border/60 pt-3 text-sm leading-snug text-foreground/90">
                    {p.bullets.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/55"
                          aria-hidden
                        />
                        <span className="min-w-0 break-words">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto min-w-0 border-t border-border/60 pt-4 sm:pt-5">
                    <div className="grid min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                      <AppButton
                        type="button"
                        className={PRIMARY_CARD_CTA}
                        onClick={() => setOpenSlug(p.slug)}
                      >
                        {viewSolutionCta}
                      </AppButton>
                      <AppButton variant="outline" asChild className={OUTLINE_CARD_CTA}>
                        <a href={p.demoMailHref}>{requestDemoCta}</a>
                      </AppButton>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-[80] bg-primary/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogContent
            className={cn(
              "fixed left-1/2 top-1/2 z-[90] max-h-[min(92dvh,900px)] w-[min(calc(100vw-1.5rem),64rem)] max-w-[calc(100vw-1.5rem)] -translate-x-1/2 -translate-y-1/2",
              "overflow-x-hidden overflow-y-auto rounded-[1.75rem] border border-border/80 bg-background p-0 shadow-[0_40px_100px_-48px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-primary/[0.06]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            )}
          >
            {active ? (
              <div className="flex max-h-[min(92dvh,900px)] flex-col overflow-x-hidden overflow-y-auto">
                <div className="relative min-w-0 p-6 sm:p-7">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-surface text-muted-foreground transition-colors hover:border-accent/35 hover:bg-primary/[0.08] hover:text-foreground"
                      aria-label={modalClose}
                    >
                      <X className="h-4 w-4" aria-hidden />
                    </button>
                  </DialogClose>
                  <DialogTitle className="pr-10 text-left text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {active.title}
                  </DialogTitle>
                  <div className="mt-5 space-y-5">
                    <div>
                      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {sectionLabels.valueProposition}
                      </h3>
                      <p className="mt-2 text-pretty text-sm font-medium leading-relaxed text-foreground/95 sm:text-[0.9375rem] sm:leading-[1.6]">
                        {tagline}
                      </p>
                    </div>
                    {active.modalWhatFor ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {sectionLabels.whatFor}
                        </h3>
                        <DialogDescription className="mt-2 text-left text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.65]">
                          {active.modalWhatFor}
                        </DialogDescription>
                      </div>
                    ) : null}
                    {active.modalTeamValue ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {sectionLabels.teamValue}
                        </h3>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.62]">
                          {active.modalTeamValue}
                        </p>
                      </div>
                    ) : null}
                    {active.bullets.length > 0 ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {sectionLabels.coreCapabilities}
                        </h3>
                        <ul className="mt-2.5 space-y-2 text-sm leading-snug text-foreground/90">
                          {active.bullets.map((line) => (
                            <li key={line} className="flex gap-2.5">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                aria-hidden
                              />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div
                  className={cn(
                    "border-t border-border/70 px-4 py-6 sm:px-6 sm:py-7",
                    active.slug === "cbam-compliance-console"
                      ? "bg-neutral-50/95 pb-8 sm:pb-9"
                      : "bg-gradient-to-b from-slate-50/95 to-slate-50/80",
                  )}
                >
                  {active.slug === "agri-climate-platform" && active.screenshotSrc ? (
                    <div className="mx-auto w-full max-w-[min(100%,56rem)]">
                      <AgriClimateProductScreenshot
                        alt={active.screenshotAlt}
                        variant="modal"
                      />
                    </div>
                  ) : active.slug === "cbam-compliance-console" ? (
                    <div className="mx-auto w-full max-w-[min(100%,56rem)]">
                      <CbamComplianceConsoleProductVisual
                        alt={active.screenshotAlt || active.title}
                        variant="modal"
                      />
                    </div>
                  ) : active.screenshotSrc ? (
                    <div className="mx-auto w-full max-w-[min(100%,56rem)]">
                      {active.slug === "digital-product-passport-platform" ||
                      active.slug === "cbam-calculation-engine" ? (
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                          <div className="flex w-full justify-center">
                            <Image
                              src={active.screenshotSrc}
                              alt={active.screenshotAlt || active.title}
                              width={1920}
                              height={1080}
                              className="h-auto max-h-[min(76vh,48rem)] w-full object-contain"
                              sizes="(max-width: 1024px) 100vw, 896px"
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          className={cn(
                            "overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/95 p-2.5 sm:p-3.5",
                            "shadow-[0_26px_70px_-44px_rgba(15,23,42,0.38),0_0_0_1px_rgba(8,145,178,0.06)] ring-1 ring-inset ring-slate-900/[0.04]",
                            active.slug === "packaging-compliance-tool" &&
                              "shadow-[0_28px_80px_-48px_rgba(15,23,42,0.42),0_0_48px_-12px_rgba(8,145,178,0.12)]",
                          )}
                        >
                          <div
                            className={cn(
                              "relative flex min-h-[14rem] w-full items-center justify-center overflow-hidden rounded-[1.05rem] border border-slate-200/70 bg-slate-50/95 sm:min-h-[16rem]",
                              active.slug === "packaging-compliance-tool" &&
                                "bg-[radial-gradient(900px_280px_at_50%_0%,rgba(8,145,178,0.08),transparent_55%),linear-gradient(180deg,rgba(248,250,252,0.98),rgba(241,245,249,0.96))]",
                            )}
                          >
                            <Image
                              src={active.screenshotSrc}
                              alt={active.screenshotAlt || active.title}
                              width={1200}
                              height={675}
                              className="h-auto max-h-[min(58vh,32rem)] w-full object-contain object-top"
                              sizes="(max-width: 1024px) 100vw, 896px"
                            />
                          </div>
                        </div>
                      )}
                      {active.modalVisualCaption ? (
                        <p className="mx-auto mt-3 max-w-3xl text-pretty text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                          {active.modalVisualCaption}
                        </p>
                      ) : null}
                    </div>
                  ) : (
                    <SoftwarePreviewPlaceholder className="mx-auto min-h-[12rem] w-full max-w-3xl sm:min-h-[14rem]" />
                  )}
                </div>

                <div className="border-t border-border/80 bg-background p-5 sm:px-7 sm:py-5">
                  <div className="mx-auto flex max-w-3xl flex-col gap-2.5 sm:flex-row sm:gap-3">
                    <AppButton
                      asChild
                      className={cn("w-full sm:flex-1", ACCENT_CTA_BASE)}
                    >
                      <a href={active.demoMailHref}>{requestDemoCta}</a>
                    </AppButton>
                    <AppButton
                      variant="outline"
                      asChild
                      className={cn("w-full sm:flex-1", OUTLINE_CARD_BASE)}
                    >
                      <Link href="/contact">{contactCta}</Link>
                    </AppButton>
                  </div>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </>
  );
}
