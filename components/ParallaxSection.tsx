import ParallaxImage from '@/components/ParallaxImage';

interface ParallaxSectionProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  altText?: string;
  transformation?: string;
  speed?: number;
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
  transformation = 'w-1920,h-810,q-90',
  speed = -30
}: ParallaxSectionProps) {
  // Use provided imageSrc or fallback to placeholder
  const imageUrl = imageSrc || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&crop=center';
  
  // Calculate font sizes based on content length
  const titleFontSize = calculateFontSize(title, 64, 24, 80); // Base 64px, min 24px, max 80px
  const subtitleFontSize = calculateFontSize(subtitle, 24, 16, 32); // Base 24px, min 16px, max 32px
  
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <ParallaxImage
        src={imageUrl}
        alt={altText || `${title} section background`}
        speed={speed}
        className="w-full h-[75vh]"
        transformation={transformation}
        overlay={false}
      />
      
      {/* Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-16">
        {/* Text background container - fade at top 10% */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 90%, transparent 100%)'
          }}
        />
        
        <div className="relative text-center max-w-4xl mx-auto">
          {/* Main Title - only show if provided */}
          {title && (
            <h2 
              className="font-light mb-4"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'white',
                margin: '0 0 1rem 0',
                fontSize: titleFontSize,
                textAlign: 'center',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
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
              className="font-light tracking-wide"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'white',
                margin: '0',
                fontSize: subtitleFontSize,
                textAlign: 'center',
                lineHeight: '1.6',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)'
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