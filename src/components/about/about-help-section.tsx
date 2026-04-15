import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const ITEMS = [1, 2, 3, 4] as const;

export function AboutHelpSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-surface", SECTION_PAD_HOME)}
      aria-labelledby="about-help-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="about-help-heading"
          accentRule
          eyebrow=""
          title={t("helpOrg.title")}
        />
        <div className="mt-7 grid gap-3.5 sm:grid-cols-2 sm:gap-4">
          {ITEMS.map((n) => (
            <article
              key={n}
              className={cn(
                homeCardClassName(false),
                "border-l-[3px] border-l-primary/40 p-4 sm:p-5",
              )}
            >
              <h3 className="text-[0.9375rem] font-semibold leading-snug tracking-tight text-foreground sm:text-base">
                {t(`helpOrg.item${n}Title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-[0.9375rem] sm:leading-[1.58]">
                {t(`helpOrg.item${n}Description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
