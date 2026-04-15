import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_BG_TINT } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const WHY_KEYS = ["item1", "item2", "item3", "item4"] as const;

export function ServicesWhySection({ t }: Props) {
  return (
    <section
      id="services-why"
      className={cn(
        "scroll-mt-24 border-b border-border py-12 sm:py-14",
        SECTION_BG_TINT,
      )}
      aria-labelledby="services-why-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="services-why-heading"
          accentRule
          eyebrow=""
          title={t("why.title")}
          description={t("why.subtitle")}
          descriptionClassName="max-w-none lg:max-w-4xl lg:text-nowrap"
        />
        <ul className="mt-8 grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:gap-4.5">
          {WHY_KEYS.map((key) => (
            <li
              key={key}
              className={homeCardClassName(false)}
            >
              <div className="border-l-[3px] border-primary/35 bg-surface p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]">
                  {t(`why.${key}`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
