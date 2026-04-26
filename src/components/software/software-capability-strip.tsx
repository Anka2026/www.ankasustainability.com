import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const ITEM_KEYS = ["c1", "c2", "c3", "c4", "c5", "c6"] as const;

export function SoftwareCapabilityStrip({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-10 sm:py-12"
      aria-labelledby="software-capabilities-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="software-capabilities-heading"
          accentRule
          eyebrow={t("workflows.eyebrow")}
          title={t("workflows.title")}
          description={t("workflows.description")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEM_KEYS.map((key) => (
            <li
              key={key}
              className="rounded-xl border border-border/80 bg-background/90 px-4 py-3 text-sm font-medium leading-snug text-foreground shadow-[0_12px_36px_-28px_rgba(15,23,42,0.35)]"
            >
              {t(`workflows.${key}`)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
