import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { INLINE_SECTION_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SectorsEuropeSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-muted/25 py-14 sm:py-16 md:py-20"
      aria-labelledby="sectors-europe-heading"
    >
      <Container>
        <div
          className={cn(
            homeCardClassName(false),
            "mx-auto max-w-3xl border-l-[4px] border-l-accent/60 bg-gradient-to-br from-surface to-background/80 p-8 sm:p-10",
          )}
        >
          <h2
            id="sectors-europe-heading"
            className={INLINE_SECTION_TITLE}
          >
            {t("europe.title")}
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg sm:leading-[1.65]">
            {t("europe.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
