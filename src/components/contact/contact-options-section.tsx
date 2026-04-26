import { Briefcase, MessageSquare, Monitor } from "lucide-react";

import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const OPTIONS = [
  { n: 1 as const, Icon: MessageSquare },
  { n: 2 as const, Icon: Briefcase },
  { n: 3 as const, Icon: Monitor },
] as const;

export function ContactOptionsSection({ t }: Props) {
  return (
    <section
      className="border-b border-border/70 bg-[#f7f9fc] py-12 sm:py-16"
      aria-labelledby="contact-options-heading"
    >
      <Container className="max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:max-w-[min(100%,82.5rem)]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/85">
            {t("options.sectionEyebrow")}
          </p>
          <h2
            id="contact-options-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2735] sm:text-[1.75rem]"
          >
            {t("options.sectionTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4a5a6d] sm:text-[1.0625rem]">
            {t("options.sectionDescription")}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {OPTIONS.map(({ n, Icon }) => (
            <article
              key={n}
              className={cn(
                "group flex min-h-full flex-col rounded-3xl border border-border/70 bg-white/95 p-6 shadow-[0_16px_44px_-36px_rgba(15,23,42,0.2)] ring-1 ring-inset ring-primary/[0.03] transition-[transform,box-shadow,border-color] duration-200",
                "hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_22px_48px_-34px_rgba(15,23,42,0.22)]",
              )}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-[#f0f4f8] text-primary/80 transition-colors group-hover:border-accent/20 group-hover:bg-accent/[0.08] group-hover:text-primary">
                <Icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#1c2735]">
                {t(`options.opt${n}Title`)}
              </h3>
              <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-[#4a5a6d] sm:text-base">
                {t(`options.opt${n}Description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
