import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { cn } from "@/lib/utils";
import { BarChart3, Cpu, Database, LayoutGrid, ListChecks } from "lucide-react";

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

const PANEL_ROW_ICONS = [BarChart3, Database, ListChecks, Cpu] as const;

export function SoftwareHeroSection({ t }: Props) {
  const panelItems = readStringArray(t, "hero.panel.items");

  return (
    <section
      className="relative overflow-hidden border-b border-border bg-surface"
      aria-labelledby="software-hero-heading"
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          "bg-[radial-gradient(1200px_520px_at_14%_10%,rgba(8,145,178,0.20),transparent_60%),radial-gradient(900px_420px_at_86%_20%,rgba(15,23,42,0.10),transparent_55%),linear-gradient(180deg,rgba(248,250,252,1),rgba(241,245,249,1))]",
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(90deg,transparent,rgba(8,145,178,0.10),transparent)] opacity-60"
        aria-hidden
      />

      <Container className="relative z-[1] max-w-7xl pt-12 pb-10 sm:pt-14 sm:pb-12 xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-11">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t("hero.eyebrow")}
            </p>
            <h1
              id="software-hero-heading"
              className="mt-4 max-w-[34rem] text-balance text-pretty text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.65rem] sm:leading-[1.05]"
            >
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-[40rem] text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
              {t("hero.description")}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <AppButton
                asChild
                className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_18px_44px_-22px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
              >
                <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  {t("hero.primaryCta")}
                </a>
              </AppButton>
              <AppButton variant="outline" asChild>
                <Link href="/software#software-solution-areas">{t("hero.secondaryCta")}</Link>
              </AppButton>
            </div>
          </div>

          <div className="order-2 w-full min-w-0 lg:order-none">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-background shadow-[0_34px_86px_-62px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.06]">
              <div
                className={cn(
                  "absolute inset-0",
                  "bg-[radial-gradient(900px_420px_at_20%_20%,rgba(8,145,178,0.24),transparent_58%),radial-gradient(820px_440px_at_86%_14%,rgba(15,23,42,0.12),transparent_60%),linear-gradient(135deg,rgba(2,132,199,0.14),rgba(148,163,184,0.08),rgba(15,23,42,0.06))]",
                )}
                aria-hidden
              />
              <div
                className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(2,132,199,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(2,132,199,0.10)_1px,transparent_1px)] [background-size:44px_44px]"
                aria-hidden
              />
              <div
                className="absolute -left-10 -bottom-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.18),transparent_62%)] blur-2xl"
                aria-hidden
              />
              <div
                className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.28),transparent_60%)] blur-2xl"
                aria-hidden
              />

              <div className="relative p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-base font-semibold tracking-tight text-foreground sm:text-[1.0625rem]">
                      {t("hero.panel.title")}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {t("hero.panel.description")}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                    <LayoutGrid className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {panelItems.slice(0, 4).map((label, idx) => {
                    const Icon = PANEL_ROW_ICONS[idx] ?? ListChecks;
                    return (
                      <div
                        key={label}
                        className="group relative rounded-3xl border border-white/40 bg-white/60 p-3.5 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.06] backdrop-blur-[6px] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                            <Icon className="h-5 w-5 text-primary" aria-hidden />
                          </span>
                          <p className="min-w-0 pt-1.5 text-sm font-semibold leading-snug text-foreground">
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
    </section>
  );
}
