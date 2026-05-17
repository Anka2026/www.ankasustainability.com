import { Container } from "@/components/container";
import { aboutPageContainerClassName } from "@/lib/about-layout-classes";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Cpu, Database, FileCheck, Route } from "lucide-react";

type Card = Readonly<{ title: string; body: string }>;

type Props = Readonly<{
  t: IntlTranslator;
}>;

function readCardArray(t: IntlTranslator, key: string): Card[] {
  const raw = (t as unknown as { raw: (k: string) => unknown }).raw(key);
  if (!Array.isArray(raw)) return [];
  return raw
    .map((v) => {
      if (typeof v !== "object" || v === null) return null;
      const title = (v as Record<string, unknown>).title;
      const body = (v as Record<string, unknown>).body;
      if (typeof title !== "string" || typeof body !== "string") return null;
      return { title, body };
    })
    .filter((v): v is Card => Boolean(v));
}

const PROOF_ICONS = [Database, Route, FileCheck, Cpu] as const;

export function AboutHeroProofSection({ t }: Props) {
  const proofBlocks = readCardArray(t, "hero.proof");
  if (proofBlocks.length < 4) return null;

  return (
    <section
      className="border-b border-border bg-background py-10 sm:py-12 lg:py-14"
      aria-labelledby="about-hero-proof-heading"
    >
      <Container className={aboutPageContainerClassName()}>
        <p
          id="about-hero-proof-heading"
          className="sr-only"
        >
          {t("hero.panel.title")}
        </p>
        <div
          className={cn(
            "overflow-hidden rounded-[1.75rem] border border-border/90 bg-surface",
            "shadow-[0_28px_72px_-56px_rgba(15,23,42,0.2)] ring-1 ring-inset ring-primary/[0.05]",
          )}
        >
          <div className="grid divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {proofBlocks.slice(0, 4).map((block, idx) => {
              const Icon = PROOF_ICONS[idx] ?? Database;
              return (
                <div
                  key={`${block.title}-${idx}`}
                  className="flex items-start gap-3.5 p-5 sm:p-6 lg:p-7"
                >
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/18 bg-accent/[0.06] text-accent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.85)]">
                    <Icon className="h-5 w-5" strokeWidth={1.85} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-pretty text-sm font-semibold leading-snug text-primary sm:text-[0.9375rem]">
                      {block.title}
                    </p>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {block.body}
                    </p>
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
