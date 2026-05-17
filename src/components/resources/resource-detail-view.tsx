import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { Link } from "@/i18n/navigation";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import {
  RESOURCE_DETAIL_SECTION_KEYS,
  type ResourceDetailSectionKey,
  type ResourceFeaturedSlug,
} from "@/lib/insights-content-keys";
import { goldAccentLabelClassName, goldMicroHairlineClassName } from "@/lib/brand-gold-accent";
import { ResourceDetailHeroVisual } from "@/components/resources/resource-detail-hero-visual";
import {
  resourceAccentDividerClassName,
  resourceCategoryBadgeClassName,
  resourceDetailHeroGridClassName,
  resourceDetailHeroPanelClassName,
  resourceDetailHeroShellClassName,
  resourceInsightChipClassName,
  resourceSidebarHighlightClassName,
  resourceSidebarPanelClassName,
} from "@/lib/resources-premium-classes";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowLeft,
  Check,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

type SectionContent = Readonly<{
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}>;

function readSection(raw: unknown): SectionContent {
  if (typeof raw !== "object" || raw === null) return {};
  const o = raw as Record<string, unknown>;
  const paragraphs = Array.isArray(o.paragraphs)
    ? o.paragraphs.filter((v): v is string => typeof v === "string")
    : undefined;
  const bullets = Array.isArray(o.bullets)
    ? o.bullets.filter((v): v is string => typeof v === "string")
    : undefined;
  return { paragraphs, bullets };
}

function readStringArray(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter((v): v is string => typeof v === "string");
}

function SectionHeading({
  label,
  icon: Icon,
  accent = "teal",
}: {
  label: string;
  icon: typeof Lightbulb;
  accent?: "teal" | "muted";
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={cn(
          "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]",
          accent === "teal" && "border-accent/22 bg-accent/[0.08] text-accent",
          accent === "muted" && "border-border/90 bg-muted/50 text-primary",
        )}
      >
        <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.85} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div className={resourceAccentDividerClassName()} aria-hidden />
        <h2 className="mt-3 text-base font-semibold tracking-[-0.02em] text-foreground sm:text-[1.125rem]">
          {label}
        </h2>
      </div>
    </div>
  );
}

