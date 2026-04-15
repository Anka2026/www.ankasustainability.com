import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwareIntroSection({ t }: Props) {
  return (
    <section
      id="software-intro"
      className="scroll-mt-24 border-b border-border bg-background py-16 sm:py-20"
      aria-labelledby="software-intro-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            titleAs="h2"
            titleId="software-intro-heading"
            accentRule
            eyebrow=""
            title={t("intro.title")}
            description={t("intro.description")}
          />
        </div>
      </Container>
    </section>
  );
}
