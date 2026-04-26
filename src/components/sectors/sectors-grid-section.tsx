import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { SECTOR_ICONS, SECTOR_IDS, type SectorId } from "@/lib/sectors-order";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsGridSection({ t }: Props) {
  return (
    <section
      id="sector-focus"
      className="border-b border-border bg-[var(--section-tint)] py-12 sm:py-14"
      aria-labelledby="sectors-grid-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="flex max-w-3xl flex-col gap-3.5 sm:gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
            {t("grid.eyebrow")}
          </p>
          <h2
            id="sectors-grid-heading"
            className="text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {t("grid.title")}
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-[1.0625rem] sm:leading-[1.65]">
            {t("grid.intro")}
          </p>
        </div>
        <div className="mt-10 min-w-0 sm:mt-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SECTOR_IDS.map((id) => (
                <SectorCard key={id} sectorId={id} t={t} />
              ))}
            </div>
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
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-border/80 bg-background p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-primary/[0.04] transition-[box-shadow,transform] hover:-translate-y-px hover:shadow-[0_24px_56px_-38px_rgba(15,23,42,0.4)] sm:p-6",
      )}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/12 bg-primary/[0.04] text-primary shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)]">
          <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden />
        </span>
        <h3 className="pt-0.5 text-[1.05rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1.0625rem]">
          {t(`${base}.title`)}
        </h3>
      </div>
      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-[0.95rem] sm:leading-[1.55]">
        {t(`${base}.description`)}
      </p>
      <ul className="mt-4 space-y-2 border-t border-border/60 pt-4">
        {focuses.map((line, i) => (
          <li key={i} className="flex gap-2.5 text-[0.8125rem] font-medium leading-snug text-foreground/90 sm:text-[0.84375rem]">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/45" aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <AppButton variant="ghost" size="sm" asChild className="h-9 w-full justify-center gap-1.5 px-3 text-primary hover:bg-primary/[0.06] sm:h-9 sm:w-auto sm:justify-start">
          <Link href="/services" className="inline-flex items-center">
            {t("grid.cardCta")}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden />
          </Link>
        </AppButton>
      </div>
    </article>
  );
}
