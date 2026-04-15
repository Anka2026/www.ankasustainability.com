import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = Readonly<
  {
    children: ReactNode;
  } & HTMLAttributes<HTMLDivElement>
>;

export function Container({ className, children, ...props }: Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
