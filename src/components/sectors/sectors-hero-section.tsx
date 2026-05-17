import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { HERO_LEFT_RAIL_HOME } from "@/lib/hero-classes";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import {
  sectorHeroEyebrowClassName,
  sectorsLandingHeroPanelClassName,
  sectorsLandingHeroShellClassName,
} from "@/lib/sectors-premium-classes";
import { cn } from "@/lib/utils";
import { BarChart3, Database, ListChecks, MapPinned, Route } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readStringArray(t: IntlTranslator, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

const PANEL_ICONS = [BarChart3, Database, ListChecks, Route] as const;

export function SectorsHeroSection({ t }: Props) {
  const panelItems = readStringArray(t, "hero.panel.items");

  return (
    <section
      className={sectorsLandingHeroShellClassName()}
      aria-labelledby="sectors-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_480px_at_8%_12%,rgba(8,145,178,0.2),transparent_58%),radial-gradient(1000px_520px_at_88%_8%,rgba(15,23,42,0.08),transparent_55%)]"
        aria-hidden
      />

      <Container className="relative z-[1] max-w-7xl pt-11 pb-12 sm:pt-12 sm:pb-12 md:pt-14 md:pb-14 xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid items-stretch gap-8 sm:gap-9 md:gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:items-center lg:gap-11 xl:gap-12">
          <div
            className={cn(
              HERO_LEFT_RAIL_HOME,
              "min-w-0 max-w-[min(100%,34rem)] sm:max-w-[38rem] lg:max-w-[min(100%,40rem)]",
            )}
          >
            <p className={sectorHeroEyebrowClassName()}>{t("hero.eyebrow")}</p>
            <h1
              id="sectors-hero-heading"
              className="mt-4 text-balance text-pretty text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-foreground sm:text-[2.15rem] sm:leading-[1.1] md:text-[2.5rem] lg:text-[2.65rem] lg:leading-[1.06]"
            >
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-[min(100%,40rem)] text-pretty text-[0.98rem] leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.68]">
              {t("hero.description")}
            </p>

            <div className="mt-7 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
              <AppButton
                asChild
                className="h-11 w-full shrink-0 border border-accent/45 bg-accent text-accent-foreground shadow-[0_18px_44px_-22px_rgba(8,145,178,0.5)] sm:h-10 sm:w-auto"
              >
                <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("hero.primaryCta")}
                </a>
              </AppButton>
              <AppButton
                variant="outline"
                asChild
                className="h-11 w-full border-border/90 bg-surface/80 backdrop-blur-sm sm:h-10 sm:w-auto hover:border-accent/40 hover:bg-accent/[0.05]"
              >
                <Link href="#sector-focus" className="whitespace-normal text-center sm:whitespace-nowrap">
                  {t("hero.secondaryCta")}
                </Link>
              </AppButton>
            </div>
            </div>

          <div className="order-2 w-full min-w-0 self-stretch lg:order-none">
            <div className={sectorsLandingHeroPanelClassName()}>
              <div
                className="pointer-events-none absolute -right-8 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.18),transparent_65%)] blur-2xl"
                aria-hidden
              />

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="min-w-0 flex-1 pr-1">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent sm:text-xs">
                      {t("hero.panel.eyebrow")}
                    </p>
                    <p className="mt-2.5 text-balance text-base font-semibold leading-snug tracking-tight text-foreground sm:mt-3 sm:text-[1.0625rem]">
                      {t("hero.panel.title")}
                    </p>
                    <p className="mt-2 max-w-prose text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[0.9375rem] sm:leading-[1.62]">
                      {t("hero.panel.description")}
                    </p>
                  </div>
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/22 bg-accent/[0.1] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.88)] ring-1 ring-inset ring-accent/12">
                    <MapPinned className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <div className="mt-5 grid min-h-0 flex-1 grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-3.5">
                  {panelItems.slice(0, 4).map((label, idx) => {
                    const Icon = PANEL_ICONS[idx] ?? ListChecks;
                    return (
                      <div
                        key={label}
                        className="group flex min-h-[4.25rem] rounded-xl border border-border/70 bg-background/75 p-3.5 shadow-[0_10px_28px_-22px_rgba(15,23,42,0.32)] ring-1 ring-inset ring-primary/[0.03] transition-[transform,box-shadow,border-color,background-color] duration-200 hover:-translate-y-px hover:border-accent/25 hover:bg-surface hover:shadow-[0_16px_40px_-28px_rgba(8,145,178,0.28)]">
                          <div className="flex w-full items-center gap-3">
                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/18 bg-accent/[0.07] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)] transition-colors group-hover:border-accent/30 group-hover:bg-accent/[0.12]">
                              <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={2} aria-hidden />
                            </span>
                            <p className="min-w-0 flex-1 text-left text-sm font-semibold leading-snug text-foreground">
                              {label}
                            </p>
                          </div>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background/35"
        aria-hidden
      />
    </section>
  );
}
