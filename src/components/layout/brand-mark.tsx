import Image from "next/image";

import { cn } from "@/lib/utils";

type Props = Readonly<{
  className?: string;
  /** Header bar — compact. */
  variant?: "header" | "footer";
  priority?: boolean;
}>;

const variantClass = {
  /** Header — ~25% larger than legacy compact mark for stronger brand lockup. */
  header: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-14 w-14 sm:h-16 sm:w-16",
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
  const dim = variant === "header" ? 44 : 64;
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
