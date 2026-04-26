import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_EMPHASIS } from "@/lib/section-layout";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { BadgeCheck, Layers3 } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwarePreviewSection({ t }: Props) {
  const items = ((): string[] => {
    try {
      const raw = (t as unknown as { raw: (k: string) => unknown }).raw("software.items");
      if (!Array.isArray(raw)) return [];
      return raw
        .filter((v): v is string => typeof v === "string")
        .map((s) => s.trim())
        .filter(Boolean);
    } catch {
      return [];
    }
  })();

  return (
    <section
      className={cn(
        "bg-gradient-to-b from-[var(--section-tint)] via-[var(--section-tint)] to-[var(--section-deep)]",
        SECTION_PAD_EMPHASIS,
      )}
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <div className="flex max-w-3xl flex-col gap-6">
          <SectionHeading
            titleAs="h2"
            accentRule
            align="left"
            eyebrow={t("software.eyebrow")}
            title={t("software.title")}
            description={t("software.description")}
            descriptionClassName="max-w-2xl text-pretty sm:text-lg sm:leading-[1.65]"
          />
        </div>

        <div className="mt-10 sm:mt-12">
          <article
            className={cn(
              homeCardClassName(true),
              "max-w-4xl border-l-[3px] border-l-accent/80 bg-background/90 p-6 sm:p-7 lg:p-8",
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {t("software.portfolioTitle") ? (
                  <p className="text-base font-semibold tracking-tight text-foreground">
                    {t("software.portfolioTitle")}
                  </p>
                ) : null}
                {t("software.portfolioSupport") ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t("software.portfolioSupport")}
                  </p>
                ) : null}
              </div>
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/12 bg-primary/[0.04] text-primary">
                <Layers3 className="h-5 w-5" aria-hidden />
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {items.map((item) => (
                <li key={item} className="flex gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <p className="text-sm font-semibold leading-relaxed text-foreground">{item}</p>
                </li>
              ))}
            </ul>
            {t("software.note") ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t("software.note")}</p>
            ) : null}
          </article>
        </div>

        <div className="mt-8 sm:mt-9">
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
