import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
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
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border/90 bg-primary/[0.02] shadow-[0_24px_64px_-54px_rgba(15,23,42,0.6)] ring-1 ring-inset ring-primary/[0.06]">
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
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-background/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] ring-1 ring-inset ring-primary/[0.04]">
                  <BadgeCheck className="h-[1.125rem] w-[1.125rem] text-primary" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug tracking-tight text-foreground">
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
