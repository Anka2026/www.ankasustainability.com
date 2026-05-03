import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { AppButton } from "@/components/ui/app-button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

import { BrandMark } from "./brand-mark";
import { Container } from "./container";
import { HeaderPrimaryNav } from "./header-primary-nav";

export async function AppHeader() {
  const tBrand = await getTranslations("brand");
  const tActions = await getTranslations("actions");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/[0.98] shadow-[inset_0_-1px_0_0_rgba(47,61,74,0.22),inset_0_-2px_0_0_rgba(8,145,178,0.16),0_16px_44px_-28px_rgba(15,23,42,0.12)] backdrop-blur-md backdrop-saturate-150">
      <Container className="flex min-h-[4.5rem] w-full max-w-7xl items-center justify-between gap-3 py-2.5 sm:min-h-[4.625rem] sm:gap-3.5 lg:gap-4 xl:max-w-[86rem] 2xl:max-w-[92rem] px-6 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex min-w-0 max-w-[min(100%,12.5rem)] shrink items-center gap-2.5 sm:max-w-[14rem] sm:gap-3"
          aria-label={`${tBrand("headerName")}. ${tBrand("tagline")}`}
        >
          <BrandMark variant="header" priority />
          <div className="min-w-0 self-center border-l border-border/55 pl-2.5 sm:pl-3">
            <span className="block truncate text-sm font-semibold tracking-[-0.02em] text-foreground transition-colors group-hover:text-primary sm:text-[0.9375rem]">
              {tBrand("headerName")}
            </span>
            <span className="mt-0.5 hidden text-[0.6875rem] font-medium leading-snug tracking-wide text-muted-foreground transition-colors group-hover:text-foreground/90 xl:block">
              {tBrand("tagline")}
            </span>
          </div>
        </Link>

        <HeaderPrimaryNav />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="hidden shrink-0 sm:block">
            <LanguageSwitcher />
          </div>
          <AppButton
            asChild
            size="sm"
            className="hidden h-8 min-w-0 justify-center border border-primary/28 bg-primary px-3 text-[0.8125rem] font-semibold shadow-[0_10px_26px_-18px_rgba(47,61,74,0.85)] ring-0 transition-[box-shadow,background-color] hover:border-primary/40 hover:bg-[var(--primary-hover)] hover:shadow-[0_14px_34px_-18px_rgba(8,145,178,0.18)] sm:inline-flex"
          >
            <Link href="/contact">{tActions("contact")}</Link>
          </AppButton>
        </div>
      </Container>

      <div className="border-t border-border/80 bg-surface/95 sm:hidden">
        <Container className="max-w-7xl px-6 py-3 sm:px-8 xl:max-w-[86rem] 2xl:max-w-[92rem]">
          <LanguageSwitcher />
        </Container>
      </div>
    </header>
  );
}
