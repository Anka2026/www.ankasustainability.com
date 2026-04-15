import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const HIGHLIGHT_KEYS = ["highlight1", "highlight2", "highlight3", "highlight4"] as const;

export function AboutWhoSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-who-heading"
    >
      <Container className="space-y-8 sm:space-y-9">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10">
          <div className="min-w-0 space-y-4">
            <SectionHeading
              titleAs="h2"
              titleId="about-who-heading"
              accentRule
              eyebrow=""
              title={t("who.title")}
            />
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
              {t("who.intro")}
            </p>
          </div>
          <aside
            className={cn(
              homeCardClassName(false),
              "border-l-[3px] border-l-accent/50 bg-surface p-5 sm:p-6",
            )}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t("who.highlightTitle")}
            </h3>
            <ul className="mt-4 space-y-3 border-t border-border/70 pt-4">
              {HIGHLIGHT_KEYS.map((key) => (
                <li
                  key={key}
                  className="flex gap-2.5 text-sm leading-snug text-foreground sm:text-[0.9375rem] sm:leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{t(`who.${key}`)}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
