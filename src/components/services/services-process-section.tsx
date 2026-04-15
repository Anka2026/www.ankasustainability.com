import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { PROCESS_STEP_KEYS, type ProcessStepId } from "@/lib/services-categories";
import { SECTION_BG_TINT } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ServicesProcessSection({ t }: Props) {
  return (
    <section
      id="services-process"
      className={cn(
        "scroll-mt-24 border-b border-border py-12 sm:py-14",
        SECTION_BG_TINT,
      )}
      aria-labelledby="services-process-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="services-process-heading"
          accentRule
          eyebrow=""
          title={t("process.title")}
          description={t("process.subtitle")}
          descriptionClassName="sm:text-base sm:leading-[1.6]"
        />
        <ol className="mt-8 grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4.5">
          {PROCESS_STEP_KEYS.map((stepId, index) => (
            <ProcessStep
              key={stepId}
              stepId={stepId}
              index={index}
              t={t}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ProcessStep({
  stepId,
  index,
  t,
}: {
  stepId: ProcessStepId;
  index: number;
  t: IntlTranslator;
}) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <li
      className={homeCardClassName(false)}
    >
      <div className="flex h-full flex-col border-l-[3px] border-accent/50 bg-surface p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-mono text-xs font-semibold tracking-wider text-accent">
            {n}
          </span>
        </div>
        <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">
          {t(`process.${stepId}.title`)}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t(`process.${stepId}.description`)}
        </p>
      </div>
    </li>
  );
}
