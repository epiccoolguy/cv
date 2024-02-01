import type { Metadata } from "next";

import "@/lib/font";
import "@/app/globals.css";
import { Locale } from "@/i18n.config";

export const metadata: Metadata = {
  title: "CV-Miguel-Lo-A-Foe",
  description: "Generated by create next app",
};

type Params = {
  locale: Locale;
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}
