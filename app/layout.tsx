import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Annalisa Ard · Teaching Portfolio",
  description:
    "Teaching portfolio of Annalisa Ard — English Language Arts, AP Literature, AP Language, Honors Lit, and SSAT Preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${newsreader.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col"
        style={{ background: "var(--bg)", color: "var(--ink)" }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