function WhyMattersBlock({ label, content }: { label: string; content: SectionContent }) {
  if (!content.paragraphs?.length && !content.bullets?.length) return null;

  return (
    <article
      id="resource-section-whyMatters"
      className={cn(
        "scroll-mt-32 relative overflow-hidden rounded-[1.5rem] border border-primary/12",
        "bg-gradient-to-br from-[var(--section-teal-wash)] via-surface to-background",
        "p-6 shadow-[0_20px_56px_-36px_rgba(15,23,42,0.14)] ring-1 ring-inset ring-accent/10 sm:p-8",
      )}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.08),transparent_65%)]"
        aria-hidden
      />
      <div className="relative">
        <SectionHeading label={label} icon={Lightbulb} accent="teal" />
        <div className="mt-5 max-w-3xl space-y-4">
          {content.paragraphs?.map((p) => (
            <p
              key={p.slice(0, 48)}
              className="text-pretty text-[0.9375rem] font-medium leading-[1.68] text-foreground/92 sm:text-base sm:leading-[1.72]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

function WhoItConcernsBlock({ label, content }: { label: string; content: SectionContent }) {
  const bullets = content.bullets ?? [];
  if (!bullets.length && !content.paragraphs?.length) return null;

  return (
    <article
      id="resource-section-whoItConcerns"
      className="scroll-mt-32 rounded-[1.25rem] border border-border/80 bg-muted/30 p-5 sm:p-6"
    >
      <SectionHeading label={label} icon={Users} accent="muted" />
      {content.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
      {bullets.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {bullets.map((item) => (
            <li
              key={item}
              className="inline-flex max-w-full items-center rounded-full border border-primary/14 bg-surface px-3.5 py-2 text-[0.8125rem] font-medium leading-snug text-foreground/88 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function CriticalAreasBlock({ label, content }: { label: string; content: SectionContent }) {
  const bullets = content.bullets ?? [];
  if (!bullets.length && !content.paragraphs?.length) return null;

  return (
    <article
      id="resource-section-criticalAreas"
      className="scroll-mt-32 rounded-[1.25rem] border border-border/90 bg-surface p-5 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.04] sm:p-6"
    >
      <SectionHeading label={label} icon={Target} accent="teal" />
      {content.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
      {bullets.length > 0 ? (
        <ul className="mt-5 space-y-2.5">
          {bullets.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-border/70 bg-background/80 px-3.5 py-3"
            >
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.08] text-accent"
                aria-hidden
              >
                <Check className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="text-pretty text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function CommonMistakesBlock({ label, content }: { label: string; content: SectionContent }) {
  const bullets = content.bullets ?? [];
  if (!bullets.length && !content.paragraphs?.length) return null;

  return (
    <article
      id="resource-section-commonMistakes"
      className={cn(
        "scroll-mt-32 rounded-[1.25rem] border border-border/85 bg-surface p-5 sm:p-6",
        "shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.04]",
      )}
    >
      <SectionHeading label={label} icon={AlertTriangle} accent="muted" />
      {content.paragraphs?.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {p}
        </p>
      ))}
      {bullets.length > 0 ? (
        <ul className="mt-5 space-y-2">
          {bullets.map((item) => (
            <li key={item} className="flex gap-2.5 text-pretty text-sm leading-relaxed text-foreground/85">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function AnkaApproachBlock({ label, content }: { label: string; content: SectionContent }) {
  if (!content.paragraphs?.length && !content.bullets?.length) return null;

  return (
    <article
      id="resource-section-ankaApproach"
      className={cn(
        "scroll-mt-32 relative overflow-hidden rounded-[1.5rem] border border-primary/20",
        "bg-gradient-to-br from-primary/[0.05] via-surface to-background",
        "p-6 shadow-[0_28px_72px_-40px_rgba(15,23,42,0.18)] ring-1 ring-inset ring-primary/[0.08] sm:p-8",
      )}
    >
      <div className={cn("absolute inset-x-8 top-0", goldMicroHairlineClassName())} aria-hidden />
      <SectionHeading label={label} icon={Target} accent="teal" />
      <div className="mt-5 max-w-3xl space-y-4">
        {content.paragraphs?.map((p, idx) => (
          <p
            key={p.slice(0, 48)}
            className={cn(
              "text-pretty text-sm leading-relaxed sm:text-[0.9375rem] sm:leading-[1.65]",
              idx === 0 ? "font-medium text-foreground" : "text-muted-foreground",
            )}
          >
            {p}
          </p>
        ))}
      </div>
      {content.bullets && content.bullets.length > 0 ? (
        <ul className="mt-5 grid gap-2 sm:grid-cols-2">
          {content.bullets.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-primary/10 bg-surface/80 px-3 py-2.5 text-sm leading-snug text-foreground/88"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ResourceSectionBlock({
  sectionKey,
  label,
  content,
}: {
  sectionKey: ResourceDetailSectionKey;
  label: string;
  content: SectionContent;
}) {
  switch (sectionKey) {
    case "whyMatters":
      return <WhyMattersBlock label={label} content={content} />;
    case "whoItConcerns":
      return <WhoItConcernsBlock label={label} content={content} />;
    case "criticalAreas":
      return <CriticalAreasBlock label={label} content={content} />;
    case "commonMistakes":
      return <CommonMistakesBlock label={label} content={content} />;
    case "ankaApproach":
      return <AnkaApproachBlock label={label} content={content} />;
    default:
      return null;
  }
}

function ResourceDetailSidebar({ t }: { t: Awaited<ReturnType<typeof getTranslations>> }) {
  const steps = readStringArray(t.raw("detail.sidebar.steps"));

  return (
    <aside className="lg:sticky lg:top-28">
      <div className={resourceSidebarPanelClassName()}>
        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
          {t("detail.sidebar.eyebrow")}
        </span>
        <h2 className="mt-4 text-pretty text-[1.0625rem] font-semibold leading-snug tracking-[-0.02em] text-foreground">
          {t("detail.sidebar.title")}
        </h2>

        <div className={cn("mt-4", resourceSidebarHighlightClassName())}>
          <p
            className={cn(
              "text-[0.6875rem] font-semibold uppercase tracking-[0.12em]",
              goldAccentLabelClassName(),
            )}
          >
            {t("detail.sidebar.highlightLabel")}
          </p>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            {t("detail.sidebar.description")}
          </p>
        </div>

        {steps.length > 0 ? (
          <ol className="mt-5 space-y-3 border-t border-border/60 pt-5">
            {steps.map((step, idx) => (
              <li key={step} className="flex gap-3">
                <span
                  className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.08] text-[0.6875rem] font-bold text-accent"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <span className="text-pretty text-[0.8125rem] leading-relaxed text-foreground/88 sm:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        ) : null}

        <div className="mt-6 flex flex-col gap-2">
          <AppButton asChild size="lg" className="w-full">
            <a href={COMPANY_BOOKING_URL} target="_blank" rel="noopener noreferrer">
              {t("detail.sidebar.primaryCta")}
            </a>
          </AppButton>
          <AppButton
            variant="ghost"
            asChild
            size="default"
            className="w-full text-muted-foreground hover:text-primary"
          >
            <Link href="/contact">{t("detail.sidebar.secondaryCta")}</Link>
          </AppButton>
        </div>
      </div>
    </aside>
  );
}

export async function ResourceDetailView({ slug }: { slug: ResourceFeaturedSlug }) {
  const t = await getTranslations("insightsPage");
  const base = `featured.items.${slug}`;

  const sectionLabels = {
    whyMatters: t("detail.sectionLabels.whyMatters"),
    whoItConcerns: t("detail.sectionLabels.whoItConcerns"),
    criticalAreas: t("detail.sectionLabels.criticalAreas"),
    commonMistakes: t("detail.sectionLabels.commonMistakes"),
    ankaApproach: t("detail.sectionLabels.ankaApproach"),
  } satisfies Record<ResourceDetailSectionKey, string>;

  const rawItems = t.raw("featured.items") as Record<string, unknown>;
  const itemRaw = rawItems[slug];
  const sectionsRaw =
    typeof itemRaw === "object" && itemRaw !== null && "sections" in itemRaw
      ? (itemRaw as { sections: unknown }).sections
      : null;

  const technicalBriefParagraphs =
    typeof itemRaw === "object" &&
    itemRaw !== null &&
    "technicalBrief" in itemRaw &&
    typeof (itemRaw as { technicalBrief?: unknown }).technicalBrief === "object" &&
    (itemRaw as { technicalBrief: { paragraphs?: unknown } }).technicalBrief !== null
      ? readStringArray((itemRaw as { technicalBrief: { paragraphs?: unknown } }).technicalBrief.paragraphs)
      : [];

  return (
    <>
      <section className={resourceDetailHeroShellClassName()}>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_12%_0%,rgba(8,145,178,0.1),transparent_55%)]"
          aria-hidden
        />
        <Container className="relative max-w-7xl py-11 sm:py-14 xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/90 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            {t("detail.backToResources")}
          </Link>

          <div className={resourceDetailHeroPanelClassName()}>
            <div className={resourceDetailHeroGridClassName()}>
              <div className="min-w-0">
                <span className={resourceCategoryBadgeClassName()}>{t(`${base}.category`)}</span>
            <h1 className="mt-5 max-w-4xl text-balance text-pretty text-[1.875rem] font-semibold leading-[1.12] tracking-[-0.035em] text-foreground sm:text-[2.35rem] sm:leading-[1.08] md:text-[2.5rem]">
              {t(`${base}.title`)}
            </h1>
            <p className="mt-5 max-w-3xl text-pretty text-base leading-[1.7] text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.72]">
              {t(`${base}.description`)}
            </p>

            {technicalBriefParagraphs.length > 0 ? (
              <div className="mt-6 max-w-3xl space-y-4 border-t border-border/60 pt-6">
                {technicalBriefParagraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground/95 sm:text-base sm:leading-[1.7]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ) : null}

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/60 pt-5">
                  <span className={resourceInsightChipClassName()}>
                    {t("detail.hero.metaFormat")}
                  </span>
                  <span className={resourceInsightChipClassName()}>
                    {t("detail.hero.metaFocus")}
                  </span>
                </div>
              </div>

              <ResourceDetailHeroVisual slug={slug} alt={t(`${base}.title`)} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-background py-12 sm:py-16">
        <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:items-start lg:gap-12">
            <div className="min-w-0 space-y-6 sm:space-y-7">
              {RESOURCE_DETAIL_SECTION_KEYS.map((sectionKey) => {
                const sectionData =
                  typeof sectionsRaw === "object" && sectionsRaw !== null
                    ? readSection((sectionsRaw as Record<string, unknown>)[sectionKey])
                    : {};
                return (
                  <ResourceSectionBlock
                    key={sectionKey}
                    sectionKey={sectionKey}
                    label={sectionLabels[sectionKey]}
                    content={sectionData}
                  />
                );
              })}
            </div>

            <ResourceDetailSidebar t={t} />
          </div>
        </Container>
      </section>
    </>
  );
}
