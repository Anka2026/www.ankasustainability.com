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

const PRIMARY_CARD_CTA = cn("w-full", ACCENT_CTA_BASE);

const OUTLINE_CARD_BASE = cn(
  "border border-slate-300/90 bg-white/90 text-foreground transition-all duration-200",
  "hover:border-accent/45 hover:bg-[rgba(8,145,178,0.07)] hover:text-primary hover:shadow-sm",
);

const OUTLINE_CARD_CTA = cn("w-full", OUTLINE_CARD_BASE);

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

  return (
    <>
      <div className="mt-10 sm:mt-12">
        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.slug}
              className={cn(
                homeCardClassName(true),
                "flex h-full min-h-[26rem] flex-col overflow-hidden bg-background transition-shadow duration-300",
                "hover:shadow-[0_28px_64px_-44px_rgba(15,23,42,0.28)]",
              )}
            >
              <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex max-w-[70%] rounded-full border border-border/80 bg-[var(--section-tint)] px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-muted-foreground">
                    {p.pill}
                  </span>
                </div>
                <h3 className="mt-4 text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1.1rem]">
                  {p.title}
                </h3>
                <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                  {p.summary}
                </p>
                <ul className="mt-4 min-h-0 flex-1 space-y-2 border-t border-border/60 pt-4 text-sm leading-snug text-foreground/90">
                  {p.bullets.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/55"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 border-t border-border/60 pt-5 sm:mt-6">
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
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
            </article>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-[80] bg-primary/40 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogContent
            className={cn(
              "fixed left-1/2 top-1/2 z-[90] max-h-[min(92dvh,900px)] w-[min(calc(100vw-1.5rem),64rem)] -translate-x-1/2 -translate-y-1/2",
              "overflow-y-auto rounded-[1.75rem] border border-border/80 bg-background p-0 shadow-[0_40px_100px_-48px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-primary/[0.06]",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            )}
          >
            {active ? (
              <div className="flex max-h-[min(92dvh,900px)] flex-col overflow-y-auto">
                <div className="relative p-6 sm:p-7">
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
                        {modalLabels.valueProposition}
                      </h3>
                      <p className="mt-2 text-pretty text-sm font-medium leading-relaxed text-foreground/95 sm:text-[0.9375rem] sm:leading-[1.6]">
                        {tagline}
                      </p>
                    </div>
                    {active.modalWhatFor ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {modalLabels.whatFor}
                        </h3>
                        <DialogDescription className="mt-2 text-left text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.65]">
                          {active.modalWhatFor}
                        </DialogDescription>
                      </div>
                    ) : null}
                    {active.modalTeamValue ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {modalLabels.teamValue}
                        </h3>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.62]">
                          {active.modalTeamValue}
                        </p>
                      </div>
                    ) : null}
                    {active.bullets.length > 0 ? (
                      <div>
                        <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {modalLabels.coreCapabilities}
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

                <div className="border-t border-border/70 bg-gradient-to-b from-slate-50/95 to-slate-50/80 px-5 py-6 sm:px-6 sm:py-7">
                  {active.slug === "agri-climate-platform" && active.screenshotSrc ? (
                    <div className="w-full max-w-3xl mx-auto">
                      <AgriClimateProductScreenshot alt={active.screenshotAlt} />
                    </div>
                  ) : active.screenshotSrc ? (
                    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_22px_56px_-40px_rgba(15,23,42,0.32)] ring-1 ring-inset ring-slate-900/[0.04]">
                      <div className="relative flex min-h-[13rem] w-full items-center justify-center bg-slate-50/90 sm:min-h-[15rem]">
                        <Image
                          src={active.screenshotSrc}
                          alt={active.screenshotAlt || active.title}
                          width={960}
                          height={540}
                          className="h-auto max-h-[min(52vh,28rem)] w-full object-contain object-center"
                          sizes="(max-width: 1024px) 100vw, 720px"
                        />
                      </div>
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
