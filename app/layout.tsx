import type { Metadata } from "next";
import "./globals.css";

// Di sinilah Judul (Title) dan Deskripsi halaman web Anda diatur!
export const metadata: Metadata = {
  title: "Algifari's Portofolio",
  description: "Creative Strategist & AI Content Producer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}