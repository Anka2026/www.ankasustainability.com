import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { homeCardClassName } from "@/lib/home-classes";

import { ContactForm } from "./contact-form";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactFormSection({ t }: Props) {
  return (
    <section
      id="contact-form"
      className="scroll-mt-24 border-b border-border bg-surface py-12 sm:py-14"
      aria-labelledby="contact-form-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
          <SectionHeading
            titleAs="h2"
            titleId="contact-form-heading"
            accentRule
            eyebrow=""
            title={t("form.title")}
            description={t("form.description")}
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
          <aside
            className={cn(
              homeCardClassName(false),
              "rounded-3xl border border-border bg-[var(--section-tint)] p-6 shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06] sm:p-7",
            )}
            aria-labelledby="contact-topics-heading"
          >
            <h3
              id="contact-topics-heading"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-primary"
            >
              {t("help.title")}
            </h3>
            <ul className="mt-4 space-y-2.5 border-l-2 border-accent/35 pl-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <li
                  key={n}
                  className="text-[0.9375rem] leading-relaxed text-foreground sm:text-base sm:leading-[1.55]"
                >
                  {t(`help.item${n}`)}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
