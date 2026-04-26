import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  CONTACT_RESPONSE_ITEMS,
  CONTACT_SIDE_PANEL_ITEMS,
} from "@/lib/contact-content";
import { cn } from "@/lib/utils";

import { ContactForm } from "./contact-form";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactFormSection({ t }: Props) {
  return (
    <section
      id="contact-form"
      className="scroll-mt-[calc(4.5rem+0.75rem)] border-b border-border/70 bg-[linear-gradient(180deg,#eef2f7_0%,#f4f7fb_55%,#f7f9fc_100%)] py-12 sm:py-16"
      aria-labelledby="contact-form-heading"
    >
      <Container className="max-w-7xl px-4 sm:px-5 md:px-6 lg:px-8 xl:max-w-[min(100%,82.5rem)]">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/85">
            {t("form.sectionEyebrow")}
          </p>
          <h2
            id="contact-form-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-[#1c2735] sm:text-[1.75rem]"
          >
            {t("form.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#4a5a6d] sm:text-[1.0625rem] lg:mx-0">
            {t("form.description")}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,22rem)] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,24rem)] xl:gap-10">
          <ContactForm />

          <div className="flex min-w-0 flex-col gap-5">
            <aside
              className={cn(
                "rounded-3xl border border-border/75 bg-white/95 p-6 shadow-[0_18px_48px_-36px_rgba(15,23,42,0.18)] ring-1 ring-inset ring-primary/[0.04] sm:p-7",
              )}
              aria-labelledby="contact-side-topics"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary/80">
                {t("form.sidePanelEyebrow")}
              </p>
              <h3
                id="contact-side-topics"
                className="mt-2 text-base font-semibold tracking-tight text-[#1c2735]"
              >
                {t("form.sidePanelTitle")}
              </h3>
              <ul className="mt-4 space-y-2.5 border-l-2 border-accent/30 pl-4">
                {CONTACT_SIDE_PANEL_ITEMS.map((n) => (
                  <li
                    key={n}
                    className="text-[0.9375rem] leading-relaxed text-[#4a5a6d] sm:text-[0.96875rem]"
                  >
                    {t(`form.sidePanelItem${n}`)}
                  </li>
                ))}
              </ul>
            </aside>

            <aside
              className={cn(
                "rounded-3xl border border-border/75 bg-[#1c2735] p-6 text-white shadow-[0_20px_50px_-36px_rgba(15,23,42,0.45)] ring-1 ring-inset ring-white/10 sm:p-7",
              )}
              aria-labelledby="contact-response-framework"
            >
              <h3
                id="contact-response-framework"
                className="text-base font-semibold tracking-tight text-white"
              >
                {t("form.responsePanelTitle")}
              </h3>
              <ol className="mt-4 space-y-3">
                {CONTACT_RESPONSE_ITEMS.map((n) => (
                  <li
                    key={n}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-white/88"
                  >
                    <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{t(`form.responsePanelItem${n}`)}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
