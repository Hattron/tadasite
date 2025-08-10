"use client";

import { Parallax } from "react-scroll-parallax";
import { imagekitConfig } from "@/lib/imagekit";
import { useState, useEffect } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  transformation?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  // Responsive image options (optional). If provided, a srcSet will be generated.
  responsive?: boolean;
  widths?: number[]; // e.g., [1280, 1536, 1920, 2560, 2880, 3840]
  sizes?: string; // e.g., "100vw"
  aspectRatio?: number; // e.g., 16/9
  quality?: number; // 1-100, default 80
}

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, "");
};

export default function ParallaxImage({
  src,
  alt,
  speed = -20,
  className = "",
  transformation = "w-1920,h-1080,q-90",
  overlay = false,
  overlayOpacity = 0.2,
  children,
  responsive = false,
  widths = [1280, 1536, 1920, 2560, 2880, 3840],
  sizes = "100vw",
  aspectRatio,
  quality = 85,
}: ParallaxImageProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduce parallax speed by 75% on mobile
  const adjustedSpeed = isMobile ? speed * 0.25 : speed;

  const path = src.startsWith("http") ? getImagePath(src) : src;

  const buildUrl = (tr: string) => `${imagekitConfig.urlEndpoint}${path}?tr=${tr}`;

  // Responsive src and srcset
  let imgSrc = buildUrl(transformation);
  let srcSet: string | undefined = undefined;
  let sizesAttr: string | undefined = undefined;

  if (responsive) {
    // Start with quality and auto format. We'll merge in extra transforms passed via `transformation`.
    const baseParts = [`q-${quality}`, `f-auto`];

    // Parse extra transforms from the provided transformation string (excluding explicit width/height/quality)
    const extra = transformation
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s && !/^w-\d+$/.test(s) && !/^h-\d+$/.test(s) && !/^q-\d+/.test(s));

    // If aspectRatio is provided, force a consistent 16:9-style crop on CDN
    let arParts: string[] = [];
    if (aspectRatio) {
      // Convert e.g., 16/9 -> 16-9
      const approx = (n: number) => Math.round(n * 100) / 100;
      // Try to map common aspect ratios to integers to avoid decimals in URL
      const common: Record<string, [number, number]> = {
        [approx(16 / 9)]: [16, 9],
        [approx(4 / 3)]: [4, 3],
        [approx(3 / 2)]: [3, 2],
        [approx(21 / 9)]: [21, 9],
      };
      const key = String(approx(aspectRatio));
      const pair = common[key];
      if (pair) {
        arParts = [`ar-${pair[0]}-${pair[1]}`, "c-at_least"]; // cover crop to maintain AR
      }
    }

    const commonParts = [...extra, ...arParts, ...baseParts];

    srcSet = widths
      .sort((a, b) => a - b)
      .map((w) => buildUrl([`w-${w}`, ...commonParts].join(",")) + ` ${w}w`)
      .join(", ");

    // Choose a reasonable default src (middle of the pack)
    const defaultW = widths.includes(1920) ? 1920 : widths[Math.floor(widths.length / 2)];
    imgSrc = buildUrl([`w-${defaultW}`, ...commonParts].join(","));
    sizesAttr = sizes;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Parallax speed={adjustedSpeed} className="absolute inset-0">
        <img
          src={imgSrc}
          srcSet={srcSet}
          sizes={sizesAttr}
          alt={alt}
          className="w-full h-full object-cover"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            width: "100%",
            minWidth: "100%",
            height: "120%",
            minHeight: "120%",
            transform: "translateY(-10%)",
          }}
        />
      </Parallax>

      {overlay && (
        <div
          className="absolute inset-0 bg-black z-10"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {children && <div className="relative z-20 h-full">{children}</div>}
    </div>
  );
}
