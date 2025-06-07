import { getHeroImage } from '@/lib/image-actions';
import ParallaxImage from '@/components/ParallaxImage';

export default async function HeroSection() {
  const heroImage = await getHeroImage();

  if (!heroImage) {
    return (
      <div 
        className="relative w-full h-screen flex items-center justify-center"
        style={{ 
          background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-primary) 100%)`,
          color: 'var(--color-text)'
        }}
      >
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-light mb-4"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Ta Da
          </h1>
          <p 
            className="text-xl sm:text-2xl font-light tracking-wide"
            style={{ 
              color: 'var(--color-secondary)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Interior Design
          </p>
        </div>
      </div>
    );
  }

  return (
    <ParallaxImage
      src={heroImage.imagekitUrl}
      alt={heroImage.alt || 'Hero Image'}
      speed={-30}
      className="w-full h-screen"
      transformation="w-1920,h-1080,q-90"
      overlay={false}
    >
      {/* Content overlay */}
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Main title with blur background */}
          <div className="inline-block backdrop-blur-sm rounded-full px-8 py-3 mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-light text-white"
              style={{ 
                fontFamily: 'var(--font-primary)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              Ta Da
            </h1>
          </div>
          
          {/* Subtitle beneath main title */}
          <div className="inline-block backdrop-blur-sm rounded-full px-6 py-2 mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p 
              className="text-xl sm:text-2xl font-light tracking-wide text-white"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              Interior Design
            </p>
          </div>
          
          {heroImage.caption && (
            <div className="inline-block backdrop-blur-sm rounded-full px-3 py-1" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <p 
                className="text-sm text-white opacity-90"
                style={{ 
                  fontFamily: 'var(--font-secondary)',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}
              >
                {heroImage.caption}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 mx-auto" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
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
    </ParallaxImage>
  );
} 