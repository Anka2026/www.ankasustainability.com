import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

const STEP_KEYS = ["s1", "s2", "s3", "s4"] as const;

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesProcessSection({ t }: Props) {
  return (
    <section
      id="services-process"
      className="scroll-mt-24 border-b border-border bg-background py-12 sm:py-14"
      aria-labelledby="services-process-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="services-process-heading"
          accentRule
          eyebrow={t("process.eyebrow")}
          title={t("process.title")}
          description={t("process.intro")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />
        <div
          className={cn(
            "mt-8 overflow-hidden rounded-[1.5rem] border border-border/90",
            "bg-surface/80 shadow-[0_26px_70px_-64px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]",
          )}
        >
          <ol className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {STEP_KEYS.map((stepId, index) => (
              <li
                key={stepId}
                className="flex min-h-0 min-w-0 flex-col p-4 sm:p-4 lg:min-h-[9.5rem] lg:py-5"
              >
                <span className="select-none font-mono text-xs font-bold tabular-nums text-primary/85 sm:text-[0.8125rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2.5 min-w-0 text-[0.9rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[0.95rem]">
                  {t(`process.${stepId}.title`)}
                </h3>
                <p className="mt-2 min-w-0 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-sm sm:leading-[1.55]">
                  {t(`process.${stepId}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
