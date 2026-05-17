import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = Readonly<{
  eyebrow?: string;
  title: string;
  description?: string;
  /** Optional class for the description paragraph (e.g. single-line desktop). */
  descriptionClassName?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  /** Use h2+ for page sections; keep a single h1 per page (typically the hero). */
  titleAs?: "h1" | "h2";
  /** Optional id for the title heading (section `aria-labelledby`). */
  titleId?: string;
  /** Subtle Steel Cyan accent bar above the heading block (homepage / key sections). */
  accentRule?: boolean;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  descriptionClassName,
  align = "left",
  actions,
  titleAs = "h1",
  titleId,
  accentRule = false,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:gap-[1.125rem]",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
        <div className="min-w-0 space-y-2.5 sm:space-y-3">
          {accentRule ? (
            <div
              className="h-[2px] w-12 shrink-0 rounded-full bg-gradient-to-r from-accent via-accent/80 to-accent/45 sm:w-[3.25rem]"
              aria-hidden
            />
          ) : null}
          {eyebrow ? (
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.16em]">
              {eyebrow}
            </p>
          ) : null}
          {titleAs === "h2" ? (
            <h2
              id={titleId}
              className="max-w-[min(100%,56rem)] text-balance text-pretty text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[1.625rem] sm:leading-[1.18] md:text-[1.875rem] md:leading-[1.14] lg:text-[2.0625rem] lg:leading-[1.12]"
            >
              {title}
            </h2>
          ) : (
            <h1
              id={titleId}
              className="max-w-[min(100%,56rem)] text-balance text-pretty text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.03em] text-foreground sm:text-[1.625rem] sm:leading-[1.18] md:text-[1.875rem] md:leading-[1.14] lg:text-[2.0625rem] lg:leading-[1.12]"
            >
              {title}
            </h1>
          )}
        </div>
        {actions ? <div className="shrink-0">{actions}</div> : null}
      </div>

      {description ? (
        <p
          className={cn(
            "max-w-[min(100%,48rem)] text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-[1.65]",
            align === "center" && "mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
