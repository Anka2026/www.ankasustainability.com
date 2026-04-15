import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { SECTION_PAD_STRIP } from "@/lib/section-layout";
import { LEGAL_SECTION_TITLE } from "@/lib/typography-classes";
import { cn } from "@/lib/utils";

type Props = Readonly<{
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}>;

export function LegalProseSection({
  id,
  title,
  children,
  className,
}: Props) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("bg-background", SECTION_PAD_STRIP, className)}
      aria-labelledby={headingId}
    >
      <Container>
        <div className="max-w-3xl">
          <h2
            id={headingId}
            className={LEGAL_SECTION_TITLE}
          >
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-[1.65] text-muted-foreground sm:text-[0.9375rem] sm:leading-[1.7]">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
