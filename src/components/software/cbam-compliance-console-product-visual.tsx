import Image from "next/image";

import { cn } from "@/lib/utils";

const SCREENSHOT_SRC = "/images/software/cbam-compliance-console-dashboard.png";

type Props = Readonly<{
  alt: string;
  className?: string;
  /** Hero / above-the-fold — use priority on product detail. */
  priority?: boolean;
  /**
   * Wide modal layout: fixed vertical canvas with object-contain (no crop),
   * matches Agri modal framing — premium, full-width within modal body.
   */
  variant?: "default" | "modal";
}>;

/** Premium framed CBAM Compliance Console visual — aspect preserved via object-contain. */
export function CbamComplianceConsoleProductVisual({
  alt,
  className,
  priority,
  variant = "default",
}: Props) {
  const isModal = variant === "modal";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_56px_-40px_rgba(15,23,42,0.32)] ring-1 ring-inset ring-slate-900/[0.04]",
        isModal ? "p-2 sm:p-3" : "p-2 sm:p-3 md:p-4",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full max-w-full overflow-hidden rounded-xl bg-neutral-50",
          isModal
            ? "h-[min(52vh,460px)] min-h-[14rem] sm:h-[min(54vh,480px)] sm:min-h-[16rem]"
            : "aspect-[16/10]",
        )}
      >
        <Image
          src={SCREENSHOT_SRC}
          alt={alt}
          fill
          sizes={
            isModal
              ? "(max-width: 640px) calc(100vw - 2rem), min(896px, 90vw)"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, min(560px, 45vw)"
          }
          className={cn(
            "object-contain object-center",
            isModal ? "p-1.5 sm:p-2.5" : "",
          )}
          priority={priority}
        />
      </div>
    </div>
  );
}
