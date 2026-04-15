"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import * as React from "react";

import { Link, usePathname } from "@/i18n/navigation";
import {
  SERVICES_CATEGORY_ICONS,
  SERVICES_CATEGORY_ORDER,
  type ServicesCategoryId,
} from "@/lib/services-categories";
import { cn } from "@/lib/utils";

const SUBTOPIC_KEYS = ["i1", "i2", "i3", "i4"] as const;

/** Primary nav routes — Contact is only the header CTA, not duplicated in the nav list. */
const NAV_ROUTES = [
  { href: "/", key: "home" as const },
  { href: "/about", key: "about" as const },
  { href: "/software", key: "software" as const },
  { href: "/sectors", key: "sectors" as const },
  { href: "/insights", key: "insights" as const },
] as const;

const linkClassName = cn(
  "whitespace-nowrap rounded-md px-2.5 py-2 text-[0.875rem] font-semibold tracking-[0.01em] text-foreground/78 transition-[background-color,color,box-shadow] lg:px-3 lg:text-[0.9375rem]",
  "hover:bg-muted/70 hover:text-primary",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
);

const triggerClassName = cn(
  linkClassName,
  "inline-flex items-center gap-0.5 bg-transparent font-semibold",
  "data-[state=open]:bg-primary/[0.06] data-[state=open]:text-primary data-[state=open]:shadow-[inset_0_0_0_1px_rgba(8,145,178,0.22)]",
);

const navActiveClass = cn(
  "bg-primary/[0.06] font-semibold text-primary shadow-[inset_0_0_0_1px_rgba(8,145,178,0.22)]",
);

function useNavActive() {
  const pathname = usePathname();
  return React.useCallback(
    (href: string) =>
      href === "/"
        ? pathname === "/"
        : pathname === href || pathname.startsWith(`${href}/`),
    [pathname],
  );
}

