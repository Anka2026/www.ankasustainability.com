import { getTranslations } from "next-intl/server";

import type { Organization } from "@/pcos/domain";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { AppButton } from "@/components/ui/app-button";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

import { PCOSNav, pcosNavIcons, type ProductNavItem } from "./nav";

function buildNav(t: (key: string) => string): ProductNavItem[] {
  return [
    { key: "overview", href: "/pcos", icon: pcosNavIcons.overview, label: t("nav.overview") },
    { key: "products", href: "/pcos/products", icon: pcosNavIcons.products, label: t("nav.products") },
    { key: "bom", href: "/pcos/packaging-bom", icon: pcosNavIcons.bom, label: t("nav.bom") },
    {
      key: "responsibility",
      href: "/pcos/responsibility-mapping",
      icon: pcosNavIcons.responsibility,
      label: t("nav.responsibility"),
    },
    { key: "risks", href: "/pcos/compliance-risks", icon: pcosNavIcons.risks, label: t("nav.risks") },
    { key: "evidence", href: "/pcos/evidence-pack", icon: pcosNavIcons.evidence, label: t("nav.evidence") },
    { key: "scenarios", href: "/pcos/scenarios", icon: pcosNavIcons.scenarios, label: t("nav.scenarios") },
    {
      key: "technical_file",
      href: "/pcos/technical-file",
      icon: pcosNavIcons.technical_file,
      label: t("nav.technicalFile"),
    },
    { key: "suppliers", href: "/pcos/suppliers", icon: pcosNavIcons.suppliers, label: t("nav.suppliers") },
    { key: "markets", href: "/pcos/markets", icon: pcosNavIcons.markets, label: t("nav.markets") },
    { key: "settings", href: "/pcos/settings", icon: pcosNavIcons.settings, label: t("nav.settings") },
  ];
}

export async function PCOSShell({
  organization,
  children,
}: {
  organization: Organization;
  children: React.ReactNode;
}) {
  const t = await getTranslations("pcos");
  const nav = buildNav((k) => t(k));

  return (
    <div className="min-h-[calc(100vh-0px)] bg-page-canvas text-foreground">
      <div className="mx-auto flex w-full max-w-[1600px] gap-0">
        <aside
          className={cn(
            "hidden w-[280px] shrink-0 border-r border-border/85 bg-surface/95",
            "lg:block",
          )}
        >
          <div className="flex h-16 items-center gap-3 border-b border-border/70 px-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/18 bg-[var(--accent-soft)] text-primary shadow-sm">
              <span className="text-xs font-bold tracking-wide">OS</span>
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight text-foreground">
                {t("productName")}
              </div>
              <div className="truncate text-xs text-muted-foreground">{organization.displayName}</div>
            </div>
          </div>

          <div className="px-3 py-4">
            <PCOSNav items={nav} />
          </div>

          <div className="mt-auto border-t border-border/70 px-5 py-4">
            <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {t("sidebar.foundation")}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {t("sidebar.foundationNote")}
            </p>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/[0.98] backdrop-blur-md">
            <div className="flex h-16 items-center justify-between gap-3 px-5">
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold tracking-tight text-foreground">
                  {organization.displayName}
                </div>
                <div className="truncate text-xs text-muted-foreground">{t("header.workspace")}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:block">
                  <LanguageSwitcher />
                </div>
                <AppButton asChild size="sm" variant="outline">
                  <Link href="/contact">{t("header.support")}</Link>
                </AppButton>
              </div>
            </div>
          </header>

          <main className="min-w-0 flex-1 px-5 py-6">{children}</main>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

