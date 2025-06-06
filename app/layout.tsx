import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";
import { getCssVariables, cssVariablesToString } from "@/lib/css-variables";
import { ParallaxProvider } from "@/components/ParallaxProvider";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TadaSite",
  description: "A customizable site with dynamic CSS variables",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cssVariables = await getCssVariables();

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
        className={`${quicksand.variable} ${inter.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-primary, var(--font-quicksand, Quicksand, sans-serif))',
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text)',
        }}
      >
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  );
}
