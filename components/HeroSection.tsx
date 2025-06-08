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
          {/* Combined title and subtitle with framed box */}
          <div 
            className="inline-block rounded-2xl"
            style={{ 
              background: 'var(--frame-background)',
              border: 'var(--frame-border)',
              boxShadow: 'var(--frame-shadow)',
              borderRadius: 'var(--frame-border-radius)',
              padding: 'var(--frame-padding)',
              marginBottom: 'var(--spacing-lg)'
            }}
          >
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-light leading-tight"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-text)',
                margin: '0'
              }}
            >
              {(heroImage.heroTitle || "Ta Da").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (heroImage.heroTitle || "Ta Da").split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p 
              className="text-xl sm:text-2xl font-light tracking-wide mt-2"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-secondary)',
                margin: '0.5rem 0 0 0'
              }}
            >
              {(heroImage.heroSubtitle || "Interior Design").split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (heroImage.heroSubtitle || "Interior Design").split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          
          {heroImage.caption && (
            <div 
              className="inline-block rounded-lg"
              style={{ 
                background: 'var(--frame-background)',
                border: 'var(--frame-border)',
                boxShadow: 'var(--frame-shadow)',
                borderRadius: 'calc(var(--frame-border-radius) * 0.75)',
                padding: 'var(--frame-padding-sm)'
              }}
            >
              <p 
                className="text-sm opacity-90"
                style={{ 
                  fontFamily: 'var(--font-secondary)',
                  color: 'var(--color-text-muted)',
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
            background: 'var(--frame-background)',
            border: 'var(--frame-border)',
            boxShadow: 'var(--frame-shadow)'
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