import { Container } from "@/components/container";
import type { IntlTranslator } from "@/lib/i18n-types";
import { Link } from "@/i18n/navigation";
import { SECTION_BG_TINT } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  t: IntlTranslator;
}>;

const NAV_KEYS = [
  { href: "#services-overview", labelKey: "pageNav.overview" as const },
  { href: "#services-areas", labelKey: "pageNav.scope" as const },
  { href: "#services-process", labelKey: "pageNav.process" as const },
  { href: "#services-why", labelKey: "pageNav.why" as const },
];

export function ServicesPageNavStrip({ t }: Props) {
  return (
    <nav
      className={cn(
        "border-b border-border/80",
        SECTION_BG_TINT,
      )}
      aria-label={t("pageNav.aria")}
    >
      <Container className="py-3.5 sm:py-4">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[0.9375rem] font-semibold tracking-[0.01em]">
          {NAV_KEYS.map(({ href, labelKey }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-foreground/70 transition-colors hover:text-primary"
              >
                {t(labelKey)}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
