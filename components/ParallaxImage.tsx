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

  const imageUrl = src.startsWith("http")
    ? `${imagekitConfig.urlEndpoint}${getImagePath(src)}?tr=${transformation}`
    : `${imagekitConfig.urlEndpoint}${src}?tr=${transformation}`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Parallax speed={adjustedSpeed} className="absolute inset-0">
        <img
          src={imageUrl}
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
