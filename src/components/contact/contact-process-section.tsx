import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { CONTACT_PROCESS_STEPS } from "@/lib/contact-content";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactProcessSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-muted/20 py-10 sm:py-12"
      aria-labelledby="contact-process-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="max-w-3xl">
          <SectionHeading
            titleAs="h2"
            titleId="contact-process-heading"
            accentRule
            eyebrow=""
            title={t("process.title")}
          />
        </div>
        <ol className="mt-7 grid gap-4 md:grid-cols-3 md:gap-5">
          {CONTACT_PROCESS_STEPS.map((n, index) => (
            <li
              key={n}
              className={cn(
                "rounded-2xl border border-border bg-surface px-5 py-5 shadow-sm shadow-primary/[0.06] ring-1 ring-inset ring-primary/[0.05] sm:px-6 sm:py-6",
              )}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/[0.10] text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {t(`process.step${n}Title`)}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.55]">
                    {t(`process.step${n}Description`)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
