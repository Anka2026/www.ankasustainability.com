"use client";

import {
  AlertTriangle,
  Boxes,
  FileCheck2,
  FileText,
  LayoutDashboard,
  Map,
  Package,
  Scale,
  Settings,
  Store,
  Truck,
} from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export type ProductNavItem = {
  key:
    | "overview"
    | "products"
    | "bom"
    | "responsibility"
    | "risks"
    | "evidence"
    | "scenarios"
    | "technical_file"
    | "suppliers"
    | "markets"
    | "settings";
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

export function PCOSNav({ items }: { items: ProductNavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Packaging Compliance & Cost OS" className="flex flex-col gap-1">
      {items.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/pcos" && pathname.startsWith(`${item.href}/`)) ||
          (item.href === "/pcos" && pathname === "/pcos");

        const Icon = item.icon;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={cn(
              "group flex items-center gap-3 rounded-[min(0.85rem,var(--radius-lg))] px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-[var(--accent-soft)] text-primary shadow-sm shadow-primary/[0.06]"
                : "text-muted-foreground hover:bg-muted/55 hover:text-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/55 focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            )}
          >
            <Icon
              className={cn(
                "h-4.5 w-4.5 transition-colors",
                active ? "text-primary" : "text-muted-foreground group-hover:text-foreground",
              )}
            />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export const pcosNavIcons = {
  overview: LayoutDashboard,
  products: Store,
  bom: Package,
  responsibility: Map,
  risks: AlertTriangle,
  evidence: FileCheck2,
  scenarios: Scale,
  technical_file: FileText,
  suppliers: Truck,
  markets: Boxes,
  settings: Settings,
} as const;

