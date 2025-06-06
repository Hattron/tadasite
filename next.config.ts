import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js Image optimization since we're using ImageKit
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
