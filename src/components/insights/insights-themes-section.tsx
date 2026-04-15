import { Container } from "@/components/container";
import { INSIGHTS_THEME_KEYS } from "@/lib/insights-content-keys";
import { SECTION_PAD_STRIP } from "@/lib/section-layout";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsThemesSection({ t }: Props) {
  return (
    <section
      className={cn("bg-background", SECTION_PAD_STRIP)}
      aria-labelledby="insights-themes-heading"
    >
      <Container>
        <h2
          id="insights-themes-heading"
          className="text-xs font-semibold tracking-[0.2em] text-primary uppercase"
        >
          {t("themes.title")}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2.5 sm:gap-3">
          {INSIGHTS_THEME_KEYS.map((key) => (
            <li key={key}>
              <span className="inline-flex items-center rounded-lg border border-accent/12 bg-surface px-3.5 py-2 text-sm font-medium tracking-tight text-foreground shadow-[0_1px_0_0_rgba(15,23,42,0.04)]">
                {t(`themes.items.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
