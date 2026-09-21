import type { Metadata } from "next";
import "./globals.css";
import homeContent from "@/content/home.json";

export const metadata: Metadata = {
  title: homeContent.metadata.title,
  description: homeContent.metadata.description,
  authors: [{ name: "L8 Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "L8 Studio",
    title: homeContent.metadata.title,
    description: homeContent.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
