import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { FounderPortrait } from "@/components/about/founder-portrait";
import {
  aboutFounderColumnClassName,
  aboutFounderGridClassName,
  aboutFounderNarrativeInnerClassName,
  aboutFounderPanelClassName,
  aboutFounderPortraitFrameClassName,
  aboutFounderQuotePanelClassName,
  aboutPageContainerClassName,
} from "@/lib/about-layout-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import type { IntlTranslator } from "@/lib/i18n-types";
import { cn } from "@/lib/utils";

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

function stripOuterTypographicQuotes(raw: string) {
  return raw
    .trim()
    .replace(/^[\u201C\u201D\u0022\u0027\u00AB\u00BB]+/, "")
    .replace(/[\u201C\u201D\u0022\u0027\u00AB\u00BB]+$/, "")
    .trim();
}

export function AboutFounderSection({ t }: Props) {
  return (
    <section
      className={cn("border-b border-border bg-background", SECTION_PAD_HOME)}
      aria-labelledby="about-founder-heading"
    >
      <Container className={aboutPageContainerClassName()}>
        <div className={aboutFounderPanelClassName()}>
          <div className={aboutFounderGridClassName()}>
            <div className={aboutFounderColumnClassName("portrait")}>
              <div className={aboutFounderPortraitFrameClassName()}>
                <FounderPortrait
                  src="/images/founder-burcu-simsek.jpg"
                  alt={t("founderPerspective.name")}
                  initials="BS"
                  className="!h-full !w-full max-w-none"
                />
              </div>
            </div>

            <div className={aboutFounderColumnClassName("narrative")}>
              <div className={aboutFounderNarrativeInnerClassName()}>
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  {t("founderPerspective.eyebrow")}
                </p>
                <h2
                  id="about-founder-heading"
                  className="mt-2.5 text-pretty text-balance text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-[1.35rem] lg:text-[1.5rem] lg:leading-tight"
                >
                  {t("founderPerspective.title")}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {t("founderPerspective.byline")}
                </p>
                <p className="mt-3.5 text-pretty text-[0.9375rem] leading-[1.65] text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {t("founderPerspective.body")}
                </p>
                <p className="mt-3.5 text-pretty text-[0.9375rem] leading-[1.65] text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {t("founderPerspective.body2")}
                </p>
                <p className="mt-3.5 text-pretty text-[0.9375rem] leading-[1.65] text-muted-foreground sm:text-base sm:leading-[1.68]">
                  {t("founderPerspective.body3")}
                </p>
                <div className="mt-6">
                  <AppButton
                    asChild
                    variant="outline"
                    size="sm"
                    className="!min-h-9 h-9 w-full max-w-xs border-border/80 bg-background/60 px-3.5 text-sm font-medium text-foreground/90 shadow-none hover:bg-background sm:w-auto"
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
            </div>

            <aside className={aboutFounderColumnClassName("quote")}>
              <div className={aboutFounderQuotePanelClassName()}>
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_0%_0%,rgba(8,145,178,0.2),transparent_58%)]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/65 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
                  aria-hidden
                />
                <div className="relative px-6 py-6 sm:px-7 sm:py-7">
                  <p
                    className="mb-2 font-serif text-[1.75rem] leading-none text-primary-foreground/30 sm:text-[2rem]"
                    aria-hidden
                  >
                    “
                  </p>
                  <p className="-mt-0.5 min-w-0 text-pretty text-[0.9rem] font-medium leading-[1.65] text-primary-foreground/95 sm:text-[0.9375rem] sm:leading-[1.68] whitespace-pre-line">
                    {stripOuterTypographicQuotes(t("founderPerspective.quote"))}
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
