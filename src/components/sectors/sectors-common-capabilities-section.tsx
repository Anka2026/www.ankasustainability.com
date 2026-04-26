import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
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
      className="border-b border-border bg-[var(--section-tint)] py-12 sm:py-14"
      aria-labelledby="sectors-capabilities-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/80">
          {t("capabilities.eyebrow")}
        </p>
        <h2
          id="sectors-capabilities-heading"
          className="mt-3 max-w-4xl text-balance text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("capabilities.title")}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
          {t("capabilities.intro")}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAP_KEYS.map((key, idx) => {
            const Icon = CAP_ICONS[idx] ?? Workflow;
            return (
              <article
                key={key}
                className={cn(
                  "flex h-full flex-col rounded-2xl border border-border/80 bg-background p-5 shadow-[0_18px_44px_-36px_rgba(15,23,42,0.35)] ring-1 ring-inset ring-primary/[0.04] sm:p-6",
                )}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/12 bg-primary/[0.04] text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug tracking-tight text-foreground">
                  {t(`capabilities.${key}.title`)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:leading-[1.55]">
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
