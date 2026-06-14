import type { Metadata } from "next";
import { Oswald, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Condensed industrial display face for headlines + big numbers.
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AfterHours Revenue — Recover the customers you lose after hours",
  description:
    "We answer missed calls, text customers back instantly, book the appointment, and show you how much revenue your follow-up recovered — every week.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${hanken.variable} ${plexMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
