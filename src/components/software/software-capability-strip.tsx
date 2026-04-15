import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const CHIP_KEYS = ["c1", "c2", "c3", "c4", "c5", "c6"] as const;

export function SoftwareCapabilityStrip({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-muted/25 py-10 sm:py-12"
      aria-labelledby="software-capabilities-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <h2
          id="software-capabilities-heading"
          className="text-xs font-semibold uppercase tracking-[0.14em] text-primary"
        >
          {t("workflows.title")}
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
          {CHIP_KEYS.map((key) => (
            <li
              key={key}
              className={cn(
                "rounded-full border border-border/80 bg-surface px-3.5 py-2",
                "text-[0.8125rem] font-semibold tracking-tight text-foreground",
                "ring-1 ring-inset ring-primary/[0.04]",
              )}
            >
              {t(`workflows.${key}`)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
