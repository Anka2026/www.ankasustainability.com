import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import type { IntlTranslator } from "@/lib/i18n-types";
import { CONTACT_HELP_ITEMS } from "@/lib/contact-content";

type Props = Readonly<{
  t: IntlTranslator;
}>;

export function ContactHelpSection({ t }: Props) {
  return (
    <section
      className="border-b border-border bg-background py-16 sm:py-20"
      aria-labelledby="contact-help-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            titleAs="h2"
            titleId="contact-help-heading"
            accentRule
            eyebrow=""
            title={t("help.title")}
          />
          <ul className="mt-8 space-y-3 border-l-2 border-accent/35 pl-5">
            {CONTACT_HELP_ITEMS.map((n) => (
              <li
                key={n}
                className="text-sm leading-relaxed text-foreground sm:text-[0.9375rem]"
              >
                {t(`help.item${n}`)}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
