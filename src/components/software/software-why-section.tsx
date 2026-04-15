import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwareWhySection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-16 sm:py-20"
      aria-labelledby="software-why-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            titleAs="h2"
            titleId="software-why-heading"
            accentRule
            eyebrow=""
            title={t("why.title")}
            description={t("why.description")}
          />
        </div>
      </Container>
    </section>
  );
}
