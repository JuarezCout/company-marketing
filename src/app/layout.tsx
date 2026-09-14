import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L8 Studio | Portfólio de Templates Premium",
  description:
    "Catálogo premium de templates para negócios locais: barbearias, salões, reformas, canalização, saúde e muito mais.",
  authors: [{ name: "L8 Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "L8 Studio",
    title: "L8 Studio | Portfólio de Templates Premium",
    description:
      "Catálogo premium de templates para negócios locais e profissionais em vários setores.",
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