function MegaMenuPanel({
  tPage,
  tMega,
}: {
  tPage: (key: string) => string;
  tMega: (key: string) => string;
}) {
  return (
    <div className="w-full px-5 py-5 sm:px-6 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          {SERVICES_CATEGORY_ORDER.map((id) => {
            const Icon = SERVICES_CATEGORY_ICONS[id];
            return (
              <div
                key={id}
                className={cn(
                  "group min-w-0 rounded-2xl border border-border/80 bg-surface p-4",
                  "shadow-[0_16px_46px_-38px_rgba(15,23,42,0.22)] ring-1 ring-inset ring-primary/[0.05]",
                  "transition-[transform,border-color,box-shadow] duration-200 ease-out",
                  "hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_22px_60px_-42px_rgba(15,23,42,0.30)]",
                )}
              >
                <Link
                  href={`/services#service-${id}`}
                  className="flex items-start gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-accent/22 bg-accent/[0.09] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.78),0_12px_26px_-22px_rgba(8,145,178,0.22)] ring-1 ring-inset ring-primary/[0.05]">
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.85} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.875rem] font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {tPage(`categories.${id}.label`)}
                    </span>
                  </span>
                </Link>
                <ul className="mt-3 space-y-1.5 border-l-2 border-accent/28 pl-3">
                  {SUBTOPIC_KEYS.slice(0, 3).map((k) => (
                    <li
                      key={k}
                      className="text-xs leading-snug text-muted-foreground"
                    >
                      {tMega(`subtopics.${id}.${k}`)}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
      </div>
      <div className="mt-5 flex justify-center border-t border-border/55 pt-5">
        <Link
          href="/services"
          className={cn(
            "inline-flex h-9 items-center justify-center rounded-md border border-border/85 bg-surface px-4 text-sm font-semibold text-foreground",
            "shadow-[0_1px_2px_-1px_rgba(15,23,42,0.06),inset_0_1px_0_0_rgba(255,255,255,0.88)] transition-[background-color,border-color,box-shadow,color]",
            "hover:border-accent/35 hover:bg-[var(--accent-soft)] hover:text-primary hover:shadow-[0_14px_34px_-22px_rgba(15,23,42,0.18)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          )}
        >
          {tMega("viewAll")}
        </Link>
      </div>
    </div>
  );
}

function DesktopServicesMegaNav() {
  const tNav = useTranslations("nav");
  const tMega = useTranslations("servicesMegaMenu");
  const tPage = useTranslations("servicesPage");
  const isActive = useNavActive();
  const servicesActive = isActive("/services");

  return (
    <nav
      className="relative z-40 flex max-w-full flex-1 list-none items-center justify-center gap-0.5 lg:gap-1 xl:gap-1.5"
      aria-label="Primary"
    >
      <Link
        href="/"
        className={cn(linkClassName, isActive("/") && navActiveClass)}
      >
        {tNav("home")}
      </Link>
      <Link
        href="/about"
        className={cn(linkClassName, isActive("/about") && navActiveClass)}
      >
        {tNav("about")}
      </Link>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(triggerClassName, servicesActive && navActiveClass)}
            aria-haspopup="menu"
          >
            {tNav("services")}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          sideOffset={6}
          collisionPadding={16}
          className={cn(
            "z-[100] max-h-[min(74vh,calc(100dvh-5rem))] w-[min(70rem,calc(100vw-2rem))] overflow-y-auto overflow-x-hidden",
            "rounded-3xl border border-border/70 bg-surface/95 p-0 backdrop-blur-md backdrop-saturate-150",
            "shadow-[0_40px_108px_-66px_rgba(15,23,42,0.42),0_0_0_1px_rgba(8,145,178,0.14)]",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          )}
        >
          <MegaMenuPanel tPage={tPage} tMega={tMega} />
        </DropdownMenuContent>
      </DropdownMenu>

      {NAV_ROUTES.slice(2).map(({ href, key }) => (
        <Link
          key={key}
          href={href}
          className={cn(linkClassName, isActive(href) && navActiveClass)}
        >
          {tNav(key)}
        </Link>
      ))}
    </nav>
  );
}

function MobileNavDialog() {
  const tNav = useTranslations("nav");
  const tMega = useTranslations("servicesMegaMenu");
  const tPage = useTranslations("servicesPage");
  const [open, setOpen] = React.useState(false);
  const isActive = useNavActive();
  const servicesActive = isActive("/services");

  const close = React.useCallback(() => setOpen(false), []);

  const mobileLink = (href: string, className?: string) =>
    cn(
      "rounded-md px-3 py-2.5 text-[0.9375rem] font-semibold transition-colors",
      isActive(href) ? navActiveClass : "text-foreground hover:bg-muted/80",
      className,
    );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/80 bg-surface text-foreground",
            "shadow-[0_1px_2px_-1px_rgba(15,23,42,0.06),inset_0_1px_0_0_rgba(255,255,255,0.85)] transition-colors",
            "hover:bg-muted/80 hover:text-primary",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
          )}
          aria-label={tMega("openMenu")}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-[60] bg-primary/35 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent
          className={cn(
            "fixed right-0 top-0 z-[70] flex h-full max-h-[100dvh] w-[min(22rem,92vw)] max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-l border-border/80 bg-surface p-0 shadow-2xl",
            "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          )}
        >
          <div className="flex items-center justify-between border-b border-border/80 px-5 py-4">
            <div>
              <DialogTitle className="text-base font-semibold text-foreground">
                {tMega("sheetTitle")}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {tMega("openMenu")}
              </DialogDescription>
            </div>
            <DialogClose asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={tMega("closeMenu")}
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </DialogClose>
          </div>
          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4"
            aria-label="Primary"
          >
            <Link href="/" onClick={close} className={mobileLink("/")}>
              {tNav("home")}
            </Link>
            <Link href="/about" onClick={close} className={mobileLink("/about")}>
              {tNav("about")}
            </Link>

            <Accordion type="multiple" className="w-full px-0">
              <AccordionItem value="services" className="border-b-0">
                <AccordionTrigger
                  className={cn(
                    "rounded-md px-3 py-2.5 text-left text-[0.9375rem] font-semibold hover:bg-muted/80 hover:no-underline [&[data-state=open]]:bg-muted/60",
                    servicesActive && navActiveClass,
                  )}
                >
                  {tNav("services")}
                </AccordionTrigger>
                <AccordionContent className="pb-2 pt-0">
                  <Accordion type="multiple" className="space-y-0 border-l border-accent/35 pl-3">
                    {SERVICES_CATEGORY_ORDER.map((id: ServicesCategoryId) => (
                      <AccordionItem
                        key={id}
                        value={id}
                        className="border-b border-border/50"
                      >
                        <AccordionTrigger className="py-2.5 text-left text-[0.8125rem] font-medium leading-snug text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                          {tPage(`categories.${id}.label`)}
                        </AccordionTrigger>
                        <AccordionContent className="pb-3 pt-0">
                          <ul className="space-y-2 pb-1">
                            {SUBTOPIC_KEYS.map((k) => (
                              <li key={k}>
                                <Link
                                  href={`/services#service-${id}`}
                                  onClick={close}
                                  className="block text-[0.8125rem] leading-snug text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {tMega(`subtopics.${id}.${k}`)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-3 border-t border-border/60 pt-3">
                    <Link
                      href="/services"
                      onClick={close}
                      className="block rounded-md px-1 py-2 text-sm font-medium text-accent hover:text-primary"
                    >
                      {tMega("viewAll")}
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {NAV_ROUTES.slice(2).map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                onClick={close}
                className={mobileLink(href)}
              >
                {tNav(key)}
              </Link>
            ))}
          </nav>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

export function HeaderPrimaryNav() {
  return (
    <>
      <div className="relative hidden min-w-0 flex-1 justify-center lg:flex">
        <DesktopServicesMegaNav />
      </div>
      <div className="flex shrink-0 lg:hidden">
        <MobileNavDialog />
      </div>
    </>
  );
}
