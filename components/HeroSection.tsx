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
      
      {/* Fading overlay at the bottom */}
      <div 
        className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
        style={{
          height: '60%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.1) 45%, transparent 55%)'
        }}
      />

      {/* Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-light mb-4"
            style={{ 
              fontFamily: 'var(--font-primary)',
              color: 'white',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            {(heroImage.heroTitle || "TaDa Interiors").split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < (heroImage.heroTitle || "TaDa Interiors").split('\n').length - 1 && <br />}
              </span>
            ))}
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-base sm:text-lg font-medium tracking-wide mb-4"
            style={{ 
              fontFamily: 'var(--font-secondary)',
              color: 'white',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
              margin: '0 0 1rem 0'
            }}
          >
            {(heroImage.heroSubtitle || "Where personal style meets professional design").split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < (heroImage.heroSubtitle || "Where personal style meets professional design").split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          
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