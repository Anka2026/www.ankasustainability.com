import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectorDetailHeroAside } from "@/components/sectors/sector-detail-hero-aside";
import { Link } from "@/i18n/navigation";
import { SECTOR_ICONS } from "@/lib/sectors-order";
import type { SectorId } from "@/lib/sectors-order";
import {
  SECTOR_DETAIL_SECTION_KEYS,
  type SectorDetailSectionKey,
} from "@/lib/sectors-content-keys";
import {
  sectorAccentDividerClassName,
  sectorDetailBodyGridClassName,
  sectorDetailBodySectionClassName,
  sectorDetailContainerClassName,
  sectorDetailHeroMainColumnClassName,
  sectorDetailHeroPanelClassName,
  sectorDetailHeroShellClassName,
  sectorDetailHeroSplitGridClassName,
  sectorDetailHeroSummaryClassName,
  sectorDetailRelatedAsideClassName,
  sectorDetailSectionCardClassName,
  sectorDetailSectionsStackClassName,
  sectorHeroEyebrowClassName,
  sectorHeroIconClassName,
  sectorHeroIntroParagraphClassName,
  sectorMetaChipClassName,
} from "@/lib/sectors-premium-classes";
import type { SectorSlug } from "@/lib/sectors-routing";
import { sectorIdFromSlug } from "@/lib/sectors-routing";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Layers,
  Target,
  TriangleAlert,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

type SectionContent = Readonly<{
  paragraphs?: readonly string[];
  bullets?: readonly string[];
}>;

type RelatedWorkItem = Readonly<{
  label: string;
  href: string;
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

function readTechnicalIntro(raw: unknown): Readonly<{
  paragraphs: string[];
  closing?: string;
}> {
  if (typeof raw !== "object" || raw === null) return { paragraphs: [] };
  const hero = (raw as Record<string, unknown>).hero;
  if (typeof hero !== "object" || hero === null) return { paragraphs: [] };
  const intro = (hero as Record<string, unknown>).technicalIntro;
  if (typeof intro !== "object" || intro === null) return { paragraphs: [] };
  const o = intro as Record<string, unknown>;
  const paragraphs = readStringArray(o.paragraphs);
  const closing = typeof o.closing === "string" ? o.closing : undefined;
  return { paragraphs, closing };
}

function readRelatedWork(raw: unknown): RelatedWorkItem[] {
  if (typeof raw !== "object" || raw === null) return [];
  const items = (raw as { items?: unknown }).items;
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      if (typeof item !== "object" || item === null) return null;
      const o = item as Record<string, unknown>;
      if (typeof o.label !== "string" || typeof o.href !== "string") return null;
      return { label: o.label, href: o.href };
    })
    .filter((v): v is RelatedWorkItem => v !== null);
}

const SECTION_ICONS: Record<SectorDetailSectionKey, typeof Layers> = {
  reality: Layers,
  criticalAreas: Target,
  challenges: TriangleAlert,
  ankaApproach: Target,
};

function SectionHeading({
  label,
  sectionKey,
}: {
  label: string;
  sectionKey: SectorDetailSectionKey;
}) {
  const Icon = SECTION_ICONS[sectionKey];
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-accent/22 bg-accent/[0.08] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]">
        <Icon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.85} aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div className={sectorAccentDividerClassName()} aria-hidden />
        <h2 className="mt-3 text-pretty text-balance text-base font-semibold tracking-[-0.02em] text-foreground sm:text-[1.125rem] lg:text-[1.1875rem]">
          {label}
        </h2>
      </div>
    </div>
  );
}

