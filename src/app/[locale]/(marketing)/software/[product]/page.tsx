import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AppButton } from "@/components/ui/app-button";
import { AgriClimateProductScreenshot } from "@/components/software/agri-climate-product-screenshot";
import { CbamComplianceConsoleProductVisual } from "@/components/software/cbam-compliance-console-product-visual";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { IntlTranslator } from "@/lib/i18n-types";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { isSoftwarePortfolioSlug, type SoftwarePortfolioSlug } from "@/lib/software-portfolio";

const CBAM_CALCULATION_ENGINE_SCREENSHOT = "/software/cbam-calculation-engine-dashboard.png";

type PageProps = Readonly<{
  params: Promise<{ locale: string; product: string }>;
}>;

type TranslatorLike = IntlTranslator & ((key: string) => string);

type Capability = Readonly<{ title: string; description: string }>;
type HowStep = Readonly<{ title: string; description: string }>;

type ProductDetailModel = Readonly<{
  slug: SoftwarePortfolioSlug;
  pill?: string;
  title: string;
  heroText: string;
  solves: string[];
  capabilities: Capability[];
  howItWorks: HowStep[];
  whoItsFor: string[];
  outputs: string[];
}>;

function CtaRow({ t }: { t: TranslatorLike }) {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      <AppButton
        asChild
        className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
      >
        <Link href="/contact">{t("hero.primaryCta")}</Link>
      </AppButton>
      <AppButton variant="outline" asChild>
        <Link href="/contact">{t("finalCta.secondaryCta")}</Link>
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

  return {
    slug,
    pill: optionalString(t, `${base}.pill`),
    title: t(`${base}.title`),
    heroText: readHeroText(t, base),
    solves: readStringArray(t, `${base}.solves`),
    capabilities: readCapabilities(t, base),
    howItWorks: readHowItWorks(t, base),
    whoItsFor: readStringArray(t, `${base}.whoItsFor`),
    outputs: readStringArray(t, `${base}.outputs`),
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
            {data.pill ? (
              <span className="inline-flex rounded-full border border-accent/28 bg-accent/[0.10] px-2.5 py-0.5 text-[0.6875rem] font-semibold tracking-wide text-primary">
                {data.pill}
              </span>
            ) : (
              <span aria-hidden className="inline-block min-w-0" />
            )}
            <Link
              href="/software"
              className="shrink-0 text-sm font-medium text-accent transition-colors hover:text-primary"
            >
              {tt("detail.backToSoftware")}
            </Link>
          </div>
          {data.slug === "cbam-compliance-console" ? (
            <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              <div className="min-w-0">
                <h1 className="max-w-5xl text-balance text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {data.title}
                </h1>
                <p className="mt-4 max-w-5xl text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
                  {data.heroText}
                </p>
                <CtaRow t={tt} />
              </div>
              <div className="min-w-0 lg:justify-self-end lg:max-w-none">
                <CbamComplianceConsoleProductVisual
                  alt={tt("portfolio.products.cbam-compliance-console.screenshotAlt")}
                  priority
                  className="w-full max-w-2xl lg:max-w-none xl:max-w-[min(100%,36rem)]"
                />
              </div>
            </div>
          ) : (
            <>
              <h1 className="mt-5 max-w-5xl text-balance text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {data.title}
              </h1>
              <p className="mt-4 max-w-5xl text-pretty text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]">
                {data.heroText}
              </p>

              <CtaRow t={tt} />

              {data.slug === "agri-climate-platform" ? (
                <div className="mt-8 w-full max-w-5xl">
                  <AgriClimateProductScreenshot
                    alt={tt("portfolio.products.agri-climate-platform.screenshotAlt")}
                    priority
                  />
                </div>
              ) : data.slug === "cbam-calculation-engine" ? (
                <div className="mt-8 w-full max-w-5xl">
                  <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex w-full justify-center">
                      <Image
                        src={CBAM_CALCULATION_ENGINE_SCREENSHOT}
                        alt={tt("portfolio.products.cbam-calculation-engine.screenshotAlt")}
                        width={1920}
                        height={1080}
                        className="h-auto max-h-[min(72vh,44rem)] w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 896px"
                        priority
                      />
                    </div>
                  </div>
                  <p className="mx-auto mt-3 max-w-3xl text-pretty text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {tt("portfolio.products.cbam-calculation-engine.modalVisualCaption")}
                  </p>
                </div>
              ) : null}
            </>
          )}
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
            <AppButton variant="inverseSolid" asChild size="lg">
              <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
                {tt("finalCta.primaryCta")}
              </a>
            </AppButton>
            <AppButton variant="inverseOutline" asChild size="lg">
              <Link href="/contact">{tt("finalCta.secondaryCta")}</Link>
            </AppButton>
          </div>
        </Container>
      </section>
    </>
  );
}

