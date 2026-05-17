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
}: Readonly<{
  t: IntlTranslator;
  slug: SoftwarePortfolioDisplaySlug;
  title: string;
  description: string;
  chips: readonly string[];
}>) {
  const previewBadge = t("relatedDigitalSolution.previewBadge");
  const imageSrc = getSoftwareDashboardImageSrc(slug);
  const href = softwareHrefForDisplaySlug(slug);

  return (
    <div
      className={cn(
        "flex min-w-0 flex-col overflow-hidden rounded-2xl border border-accent/14 bg-white/98 shadow-[0_22px_60px_-42px_rgba(8,145,178,0.48)] ring-1 ring-inset ring-accent/[0.07]",
        "transition-[border-color,box-shadow] duration-200 hover:border-accent/28 hover:shadow-[0_28px_72px_-40px_rgba(8,145,178,0.52)]",
      )}
    >
      <div className="grid min-h-0 w-full flex-1 gap-6 p-6 sm:p-7 lg:grid-cols-[minmax(0,1fr)_minmax(17.5rem,0.42fr)] lg:items-start lg:gap-8">
        <div className="min-w-0 max-w-prose lg:max-w-none">
          <h3 className="text-balance text-pretty text-lg font-semibold leading-snug tracking-tight text-primary sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
            {description}
          </p>
          <CapabilityChips chips={chips} />
          <div className="mt-6">
            <AppButton
              asChild
              variant="outline"
              className="border-accent/35 bg-white text-foreground hover:border-accent/55 hover:bg-accent/[0.06]"
            >
              <Link href={href} className="whitespace-normal text-center sm:whitespace-nowrap">
                {t("relatedDigitalSolution.cta")}
              </Link>
            </AppButton>
          </div>
        </div>
        <div className="min-w-0 lg:pt-0.5">
          <SoftwareModulePreviewPanel
            imageSrc={imageSrc}
            imageAlt={title}
            fallbackTitle={title}
            previewBadge={previewBadge}
            fallbackChips={chips}
            density="band"
          />
        </div>
      </div>
    </div>
  );
}

function CbamBandModuleCards({ t }: { t: IntlTranslator }) {
  const submodules = readStringArray(t, "relatedDigitalSolution.modules.cbam.submodules");
  const focuses = readStringArray(t, "relatedDigitalSolution.modules.cbam.submoduleFocus");
  const slugs: SoftwarePortfolioDisplaySlug[] = ["cbam-calculation-engine", "cbam-compliance-console"];

  return (
    <div className="mt-9 grid w-full gap-6 sm:grid-cols-2 sm:gap-7">
      {slugs.map((slug, idx) => {
        const title = submodules[idx] ?? t(`${digitalModuleBase(slug)}.title`);
        const description = focuses[idx] ?? t(`${digitalModuleBase(slug)}.description`);
        const chips = readStringArray(t, `${digitalModuleBase(slug)}.chips`).slice(0, 3);
        return <DigitalModuleCard key={slug} t={t} slug={slug} title={title} description={description} chips={chips} />;
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
  const gridClass = slugs.length >= 2 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <div className={cn("mt-9 grid w-full gap-6 sm:gap-7", gridClass)}>
      {slugs.map((slug) => {
        const base = digitalModuleBase(slug);
        const title = t(`${base}.title`);
        const description = t(`${base}.description`);
        const chips = readStringArray(t, `${base}.chips`).slice(0, 3);
        return <DigitalModuleCard key={slug} t={t} slug={slug} title={title} description={description} chips={chips} />;
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
    <section className="border-b border-border bg-gradient-to-b from-accent/[0.05] via-sky-50/35 to-white py-12 sm:py-16">
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <article
          className={cn(
            "relative w-full overflow-hidden rounded-2xl border border-accent/18 bg-gradient-to-br from-white via-accent/[0.035] to-sky-50/40 p-6 shadow-[0_32px_80px_-48px_rgba(8,145,178,0.38)] ring-1 ring-inset ring-accent/10 sm:p-8 lg:p-11",
          )}
        >
          <div
            className="pointer-events-none absolute inset-y-6 left-0 w-[3px] rounded-full bg-gradient-to-b from-accent via-accent/70 to-primary/35"
            aria-hidden
          />

          <div className="relative min-w-0 pl-4 sm:pl-5">
            <p className="text-xs font-semibold tracking-[0.12em] text-accent">{t("relatedDigitalSolution.eyebrow")}</p>
            <div className="mt-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/[0.08] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]">
                <Layers className="h-5 w-5" aria-hidden />
              </span>
              <h2 className="min-w-0 max-w-[min(100%,48rem)] flex-1 text-balance text-pretty text-xl font-semibold leading-snug tracking-tight text-primary sm:text-2xl sm:leading-snug">
                {bandTitle}
              </h2>
            </div>

            {isCarbon ? (
              <>
                <p className="mt-5 max-w-[min(100%,52rem)] text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {cbamLead}
                </p>
                <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {sharedIntro}
                </p>
              </>
            ) : (
              <>
                <p className="mt-5 max-w-[min(100%,52rem)] text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {sharedIntro}
                </p>
                {extraNote ? (
                  <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.65]">
                    {extraNote}
                  </p>
                ) : null}
              </>
            )}

            {isCarbon ? <CbamBandModuleCards t={t} /> : <StandardModuleCards t={t} slugs={slugs} />}

            <div className="mt-10 border-t border-accent/12 pt-7">
              <AppButton
                asChild
                className={cn(
                  "border border-accent/50 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)]",
                  "hover:border-accent hover:bg-accent hover:brightness-[1.03]",
                )}
              >
                <Link href="/software" className="whitespace-nowrap px-1">
                  {t("relatedDigitalSolution.cta")}
                </Link>
              </AppButton>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
