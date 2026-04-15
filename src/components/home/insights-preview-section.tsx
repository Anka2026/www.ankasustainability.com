import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { SECTION_BG_TINT, SECTION_PAD_EMPHASIS } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function InsightsPreviewSection({ t }: Props) {
  return (
    <section className={cn(SECTION_BG_TINT, SECTION_PAD_EMPHASIS)}>
      <Container>
        <div
          className={cn(
            homeCardClassName(false),
            "mx-auto max-w-3xl p-7 sm:p-9",
          )}
        >
          <div className="max-w-2xl">
            <SectionHeading
              titleAs="h2"
              accentRule
              eyebrow={t("insights.eyebrow")}
              title={t("insights.title")}
              description={t("insights.subtitle")}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
