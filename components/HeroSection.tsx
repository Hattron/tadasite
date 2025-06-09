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
    <ParallaxImage
      src={heroImage.imagekitUrl}
      alt={heroImage.alt || 'Interior Design Hero Image'}
      speed={-30}
      className="w-full h-screen"
      transformation="w-1920,h-1080,q-90"
      overlay={false}
    >
      {/* Content overlay */}
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Main Title */}
          <h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-light mb-6"
            style={{ 
              fontFamily: 'var(--font-primary)',
              color: 'var(--color-text)',
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
          
          {/* Subtitle in pill-shaped container */}
          <div 
            className="inline-block rounded-full px-8 py-3"
            style={{ 
              background: 'rgba(255, 255, 255, 0.95)',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <p 
              className="text-lg sm:text-xl font-medium tracking-wide"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-text)',
                margin: '0'
              }}
            >
              {(heroImage.heroSubtitle || "Where personal style meets professional design").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (heroImage.heroSubtitle || "Where personal style meets professional design").split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          
          {/* Caption if available */}
          {heroImage.caption && (
            <div 
              className="inline-block rounded-lg mt-4"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
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
    </ParallaxImage>
  );
} 