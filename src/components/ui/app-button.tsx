import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;

export type AppButtonProps = ButtonProps &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

export function AppButton({
  className,
  size = "lg",
  variant,
  ...props
}: AppButtonProps) {
  const v = variant ?? "default";

  return (
    <Button
      size={size}
      variant={variant}
      className={cn(
        "rounded-[min(0.65rem,var(--radius-lg))] font-semibold tracking-[0.015em] transition-[box-shadow,background-color,border-color,color,transform] duration-200",
        "focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        v === "default" &&
          "min-h-10 border border-primary/25 bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_14px_34px_-18px_rgba(47,61,74,0.72)] hover:border-primary/40 hover:bg-[var(--primary-hover)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_16px_40px_-14px_rgba(8,145,178,0.32)] active:translate-y-px sm:min-h-11",
        v === "outline" &&
          "min-h-10 border border-border/90 bg-surface font-medium text-primary shadow-sm shadow-primary/[0.06] hover:border-accent/45 hover:bg-[var(--accent-soft)] hover:text-primary hover:shadow-[0_10px_28px_-16px_rgba(8,145,178,0.22)] sm:min-h-11",
        v === "inverseSolid" &&
          "min-h-10 border-transparent font-semibold tracking-[0.015em] sm:min-h-11",
        v === "inverseOutline" &&
          "min-h-10 border font-medium sm:min-h-11",
        v === "ghost" &&
          "min-h-10 font-medium text-primary hover:bg-muted/85 hover:text-primary sm:min-h-11",
        v === "default" && size === "sm" && "text-[0.8125rem]",
        className,
      )}
      {...props}
    />
  );
}
