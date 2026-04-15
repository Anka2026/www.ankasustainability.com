import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  isSoftwarePortfolioSlug,
  parseSoftwarePortfolioStatus,
  type SoftwarePortfolioSlug,
  type SoftwarePortfolioStatus,
} from "@/lib/software-portfolio";
import { cn } from "@/lib/utils";

type PageProps = Readonly<{
  params: Promise<{ locale: string; product: string }>;
}>;

type TranslatorLike = IntlTranslator & ((key: string) => string);

type Capability = Readonly<{ title: string; description: string }>;
type HowStep = Readonly<{ title: string; description: string }>;

type ProductDetailModel = Readonly<{
  slug: SoftwarePortfolioSlug;
  status: SoftwarePortfolioStatus;
  statusLabel: string;
  title: string;
  heroText: string;
  solves: string[];
  capabilities: Capability[];
  howItWorks: HowStep[];
  whoItsFor: string[];
  outputs: string[];
  roadmapNote?: string;
  comingSoonPositioning?: string[];
}>;

function statusPillClass(status: SoftwarePortfolioStatus) {
  switch (status) {
    case "core":
      return "border-accent/28 bg-accent/[0.10] text-primary";
    case "in_development":
      return "border-primary/20 bg-primary/[0.06] text-primary";
    case "coming_soon":
    default:
      return "border-border/90 bg-background/85 text-muted-foreground";
  }
}

function StatusPill({ value, status }: { value: string; status: SoftwarePortfolioStatus }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide",
        statusPillClass(status),
      )}
    >
      {value}
    </span>
  );
}

function CtaRow({
  status,
  t,
}: {
  status: SoftwarePortfolioStatus;
  t: TranslatorLike;
}) {
  const primaryLabel =
    status === "coming_soon" ? t("portfolio.ctas.requestEarlyAccess") : t("portfolio.ctas.requestDemo");
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <AppButton
        asChild
        className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
      >
        <Link href="/contact">{primaryLabel}</Link>
      </AppButton>
      <AppButton variant="outline" asChild>
        <Link href="/contact">{t("portfolio.ctas.talkToTeam")}</Link>
      </AppButton>
    </div>
  );
}

function readStringArray(t: TranslatorLike, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw.filter((v): v is string => typeof v === "string");
}

function readObjectArray(
  t: TranslatorLike,
  key: string,
): Array<Record<string, unknown>> {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw.filter((v): v is Record<string, unknown> => typeof v === "object" && v !== null);
}

function readCapabilities(t: TranslatorLike, base: string): Capability[] {
  return readObjectArray(t, `${base}.capabilities`)
    .map((obj) => {
      const title = obj.title;
      const description = obj.description;
      if (typeof title !== "string" || typeof description !== "string") return null;
      return { title, description };
    })
    .filter((v): v is Capability => Boolean(v));
}

function readHowItWorks(t: TranslatorLike, base: string): HowStep[] {
  return readObjectArray(t, `${base}.howItWorks`)
    .map((obj) => {
      const title = obj.title;
      const description = obj.description;
      if (typeof title !== "string" || typeof description !== "string") return null;
      return { title, description };
    })
    .filter((v): v is HowStep => Boolean(v));
}

function optionalString(t: TranslatorLike, key: string): string | undefined {
  try {
    const v = t(key);
    return v.trim() ? v : undefined;
  } catch {
    return undefined;
  }
}

function readHeroText(t: TranslatorLike, base: string): string {
  try {
    return t(`${base}.heroText`);
  } catch {
    return t(`${base}.value`);
  }
}

function loadProductDetail(t: TranslatorLike, slug: SoftwarePortfolioSlug): ProductDetailModel {
  const base = `portfolio.products.${slug}`;
  const statusRaw = t(`${base}.status`);
  const status = parseSoftwarePortfolioStatus(statusRaw);
  if (!status) {
    throw new Error(`Invalid software portfolio status for ${slug}: ${statusRaw}`);
  }

  const roadmapNote = optionalString(t, `${base}.roadmapNote`);
  const comingSoonPositioning =
    readStringArray(t, "detail.comingSoonPositioning").length > 0
      ? readStringArray(t, "detail.comingSoonPositioning")
      : readStringArray(t, `${base}.comingSoonPositioning`);

  return {
    slug,
    status,
    statusLabel: t(`portfolio.statusLabels.${status}`),
    title: t(`${base}.title`),
    heroText: readHeroText(t, base),
    solves: readStringArray(t, `${base}.solves`),
    capabilities: readCapabilities(t, base),
    howItWorks: readHowItWorks(t, base),
    whoItsFor: readStringArray(t, `${base}.whoItsFor`),
    outputs: readStringArray(t, `${base}.outputs`),
    roadmapNote,
    comingSoonPositioning: comingSoonPositioning.length ? comingSoonPositioning : undefined,
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, product } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) return {};
  if (!isSoftwarePortfolioSlug(product)) return {};

  const t = await getTranslations({ locale, namespace: "softwarePage" });
  const tt = t as TranslatorLike;
  const model = loadProductDetail(tt, product);

  return {
    title: `${model.title} | ${tt("meta.title")}`,
    description: model.heroText,
  };
}

