import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annalisa Ard · Teaching Portfolio",
  description: "Teaching portfolio of Annalisa Ard — English Language Arts, AP Literature, AP Language, Honors Lit, and SSAT Preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-400">
          &copy; {new Date().getFullYear()} Annalisa Ard. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
