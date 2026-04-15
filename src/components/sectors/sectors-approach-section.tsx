import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { INLINE_SECTION_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsApproachSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-14 sm:py-16 md:py-20"
      aria-labelledby="sectors-approach-heading"
    >
      <Container>
        <div
          className={cn(
            homeCardClassName(false),
            "relative mx-auto max-w-3xl overflow-hidden border-l-[4px] border-l-primary/45 bg-surface p-8 sm:p-10",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
            aria-hidden
          />
          <h2
            id="sectors-approach-heading"
            className={INLINE_SECTION_TITLE}
          >
            {t("approach.title")}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg sm:leading-[1.65]">
            {t("approach.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
