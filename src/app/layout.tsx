import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";

import { routing } from "@/i18n/routing";

import "../styles/globals.css";

const HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE" as const;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ANKA Sustainability Consulting B.V.",
    template: "%s · ANKA Sustainability Consulting B.V.",
  },
  description:
    "Sustainability, compliance, and data-driven digital workspaces for modern enterprises.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const locale = headerStore.get(HEADER_LOCALE_NAME) ?? routing.defaultLocale;

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-page-canvas text-foreground">
        {children}
      </body>
    </html>
  );
}
