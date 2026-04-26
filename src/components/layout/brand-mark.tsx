import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = Readonly<{
  className?: string;
  /** Header bar — compact. */
  variant?: "header" | "footer";
  priority?: boolean;
}>;

const variantClass = {
  /** Header — compact so primary nav + locale + CTA stay on one row. */
  header: "h-8 w-8 sm:h-9 sm:w-9",
  /** Footer — slightly larger for clearer brand presence without dominating the bar. */
  footer:
    "h-[6.5rem] w-[6.5rem] sm:h-28 sm:w-28 overflow-hidden rounded-lg",
} as const;

/**
 * ANKA phoenix mark (brand greens #248536 / #68B42E). Use on light surfaces only; no recoloring.
 * Decorative when the wordmark or legal text is adjacent — keep `alt=""`.
 */
export function BrandMark({
  className,
  variant = "header",
  priority = false,
}: Props) {
  const dim = variant === "header" ? 32 : 112;
  return (
    <Image
      src="/brand/anka-mark.png"
      alt=""
      width={dim}
      height={dim}
      priority={priority}
      className={cn(
        "shrink-0 object-contain object-left",
        variantClass[variant],
        className,
      )}
    />
  );
}
