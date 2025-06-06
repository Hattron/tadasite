

import ImageKit from 'imagekit';

// ImageKit URL endpoint - this is public information
export const IMAGEKIT_URL_ENDPOINT = 'https://ik.imagekit.io/crimsonstack';

// Client-side configuration
export const imagekitConfig = {
  publicKey: 'public_JkSm2WQr4YQ03b77gEhpP/vSjCQ=',
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
};

// Server-side ImageKit instance - only initialize on server
export const imagekit = typeof window === 'undefined' ? new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
}) : null;

// Helper function to generate authentication parameters for uploads
export function getImageKitAuth() {
  if (!imagekit) {
    throw new Error('ImageKit not initialized on server');
  }
  const timestamp = Math.floor(Date.now() / 1000);
  const token = imagekit.getAuthenticationParameters();
  return {
    ...token,
    timestamp,
  };
} 