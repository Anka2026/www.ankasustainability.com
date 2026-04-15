import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_BG_TINT, SECTION_PAD_EMPHASIS } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const keys = ["manufacturing", "packaging", "construction", "corporate"] as const;

export function SectorsPreviewSection({ t }: Props) {
  return (
    <section className={cn(SECTION_BG_TINT, SECTION_PAD_EMPHASIS)}>
      <Container>
        <SectionHeading
          titleAs="h2"
          accentRule
          eyebrow={t("sectors.eyebrow")}
          title={t("sectors.title")}
          description={t("sectors.subtitle")}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {keys.map((key) => (
            <article
              key={key}
              className={cn(
                homeCardClassName(true),
                "flex flex-col border-l-[3px] border-l-primary/45 p-6 pt-7 sm:p-7",
              )}
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {t(`sectors.${key}.title`)}
              </h3>
              {t(`sectors.${key}.body`) ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`sectors.${key}.body`)}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
