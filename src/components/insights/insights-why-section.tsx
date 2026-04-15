import { Container } from "@/components/container";
import { SECTION_PAD_STANDARD } from "@/lib/section-layout";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsWhySection({ t }: Props) {
  return (
    <section
      className={cn("bg-surface", SECTION_PAD_STANDARD)}
      aria-labelledby="insights-why-heading"
    >
      <Container>
        <div className="max-w-3xl border-l-[3px] border-accent pl-6 sm:pl-8">
          <h2
            id="insights-why-heading"
            className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
            {t("why.title")}
          </h2>
          <p className="mt-5 text-pretty text-base leading-[1.65] text-muted-foreground sm:text-lg sm:leading-[1.7]">
            {t("why.description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
