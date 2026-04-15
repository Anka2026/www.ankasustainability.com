import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type Props = Readonly<{
  children: ReactNode;
}>;

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

