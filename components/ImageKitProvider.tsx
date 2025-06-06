'use client';

import { ImageKitProvider as NextImageKitProvider } from '@imagekit/next';
import { imagekitConfig } from '@/lib/imagekit';

export function ImageKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextImageKitProvider 
      urlEndpoint={imagekitConfig.urlEndpoint}
    >
      {children}
    </NextImageKitProvider>
  );
} 