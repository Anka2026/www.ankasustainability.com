import { Container } from "@/components/container";
import { AboutFounderStatsBand } from "@/components/about/about-founder-stats-band";
import type { FounderStatItem } from "@/components/about/about-founder-stats-band";
import {
  aboutFounderStatsSectionClassName,
  aboutPageContainerClassName,
} from "@/lib/about-layout-classes";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readFounderStats(t: IntlTranslator): readonly FounderStatItem[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(
    "founderPerspective.stats",
  );
  if (!Array.isArray(raw)) return [];
  return raw
    .map((v) => {
      if (typeof v !== "object" || v === null) return null;
      const o = v as Record<string, unknown>;
      const target = o.target;
      const suffix = o.suffix;
      const label = o.label;
      if (typeof target !== "number" || typeof suffix !== "string" || typeof label !== "string") {
        return null;
      }
      return { target, suffix, label } satisfies FounderStatItem;
    })
    .filter((v): v is FounderStatItem => Boolean(v));
}

export function AboutFounderStatsSection({ t }: Props) {
  const founderStats = readFounderStats(t);
  if (founderStats.length === 0) return null;

  return (
    <section
      className={aboutFounderStatsSectionClassName()}
      aria-label={t("founderPerspective.title")}
    >
      <Container className={aboutPageContainerClassName()}>
        <AboutFounderStatsBand stats={founderStats} />
      </Container>
    </section>
  );
}
