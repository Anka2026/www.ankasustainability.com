import { Container } from "@/components/container";
import { AboutFounderStatsBand } from "@/components/about/about-founder-stats-band";
import type { FounderTrustItem } from "@/components/about/about-founder-stats-band";
import {
  aboutFounderStatsSectionClassName,
  aboutPageContainerClassName,
} from "@/lib/about-layout-classes";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readFounderTrustItems(t: IntlTranslator): readonly FounderTrustItem[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(
    "founderPerspective.stats",
  );
  if (!Array.isArray(raw)) return [];
  return raw
    .map((v) => {
      if (typeof v !== "object" || v === null) return null;
      const o = v as Record<string, unknown>;
      const headline = o.headline;
      if (typeof headline === "string" && headline.trim()) {
        return { headline: headline.trim() } satisfies FounderTrustItem;
      }
      const label = o.label;
      if (typeof label === "string" && label.trim()) {
        return { headline: label.trim() } satisfies FounderTrustItem;
      }
      return null;
    })
    .filter((v): v is FounderTrustItem => Boolean(v));
}

export function AboutFounderStatsSection({ t }: Props) {
  const trustItems = readFounderTrustItems(t);
  if (trustItems.length === 0) return null;

  return (
    <section
      className={aboutFounderStatsSectionClassName()}
      aria-label={t("founderPerspective.title")}
    >
      <Container className={aboutPageContainerClassName()}>
        <AboutFounderStatsBand items={trustItems} />
      </Container>
    </section>
  );
}
