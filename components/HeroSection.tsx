'use client';

import { getHeroImage } from '@/lib/image-actions';
import ParallaxImage from '@/components/ParallaxImage';
import { useEffect, useState } from 'react';

interface HeroImage {
  id: string;
  imagekitUrl: string;
  alt: string | null;
  heroTitle: string | null;
  heroSubtitle: string | null;
  caption: string | null;
}

export default function HeroSection() {
  const [heroImage, setHeroImage] = useState<HeroImage | null>(null);

  useEffect(() => {
    // Fetch hero image
    getHeroImage().then(setHeroImage);
  }, []);

  if (!heroImage) {
    return (
      <div 
        className="relative w-full h-screen flex items-center justify-center"
        style={{ 
          background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)`,
          color: 'var(--color-text)'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-light mb-6"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-primary)',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            TaDa Interiors
          </h1>
          <div 
            className="inline-block rounded-full px-8 py-3"
            style={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p 
              className="text-lg sm:text-xl font-medium tracking-wide"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                margin: '0'
              }}
            >
              Where personal style meets professional design
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ParallaxImage
        src={heroImage.imagekitUrl}
        alt={heroImage.alt || 'Interior Design Hero Image'}
        speed={-30}
        className="w-full h-screen"
        transformation="w-1920,h-1080,q-90"
        overlay={false}
      />
      
      {/* Content positioned at center */}
      <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Main Title - only show if exists */}
          {heroImage.heroTitle && (
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-text)',
                WebkitTextStroke: '0.5px rgba(var(--color-primary-rgb, 0, 0, 0), 0.3)',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)',
                letterSpacing: '-0.02em',
                lineHeight: '1.3'
              }}
            >
              {heroImage.heroTitle!.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < heroImage.heroTitle!.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
          )}
          
          {/* Subtitle - only show if exists */}
          {heroImage.heroSubtitle && (
            <p 
              className="text-base sm:text-lg font-semibold tracking-wide mb-4"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-text)',
                WebkitTextStroke: '0.3px rgba(var(--color-primary-rgb, 0, 0, 0), 0.25)',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)',
                margin: '0 0 1rem 0',
                lineHeight: '1.6'
              }}
            >
              {heroImage.heroSubtitle!.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < heroImage.heroSubtitle!.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
          
          {/* Caption if available */}
          {heroImage.caption && (
            <div 
              className="inline-block rounded-lg"
              style={{ 
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: 'var(--spacing-sm) var(--spacing-md)'
              }}
            >
              <p 
                className="text-sm opacity-90"
                style={{ 
                  fontFamily: 'var(--font-secondary)',
                  color: 'var(--color-text)',
                  margin: '0'
                }}
              >
                {heroImage.caption}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div 
          className="animate-bounce rounded-full p-2"
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ color: 'var(--color-text)' }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
} 