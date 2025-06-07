import ParallaxImage from '@/components/ParallaxImage';

interface ParallaxSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  altText?: string;
  transformation?: string;
  speed?: number;
}

export default function ParallaxSection({
  title,
  subtitle,
  imageSrc,
  altText,
  transformation = 'w-1920,h-810,q-90',
  speed = -30
}: ParallaxSectionProps) {
  // Use provided imageSrc or fallback to placeholder
  const imageUrl = imageSrc || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center';
  return (
    <ParallaxImage
      src={imageUrl}
      alt={altText || `${title} section background`}
      speed={speed}
      className="w-full h-[75vh]"
      transformation={transformation}
      overlay={false}
    >
      {/* Content overlay */}
      <div className="h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Main title with blur background */}
          <div className="inline-block backdrop-blur-sm rounded-full px-8 py-3 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white"
              style={{ 
                fontFamily: 'var(--font-primary)',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}
            >
              {title}
            </h2>
          </div>
          
          {/* Subtitle with blur background */}
          <div className="inline-block backdrop-blur-sm rounded-full px-6 py-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-light tracking-wide text-white"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </ParallaxImage>
  );
} 