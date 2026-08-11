import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "O Seu Negócio | Presença Digital Premium",
  description:
    "Proposta de website premium para estabelecimentos de médio porte. Design elegante, presença digital de excelência e experiência de cliente de alto nível.",
  authors: [{ name: "L8 Studio" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    siteName: "Demo — L8 Studio",
    title: "O Seu Negócio | Presença Digital Premium",
    description:
      "Proposta de website premium para estabelecimentos de médio porte.",
  },
  robots: {
    index: false,
    follow: false,
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