export default async function SoftwareProductPage({ params }: PageProps) {
  const { locale, product } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();
  setRequestLocale(locale);

  if (!isSoftwarePortfolioSlug(product)) notFound();

  const t = await getTranslations({ locale, namespace: "softwarePage" });
  const tt = t as TranslatorLike;
  const data = loadProductDetail(tt, product);

  return (
    <>
      <section className="border-b border-border bg-surface py-11 sm:py-13">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="flex items-center justify-between gap-4">
            <StatusPill value={data.statusLabel} status={data.status} />
            <Link
              href="/software"
              className="text-sm font-medium text-accent transition-colors hover:text-primary"
            >
              {tt("detail.backToSoftware")}
            </Link>
          </div>
          <h1 className="mt-5 max-w-5xl text-balance text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {data.title}
          </h1>
          <p className="mt-4 max-w-5xl text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
            {data.heroText}
          </p>

          {data.status === "coming_soon" ? (
            <div className="mt-6 rounded-3xl border border-border bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-foreground">
                    {tt("detail.comingSoonPanelTitle")}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                    {data.comingSoonPositioning?.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                        <span className="min-w-0">{line}</span>
                      </li>
                    ))}
                  </ul>
                  {data.roadmapNote ? (
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                      {data.roadmapNote}
                    </p>
                  ) : null}
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col md:items-stretch">
                  <AppButton
                    asChild
                    className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
                  >
                    <Link href="/contact">{tt("portfolio.ctas.requestEarlyAccess")}</Link>
                  </AppButton>
                  <AppButton variant="outline" asChild>
                    <Link href="/contact">{tt("portfolio.ctas.talkToTeam")}</Link>
                  </AppButton>
                </div>
              </div>
            </div>
          ) : null}

          <CtaRow status={data.status} t={tt} />
        </Container>
      </section>

      <section className="border-b border-border bg-[var(--section-tint)] py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <SectionHeading
            titleAs="h2"
            accentRule
            eyebrow=""
            title={tt("detail.sections.whatItSolves")}
            description=""
          />
          <div className="mt-6 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {data.solves.map((p) => (
              <article
                key={p}
                className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7"
              >
                <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                  {p}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <SectionHeading
            titleAs="h2"
            accentRule
            eyebrow=""
            title={tt("detail.sections.keyCapabilities")}
            description=""
          />
          <div className="mt-7 grid gap-4.5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5.5">
            {data.capabilities.map((c) => (
              <article
                key={c.title}
                className="rounded-3xl border border-border bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7"
              >
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                  {c.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-[var(--section-tint)] py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <SectionHeading
            titleAs="h2"
            accentRule
            eyebrow=""
            title={tt("detail.sections.howItWorks")}
            description=""
          />
          <div className="mt-7 grid gap-4.5 sm:grid-cols-2 xl:grid-cols-3">
            {data.howItWorks.map((s, idx) => (
              <article
                key={s.title}
                className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-xs font-semibold text-primary">
                    {idx + 1}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <SectionHeading
            titleAs="h2"
            accentRule
            eyebrow=""
            title={tt("detail.sections.whoItsFor")}
            description=""
          />
          <div className="mt-6 grid gap-4.5 sm:grid-cols-2">
            <ul className="space-y-2.5 border-l-2 border-accent/30 pl-4">
              {data.whoItsFor.map((b) => (
                <li
                  key={b}
                  className="text-[0.9375rem] leading-relaxed text-foreground sm:text-base sm:leading-[1.55]"
                >
                  {b}
                </li>
              ))}
            </ul>
            <div className="rounded-3xl border border-border bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7">
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.6]">
                {tt("detail.whoSupportingNote")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-[var(--section-tint)] py-10 sm:py-12">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <SectionHeading
            titleAs="h2"
            accentRule
            eyebrow=""
            title={tt("detail.sections.outputs")}
            description=""
          />
          <div className="mt-6 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.outputs.map((o) => (
              <div
                key={o}
                className="rounded-3xl border border-border bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7"
              >
                <p className="text-[0.9375rem] leading-relaxed text-foreground sm:text-base sm:leading-[1.55]">
                  {o}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary text-primary-foreground pt-9 pb-7 sm:pt-10 sm:pb-8 md:pt-11 md:pb-9">
        <Container className="flex max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="mx-auto max-w-[min(100%,38rem)] text-balance text-pretty text-[1.25rem] font-semibold leading-snug tracking-[-0.015em] text-primary-foreground sm:text-2xl sm:leading-snug md:text-[1.625rem]">
            {tt("detail.finalCta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/88 sm:mt-5 sm:text-lg sm:leading-[1.65]">
            {tt("detail.finalCta.description")}
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
            <AppButton
              asChild
              className="border-transparent bg-primary-foreground text-primary shadow-md shadow-black/10 hover:bg-primary-foreground hover:shadow-lg"
            >
              <Link href="/contact">
                {data.status === "coming_soon"
                  ? tt("portfolio.ctas.requestEarlyAccess")
                  : tt("portfolio.ctas.requestDemo")}
              </Link>
            </AppButton>
            <AppButton
              variant="outline"
              asChild
              className="border-primary-foreground/50 bg-transparent text-primary-foreground shadow-none hover:border-accent hover:bg-accent/15 hover:text-primary-foreground"
            >
              <Link href="/contact">{tt("portfolio.ctas.talkToTeam")}</Link>
            </AppButton>
          </div>
        </Container>
      </section>
    </>
  );
}

