import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  marketingIconContainerClassName,
  marketingTrustStripShellClassName,
} from "@/lib/home-classes";
import { BadgeCheck } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function TrustStripSection({ t }: Props) {
  const aria = t("proof.ariaLabel");
  const items = ((): string[] => {
    try {
      const raw = (t as unknown as { raw: (k: string) => unknown }).raw("proof.items");
      if (!Array.isArray(raw)) return [];
      return raw.filter((v): v is string => typeof v === "string").map((s) => s.trim()).filter(Boolean);
    } catch {
      return [];
    }
  })();

  return (
    <section
      className="border-b border-border bg-surface"
      {...(aria ? { "aria-label": aria } : {})}
    >
      <Container className="max-w-7xl py-6 sm:py-7 xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className={marketingTrustStripShellClassName()}>
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(8,145,178,0.07),transparent_55%)]"
            aria-hidden
          />
          <div className="relative grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {items.slice(0, 4).map((label) => (
              <div
                key={label}
                className="flex min-h-[4.75rem] items-center gap-3.5 px-5 py-4.5 sm:px-6 sm:py-5"
              >
                <span className={marketingIconContainerClassName()}>
                  <BadgeCheck aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold leading-snug tracking-tight text-foreground text-pretty sm:text-sm">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
