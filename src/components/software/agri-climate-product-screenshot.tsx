import Image from "next/image";

import { cn } from "@/lib/utils";

const SCREENSHOT_SRC = "/software/agri-climate-platform-overview.png";

type Props = Readonly<{
  alt: string;
  className?: string;
}>;

/** Premium framed product screenshot — fixed public path; aspect preserved via 16/9 box. */
export function AgriClimateProductScreenshot({ alt, className }: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_22px_56px_-40px_rgba(15,23,42,0.32)] ring-1 ring-inset ring-slate-900/[0.04]",
        className,
      )}
    >
      <div className="relative aspect-video w-full max-w-full bg-slate-50">
        <Image
          src={SCREENSHOT_SRC}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 480px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
