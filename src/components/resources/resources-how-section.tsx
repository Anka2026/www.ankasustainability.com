import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const STEPS = ["s1", "s2", "s3", "s4"] as const;

export function ResourcesHowSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-[var(--section-tint)] py-12 sm:py-14"
      aria-labelledby="resources-how-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/85">
          {t("how.eyebrow")}
        </p>
        <h2
          id="resources-how-heading"
          className="mt-3 max-w-3xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("how.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("how.text")}
        </p>

        <div
          className={cn(
            "mt-8 overflow-hidden rounded-[1.5rem] border border-border/90",
            "bg-background/90 shadow-[0_26px_70px_-64px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]",
          )}
        >
          <ol className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {STEPS.map((stepId, index) => (
              <li
                key={stepId}
                className="flex min-h-0 min-w-0 flex-col p-5 sm:p-5 lg:min-h-[10.5rem] lg:py-6"
              >
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-[var(--section-tint)] font-mono text-xs font-bold tabular-nums text-primary/90 sm:text-[0.8125rem]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 min-w-0 text-[0.95rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[1rem]">
                  {t(`how.${stepId}.title`)}
                </h3>
                <p className="mt-2.5 min-w-0 flex-1 text-sm leading-relaxed text-muted-foreground sm:leading-[1.55]">
                  {t(`how.${stepId}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
