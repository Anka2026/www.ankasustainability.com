import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { SECTION_BG_DEEP } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesOverviewSection({ t }: Props) {
  return (
    <section
      id="services-overview"
      className={cn(
        "scroll-mt-24 border-b border-border py-10 sm:py-12",
        SECTION_BG_DEEP,
      )}
      aria-labelledby="services-overview-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="services-overview-heading"
          accentRule
          eyebrow=""
          title={t("overview.title")}
          description={t("overview.subtitle")}
          descriptionClassName="sm:text-base sm:leading-[1.6] max-w-none lg:max-w-4xl lg:text-nowrap"
        />
      </Container>
    </section>
  );
}
