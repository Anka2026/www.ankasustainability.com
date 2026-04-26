import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { FounderPortrait } from "@/components/about/founder-portrait";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const FOUNDER_LINKEDIN_HREF =
  "https://www.linkedin.com/in/burcu-%C5%9Fim%C5%9Fek-53556612a/";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const quotePanelClass = cn(
  "relative flex w-full max-w-full flex-1 flex-col",
  "min-h-[24rem] sm:min-h-[27rem] lg:min-h-0 lg:h-full",
  "overflow-hidden rounded-2xl border border-border/80",
  "bg-primary text-primary-foreground",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
  "ring-1 ring-inset ring-white/10",
);

export function AboutFounderSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-founder-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div
          className={cn(
            homeCardClassName(true),
            "overflow-hidden p-0",
            "shadow-[0_40px_100px_-72px_rgba(15,23,42,0.55)]",
          )}
        >
          <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
            <div
              className="order-1 min-w-0 border-b border-border/80 p-6 sm:p-8 lg:order-none lg:col-span-4 lg:border-b-0 lg:border-r lg:px-9 lg:py-10"
            >
              <p className="text-sm font-semibold tracking-[0.12em] text-primary">
                {t("founderPerspective.eyebrow")}
              </p>
              <h2
                id="about-founder-heading"
                className="mt-3 text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl sm:leading-snug lg:text-[1.65rem] lg:leading-tight"
              >
                {t("founderPerspective.title")}
              </h2>
              <p className="mt-2.5 text-sm font-medium text-muted-foreground sm:text-[0.9375rem]">
                {t("founderPerspective.byline")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                {t("founderPerspective.body")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                {t("founderPerspective.body2")}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.65]">
                {t("founderPerspective.body3")}
              </p>
              <div className="mt-7">
                <AppButton
                  asChild
                  variant="outline"
                  size="sm"
                  className="!min-h-9 h-9 w-full max-w-sm border-border/80 bg-background/50 px-3.5 text-sm font-medium text-foreground/90 shadow-none hover:bg-background/80 sm:w-auto"
                >
                  <a
                    href={FOUNDER_LINKEDIN_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5"
                  >
                    <LinkedInGlyph className="size-3.5 shrink-0 text-primary" />
                    {t("founderPerspective.linkedinCta")}
                  </a>
                </AppButton>
              </div>
            </div>

            <div
              className="order-2 flex min-h-0 items-center justify-center border-b border-border/80 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 sm:p-8 lg:order-none lg:col-span-4 lg:min-h-0 lg:border-b-0 lg:border-r lg:px-8 lg:py-10"
            >
              <div className="w-full max-w-xs sm:max-w-sm">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[15.5rem] sm:max-w-md">
                  <FounderPortrait
                    src="/images/founder-burcu-simsek.jpg"
                    alt={t("founderPerspective.name")}
                    initials="BS"
                    className="!h-full !w-full max-w-none"
                  />
                </div>
              </div>
            </div>

            <aside
              className={cn(
                "order-3 flex min-h-0 w-full min-w-0 flex-col self-stretch bg-surface/60 p-6 sm:p-8 lg:order-none lg:col-span-4 lg:h-full lg:px-8 lg:py-10",
              )}
            >
              <div className={quotePanelClass}>
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_0%_0%,rgba(8,145,178,0.22),transparent_55%)]"
                  aria-hidden
                />
                <div className="relative flex w-full min-h-0 flex-1 flex-col justify-center px-7 py-8 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
                  <div className="mb-4 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-primary-foreground/90">
                    <Quote className="size-3.5 shrink-0 opacity-90" aria-hidden />
                    {t("founderPerspective.quoteLabel")}
                  </div>
                  <p className="min-w-0 break-words text-pretty text-base font-medium leading-[1.6] text-primary-foreground sm:text-[1.0625rem] sm:leading-[1.64] lg:leading-[1.66] whitespace-pre-line">
                    {t("founderPerspective.quote")}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
