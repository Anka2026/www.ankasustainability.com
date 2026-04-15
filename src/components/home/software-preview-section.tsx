import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_EMPHASIS } from "@/lib/section-layout";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function SoftwarePreviewSection({ t }: Props) {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-surface via-[var(--section-tint)] to-[var(--section-deep)]",
        SECTION_PAD_EMPHASIS,
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
          <div className="space-y-6">
            <SectionHeading
              titleAs="h2"
              accentRule
              eyebrow={t("software.eyebrow")}
              title={t("software.title")}
              description={t("software.description")}
            />
            {t("software.badge1") || t("software.badge2") ? (
              <div className="flex flex-wrap gap-2">
                {t("software.badge1") ? (
                  <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {t("software.badge1")}
                  </span>
                ) : null}
                {t("software.badge2") ? (
                  <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {t("software.badge2")}
                  </span>
                ) : null}
              </div>
            ) : null}
            <div>
              <AppButton variant="outline" asChild>
                <Link href="/software">{t("software.cta")}</Link>
              </AppButton>
            </div>
          </div>

          <div
            className={cn(
              homeCardClassName(false),
              "flex min-h-[300px] flex-col justify-between bg-background/80 p-8 ring-1 ring-accent/15",
            )}
          >
            <div>
              {t("software.cardTitle") ? (
                <p className="text-sm font-semibold text-foreground">
                  {t("software.cardTitle")}
                </p>
              ) : null}
              {t("software.cardBody") ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t("software.cardBody")}
                </p>
              ) : null}
            </div>
            <div
              className="mt-8 rounded-lg border border-dashed border-accent/25 bg-surface p-6"
              aria-hidden
            >
              <div className="h-2 w-24 rounded bg-accent/35" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-16 rounded-md bg-primary/12" />
                <div className="h-16 rounded-md bg-accent/25" />
                <div className="h-16 rounded-md bg-primary/12" />
              </div>
              <div className="mt-4 h-2 w-full max-w-[60%] rounded bg-accent/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
