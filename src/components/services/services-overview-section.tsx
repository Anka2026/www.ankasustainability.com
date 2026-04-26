import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { FileCheck, Layers, ListChecks, Route } from "lucide-react";

type StripItem = Readonly<{ title: string; body?: string }>;

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readStrip(t: IntlTranslator): StripItem[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw("overview.strip");
  if (!Array.isArray(raw)) return [];
  return raw
    .flatMap((v) => {
      if (typeof v !== "object" || v === null) return [];
      const title = (v as Record<string, unknown>).title;
      const body = (v as Record<string, unknown>).body;
      if (typeof title !== "string") return [];
      const item: StripItem = {
        title,
        body: typeof body === "string" && body.trim() ? body.trim() : undefined,
      };
      return [item];
    });
}

const STRIP_ICONS = [ListChecks, Layers, FileCheck, Route] as const;

export function ServicesOverviewSection({ t }: Props) {
  const strip = readStrip(t);

  return (
    <section
      id="services-overview"
      className="scroll-mt-24 border-b border-border bg-[var(--section-tint)] py-10 sm:py-12"
      aria-labelledby="services-overview-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="services-overview-heading"
          accentRule
          eyebrow={t("overview.eyebrow")}
          title={t("overview.title")}
          description={t("overview.text")}
          descriptionClassName="max-w-4xl text-pretty sm:text-base sm:leading-[1.62]"
        />

        <div
          className={cn(
            "mt-8 overflow-hidden rounded-[1.75rem] border border-border/80 bg-background/90",
            "shadow-[0_26px_70px_-58px_rgba(15,23,42,0.55)] ring-1 ring-inset ring-primary/[0.05]",
          )}
        >
          <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {strip.slice(0, 4).map((item, idx) => {
              const Icon = STRIP_ICONS[idx] ?? ListChecks;
              return (
                <div
                  key={item.title}
                  className="flex min-h-0 items-start gap-3.5 p-4.5 sm:p-5 lg:p-5"
                >
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.75)]">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-foreground">
                      {item.title}
                    </p>
                    {item.body ? (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
