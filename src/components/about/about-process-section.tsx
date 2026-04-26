import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const STEPS = ["s1", "s2", "s3", "s4"] as const;

export function AboutProcessSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-[var(--section-tint)]", SECTION_PAD_HOME)}
      aria-labelledby="about-working-model-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="about-working-model-heading"
          accentRule
          eyebrow={t("workingModel.eyebrow")}
          title={t("workingModel.title")}
          description={t("workingModel.intro")}
          descriptionClassName="max-w-4xl text-pretty"
        />
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
                className="flex min-h-0 min-w-0 flex-col p-4 sm:p-4 lg:min-h-[9.5rem] lg:py-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="select-none font-mono text-xs font-bold tabular-nums text-primary/85 sm:text-[0.8125rem]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-2.5 min-w-0 text-[0.9rem] font-semibold leading-snug tracking-tight text-foreground sm:text-[0.95rem]">
                  {t(`workingModel.${stepId}.title`)}
                </h3>
                <p className="mt-2 min-w-0 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-2.5 sm:text-sm sm:leading-[1.55]">
                  {t(`workingModel.${stepId}.body`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
