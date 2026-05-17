import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { SECTOR_ICONS, SECTOR_IDS, type SectorId } from "@/lib/sectors-order";
import { sectorSlugFromId } from "@/lib/sectors-routing";
import {
  sectorsLandingFocusChipClassName,
  sectorsLandingGridSectionClassName,
  sectorsLandingSectionEyebrowClassName,
  sectorsLandingSectionIntroClassName,
  sectorsLandingSectionTitleClassName,
  sectorsLandingSectorCardClassName,
  sectorsLandingSectorIconClassName,
} from "@/lib/sectors-premium-classes";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsGridSection({ t }: Props) {
  return (
    <section
      id="sector-focus"
      className={sectorsLandingGridSectionClassName()}
      aria-labelledby="sectors-grid-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="flex max-w-[min(100%,52rem)] flex-col gap-3.5 sm:gap-4">
          <p className={sectorsLandingSectionEyebrowClassName()}>{t("grid.eyebrow")}</p>
          <h2 id="sectors-grid-heading" className={sectorsLandingSectionTitleClassName()}>
            {t("grid.title")}
          </h2>
          <p className={sectorsLandingSectionIntroClassName()}>{t("grid.intro")}</p>
        </div>

        <div className="mt-10 min-w-0 sm:mt-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-6">
            {SECTOR_IDS.map((id) => (
              <SectorCard key={id} sectorId={id} t={t} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function SectorCard({ sectorId, t }: { sectorId: SectorId; t: IntlTranslator }) {
  const Icon = SECTOR_ICONS[sectorId];
  const base = `grid.sectors.${sectorId}`;
  const focuses = [t(`${base}.focus1`), t(`${base}.focus2`), t(`${base}.focus3`)];
  const sectorHref = `/sectors/${sectorSlugFromId(sectorId)}`;

  return (
    <Link
      href={sectorHref}
      aria-label={t(`${base}.title`)}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <article className={sectorsLandingSectorCardClassName()}>
        <div className="flex items-start gap-3.5">
          <span className={sectorsLandingSectorIconClassName()}>
            <Icon className="h-[1.2rem] w-[1.2rem]" aria-hidden />
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <h3 className="text-balance text-pretty text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1.1rem]">
              {t(`${base}.title`)}
            </h3>
          </div>
        </div>

        <p className="mt-3 line-clamp-3 flex-1 text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-[0.95rem] sm:leading-[1.58]">
          {t(`${base}.description`)}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2 border-t border-border/55 pt-4">
          {focuses.map((line) => (
            <li key={line}>
              <span className={sectorsLandingFocusChipClassName()}>{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-accent">
          {t("grid.cardCta")}
          <ArrowUpRight
            className="h-4 w-4 opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
      </article>
    </Link>
  );
}
