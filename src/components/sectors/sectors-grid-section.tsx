import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTOR_ICONS, SECTOR_IDS, type SectorId } from "@/lib/sectors-order";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsGridSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-12 sm:py-14"
      aria-labelledby="sectors-grid-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="sectors-grid-heading"
          accentRule
          eyebrow=""
          title={t("grid.title")}
        />
        <div className="mt-8 grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
          {SECTOR_IDS.map((id) => (
            <SectorCard key={id} sectorId={id} t={t} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function SectorCard({
  sectorId,
  t,
}: {
  sectorId: SectorId;
  t: IntlTranslator;
}) {
  const Icon = SECTOR_ICONS[sectorId];
  const base = `grid.sectors.${sectorId}`;
  const focuses = [
    t(`${base}.focus1`),
    t(`${base}.focus2`),
    t(`${base}.focus3`),
  ];

  return (
    <Link
      href="/services"
      className={cn(
        "group block h-full",
        homeCardClassName(false),
        "flex flex-col border-t-[3px] border-t-primary/30 bg-[var(--section-tint)] p-5 transition-[transform,box-shadow,border-color] hover:-translate-y-[1px] hover:border-t-accent/60 hover:shadow-md sm:p-6",
      )}
      aria-label={t(`${base}.title`)}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.06] text-primary shadow-sm shadow-primary/[0.09] ring-1 ring-inset ring-accent/[0.08]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-tight text-foreground sm:text-lg">
          {t(`${base}.title`)}
        </h3>
      </div>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.55]">
        {t(`${base}.description`)}
      </p>
      <ul className="mt-4 space-y-2 border-l-2 border-accent/30 pl-4">
        {focuses.map((line, i) => (
          <li
            key={i}
            className="text-[0.9375rem] leading-snug text-foreground sm:text-[0.975rem]"
          >
            {line}
          </li>
        ))}
      </ul>
    </Link>
  );
}
