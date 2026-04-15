import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsWhyContextSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-16 sm:py-20"
      aria-labelledby="sectors-why-context-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            titleAs="h2"
            titleId="sectors-why-context-heading"
            accentRule
            eyebrow=""
            title={t("whyContext.title")}
            description={t("whyContext.description")}
          />
        </div>
      </Container>
    </section>
  );
}
