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

// Function to calculate font size based on character count
function calculateFontSize(text: string, baseSize: number, minSize: number = 16, maxSize?: number): string {
  const charCount = text.length;
  let scaleFactor = 1;
  
  // Scale down for longer text
  if (charCount > 50) {
    scaleFactor = Math.max(0.6, 1 - ((charCount - 50) * 0.01));
  } else if (charCount > 30) {
    scaleFactor = Math.max(0.8, 1 - ((charCount - 30) * 0.01));
  }
  
  const calculatedSize = baseSize * scaleFactor;
  const finalSize = Math.max(minSize, maxSize ? Math.min(maxSize, calculatedSize) : calculatedSize);
  
  return `${finalSize}px`;
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
  
  // Calculate font sizes based on content length
  const titleFontSize = calculateFontSize(title, 48, 20, 64); // Base 48px, min 20px, max 64px
  const subtitleFontSize = calculateFontSize(subtitle, 18, 14, 24); // Base 18px, min 14px, max 24px
  
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
      <div className={`${position === 'left' ? 'order-2' : 'order-1'} w-1/4 flex items-center justify-center p-8`}
           style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="text-center max-w-md">
          {/* Main Title - only show if provided */}
          {title && (
            <h2 
              className="font-bold mb-6"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-text)',
                margin: '0 0 1.5rem 0',
                fontSize: titleFontSize,
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
                color: 'var(--color-text)',
                margin: '0',
                fontSize: subtitleFontSize,
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