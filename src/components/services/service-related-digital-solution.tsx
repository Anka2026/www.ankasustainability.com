import { Layers } from "lucide-react";

import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SoftwareModulePreviewPanel } from "@/components/software/software-module-preview-panel";
import { Link } from "@/i18n/navigation";
import type { IntlTranslator } from "@/lib/i18n-types";
import { getServiceDigitalModuleSlugs } from "@/lib/service-digital-solution-map";
import type { ServicesCategoryId } from "@/lib/services-categories";
import type { SoftwarePortfolioDisplaySlug } from "@/lib/software-module-anchors";
import { softwareHrefForDisplaySlug } from "@/lib/software-module-anchors";
import { getSoftwareDashboardImageSrc } from "@/lib/software-visual-assets";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
  categoryId: ServicesCategoryId;
}>;

type ModuleCardLayout = "split" | "stacked";

function readStringArray(t: IntlTranslator, key: string): string[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((v): v is string => typeof v === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function optionalTranslated(t: IntlTranslator, key: string): string | undefined {
  const tAny = t as unknown as { has?: (k: string) => boolean };
  if (typeof tAny.has === "function" && !tAny.has(key)) {
    return undefined;
  }
  try {
    const v = t(key).trim();
    if (!v || v === key) return undefined;
    return v;
  } catch {
    return undefined;
  }
}

function moduleCtaLabel(t: IntlTranslator): string {
  return optionalTranslated(t, "relatedDigitalSolution.moduleCta") ?? t("relatedDigitalSolution.cta");
}

function allSoftwareCtaLabel(t: IntlTranslator): string {
  return (
    optionalTranslated(t, "relatedDigitalSolution.allSoftwareCta") ??
    optionalTranslated(t, "relatedDigitalSolution.footerCta") ??
    t("relatedDigitalSolution.cta")
  );
}

function CapabilityChips({ chips }: { chips: readonly string[] }) {
  if (!chips.length) return null;
  return (
    <ul className="mt-4 flex max-w-prose flex-wrap gap-2">
      {chips.map((chip) => (
        <li
          key={chip}
          className="inline-flex max-w-full items-center rounded-full border border-accent/25 bg-accent/[0.06] px-3 py-1.5 text-xs font-semibold tracking-tight text-foreground shadow-[0_1px_2px_rgba(8,145,178,0.08)]"
        >
          <span className="min-w-0 break-words text-left">{chip}</span>
        </li>
      ))}
    </ul>
  );
}

function digitalModuleBase(slug: SoftwarePortfolioDisplaySlug): string {
  return `relatedDigitalSolution.digitalModules.${slug}`;
}

function DigitalModuleCard({
  t,
  slug,
  title,
  description,
  chips,
  layout,
}: Readonly<{
  t: IntlTranslator;
  slug: SoftwarePortfolioDisplaySlug;
  title: string;
  description: string;
  chips: readonly string[];
  layout: ModuleCardLayout;
}>) {
  const previewBadge = t("relatedDigitalSolution.previewBadge");
  const imageSrc = getSoftwareDashboardImageSrc(slug);
  const href = softwareHrefForDisplaySlug(slug);
  const isSplit = layout === "split";

  const preview = (
    <SoftwareModulePreviewPanel
      imageSrc={imageSrc}
      imageAlt={title}
      fallbackTitle={title}
      previewBadge={previewBadge}
      fallbackChips={chips}
      density="service"
    />
  );

  return (
    <div
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-[0_22px_60px_-42px_rgba(15,23,42,0.22)] ring-1 ring-inset ring-primary/[0.04]",
        "transition-[border-color,box-shadow] duration-200 hover:border-accent/35 hover:shadow-[0_28px_72px_-40px_rgba(8,145,178,0.38)]",
      )}
    >
      <div
        className={cn(
          "grid min-h-0 w-full flex-1 gap-5 p-5 sm:gap-6 sm:p-6",
          isSplit
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(17.5rem,22.5rem)] xl:grid-cols-[minmax(0,1fr)_minmax(280px,380px)] lg:items-stretch lg:gap-8"
            : "grid-cols-1",
        )}
      >
        {!isSplit ? <div className="min-w-0">{preview}</div> : null}

        <div className="flex min-h-0 min-w-0 flex-col">
          <h3 className="text-balance text-pretty text-lg font-semibold leading-snug tracking-tight text-primary sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-pretty text-[0.9375rem] leading-[1.68] text-muted-foreground sm:text-base sm:leading-[1.7]">
            {description}
          </p>
          <CapabilityChips chips={chips} />
          <div className="mt-auto pt-6">
            <AppButton
              asChild
              size="sm"
              className={cn(
                "h-10 border border-accent/50 bg-accent px-4 text-accent-foreground shadow-[0_12px_32px_-18px_rgba(8,145,178,0.5)]",
                "hover:border-accent hover:bg-accent hover:brightness-[1.03]",
              )}
            >
              <Link href={href} className="whitespace-nowrap">
                {moduleCtaLabel(t)}
              </Link>
            </AppButton>
          </div>
        </div>

        {isSplit ? <div className="min-w-0 lg:flex lg:items-stretch">{preview}</div> : null}
      </div>
    </div>
  );
}

