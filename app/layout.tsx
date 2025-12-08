import type { Metadata } from "next";
import { Quicksand, Inter, Raleway, WindSong } from "next/font/google";
import "./globals.css";

import { ParallaxProvider } from "@/components/ParallaxProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const windSong = WindSong({
  variable: "--font-windsong",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | TaDa! Interior Design",
    default: "TaDa! Interior Design",
  },
  description:
    "TaDa! Interior Design offers expert residential and commercial design services. From renovations to custom millwork, we create distinctive, functional spaces.",
  keywords: [
    "Interior Design",
    "Residential Design",
    "Commercial Design",
    "Renovations",
    "Custom Millwork",
    "Space Planning",
    "Home Staging",
    "TaDa Interiors",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={`${quicksand.variable} ${inter.variable} ${raleway.variable} ${windSong.variable} antialiased`}
        style={{
          fontFamily:
            "var(--font-primary, var(--font-quicksand, Quicksand, sans-serif))",
          backgroundColor: "var(--color-background)",
          color: "var(--color-text)",
        }}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <ParallaxProvider>
          {children}
          <Footer />
        </ParallaxProvider>
      </body>
    </html>
  );
}
