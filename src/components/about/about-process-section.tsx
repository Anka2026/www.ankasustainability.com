import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import {
  ABOUT_PROCESS_KEYS,
  type AboutProcessStepId,
} from "@/lib/about-process";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function AboutProcessSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-process-heading"
    >
      <Container>
        <SectionHeading
          titleAs="h2"
          titleId="about-process-heading"
          accentRule
          eyebrow=""
          title={t("process.title")}
          description={t("process.subtitle")}
        />
        <ol className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
          {ABOUT_PROCESS_KEYS.map((stepId, index) => (
            <ProcessStep key={stepId} stepId={stepId} index={index} t={t} />
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
  stepId: AboutProcessStepId;
  index: number;
  t: IntlTranslator;
}) {
  const n = String(index + 1).padStart(2, "0");
  return (
    <li className={homeCardClassName(false)}>
      <div className="flex h-full flex-col border-l-[3px] border-accent/45 bg-surface p-4 sm:p-4">
        <span className="font-mono text-[0.6875rem] font-bold tracking-wider text-accent">
          {n}
        </span>
        <h3 className="mt-2.5 text-[0.9375rem] font-semibold leading-tight tracking-tight text-foreground sm:text-base">
          {t(`process.${stepId}.title`)}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-[0.875rem] sm:leading-[1.55]">
          {t(`process.${stepId}.description`)}
        </p>
      </div>
    </li>
  );
}
