"use client";

import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

export function SearchField({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 rounded-[min(0.85rem,var(--radius-lg))] border border-border bg-background px-3 py-2",
        "shadow-sm shadow-primary/[0.04] ring-1 ring-primary/[0.03] focus-within:ring-primary/[0.08]",
        className,
      )}
    >
      <Search className="h-4 w-4 text-muted-foreground" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-56 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
    </label>
  );
}

