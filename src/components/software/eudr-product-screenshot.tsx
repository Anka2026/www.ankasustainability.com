import Image from "next/image";

import { EUDR_DASHBOARD_PREVIEW_SRC } from "@/lib/software-visual-assets";
import { cn } from "@/lib/utils";

export { EUDR_DASHBOARD_PREVIEW_SRC };

type Props = Readonly<{
  alt: string;
  className?: string;
  priority?: boolean;
  /** Modal: caps height with max-h-[70vh] while keeping full image visible (contain). */
  variant?: "default" | "modal";
}>;

/** Premium framed EUDR dashboard preview — full frame, no crop (object-contain). */
export function EudrProductScreenshot({
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
          src={EUDR_DASHBOARD_PREVIEW_SRC}
          alt={alt}
          width={1920}
          height={1080}
          quality={100}
          sizes={
            isModal
              ? "(max-width: 640px) calc(100vw - 2rem), min(896px, 90vw)"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, min(960px, 85vw)"
          }
          className={cn(
            "h-auto w-full object-contain object-center",
            isModal ? "max-h-[70vh]" : "max-h-[min(88vw,40rem)] sm:max-h-[44rem]",
          )}
          priority={priority}
        />
      </div>
    </div>
  );
}
