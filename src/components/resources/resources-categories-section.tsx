import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { BookMarked, CloudSun, MonitorSmartphone, Share2 } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const KEYS = ["c1", "c2", "c3", "c4"] as const;
const ICONS = [BookMarked, CloudSun, Share2, MonitorSmartphone] as const;

export function ResourcesCategoriesSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-12 sm:py-14"
      aria-labelledby="resources-categories-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/85">
          {t("categories.eyebrow")}
        </p>
        <h2
          id="resources-categories-heading"
          className="mt-3 max-w-3xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("categories.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("categories.text")}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {KEYS.map((key, idx) => {
            const Icon = ICONS[idx] ?? BookMarked;
            return (
              <article
                key={key}
                className={cn(
                  "flex min-h-full flex-col rounded-2xl border border-border/85 bg-[var(--section-tint)]/80 p-5 shadow-[0_20px_50px_-42px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-primary/[0.04] sm:p-6",
                )}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/14 bg-primary/[0.05] text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground">
                  {t(`categories.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:leading-[1.55]">
                  {t(`categories.${key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
