"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES: Record<
  AppLocale,
  { short: string; labelKey: `locale.${AppLocale}`; flagSrc: string }
> = {
  tr: { short: "TR", labelKey: "locale.tr", flagSrc: "/flags/tr.png" },
  en: { short: "EN", labelKey: "locale.en", flagSrc: "/flags/en.png" },
  nl: { short: "NL", labelKey: "locale.nl", flagSrc: "/flags/nl.png" },
};

export function LanguageSwitcher() {
  const t = useTranslations("actions");
  const pathname = usePathname();
  const router = useRouter();
  const activeLocale = useLocale() as AppLocale;
  const active = LOCALES[activeLocale];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex min-h-9 min-w-[8.25rem] items-center justify-start gap-2 rounded-lg border border-border/85 bg-surface px-2.5 py-2 text-sm font-semibold text-foreground",
            "shadow-[0_1px_2px_-1px_rgba(15,23,42,0.06),inset_0_1px_0_0_rgba(255,255,255,0.88)] transition-colors",
            "hover:border-accent/35 hover:bg-background hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "data-[state=open]:border-accent/35 data-[state=open]:bg-primary/[0.06] data-[state=open]:text-primary",
          )}
          aria-label={t("language")}
          aria-haspopup="menu"
        >
          <span className="relative h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-border/70" aria-hidden>
            <Image src={active.flagSrc} alt="" fill className="object-cover" sizes="24px" />
          </span>
          <span className="min-w-0 flex-1 truncate">{t(active.labelKey)}</span>
          <span className="text-[0.65rem] font-normal leading-none text-muted-foreground" aria-hidden>
            ▾
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className={cn(
            "z-[100] min-w-[12.5rem] overflow-hidden rounded-xl border border-border/80 bg-popover p-1.5 text-popover-foreground",
            "shadow-[0_24px_56px_-28px_rgba(15,23,42,0.22),0_0_0_1px_rgba(8,145,178,0.08)]",
          )}
        >
          {routing.locales.map((locale) => {
            const isActive = locale === activeLocale;
            const item = LOCALES[locale];
            return (
              <DropdownMenuItem
                key={locale}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2.5 text-[0.9375rem] font-semibold outline-none select-none",
                  "focus:bg-muted data-[highlighted]:bg-muted",
                  isActive && "bg-primary/[0.07] text-primary",
                )}
                onSelect={() => {
                  if (!isActive) router.push(pathname, { locale });
                }}
              >
                <span className="relative h-4 w-6 shrink-0 overflow-hidden rounded-[3px] ring-1 ring-border/70" aria-hidden>
                  <Image src={item.flagSrc} alt="" fill className="object-cover" sizes="24px" />
                </span>
                <span className="min-w-0 flex-1">{t(item.labelKey)}</span>
                {isActive ? (
                  <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                ) : (
                  <span className="h-4 w-4 shrink-0" aria-hidden />
                )}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
