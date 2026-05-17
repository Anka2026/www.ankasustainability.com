import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  sectorsLandingCapabilitiesSectionClassName,
  sectorsLandingCapabilityCardClassName,
  sectorsLandingSectionEyebrowClassName,
  sectorsLandingSectionIntroClassName,
  sectorsLandingSectionTitleClassName,
} from "@/lib/sectors-premium-classes";
import { cn } from "@/lib/utils";
import { FileCheck, Globe2, Laptop2, Workflow } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const CAP_KEYS = ["c1", "c2", "c3", "c4"] as const;
const CAP_ICONS = [Workflow, FileCheck, Globe2, Laptop2] as const;

export function SectorsCommonCapabilitiesSection({ t }: Props) {
  return (
    <section
      className={sectorsLandingCapabilitiesSectionClassName()}
      aria-labelledby="sectors-capabilities-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className={sectorsLandingSectionEyebrowClassName()}>{t("capabilities.eyebrow")}</p>
        <h2 id="sectors-capabilities-heading" className={cn(sectorsLandingSectionTitleClassName(), "mt-3")}>
          {t("capabilities.title")}
        </h2>
        <p className={cn(sectorsLandingSectionIntroClassName(), "mt-4")}>{t("capabilities.intro")}</p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5">
          {CAP_KEYS.map((key, idx) => {
            const Icon = CAP_ICONS[idx] ?? Workflow;
            return (
              <article key={key} className={sectorsLandingCapabilityCardClassName()}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/22 bg-accent/[0.09] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-balance text-pretty text-base font-semibold leading-snug tracking-tight text-foreground">
                  {t(`capabilities.${key}.title`)}
                </h3>
                <p className="mt-2.5 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground sm:leading-[1.58]">
                  {t(`capabilities.${key}.description`)}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