function SectorSectionBlock({
  sectionKey,
  label,
  content,
}: {
  sectionKey: SectorDetailSectionKey;
  label: string;
  content: SectionContent;
}) {
  if (!content.paragraphs?.length && !content.bullets?.length) return null;

  const isReality = sectionKey === "reality";
  const isApproach = sectionKey === "ankaApproach";
  const isChallenges = sectionKey === "challenges";
  const isCriticalAreas = sectionKey === "criticalAreas";
  const cardVariant = isReality ? "reality" : isApproach ? "approach" : "default";

  return (
    <article
      id={`sector-section-${sectionKey}`}
      className={sectorDetailSectionCardClassName(cardVariant)}
    >
      <SectionHeading label={label} sectionKey={sectionKey} />
      {content.paragraphs?.map((p) => (
        <p
          key={p.slice(0, 48)}
          className={cn(
            "mt-4 text-pretty text-sm leading-relaxed sm:text-[0.9375rem] sm:leading-[1.65]",
            isApproach && "font-medium text-foreground",
            !isApproach && "text-muted-foreground",
          )}
        >
          {p}
        </p>
      ))}
      {content.bullets && content.bullets.length > 0 ? (
        <ul
          className={cn(
            "mt-5 gap-3",
            isCriticalAreas && "grid sm:grid-cols-2",
            isChallenges && "space-y-2",
            !isCriticalAreas && !isChallenges && "space-y-2.5",
          )}
        >
          {content.bullets.map((item) => (
            <li
              key={item}
              className={cn(
                "flex gap-3 text-pretty text-sm leading-relaxed text-foreground/90 sm:text-[0.9375rem]",
                !isChallenges &&
                  "rounded-xl border border-border/70 bg-background/80 px-3.5 py-3",
              )}
            >
              {!isChallenges ? (
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-accent/25 bg-accent/[0.08] text-accent"
                  aria-hidden
                >
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
              ) : (
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" aria-hidden />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export async function SectorDetailView({ slug }: { slug: SectorSlug }) {
  const sectorId = sectorIdFromSlug(slug) as SectorId;
  const t = await getTranslations("sectorsPage");
  const Icon = SECTOR_ICONS[sectorId];
  const gridBase = `grid.sectors.${sectorId}`;
  const detailBase = `sectorDetails.${slug}`;

  const sectionLabels = {
    reality: t("detail.sectionLabels.reality"),
    criticalAreas: t("detail.sectionLabels.criticalAreas"),
    challenges: t("detail.sectionLabels.challenges"),
    ankaApproach: t("detail.sectionLabels.ankaApproach"),
  } satisfies Record<SectorDetailSectionKey, string>;

  const detailRaw = t.raw(detailBase) as Record<string, unknown>;
  const sectionsRaw =
    typeof detailRaw === "object" && detailRaw !== null && "sections" in detailRaw
      ? detailRaw.sections
      : null;
  const chips = readStringArray(
    typeof detailRaw?.hero === "object" && detailRaw.hero !== null
      ? (detailRaw.hero as { chips?: unknown }).chips
      : [],
  );
  const technicalIntro = readTechnicalIntro(detailRaw);
  const relatedWork = readRelatedWork(detailRaw?.relatedWork);
  const focusAreas = [
    t(`${gridBase}.focus1`),
    t(`${gridBase}.focus2`),
    t(`${gridBase}.focus3`),
  ];
  const criticalBullets =
    typeof sectionsRaw === "object" && sectionsRaw !== null
      ? (readSection((sectionsRaw as Record<string, unknown>).criticalAreas).bullets ?? [])
      : [];
  const technicalParagraphs = technicalIntro.paragraphs.slice(0, 2);
  const sectorTitle = t(`${gridBase}.title`);

  return (
    <>
      <section className={sectorDetailHeroShellClassName()}>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_12%_0%,rgba(8,145,178,0.12),transparent_55%)]"
          aria-hidden
        />
        <Container className={cn(sectorDetailContainerClassName(), "py-10 sm:py-14 md:py-16")}>
          <Link
            href="/sectors"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary/90 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            {t("detail.backToSectors")}
          </Link>

          <div className={sectorDetailHeroPanelClassName()}>
            <div className={sectorDetailHeroSplitGridClassName()}>
              <div className={sectorDetailHeroMainColumnClassName()}>
                <span className={sectorHeroEyebrowClassName()}>{t("hero.eyebrow")}</span>
                <div className="mt-5 flex items-start gap-4 sm:mt-6">
                  <span className={sectorHeroIconClassName()}>
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
                  </span>
                  <h1 className="min-w-0 flex-1 text-balance text-pretty text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-[2.35rem] sm:leading-[1.06] md:text-[2.5rem]">
                    {sectorTitle}
                  </h1>
                </div>
                <p className={sectorDetailHeroSummaryClassName()}>{t(`${gridBase}.description`)}</p>
                {technicalParagraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className={cn(sectorHeroIntroParagraphClassName(), "mt-4 sm:mt-5")}
                  >
                    {paragraph}
                  </p>
                ))}
                {chips.length > 0 ? (
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {chips.map((chip) => (
                      <span key={chip} className={sectorMetaChipClassName()}>
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <SectorDetailHeroAside
                sectorTitle={sectorTitle}
                Icon={Icon}
                focusStripLabel={t("detail.focusStripLabel")}
                focusAreas={focusAreas}
                criticalAreasLabel={sectionLabels.criticalAreas}
                criticalBullets={criticalBullets}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={sectorDetailBodySectionClassName()}>
        <Container className={sectorDetailContainerClassName()}>
          <div className={sectorDetailBodyGridClassName()}>
            <div className={sectorDetailSectionsStackClassName()}>
            {SECTOR_DETAIL_SECTION_KEYS.map((sectionKey) => {
              const sectionData =
                typeof sectionsRaw === "object" && sectionsRaw !== null
                  ? readSection((sectionsRaw as Record<string, unknown>)[sectionKey])
                  : {};
              return (
                <SectorSectionBlock
                  key={sectionKey}
                  sectionKey={sectionKey}
                  label={sectionLabels[sectionKey]}
                  content={sectionData}
                />
              );
            })}
            </div>

            {relatedWork.length > 0 ? (
              <aside className={sectorDetailRelatedAsideClassName()}>
                <h2 className="text-pretty text-balance text-base font-semibold tracking-[-0.02em] text-foreground sm:text-[1.125rem]">
                  {t("detail.relatedWorkTitle")}
                </h2>
                <ul className="mt-5 space-y-3">
                  {relatedWork.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="group flex min-h-[3.25rem] items-center justify-between gap-3 rounded-xl border border-border/80 bg-surface px-4 py-3.5 text-sm font-medium text-foreground shadow-[0_8px_24px_-18px_rgba(15,23,42,0.2)] transition-[border-color,box-shadow] hover:border-accent/30 hover:shadow-[0_12px_32px_-20px_rgba(8,145,178,0.25)]"
                      >
                        <span className="min-w-0 text-pretty leading-snug">{item.label}</span>
                        <ArrowUpRight
                          className="h-4 w-4 shrink-0 text-accent opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-border/70 pt-6">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {t("detail.relatedServicesEyebrow")}
                  </p>
                  <AppButton variant="outline" asChild className="mt-3 w-full border-primary/20 sm:w-auto">
                    <Link href="/services">{t("detail.relatedServicesCta")}</Link>
                  </AppButton>
                </div>
              </aside>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
}
