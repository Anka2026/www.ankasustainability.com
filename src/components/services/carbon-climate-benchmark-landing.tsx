import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { AppLocale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import type { IntlTranslator } from "@/lib/i18n-types";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { homeCardClassName } from "@/lib/home-classes";
import { isSoftwarePortfolioSlug } from "@/lib/software-portfolio";
import { cn } from "@/lib/utils";

import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Database,
  Factory,
  FileText,
  FileCheck,
  Leaf,
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
const WHY_ICONS = [ShieldCheck, BadgeCheck, Leaf] as const;
const SUPPORT_ICONS = [FileText, BarChart3, ShieldCheck, Route, ListChecks] as const;

export function CarbonClimateBenchmarkLanding({
  t,
  locale,
}: {
  t: IntlTranslator;
  locale: AppLocale;
}) {
  const base = "landing.services.carbonClimate.benchmark";

  const heroPanel = readCardArray(t, `${base}.hero.panelCards`);
  const whyCards = readCardArray(t, `${base}.why.cards`);
  const whyValueItems = readStringArray(t, `${base}.why.valueItems`);
  const supportCards = readCardArray(t, `${base}.support.cards`);
  const steps = readStepArray(t, `${base}.how.steps`);
  const outputs = readStringArray(t, `${base}.outputs.items`);
  const outputNotes = readStringArray(t, `${base}.outputs.notes`);
  const audience = readStringArray(t, `${base}.audience.list`);

  const softwareSlug = "cbam-calculation-engine";
  const canLinkSoftware = isSoftwarePortfolioSlug(softwareSlug);
  const softwareHref = canLinkSoftware ? `/software/${softwareSlug}` : "/software";

  const eyebrow = t(`${base}.hero.eyebrow`);
  const localeVariant: "tr" | "nl" | "en" =
    locale === "tr" ? "tr" : locale === "nl" ? "nl" : "en";

  const proofTitles =
    localeVariant === "tr"
      ? (["Karbon Verisi", "CBAM Hazırlığı", "Kanıt Yapısı", "Geçiş Yol Haritası"] as const)
      : localeVariant === "nl"
        ? (["Koolstofdata", "CBAM-gereedheid", "Bewijsstructuur", "Transitiekader"] as const)
        : (["Carbon Data", "CBAM Readiness", "Evidence Structure", "Transition Roadmap"] as const);

  const proofSubtitles =
    localeVariant === "tr"
      ? ([
          "İzlenebilir, açıklanabilir yapı",
          "Düzenli veri ve varsayım kurgusu",
          "Denetime uygun kontrol mantığı",
          "Azaltım ve uyum için yön",
        ] as const)
      : localeVariant === "nl"
        ? ([
            "Traceerbare, verklaarbare opbouw",
            "Beheerste data en aannames",
            "Reviewklare bewijsdiscipline",
            "Richting voor actie en planning",
          ] as const)
        : ([
            "Traceable, explainable structure",
            "Governed data and assumptions",
            "Review-ready evidence discipline",
            "Direction for action and planning",
          ] as const);

  const midSupportEyebrow =
    localeVariant === "tr"
      ? "YETKİNLİK ALANLARI"
      : localeVariant === "nl"
        ? "Adviesfocus"
        : "ADVISORY FOCUS AREAS";
  const midHowEyebrow =
    localeVariant === "tr"
      ? "NASIL ÇALIŞIYORUZ"
      : localeVariant === "nl"
        ? "Hoe wij werken"
        : "HOW WE WORK";
  const midTechEyebrow =
    localeVariant === "tr"
      ? "TEKNİK ÇALIŞMA KURGUSU"
      : localeVariant === "nl"
        ? "Technische werkstructuur"
        : "TECHNICAL WORK STRUCTURE";

  const processIntroTr = "Çalışma akışını; kapsam netliği, veri sahipliği ve kontrol adımları üzerine kurarız.";
  const processKickerTr = "Kapsam → Veri → Kontrol → Karar";
  const processStepsTr = [
    {
      title: "Kapsamı Netleştiririz",
      body: "Organizasyonel sınırları, amaçları ve öncelikli çalışma alanlarını birlikte belirleriz.",
    },
    {
      title: "Veri Yapısını Kurarız",
      body: "Emisyon kaynakları, veri sahipliği ve destekleyici belge düzenini yapılandırırız.",
    },
    {
      title: "Hesaplama Mantığını Kontrol Ederiz",
      body: "Varsayımlar, faktörler ve veri kalitesi üzerinde tutarlılık kontrolleri yaparız.",
    },
    {
      title: "Yönetim İçin Kullanılabilir Hale Getiririz",
      body: "Bulguları uyum, azaltım ve karar süreçlerinde kullanılabilir hale getiririz.",
    },
  ] as const;

  const audienceMiniBullets =
    localeVariant === "tr"
      ? ([
          "Avrupa pazarına ürün veya veri sağlayan şirketler",
          "CBAM ve karbon veri taleplerine yanıt veren ekipler",
          "Yönetim, kalite, uyum ve sürdürülebilirlik fonksiyonları",
        ] as const)
      : localeVariant === "nl"
        ? ([
            "Organisaties die naar Europa leveren of koolstofdata leveren",
            "Teams die antwoorden op CBAM- en inkoperdataverzoeken",
            "Directie, kwaliteit, compliance en duurzaamheid",
          ] as const)
        : ([
            "Europe-facing organisations supplying products or carbon data",
            "Teams responding to CBAM and buyer carbon-data requests",
            "Management, quality, compliance and sustainability functions",
          ] as const);

  const audienceEyebrow =
    localeVariant === "tr"
      ? "KİMLER İÇİN UYGUN"
      : localeVariant === "nl"
        ? "Voor wie"
        : "WHO IT IS FOR";
  const chipPanelTitle =
    localeVariant === "tr" ? "Hedef Kitle" : localeVariant === "nl" ? "Doelgroep" : "Target audience";

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

  const sectionContainerClass =
    "mx-auto w-full max-w-7xl px-6 lg:px-8 xl:max-w-[86rem] 2xl:max-w-[92rem]";

  const softwareChipsFallback =
    localeVariant === "tr"
      ? (["Veri Toplama Akışı", "Hesaplama Kontrolleri", "İzlenebilirlik", "Raporlama Hazırlığı"] as const)
      : localeVariant === "nl"
        ? (["Dataverzamelingsstroom", "Rekencontroles", "Traceerbaarheid", "Aangifte- en rapportagegereedheid"] as const)
        : (["Data Collection Flow", "Calculation Controls", "Traceability", "Declaration Readiness"] as const);

  const softwareBullets = readStringArray(t, `${base}.tools.card.bullets`);
  const softwareChips = (softwareBullets.length ? softwareBullets : [...softwareChipsFallback]).slice(0, 4);

  return (
    <>
      {/* HERO + Proof strip (Option 3 rhythm) */}
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
          <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-11">
            {/* Copy */}
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-[34rem] text-balance text-pretty text-[2.05rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.65rem] sm:leading-[1.05]">
                {t(`${base}.hero.title`)}
              </h1>
              <p className="mt-4 max-w-[40rem] text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
                {t(`${base}.hero.text`)}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <AppButton
                  asChild
                  className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_18px_44px_-22px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
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

            {/* Large right visual panel */}
            <div className="min-w-0">
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
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/70">
                        {t(`${base}.hero.panelTitle`)}
                      </p>
                      <p className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                        {localeVariant === "tr"
                          ? "İklim ve karbon çalışmalarını sistem mantığına çevirin"
                          : localeVariant === "nl"
                            ? "Maak klimaat- en koolstofwerk onderdeel van een beheerst systeem"
                            : "Turn climate & carbon work into a governed system"}
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                      <Leaf className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                  </div>

                  {/* floating mini cards */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {heroPanel.slice(0, 4).map((c, idx) => {
                      const Icon = HERO_PANEL_ICONS[idx] ?? ShieldCheck;
                      return (
                        <div
                          key={`hero-panel-${c.title}`}
                          className="group relative rounded-3xl border border-white/40 bg-white/60 p-3.5 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.06] backdrop-blur-[6px] transition-transform duration-200 hover:-translate-y-0.5"
                        >
                          <div className="flex items-start gap-3">
                            <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.05] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                              <Icon className="h-5 w-5 text-primary" aria-hidden />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold leading-snug text-foreground">
                                {c.title}
                              </p>
                              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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

          {/* Proof strip overlap */}
          <div className="relative mt-7">
            <div className="rounded-[2.25rem] border border-border bg-background shadow-[0_26px_70px_-56px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]">
              <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                {proofTitles.map((title, idx) => (
                  <div key={`proof-${title}`} className="flex items-start gap-3.5 p-4.5 sm:p-5.5">
                    <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                      {idx === 0 ? (
                        <Database className="h-5 w-5 text-primary" aria-hidden />
                      ) : idx === 1 ? (
                        <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />
                      ) : idx === 2 ? (
                        <FileCheck className="h-5 w-5 text-primary" aria-hidden />
                      ) : (
                        <Route className="h-5 w-5 text-primary" aria-hidden />
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-snug text-foreground">{title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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

      {/* WHY IT MATTERS (designed) */}
      <section className="border-b border-border bg-[var(--section-tint)] py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                {t(`${base}.why.title`)}
              </p>
              <h2 className="mt-4 max-w-[38rem] text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {t(`${base}.why.heading`)}
              </h2>
              <p className="mt-4 max-w-[44rem] text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
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
              <div
                className="pointer-events-none absolute left-7 top-7 h-14 w-1 rounded-full bg-accent/80"
                aria-hidden
              />
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

          {/* asymmetric value cards */}
          <div className="mt-8 grid gap-4.5 lg:grid-cols-12">
            {whyCards.map((c, idx) => {
              const Icon = WHY_ICONS[idx] ?? ShieldCheck;
              const span =
                idx === 0 ? "lg:col-span-5" : idx === 1 ? "lg:col-span-4" : "lg:col-span-3";
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
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* MIDDLE BODY (deterministic rebuild) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(8,145,178,0.10),transparent_28%),radial-gradient(circle_at_85%_45%,rgba(14,165,233,0.10),transparent_30%)]"
          aria-hidden
        />
        <div className={cn("relative py-12 lg:py-14 space-y-9", sectionContainerClass)}>
          {/* 1) ANKA Nasıl Katkı Sağlar */}
          <section aria-labelledby="mid-support">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                {midSupportEyebrow}
              </p>
              <h2
                id="mid-support"
                className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                {t(`${base}.support.title`)}
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
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
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {c.body}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 2) Çalışma Yaklaşımımız */}
          <section aria-labelledby="mid-process">
            <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] items-stretch">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {midHowEyebrow}
                </p>
                <h2 id="mid-process" className="mt-4 text-pretty text-2xl font-semibold tracking-tight text-foreground">
                  {localeVariant === "tr" ? "Çalışma Yaklaşımımız" : t(`${base}.how.headline`)}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {localeVariant === "tr" ? processIntroTr : t(`${base}.how.intro`)}
                </p>
                <p className="mt-4 text-sm font-semibold tracking-tight text-foreground/85">
                  {localeVariant === "tr" ? processKickerTr : t(`${base}.how.kicker`)}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04]">
                <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  <div
                    className="pointer-events-none absolute left-5 right-5 top-6 hidden h-px bg-slate-200/80 lg:block"
                    aria-hidden
                  />
                  {(localeVariant === "tr" ? processStepsTr : steps.slice(0, 4)).map((s, idx) => {
                    return (
                      <article
                        key={`mid-step2-${s.title}`}
                        className={cn(
                          "relative h-full rounded-2xl border border-slate-200/80 bg-white p-4.5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]",
                          "ring-1 ring-inset ring-primary/[0.03]",
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex h-8 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-[0.75rem] font-semibold tracking-tight text-primary">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-sm font-semibold tracking-tight text-foreground">
                              {s.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                              {s.body}
                            </p>
                          </div>
                        </div>
                        {idx < 3 ? (
                          <span
                            className="pointer-events-none absolute -right-3 top-6 hidden h-6 w-6 items-center justify-center rounded-full border border-slate-200/80 bg-white text-[0.75rem] font-semibold text-muted-foreground lg:inline-flex"
                            aria-hidden
                          >
                            →
                          </span>
                        ) : null}
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* 3) Teknik Dosya Ve Kanıt Kurgusu */}
          <section aria-labelledby="mid-tech">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
              {midTechEyebrow}
            </p>
            <h2
              id="mid-tech"
              className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {t(`${base}.outputs.title`)}
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
              {t(`${base}.outputs.intro`)}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {outputs.slice(0, 9).map((o, idx) => (
                <article
                  key={`mid-tech-${o}-${idx}`}
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
                      <p className="text-[0.975rem] font-semibold leading-snug tracking-tight text-foreground">
                        {o}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {outputNotes[idx] ?? ""}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4) Kimler İçin Uygun */}
          <section aria-labelledby="mid-audience">
            <div className="grid gap-6 lg:grid-cols-[0.58fr_0.42fr] items-stretch">
              <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_56px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04]">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {audienceEyebrow}
                </p>
                <h2
                  id="mid-audience"
                  className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground"
                >
                  {localeVariant === "tr" ? "Kimler İçin Uygun" : t(`${base}.audience.title`)}
                </h2>
                <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
                  {t(`${base}.audience.description`)}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {audienceMiniBullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                      <p className="text-[0.9375rem] font-semibold leading-relaxed text-foreground">
                        {b}
                      </p>
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
                    <p className="text-sm font-semibold tracking-tight text-foreground">
                      {chipPanelTitle}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      {audience.map((a, idx) => {
                        const tint = chipTints[idx % 4] ?? chipTints[0];
                        return (
                          <li
                            key={`mid-aud-${a}`}
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

          {/* 5) Supporting digital / related software block */}
          <section aria-labelledby="mid-tool">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
              {t(`${base}.tools.title`)}
            </p>
            <h2
              id="mid-tool"
              className="mt-4 text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              {t(`${base}.tools.title`)}
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
              {t(`${base}.tools.intro`)}
            </p>

            <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 shadow-[0_24px_80px_rgba(15,23,42,0.08)] ring-1 ring-inset ring-primary/[0.04] lg:grid lg:grid-cols-2">
              <div className="relative bg-primary p-6 text-primary-foreground lg:p-7">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_18%_18%,rgba(8,145,178,0.24),transparent_60%),radial-gradient(820px_420px_at_86%_18%,rgba(20,184,166,0.16),transparent_60%)]"
                  aria-hidden
                />
                <div className="relative">
                  <h3 className="text-lg font-semibold tracking-tight text-primary-foreground">
                    {t(`${base}.tools.card.title`)}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-primary-foreground/86 sm:text-base sm:leading-[1.62]">
                    {t(`${base}.tools.card.body`)}
                  </p>
                  <p className="mt-5">
                    <Link
                      href={softwareHref}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:border-white/25 hover:bg-white/[0.09]"
                    >
                      {t(`${base}.tools.card.cta`)}
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </p>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  {t(`${base}.tools.rightTitle`)}
                </p>
                <div className="mt-4 grid gap-2.5">
                  {readStringArray(t, `${base}.tools.capabilityRows`).slice(0, 4).map((row) => (
                    <div
                      key={row}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                    >
                      <p className="min-w-0 text-sm font-semibold leading-snug text-foreground">
                        {row}
                      </p>
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                    </div>
                  ))}
                </div>
                <div className="mt-4.5 rounded-2xl border border-slate-200/80 bg-sky-50/60 p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`${base}.tools.noteShort`)}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* FINAL CTA (strong) */}
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
                    {localeVariant === "tr"
                      ? "Sonraki Adım"
                      : localeVariant === "nl"
                        ? "Volgende stap"
                        : "Next step"}
                  </p>
                </div>
                <h2 className="mt-5 max-w-4xl text-balance text-pretty text-[1.45rem] font-semibold leading-snug tracking-[-0.02em] text-primary-foreground sm:text-2xl sm:leading-snug md:text-[1.75rem]">
                  {t(`${base}.cta.title`)}
                </h2>
                <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-primary-foreground/86 sm:text-lg sm:leading-[1.65]">
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

