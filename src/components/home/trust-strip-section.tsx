import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const keys = ["reporting", "carbonCbam", "lcaEpd", "software"] as const;

export function TrustStripSection({ t }: Props) {
  const aria = t("trust.ariaLabel");

  return (
    <section
      className="border-b border-border bg-muted/35 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65)]"
      {...(aria ? { "aria-label": aria } : {})}
    >
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/25 to-transparent"
        aria-hidden
      />
      <Container className="py-6 sm:py-7">
        <ul className="flex flex-wrap items-center justify-center gap-y-3">
          {keys.map((key, index) => (
            <li key={key} className="flex items-center">
              {index > 0 ? (
                <span
                  className="mx-3 hidden h-1 w-1 rounded-full bg-accent/45 sm:inline"
                  aria-hidden
                />
              ) : null}
              <span className="text-sm font-medium tracking-tight text-foreground">
                {t(`trust.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
