import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  sectorsLandingProcessSectionClassName,
  sectorsLandingProcessStepBadgeClassName,
  sectorsLandingProcessStepClassName,
  sectorsLandingSectionEyebrowClassName,
  sectorsLandingSectionIntroClassName,
  sectorsLandingSectionTitleClassName,
} from "@/lib/sectors-premium-classes";
import { cn } from "@/lib/utils";
import { ClipboardList, Database, LayoutDashboard, Target } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const STEPS = ["s1", "s2", "s3", "s4"] as const;
const STEP_ICONS = [Target, Database, ClipboardList, LayoutDashboard] as const;

export function SectorsProcessSection({ t }: Props) {
  return (
    <section
      className={sectorsLandingProcessSectionClassName()}
      aria-labelledby="sectors-process-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className={sectorsLandingSectionEyebrowClassName()}>{t("process.eyebrow")}</p>
        <h2 id="sectors-process-heading" className={cn(sectorsLandingSectionTitleClassName(), "mt-3")}>
          {t("process.title")}
        </h2>
        <p className={cn(sectorsLandingSectionIntroClassName(), "mt-4")}>{t("process.intro")}</p>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {STEPS.map((stepId, index) => {
            const Icon = STEP_ICONS[index] ?? Target;
            return (
              <article key={stepId} className={sectorsLandingProcessStepClassName()}>
                <div className="flex items-center gap-3">
                  <span className={sectorsLandingProcessStepBadgeClassName()}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/[0.08] text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-4 text-balance text-pretty text-base font-semibold leading-snug tracking-tight text-foreground">
                  {t(`process.${stepId}.title`)}
                </h3>
                <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:leading-[1.58]">
                  {t(`process.${stepId}.body`)}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
