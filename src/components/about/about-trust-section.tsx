import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const KEYS = ["item1", "item2", "item3", "item4"] as const;

export function AboutTrustSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-[var(--section-tint)] py-7 sm:py-8"
      aria-label={t("trust.aria")}
    >
      <Container>
        <ul className="flex flex-wrap justify-center gap-2 sm:justify-start lg:justify-center">
          {KEYS.map((key) => (
            <li
              key={key}
              className={cn(
                "rounded-full border border-border/80 bg-surface px-3.5 py-2 text-center text-xs font-semibold tracking-tight text-foreground",
                "shadow-[0_1px_2px_-1px_rgba(15,23,42,0.06)] ring-1 ring-inset ring-primary/[0.05]",
                "sm:text-[0.8125rem]",
              )}
            >
              {t(`trust.${key}`)}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
