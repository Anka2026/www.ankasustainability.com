import Image from "next/image";

import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_EMPHASIS } from "@/lib/section-layout";
import { Link } from "@/i18n/navigation";
import { softwareHrefForDisplaySlug } from "@/lib/software-module-anchors";
import type { SoftwarePortfolioDisplaySlug } from "@/lib/software-module-anchors";
import { getSoftwareDashboardImageSrc, HOME_SOFTWARE_HIGHLIGHT_ORDER } from "@/lib/software-visual-assets";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
  tSoftware: IntlTranslator;
}>;

export function SoftwarePreviewSection({ t, tSoftware }: Props) {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-[var(--section-tint)] via-[var(--section-tint)] to-[var(--section-deep)]",
        SECTION_PAD_EMPHASIS,
      )}
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="mx-auto flex max-w-[min(100%,56rem)] flex-col gap-5 sm:mx-0 sm:max-w-none">
          <SectionHeading
            titleAs="h2"
            accentRule
            align="left"
            eyebrow={t("software.eyebrow")}
            title={t("software.title")}
            description={t("software.description")}
            descriptionClassName="max-w-[min(100%,52rem)] text-pretty text-[0.9375rem] leading-relaxed sm:text-lg sm:leading-[1.65]"
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <article
            className={cn(
              homeCardClassName(true),
              "border-l-[3px] border-l-accent/80 bg-background/95 p-6 sm:p-8 lg:p-9",
            )}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
              <div className="min-w-0 max-w-prose flex-1">
                {t("software.portfolioTitle") ? (
                  <p className="text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                    {t("software.portfolioTitle")}
                  </p>
                ) : null}
                {t("software.portfolioSupport") ? (
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
                    {t("software.portfolioSupport")}
                  </p>
                ) : null}
                {t("software.note") ? (
                  <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{t("software.note")}</p>
                ) : null}
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_SOFTWARE_HIGHLIGHT_ORDER.map((slug: SoftwarePortfolioDisplaySlug) => {
                const src = getSoftwareDashboardImageSrc(slug);
                const href = softwareHrefForDisplaySlug(slug);
                const tt = tSoftware as unknown as (key: string) => string;
                const title = tt(`portfolio.products.${slug}.title`);
                const alt = tt(`portfolio.products.${slug}.screenshotAlt`).trim() || title;

                return (
                  <Link
                    key={slug}
                    href={href}
                    className={cn(
                      "group flex min-h-0 flex-col overflow-hidden rounded-xl border border-border/70 bg-white/95 shadow-[0_14px_40px_-32px_rgba(15,23,42,0.28)] ring-1 ring-inset ring-primary/[0.04]",
                      "transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[0_22px_52px_-36px_rgba(8,145,178,0.35)]",
                    )}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-slate-50/95 to-white">
                      {src ? (
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                          className="object-contain object-center p-2 sm:p-2.5"
                          quality={88}
                        />
                      ) : null}
                    </div>
                    <div className="border-t border-border/55 bg-white/95 px-3 py-3 sm:px-3.5 sm:py-3.5">
                      <p className="text-center text-xs font-semibold leading-snug text-foreground sm:text-left sm:text-[0.8125rem]">
                        {title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </article>
        </div>

        <div className="mt-8 flex justify-center sm:mt-9 sm:justify-start">
          <AppButton
            variant="outline"
            asChild
            className="border-slate-300/90 bg-white/80 hover:border-accent/40 hover:bg-primary/[0.04] hover:text-primary"
          >
            <Link href="/software">{t("software.cta")}</Link>
          </AppButton>
        </div>
      </Container>
    </section>
  );
}
