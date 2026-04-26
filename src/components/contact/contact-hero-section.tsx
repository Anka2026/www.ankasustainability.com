import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { BrandMark } from "@/components/layout/brand-mark";
import type { IntlTranslator } from "@/lib/i18n-types";
import {
  COMPANY_BOOKING_URL,
  COMPANY_EMAIL,
  COMPANY_KVK_LINE,
  COMPANY_LINKEDIN_LABEL,
  COMPANY_LINKEDIN_URL,
} from "@/lib/company";
import { cn } from "@/lib/utils";

const cardClass = cn(
  "h-full rounded-2xl border border-border/70 bg-white/90 p-5 shadow-[0_10px_36px_-28px_rgba(15,23,42,0.2)] ring-1 ring-inset ring-primary/[0.035] sm:p-5",
);

type Props = Readonly<{
  t: IntlTranslator;
}>;

function meetingMailtoHref(t: IntlTranslator) {
  void t;
  return COMPANY_BOOKING_URL;
}

function OfficeBlocks({ text }: { text: string }) {
  return (
    <div className="space-y-4">
      {text.split("\n\n").map((block, i) => {
        const lines = block.split("\n").filter(Boolean);
        const [head, ...body] = lines;
        return (
          <div key={`${head}-${i}`} className="min-w-0">
            {head ? (
              <p className="text-sm font-semibold leading-snug text-[#1c2735] sm:text-[0.9375rem]">
                {head}
              </p>
            ) : null}
            {body.length > 0 ? (
              <div className="mt-1.5 space-y-0.5 text-sm leading-[1.5] text-[#4a5a6d] sm:text-[0.9375rem]">
                {body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function ContactHeroSection({ t }: Props) {
  const meetingHref = meetingMailtoHref(t);
  const linkedInUrl = COMPANY_LINKEDIN_URL.trim();
  const showLinkedIn = linkedInUrl.length > 0;

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-b border-border/70",
        "bg-[linear-gradient(165deg,#f3f6fa_0%,#eef2f7_42%,#e8edf4_100%)]",
      )}
      aria-labelledby="contact-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
        aria-hidden
      />
      <Container className="max-w-7xl px-4 py-10 sm:px-5 sm:py-12 md:px-6 lg:px-8 xl:max-w-[min(100%,82.5rem)]">
        <div className="max-w-[min(100%,58rem)]">
          <div className="flex items-center gap-3">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_3px_rgba(8,145,178,0.14)]"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/85">
              {t("hero.eyebrow")}
            </p>
          </div>
          <h1
            id="contact-hero-heading"
            className="mt-3 text-[1.6rem] font-semibold leading-[1.12] tracking-[-0.03em] text-[#1c2735] sm:text-[1.8rem] md:text-[2.05rem] lg:text-[2.2rem]"
          >
            {t("hero.title")}
          </h1>
          <p className="mt-4 max-w-[min(100%,52rem)] text-pretty text-base leading-[1.68] text-[#4a5a6d] sm:mt-5 sm:text-[1.0625rem] sm:leading-[1.7]">
            {t("hero.description")}
          </p>
          <div className="mt-7 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <AppButton
              asChild
              size="lg"
              className="h-10 min-w-[9.5rem] border border-primary/22 bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_10px_28px_-16px_rgba(8,145,178,0.45)] transition-[background-color,box-shadow,border-color] hover:border-primary/35 hover:bg-[var(--primary-hover)] hover:shadow-[0_12px_32px_-18px_rgba(8,145,178,0.2)]"
            >
              <a href="#contact-form" className="inline-flex items-center justify-center">
                {t("hero.primaryCta")}
              </a>
            </AppButton>
            <AppButton
              variant="outline"
              size="lg"
              asChild
              className="h-10 border-border/90 bg-white/80 px-5 text-sm font-semibold hover:border-accent/30 hover:bg-white"
            >
              <a
                href={meetingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                {t("hero.secondaryCta")}
              </a>
            </AppButton>
          </div>
        </div>

        <div className="mt-8 grid min-w-0 gap-5 sm:gap-6 min-[800px]:grid-cols-2 min-[800px]:gap-6 lg:mt-9 lg:gap-7">
          <div className={cardClass}>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary/80">
              {t("hero.companyCardEyebrow")}
            </p>
            <div className="mt-3 flex gap-3.5">
              <BrandMark variant="footer" className="h-10 w-10 shrink-0" />
              <div className="min-w-0">
                <h2 className="text-base font-semibold leading-snug tracking-tight text-[#1c2735] sm:text-[1.05rem]">
                  {t("hero.companyName")}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#4a5a6d] sm:text-[0.9375rem]">
                  {t("hero.companyText")}
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-border/55 pt-4 text-sm sm:text-[0.9375rem]">
              <div className="grid gap-3">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#5c6a7a] sm:text-xs">
                    {t("hero.emailLabel")}
                  </p>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="mt-0.5 inline-block font-medium text-primary transition-colors hover:text-primary/90 hover:underline"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium tabular-nums text-[#334155] sm:text-[0.9375rem]">
                    {COMPANY_KVK_LINE}
                  </p>
                </div>
                {showLinkedIn ? (
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#5c6a7a] sm:text-xs">
                      {t("hero.linkedinLabel")}
                    </p>
                    <a
                      href={linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block font-medium text-primary transition-colors hover:text-primary/90 hover:underline"
                    >
                      {COMPANY_LINKEDIN_LABEL}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary/80">
              {t("hero.officesCardEyebrow")}
            </p>
            <div className="mt-3">
              <OfficeBlocks text={t("hero.officesBlock")} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
