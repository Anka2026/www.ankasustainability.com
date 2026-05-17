import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import type { AppLocale } from "@/i18n/routing";
import type { IntlTranslator } from "@/lib/i18n-types";
import type { ServicesCategoryId } from "@/lib/services-categories";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { ServiceRelatedDigitalSolution } from "@/components/services/service-related-digital-solution";
import { getHeroSubServices } from "@/lib/service-sub-services";
import { cn } from "@/lib/utils";

import {
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  FileText,
  ListChecks,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

type Card = Readonly<{ title: string; body: string }>;
type Step = Readonly<{ title: string; body: string }>;

function readStringArray(t: IntlTranslator, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function readCardArray(t: IntlTranslator, key: string): Card[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .map((v) => {
      if (typeof v !== "object" || v === null) return null;
      const title = (v as Record<string, unknown>).title;
      const body = (v as Record<string, unknown>).body;
      if (typeof title !== "string" || typeof body !== "string") return null;
      return { title, body };
    })
    .filter((v): v is Card => Boolean(v));
}

function readStepArray(t: IntlTranslator, key: string): Step[] {
  return readCardArray(t, key);
}

const HERO_PANEL_ICONS = [BarChart3, ShieldCheck, ListChecks, Route] as const;
const WHY_ICONS = [ShieldCheck, BadgeCheck, BarChart3] as const;
const SUPPORT_ICONS = [FileText, BarChart3, ShieldCheck, Route, ListChecks] as const;

export function BenchmarkServiceLanding({
  t,
  categoryId,
  locale,
}: {
  t: IntlTranslator;
  categoryId: Exclude<ServicesCategoryId, "carbonClimate">;
  locale: AppLocale;
}) {
  const base = `landing.services.${categoryId}.benchmark`;

  const heroPanel = getHeroSubServices(categoryId, locale).slice(0, 4);
  const proofItems = readStringArray(t, `${base}.hero.proofStrip.items`).slice(0, 4);
  const proofSubtitles = readStringArray(t, `${base}.hero.proofStrip.subtitles`).slice(0, 4);

  const whyCards = readCardArray(t, `${base}.why.cards`);
  const whyValueItems = readStringArray(t, `${base}.why.valueItems`);

  const supportCards = readCardArray(t, `${base}.support.cards`);
  const steps = readStepArray(t, `${base}.how.steps`);
  const outputs = readStringArray(t, `${base}.outputs.items`);
  const outputNotes = readStringArray(t, `${base}.outputs.notes`);
  const audience = readStringArray(t, `${base}.audience.list`);
  const audienceMiniBullets = readStringArray(t, `${base}.audience.bullets`).slice(0, 3);

  const processSteps = steps.slice(0, Math.min(steps.length, 5));
  const kickers =
    locale === "tr"
      ? {
          advisory: "ALT HİZMETLER",
          how: "NASIL ÇALIŞIYORUZ",
          audience: "KİMLER İÇİN UYGUN",
          nextStep: "Sonraki Adım",
        }
      : locale === "nl"
        ? {
            advisory: "Dienstgebieden",
            how: "Hoe we werken",
            audience: "Voor wie",
            nextStep: "Volgende stap",
          }
        : {
            advisory: "SERVICE AREAS",
            how: "HOW WE WORK",
            audience: "WHO IT IS FOR",
            nextStep: "Next step",
          };

  const sectionContainerClass =
    "mx-auto w-full max-w-7xl px-6 lg:px-8 xl:max-w-[86rem] 2xl:max-w-[92rem]";

  const chipTints = [
    "bg-white border-slate-200/80 text-slate-900",
    "bg-slate-50/80 border-slate-200/80 text-slate-900",
    "bg-sky-50/55 border-sky-200/70 text-slate-900",
    "bg-slate-50/60 border-slate-200/70 text-slate-900",
  ] as const;

  const supportSurfaces = [
    "bg-white border-slate-200/80",
    "bg-slate-50/70 border-slate-200/80",
    "bg-sky-50/45 border-sky-200/70",
    "bg-white border-slate-200/80",
    "bg-slate-50/60 border-slate-200/80",
  ] as const;

  return (
    <>
      {/* HERO + Proof strip */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
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

        <Container className="relative max-w-7xl pt-12 pb-14 sm:pt-14 sm:pb-16 xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-12">
            <div className="flex min-w-0 flex-col">
              <Link
                href="/services"
                className="mb-3 inline-flex w-fit text-sm font-medium text-muted-foreground underline decoration-muted-foreground/35 underline-offset-[5px] transition-[opacity,decoration-color] hover:opacity-80 hover:decoration-primary/45"
              >
                {t("detail.backToServices")}
              </Link>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t(`${base}.hero.eyebrow`)}
              </p>
              <h1 className="mt-3 max-w-5xl text-balance text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t(`${base}.hero.title`)}
              </h1>
              <p className="mt-4 max-w-5xl flex-1 text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
                {t(`${base}.hero.text`)}
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:gap-4">
                <AppButton
                  asChild
                  className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
                >
                  <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t(`${base}.hero.ctas.primary`)}
                  </a>
                </AppButton>
                <AppButton variant="outline" asChild>
                  <Link href="/services">{t(`${base}.hero.ctas.secondary`)}</Link>
                </AppButton>
              </div>
            </div>

            <div className="relative flex h-full min-h-0 flex-col">
              <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2.5rem] border border-border bg-primary text-primary-foreground shadow-[0_34px_86px_-66px_rgba(15,23,42,0.85)] ring-1 ring-inset ring-white/10">
                <div
                  className={cn(
                    "absolute inset-0",
                    "bg-[radial-gradient(900px_420px_at_20%_20%,rgba(8,145,178,0.24),transparent_58%),radial-gradient(820px_440px_at_86%_14%,rgba(15,23,42,0.12),transparent_60%),linear-gradient(135deg,rgba(2,132,199,0.14),rgba(148,163,184,0.08),rgba(15,23,42,0.06))]",
                  )}
                  aria-hidden
                />
                <div
                  className="absolute -left-10 -bottom-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.18),transparent_62%)] blur-2xl"
                  aria-hidden
                />
                <div className="relative p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                      {t("subServicesPanelTitle")}
                    </p>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                      <ShieldCheck className="h-5 w-5 text-primary-foreground/80" aria-hidden />
                    </span>
                  </div>
                  <div className="mt-6 grid gap-3.5">
                    {heroPanel.slice(0, 4).map((c, idx) => {
                      const Icon = HERO_PANEL_ICONS[idx] ?? ShieldCheck;
                      return (
                        <div
                          key={`hero-panel-${c.title}`}
                          className={cn(
                            "rounded-3xl border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_50px_-42px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-white/10",
                            "transition-[border-color,box-shadow,transform,background-color] duration-200 ease-out",
                            "hover:border-white/20 hover:bg-white/[0.09] hover:shadow-[0_22px_56px_-40px_rgba(15,23,42,0.28)] hover:-translate-y-px",
                          )}
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                              <Icon className="h-5 w-5 text-primary-foreground/80" aria-hidden />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold tracking-tight text-primary-foreground">
                                {c.title}
                              </p>
                              <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/80">
                                {c.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proof strip */}
          <div className="relative mt-7">
            <div className="rounded-[2.25rem] border border-border bg-background shadow-[0_26px_70px_-56px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]">
              <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {proofItems.map((title, idx) => (
                  <div key={`proof-${title}`} className="flex items-start gap-3.5 p-4.5 sm:p-5.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04]">
                      <BadgeCheck className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight text-foreground">{title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {proofSubtitles[idx] ?? ""}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-border bg-[var(--section-tint)] py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                {t(`${base}.why.title`)}
              </p>
              <h2 className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t(`${base}.why.heading`)}
              </h2>
              <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                {t(`${base}.why.intro`)}
              </p>
              <ul className="mt-6 space-y-3">
                {whyValueItems.map((v) => (
                  <li key={v} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <p className="text-[0.9375rem] font-semibold leading-relaxed text-foreground sm:text-base sm:leading-[1.55]">
                      {v}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-primary p-6.5 text-primary-foreground shadow-[0_30px_76px_-60px_rgba(15,23,42,0.75)] ring-1 ring-inset ring-white/10 sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_16%_20%,rgba(8,145,178,0.25),transparent_60%),radial-gradient(840px_420px_at_86%_18%,rgba(15,23,42,0.14),transparent_60%)]"
                aria-hidden
              />
              <div className="pointer-events-none absolute left-7 top-7 h-14 w-1 rounded-full bg-primary/55" aria-hidden />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 pl-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                    {t(`${base}.why.insightLabel`)}
                  </p>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground/80" aria-hidden />
                  </span>
                </div>
                <p className="mt-5 text-balance text-pretty text-[1.12rem] font-medium leading-relaxed text-primary-foreground/92 sm:text-[1.22rem] sm:leading-[1.6]">
                  “{t(`${base}.why.insightText`)}”
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4.5 lg:grid-cols-12">
            {whyCards.map((c, idx) => {
              const Icon = WHY_ICONS[idx] ?? ShieldCheck;
              const span = idx === 0 ? "lg:col-span-5" : idx === 1 ? "lg:col-span-4" : "lg:col-span-3";
              return (
                <article
                  key={`why-${c.title}`}
                  className={cn(
                    span,
                    "relative overflow-hidden rounded-[2.1rem] border border-border bg-background p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7",
                  )}
                >
                  <div
                    className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.14),transparent_60%)]"
                    aria-hidden
                  />
                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold tracking-tight text-foreground">{c.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* MIDDLE BODY */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(8,145,178,0.10),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(14,165,233,0.10),transparent_30%)]"
          aria-hidden
        />
        <div className={cn("relative py-12 lg:py-14 space-y-9", sectionContainerClass)}>
          {/* 1) How ANKA contributes */}
          <section aria-labelledby="mid-support">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                {kickers.advisory}
              </p>
              <h2
                id="mid-support"
                className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t(`${base}.support.title`)}
              </h2>
              <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                {t(`${base}.support.intro`)}
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {supportCards.map((c, idx) => {
                  const Icon = SUPPORT_ICONS[idx] ?? ShieldCheck;
                  const tint = supportSurfaces[idx] ?? "bg-white border-slate-200/80";
                  const span = idx === 3 ? "lg:col-span-1" : "";
                  const span2 = idx === 4 ? "lg:col-span-2" : "";
                  return (
                    <article
                      key={`mid-support-${c.title}`}
                      className={cn(
                        "relative rounded-3xl border p-5 shadow-[0_18px_46px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-primary/[0.04]",
                        tint,
                        "before:absolute before:left-0 before:top-5 before:bottom-5 before:w-[3px] before:rounded-full before:bg-primary/55",
                        span,
                        span2,
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04]">
                          <Icon className="h-5 w-5 text-primary" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground">
                            {c.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 2) Working approach */}
          <section aria-labelledby="mid-process">
            <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-8">
              <div className="rounded-3xl border border-accent/18 bg-gradient-to-br from-white via-accent/[0.05] to-sky-50/40 p-6 shadow-[0_20px_56px_-40px_rgba(8,145,178,0.3)] ring-1 ring-inset ring-accent/10 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent sm:whitespace-nowrap">
                  {kickers.how}
                </p>
                <h2
                  id="mid-process"
                  className="mt-4 max-w-[min(100%,52rem)] text-pretty text-2xl font-semibold leading-snug tracking-tight text-primary sm:text-[1.65rem] sm:leading-snug"
                >
                  {t(`${base}.how.headline`)}
                </h2>
                <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                  {t(`${base}.how.intro`)}
                </p>
                <p className="mt-5 max-w-[min(100%,52rem)] text-sm font-semibold leading-snug tracking-tight text-primary/90">
                  {t(`${base}.how.kicker`)}
                </p>
              </div>

              <div className="rounded-3xl border border-accent/15 bg-gradient-to-b from-accent/[0.05] via-slate-50/80 to-white p-5 shadow-[0_24px_80px_-44px_rgba(8,145,178,0.28)] ring-1 ring-inset ring-accent/10 sm:p-6">
                <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                  {processSteps.map((s, idx) => (
                    <li
                      key={`step-${s.title}`}
                      className={cn(
                        processSteps.length === 5 && idx === processSteps.length - 1 && "md:col-span-2",
                      )}
                    >
                      <article
                        className={cn(
                          "flex h-full min-w-0 flex-col rounded-2xl border border-accent/18 bg-white p-5 sm:p-6",
                          "shadow-[0_12px_30px_rgba(8,145,178,0.12)] ring-1 ring-inset ring-accent/8",
                          "transition-[border-color,box-shadow] duration-200 ease-out",
                          "hover:border-accent/35 hover:shadow-[0_20px_44px_-28px_rgba(8,145,178,0.28)]",
                        )}
                      >
                        <div className="flex min-w-0 flex-col gap-3.5 sm:flex-row sm:items-start sm:gap-4">
                          <span
                            className={cn(
                              "inline-flex h-9 min-h-9 min-w-9 shrink-0 items-center justify-center self-start rounded-full",
                              "border border-accent/28 bg-accent/[0.1] text-xs font-semibold tabular-nums tracking-tight text-accent",
                              "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.72)]",
                            )}
                            aria-hidden
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-semibold leading-snug tracking-tight text-pretty text-foreground">
                              {s.title}
                            </h3>
                            <p className="mt-2 text-[0.9375rem] leading-relaxed text-pretty text-muted-foreground sm:leading-[1.62]">
                              {s.body}
                            </p>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* 3) Technical file */}
          <section aria-labelledby="mid-tech">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
              {t(`${base}.outputs.eyebrow`)}
            </p>
            <h2
              id="mid-tech"
              className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {t(`${base}.outputs.title`)}
            </h2>
            <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
              {t(`${base}.outputs.intro`)}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {outputs.slice(0, 9).map((o, idx) => (
                <article
                  key={`out-${o}-${idx}`}
                  className={cn(
                    "relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_46px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-primary/[0.03]",
                    idx % 3 === 0 ? "bg-slate-50/70" : idx % 3 === 1 ? "bg-sky-50/45" : "bg-slate-50/60",
                  )}
                >
                  <div
                    className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-b-[18px] border-l-[18px] border-b-sky-50/70 border-l-transparent"
                    aria-hidden
                  />
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04]">
                      <FileText className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.975rem] font-semibold leading-snug tracking-tight text-foreground">{o}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{outputNotes[idx] ?? ""}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4) Audience */}
          <section aria-labelledby="mid-audience">
            <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] items-stretch">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {kickers.audience}
                </p>
                <h2 id="mid-audience" className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground">
                  {t(`${base}.audience.title`)}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {t(`${base}.audience.description`)}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {audienceMiniBullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                      <p className="text-[0.9375rem] font-semibold leading-relaxed text-foreground">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04]">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white via-slate-50/70 to-white p-4.5">
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(14,165,233,0.10),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(15,23,42,0.06),transparent_46%)]"
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-sm font-semibold tracking-tight text-foreground">{t(`${base}.audience.panelLabel`)}</p>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04]">
                        <Users className="h-5 w-5 text-primary" aria-hidden />
                      </span>
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      {audience.map((a, idx) => {
                        const tint = chipTints[idx % 4] ?? chipTints[0];
                        return (
                          <li
                            key={`aud-${a}`}
                            className={cn(
                              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold tracking-tight shadow-[0_1px_2px_rgba(15,23,42,0.06)]",
                              tint,
                            )}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/55" aria-hidden />
                            {a}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <ServiceRelatedDigitalSolution t={t} categoryId={categoryId} />

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground pt-12 pb-10 sm:pt-14 sm:pb-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_34px_86px_-62px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/10 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_20%_30%,rgba(8,145,178,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.10),transparent_55%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:auto,auto,56px_56px]"
              aria-hidden
            />
            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] lg:items-center">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                    <Route className="h-6 w-6 text-primary-foreground/85" aria-hidden />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                    {kickers.nextStep}
                  </p>
                </div>
                <h2 className="mt-5 max-w-4xl text-balance text-pretty text-[1.45rem] font-semibold leading-snug tracking-[-0.02em] text-primary-foreground sm:text-2xl sm:leading-snug md:text-[1.75rem]">
                  {t(`${base}.cta.title`)}
                </h2>
                <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-relaxed text-primary-foreground/86 sm:text-lg sm:leading-[1.65]">
                  {t(`${base}.cta.text`)}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <AppButton variant="inverseSolid" asChild size="lg">
                  <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    {t(`${base}.cta.primary`)}
                  </a>
                </AppButton>
                <AppButton variant="inverseOutline" asChild size="lg">
                  <Link href="/contact">{t(`${base}.cta.secondary`)}</Link>
                </AppButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

