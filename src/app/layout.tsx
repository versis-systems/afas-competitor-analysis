import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFAS Competitor Analysis | Versis Systems",
  description: "Strategic research tool for analyzing AFAS Software and Dutch HR/ERP market competitors",
  keywords: ["AFAS", "HR software", "ERP", "Netherlands", "competitor analysis", "Dutch payroll"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
