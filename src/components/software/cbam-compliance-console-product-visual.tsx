import Image from "next/image";

import { cn } from "@/lib/utils";

const SCREENSHOT_SRC = "/software/screenshots/cbam-compliance-console.png";

type Props = Readonly<{
  alt: string;
  className?: string;
  priority?: boolean;
  /**
   * Modal: slightly taller canvas so the dashboard reads clearly without crowding copy above.
   */
  variant?: "default" | "modal";
}>;

/** Premium framed CBAM Compliance Console visual — full screenshot, no crop. */
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
        "overflow-hidden rounded-3xl border border-slate-200/75 bg-gradient-to-b from-slate-50/40 to-white p-1 shadow-[0_26px_70px_-44px_rgba(15,23,42,0.36)] ring-1 ring-inset ring-slate-900/[0.035] sm:p-1.5",
        isModal ? "sm:p-2" : "md:p-2",
        className,
      )}
    >
      <div className="flex w-full items-center justify-center rounded-2xl bg-white px-1 py-2 sm:px-2 sm:py-2.5">
        <Image
          src={SCREENSHOT_SRC}
          alt={alt}
          width={1920}
          height={1080}
          quality={100}
          sizes={
            isModal
              ? "(max-width: 640px) calc(100vw - 2rem), min(960px, 92vw)"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, min(560px, 45vw)"
          }
          className={cn(
            "h-auto w-full object-contain object-center",
            isModal ? "max-h-[70vh]" : "max-h-[min(88vw,36rem)] sm:max-h-[40rem]",
          )}
          priority={priority}
        />
      </div>
    </div>
  );
}
