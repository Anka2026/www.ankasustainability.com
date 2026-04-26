import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { CONTACT_PROCESS_STEPS } from "@/lib/contact-content";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactProcessSection({ t }: Props) {
  return (
    <section
      className="border-b border-border/70 bg-white py-12 sm:py-16"
      aria-labelledby="contact-process-heading"
    >
      <Container className="max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:max-w-[min(100%,82.5rem)]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/85">
            {t("process.sectionEyebrow")}
          </p>
          <h2
            id="contact-process-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2735] sm:text-[1.75rem]"
          >
            {t("process.sectionTitle")}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4a5a6d] sm:text-[1.0625rem]">
            {t("process.sectionDescription")}
          </p>
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3 md:gap-6">
          {CONTACT_PROCESS_STEPS.map((n, index) => (
            <li
              key={n}
              className={cn(
                "flex h-full min-h-[11rem] flex-col rounded-3xl border border-border/70 bg-[#f8fafc] p-6 shadow-[0_14px_40px_-32px_rgba(15,23,42,0.18)] ring-1 ring-inset ring-primary/[0.03] sm:p-7",
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                    "border border-accent/35 bg-accent/[0.14] text-xs font-bold text-primary shadow-sm",
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold tracking-tight text-[#1c2735] sm:text-lg">
                    {t(`process.step${n}Title`)}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-[#4a5a6d] sm:text-base">
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
