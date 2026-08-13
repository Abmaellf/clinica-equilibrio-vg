import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clínica Equilíbrio | Fisioterapia e Pilates",
  description:
    "Fisioterapia, Pilates, alongamento e treino funcional em Várzea Grande. Atendimento individualizado para mais movimento, autonomia e bem-estar.",
  keywords: [
    "fisioterapia em Várzea Grande",
    "Pilates em Várzea Grande",
    "reabilitação",
    "Clínica Equilíbrio",
    "alongamento funcional",
  ],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
