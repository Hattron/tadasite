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
          {/* Combined title and subtitle in fixed-size framed box */}
          <div 
            className="inline-flex flex-col justify-center items-center rounded-2xl"
            style={{ 
              background: 'var(--frame-background)',
              border: 'var(--frame-border)',
              boxShadow: 'var(--frame-shadow)',
              borderRadius: 'var(--frame-border-radius)',
              padding: 'var(--frame-padding)',
              minWidth: '480px',
              minHeight: '120px',
              maxWidth: '640px',
              width: '90vw'
            }}
          >
            <h2 
              className="font-light leading-tight mb-4"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-text)',
                margin: '0 0 1rem 0',
                fontSize: titleFontSize,
                textAlign: 'center'
              }}
            >
              {title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h2>
            
            <p 
              className="font-light tracking-wide"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-secondary)',
                margin: '0',
                fontSize: subtitleFontSize,
                textAlign: 'center',
                lineHeight: '1.4'
              }}
            >
              {subtitle.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < subtitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </ParallaxImage>
  );
} 