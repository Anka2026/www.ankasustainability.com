import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { INLINE_SECTION_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function AboutConsultingDigitalSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-9 sm:py-10 md:py-11"
      aria-labelledby="about-consulting-digital-heading"
    >
      <Container>
        <div
          className={cn(
            homeCardClassName(false),
            "relative overflow-hidden border-l-[4px] border-l-accent bg-gradient-to-br from-background/95 via-surface to-muted/15 p-6 sm:p-7 lg:p-8",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"
            aria-hidden
          />
          <h2
            id="about-consulting-digital-heading"
            className={INLINE_SECTION_TITLE}
          >
            {t("consultingDigital.title")}
          </h2>
          <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-3.5 sm:text-[0.9375rem] sm:leading-[1.62]">
            {t("consultingDigital.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
