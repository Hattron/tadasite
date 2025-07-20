import type { Metadata } from "next";
import { Quicksand, Inter, Raleway } from "next/font/google";
import "./globals.css";
import {
  getCssVariables,
  cssVariablesToString,
  defaultCssVariables,
} from "@/lib/css-variables";
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

export const metadata: Metadata = {
  title: "TaDa! Site",
  description: "A customizable site with dynamic CSS variables",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let cssVariables;
  try {
    cssVariables = await getCssVariables();
  } catch (error) {
    console.error("Failed to load CSS variables, using defaults:", error);
    cssVariables = defaultCssVariables;
  }

  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
${cssVariablesToString(cssVariables)}
              }
            `,
          }}
        />
      </head>
      <body
        className={`${quicksand.variable} ${inter.variable} ${raleway.variable} antialiased`}
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
