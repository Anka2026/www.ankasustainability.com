import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { INLINE_SECTION_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwareConsultingSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-surface py-12 sm:py-14"
      aria-labelledby="software-consulting-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div
          className={cn(
            "relative overflow-hidden",
            homeCardClassName(false),
            "border-l-[4px] border-l-accent bg-gradient-to-br from-background/92 via-surface to-muted/20 p-6 sm:p-7 lg:p-8",
          )}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/0 via-accent/35 to-accent/0"
            aria-hidden
          />
          <h2
            id="software-consulting-heading"
            className={INLINE_SECTION_TITLE}
          >
            {t("consultingSoftware.title")}
          </h2>
          <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-3.5 sm:text-[0.9375rem] sm:leading-[1.62]">
            {t("consultingSoftware.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
