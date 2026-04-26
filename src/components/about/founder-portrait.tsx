"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Props = Readonly<{
  src: string;
  alt: string;
  initials: string;
  className?: string;
}>;

export function FounderPortrait({ src, alt, initials, className }: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-border/80 bg-background/80 shadow-[0_18px_46px_-32px_rgba(15,23,42,0.35)]",
        "ring-1 ring-inset ring-primary/[0.06]",
        className,
      )}
    >
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {initials}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 12.5rem, 10rem"
          className={cn("object-cover", "object-[center_48%]")}
          onError={() => setHasError(true)}
          priority={false}
        />
      )}
    </div>
  );
}