function CbamBandModuleCards({ t }: { t: IntlTranslator }) {
  const submodules = readStringArray(t, "relatedDigitalSolution.modules.cbam.submodules");
  const focuses = readStringArray(t, "relatedDigitalSolution.modules.cbam.submoduleFocus");
  const slugs: SoftwarePortfolioDisplaySlug[] = ["cbam-calculation-engine", "cbam-compliance-console"];

  return (
    <div className="mt-9 grid w-full gap-6 sm:grid-cols-2 sm:items-stretch sm:gap-7">
      {slugs.map((slug, idx) => {
        const title = submodules[idx] ?? t(`${digitalModuleBase(slug)}.title`);
        const description = focuses[idx] ?? t(`${digitalModuleBase(slug)}.description`);
        const chips = readStringArray(t, `${digitalModuleBase(slug)}.chips`).slice(0, 3);
        return (
          <DigitalModuleCard
            key={slug}
            t={t}
            slug={slug}
            title={title}
            description={description}
            chips={chips}
            layout="stacked"
          />
        );
      })}
    </div>
  );
}

function StandardModuleCards({
  t,
  slugs,
}: {
  t: IntlTranslator;
  slugs: readonly SoftwarePortfolioDisplaySlug[];
}) {
  const isSingle = slugs.length === 1;

  return (
    <div
      className={cn(
        "mt-9 grid w-full gap-6 sm:gap-7",
        isSingle ? "grid-cols-1" : "sm:grid-cols-2 sm:items-stretch",
      )}
    >
      {slugs.map((slug) => {
        const base = digitalModuleBase(slug);
        const title = t(`${base}.title`);
        const description = t(`${base}.description`);
        const chips = readStringArray(t, `${base}.chips`).slice(0, 3);
        return (
          <DigitalModuleCard
            key={slug}
            t={t}
            slug={slug}
            title={title}
            description={description}
            chips={chips}
            layout={isSingle ? "split" : "stacked"}
          />
        );
      })}
    </div>
  );
}

export function ServiceRelatedDigitalSolution({ t, categoryId }: Props) {
  const slugs = getServiceDigitalModuleSlugs(categoryId);
  if (!slugs.length) return null;

  const isCarbon = categoryId === "carbonClimate";
  const bandTitle = isCarbon
    ? t("relatedDigitalSolution.modules.cbam.title")
    : t("relatedDigitalSolution.mainTitle");

  const cbamLead = isCarbon ? t("relatedDigitalSolution.modules.cbam.description") : "";
  const sharedIntro = t("relatedDigitalSolution.intro");
  const extraNote = optionalTranslated(t, `relatedDigitalSolution.categoryBand.${categoryId}.extraNote`);

  return (
    <section
      className={cn(
        "border-b border-border/80 py-14 sm:py-16 md:py-[4.25rem]",
        "bg-[linear-gradient(168deg,color-mix(in_srgb,var(--accent-soft)_28%,var(--background))_0%,var(--background)_38%,color-mix(in_srgb,var(--section-teal-wash)_55%,var(--background))_100%)]",
      )}
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <article
          className={cn(
            "relative w-full overflow-hidden rounded-[1.5rem] border border-accent/20",
            "bg-gradient-to-br from-surface via-[color-mix(in_srgb,var(--accent-soft)_14%,var(--surface))] to-slate-50/55",
            "p-6 shadow-[0_36px_88px_-48px_rgba(8,145,178,0.42)] ring-1 ring-inset ring-accent/12 sm:p-8 lg:p-10",
            "before:pointer-events-none before:absolute before:inset-0 before:opacity-[0.4] before:[background-image:linear-gradient(rgba(8,145,178,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.04)_1px,transparent_1px)] before:[background-size:36px_36px]",
            "after:pointer-events-none after:absolute after:-right-16 after:-top-20 after:h-56 after:w-56 after:rounded-full after:bg-[radial-gradient(circle,rgba(8,145,178,0.14),transparent_68%)]",
          )}
        >
          <div
            className="pointer-events-none absolute inset-y-5 left-0 z-[1] w-[3px] rounded-full bg-gradient-to-b from-accent via-accent/75 to-primary/40 sm:inset-y-6"
            aria-hidden
          />

          <div className="relative z-[2] min-w-0 pl-4 sm:pl-5">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-accent">
              {t("relatedDigitalSolution.eyebrow")}
            </p>
            <div className="mt-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.08] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]">
                <Layers className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="min-w-0 max-w-[min(100%,52rem)] flex-1 text-balance text-pretty text-xl font-semibold tracking-tight text-primary sm:text-2xl lg:text-3xl lg:leading-[1.15]">
                {bandTitle}
              </h2>
            </div>

            {isCarbon ? (
              <div className="mt-5 max-w-[min(100%,56rem)] space-y-4">
                <p className="text-pretty text-[0.9375rem] leading-[1.72] text-muted-foreground sm:text-base sm:leading-[1.74]">
                  {cbamLead}
                </p>
                <p className="text-pretty text-[0.9375rem] leading-[1.72] text-muted-foreground sm:text-base sm:leading-[1.74]">
                  {sharedIntro}
                </p>
              </div>
            ) : (
              <div className="mt-5 max-w-[min(100%,56rem)] space-y-4">
                <p className="text-pretty text-[0.9375rem] leading-[1.72] text-muted-foreground sm:text-base sm:leading-[1.74]">
                  {sharedIntro}
                </p>
                {extraNote ? (
                  <p className="text-pretty text-[0.9375rem] leading-[1.72] text-muted-foreground/95 sm:text-base sm:leading-[1.74]">
                    {extraNote}
                  </p>
                ) : null}
              </div>
            )}

            {isCarbon ? <CbamBandModuleCards t={t} /> : <StandardModuleCards t={t} slugs={slugs} />}

            <div className="mt-9 flex justify-start border-t border-accent/14 pt-7 sm:mt-10">
              <AppButton
                asChild
                variant="outline"
                size="sm"
                className="h-10 border-border/80 bg-background/90 text-foreground hover:border-accent/40 hover:bg-accent/[0.05]"
              >
                <Link href="/software" className="whitespace-nowrap px-1">
                  {allSoftwareCtaLabel(t)}
                </Link>
              </AppButton>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

