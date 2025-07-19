"use client";

import { motion } from "framer-motion";
import ParallaxImage from "@/components/ParallaxImage";

interface HeroImage {
  id: string;
  imagekitUrl: string;
  alt: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  caption: string | null;
}

interface HeroSectionProps {
  heroImage: HeroImage | null;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
  if (!heroImage) {
    // Show loading skeleton with same dimensions to prevent layout shift
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gray-200 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-4xl mx-auto px-4">
            <div className="h-16 bg-gray-300 rounded mb-4 animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParallaxImage
        src={heroImage.imagekitUrl}
        alt={heroImage.alt || "Interior Design Hero Image"}
        speed={-30}
        className="w-full h-screen"
        transformation="w-1920,h-1080,q-90"
        overlay={false}
      />

      {/* Content positioned at center */}
      <div className="absolute inset-0 flex items-center justify-center z-20 p-4 sm:p-8">
        <motion.div
          className="relative text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Title - only show if exists */}
          {heroImage.heroTitle && (
            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4"
              style={{
                fontFamily: "var(--font-primary)",
                color: "var(--color-primary)",
                textShadow:
                  "1px 1px 3px rgba(0, 0, 0, 0.4), 0 0 6px rgba(0, 0, 0, 0.3)",
                letterSpacing: "-0.02em",
                lineHeight: "1.3",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {heroImage
                .heroTitle!.split("\n")
                .map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    {index < heroImage.heroTitle!.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
            </motion.h1>
          )}

          {/* Subtitle - only show if exists */}
          {heroImage.heroSubtitle && (
            <motion.p
              className="text-sm sm:text-base md:text-lg font-semibold tracking-wide mb-2 sm:mb-4"
              style={{
                fontFamily: "var(--font-secondary)",
                color: "var(--color-primary)",
                textShadow:
                  "1px 1px 2px rgba(0, 0, 0, 0.4), 0 0 4px rgba(0, 0, 0, 0.3)",
                margin: "0 0 1rem 0",
                lineHeight: "1.6",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {heroImage
                .heroSubtitle!.split("\n")
                .map((line: string, index: number) => (
                  <span key={index}>
                    {line}
                    {index < heroImage.heroSubtitle!.split("\n").length - 1 && (
                      <br />
                    )}
                  </span>
                ))}
            </motion.p>
          )}

          {/* Caption if available */}
          {heroImage.caption && (
            <motion.div
              className="inline-block rounded-lg mx-auto max-w-xs sm:max-w-none"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                padding: "var(--spacing-sm) var(--spacing-md)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <p
                className="text-xs sm:text-sm opacity-90"
                style={{
                  fontFamily: "var(--font-secondary)",
                  color: "var(--color-primary)",
                  margin: "0",
                }}
              >
                {heroImage.caption}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-20 sm:bottom-24 right-4 sm:right-8 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        <div
          className="animate-bounce rounded-full p-1.5 sm:p-2"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
          }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "var(--color-primary)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
