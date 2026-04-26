import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { COMPANY_BOOKING_URL } from "@/lib/company";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

function meetingMailtoHref(t: IntlTranslator) {
  void t;
  return COMPANY_BOOKING_URL;
}

export function ContactFinalCtaSection({ t }: Props) {
  const meetingHref = meetingMailtoHref(t);

  return (
    <section
      className={cn(
        "relative border-b border-[#243042]/80 py-12 sm:py-14",
        "bg-[linear-gradient(165deg,#1b2634_0%,#16202c_50%,#141c26_100%)] text-white",
      )}
      aria-labelledby="contact-final-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent"
        aria-hidden
      />
      <Container className="relative max-w-3xl px-4 text-center sm:px-5 md:px-6">
        <h2
          id="contact-final-cta-heading"
          className="text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem] sm:leading-snug"
        >
          {t("finalCta.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/78 sm:text-[1.0625rem]">
          {t("finalCta.description")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <AppButton
            asChild
            size="lg"
            className="h-11 min-w-[11rem] border border-accent/35 bg-accent text-accent-foreground shadow-[0_14px_36px_-20px_rgba(8,145,178,0.55)] transition-[filter,box-shadow] hover:brightness-[1.04] hover:shadow-[0_16px_40px_-18px_rgba(8,145,178,0.35)]"
          >
            <a
              href={meetingHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              {t("finalCta.primaryButton")}
            </a>
          </AppButton>
          <AppButton
            variant="outline"
            size="lg"
            asChild
            className="h-11 border-white/25 bg-white/[0.04] text-white shadow-none transition-colors hover:border-accent/40 hover:bg-white/[0.08] hover:text-white"
          >
            <a href="#contact-form" className="inline-flex items-center justify-center">
              {t("finalCta.secondaryButton")}
            </a>
          </AppButton>
        </div>
      </Container>
    </section>
  );
}
