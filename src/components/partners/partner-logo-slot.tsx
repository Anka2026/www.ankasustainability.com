"use client";

import * as React from "react";

import { Building2 } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = Readonly<{
  src: string;
  alt: string;
  initials: string;
}>;

type LoadState = "pending" | "ok" | "fail";

const PANEL = cn(
  "flex w-full min-h-[140px] min-w-0 max-w-[13.75rem] flex-1 items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 sm:min-h-[9rem] sm:max-w-[11.5rem] md:max-w-none md:p-5",
  "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.95),0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-inset ring-slate-900/[0.04]",
);

const IMG_CLASS =
  "max-h-[5.5rem] max-w-[9.5rem] object-contain object-center sm:max-h-[6.5rem] sm:max-w-[10.5rem] md:max-h-[7.5rem] md:max-w-[11.25rem]";

export function PartnerLogoSlot({ src, alt, initials }: Props) {
  const [state, setState] = React.useState<LoadState>("pending");

  React.useEffect(() => {
    let cancelled = false;
    setState("pending");
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setState("ok");
    };
    probe.onerror = () => {
      if (!cancelled) setState("fail");
    };
    probe.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  const fallback = (
    <div
      className={cn(
        PANEL,
        "bg-gradient-to-br from-slate-50/95 to-white",
        "min-h-[140px] sm:min-h-[9rem]",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2.5 text-center">
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.06] text-primary"
          aria-hidden
        >
          <Building2 className="h-5 w-5" strokeWidth={1.85} />
        </span>
        <span className="text-xs font-bold tracking-[0.14em] text-slate-700">{initials}</span>
      </div>
    </div>
  );

  if (state === "fail") {
    return <div className="flex w-full min-w-0 max-w-full justify-center">{fallback}</div>;
  }

  if (state === "pending") {
    return (
      <div className="flex w-full min-w-0 max-w-full justify-center">
        <div
          className={cn(
            PANEL,
            "min-h-[140px] bg-slate-100/90 sm:min-h-[9rem]",
            "animate-pulse",
          )}
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="flex w-full min-w-0 max-w-full justify-center">
      <div className={PANEL}>
        {/* eslint-disable-next-line @next/next/no-img-element -- public asset; load verified in effect */}
        <img
          src={src}
          alt={alt}
          width={180}
          height={120}
          className={IMG_CLASS}
          loading="lazy"
          decoding="async"
          onError={() => setState("fail")}
        />
      </div>
    </div>
  );
}
