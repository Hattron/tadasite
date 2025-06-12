import ParallaxImage from '@/components/ParallaxImage';

interface ParallaxSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  altText?: string;
  transformation?: string;
  speed?: number;
  position?: 'left' | 'right';
}

export default function ParallaxSection({
  title,
  subtitle,
  imageSrc,
  altText,
  transformation = 'w-1440,h-810,q-90',
  speed = -30,
  position = 'left'
}: ParallaxSectionProps) {
  // Use provided imageSrc or fallback to placeholder
  const imageUrl = imageSrc || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center';
  
  return (
    <div className="relative w-full h-[75vh] flex">
      {/* Image Section - 3/4 width */}
      <div className={`relative overflow-hidden ${position === 'left' ? 'order-1' : 'order-2'} w-3/4`}>
        <ParallaxImage
          src={imageUrl}
          alt={altText || `${title} section background`}
          speed={speed}
          className="w-full h-[75vh]"
          transformation={transformation}
          overlay={false}
        />
      </div>
      
      {/* Text Section - 1/4 width */}
      <div 
        className={`${position === 'left' ? 'order-2' : 'order-1'} w-1/4 flex items-center justify-center`}
        style={{ 
          backgroundColor: 'var(--color-accent)',
          padding: 'var(--spacing-xl)'
        }}
      >
        <div 
          className="text-center w-full"
          style={{ maxWidth: 'var(--content-max-width)' }}
        >
          {/* Main Title - only show if provided */}
          {title && (
            <h2 
              className="font-bold"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-primary)',
                margin: `0 0 var(--spacing-lg) 0`,
                fontSize: 'var(--font-size-4xl)',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                lineHeight: '1.3'
              }}
            >
              {title.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
          )}
          
          {/* Subtitle - only show if provided */}
          {subtitle && (
            <p 
              className="font-medium tracking-wide"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-primary)',
                margin: '0',
                fontSize: 'var(--font-size-lg)',
                textAlign: 'center',
                lineHeight: '1.6',
                opacity: '0.8'
              }}
            >
              {subtitle.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < subtitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 