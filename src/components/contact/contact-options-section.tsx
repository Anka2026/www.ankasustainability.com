import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { homeCardClassName } from "@/lib/home-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const OPTIONS = [1, 2, 3] as const;

export function ContactOptionsSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-12 sm:py-14"
      aria-labelledby="contact-options-heading"
    >
      <Container className="max-w-7xl xl:max-w-[86rem] 2xl:max-w-[92rem]">
        <SectionHeading
          titleAs="h2"
          titleId="contact-options-heading"
          accentRule
          eyebrow=""
          title={t("options.title")}
        />
        <div className="mt-8 grid gap-4.5 md:grid-cols-3 md:gap-5">
          {OPTIONS.map((n) => (
            <article
              key={n}
              className={cn(
                homeCardClassName(false),
                "flex flex-col border-t-[3px] border-t-primary/35 bg-[var(--section-tint)] p-5 sm:p-6",
              )}
            >
              <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {t(`options.opt${n}Title`)}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base sm:leading-[1.55]">
                {t(`options.opt${n}Description`)}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
