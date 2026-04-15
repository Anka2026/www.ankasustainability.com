import { AppButton } from "@/components/ui/app-button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_PAD_HOME } from "@/lib/section-layout";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Layers } from "lucide-react";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const sectorKeys = [
  "manufacturing",
  "packaging",
  "construction",
  "aluminium",
  "foodAgri",
  "chemicals",
  "energy",
  "corporate",
] as const;

export function SoftwareSectorsPairSection({ t }: Props) {
  return (
    <section
      className={cn(
        "bg-gradient-to-b from-surface via-[var(--section-tint)] to-[var(--section-deep)]",
        SECTION_PAD_HOME,
      )}
    >
      <Container>
        <div
          className={cn(
            "overflow-hidden",
            "rounded-3xl border border-border bg-surface",
            "shadow-[var(--shadow-card)] ring-1 ring-inset ring-primary/[0.06]",
          )}
        >
          <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
            <div className="space-y-5 border-b border-border/80 bg-gradient-to-b from-surface via-background/55 to-background/85 p-6 sm:p-7 lg:border-b-0 lg:border-r lg:border-border/80">
              <SectionHeading
                titleAs="h2"
                accentRule
                eyebrow={t("software.eyebrow")}
                title={t("software.title")}
                description={t("software.description")}
              />
              <div
                className="rounded-2xl border border-accent/18 bg-gradient-to-r from-background/90 via-accent/[0.06] to-background/90 p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.72)]"
                aria-hidden
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
                  <div className="flex flex-1 gap-1.5">
                    {[52, 68, 44, 74, 58].map((h, i) => (
                      <span
                        key={i}
                        className="min-w-0 flex-1 rounded-sm bg-gradient-to-t from-primary/25 to-accent/55"
                        style={{ height: `${h}px` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
                <AppButton
                  asChild
                  className="border border-accent/45 bg-accent text-accent-foreground shadow-[0_12px_32px_-22px_rgba(8,145,178,0.55)] hover:border-accent hover:bg-accent hover:brightness-[1.03]"
                >
                  <Link href="/software">{t("software.cta")}</Link>
                </AppButton>
                <AppButton variant="outline" asChild>
                  <Link href="/sectors">{t("software.ctaSectors")}</Link>
                </AppButton>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-4 bg-gradient-to-b from-[var(--section-tint)] via-background/65 to-background/90 p-6 sm:p-7">
              <SectionHeading
                titleAs="h2"
                accentRule
                eyebrow={t("sectors.eyebrow")}
                title={t("sectors.title")}
                description={t("sectors.subtitle")}
              />
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {sectorKeys.map((key) => (
                  <div
                    key={key}
                    className={cn(
                      "flex min-h-[3.25rem] items-center px-3.5 py-2.5",
                      homeCardClassName(false),
                    )}
                  >
                    <span className="flex min-w-0 items-center gap-2 text-sm font-semibold leading-snug tracking-tight text-foreground">
                      <Layers className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.85} aria-hidden />
                      <span className="min-w-0">{t(`sectors.${key}.title`)}</span>
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs font-medium leading-snug text-muted-foreground">
                {t("sectors.breadth")}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
