import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics} from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ritesh | Personal Portfolio",
  description: "This is my personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}`}>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <Analytics />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
