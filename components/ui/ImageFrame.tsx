import React from 'react';

interface ImageFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent' | 'minimal';
}

export default function ImageFrame({ 
  children, 
  className = '', 
  variant = 'default' 
}: ImageFrameProps) {
  const getFrameStyles = () => {
    const baseStyles = {
      position: 'relative' as const,
      display: 'inline-block',
      borderRadius: '12px',
      overflow: 'hidden',
    };

    switch (variant) {
      case 'accent':
        return {
          ...baseStyles,
          padding: '8px',
          background: `linear-gradient(145deg, var(--color-primary, #8B4513), var(--color-primary-dark, #6B3410))`,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
        };
      case 'minimal':
        return {
          ...baseStyles,
          border: `2px solid var(--color-primary, #8B4513)`,
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
        };
      default:
        return {
          ...baseStyles,
          padding: '6px',
          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
          border: `3px solid var(--color-primary, #8B4513)`,
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15), 0 4px 16px rgba(0, 0, 0, 0.1)',
        };
    }
  };

  const frameStyles = getFrameStyles();

  return (
    <div 
      className={`image-frame ${className}`}
      style={frameStyles}
    >
      {/* Inner container for the image */}
      <div 
        style={{
          borderRadius: variant === 'minimal' ? '8px' : '6px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {children}
      </div>
      
      {/* Decorative corner accents for default variant */}
      {variant === 'default' && (
        <>
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              width: '20px',
              height: '20px',
              borderTop: `2px solid var(--color-primary, #8B4513)`,
              borderLeft: `2px solid var(--color-primary, #8B4513)`,
              opacity: 0.6,
            }}
          />
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '20px',
              height: '20px',
              borderTop: `2px solid var(--color-primary, #8B4513)`,
              borderRight: `2px solid var(--color-primary, #8B4513)`,
              opacity: 0.6,
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              width: '20px',
              height: '20px',
              borderBottom: `2px solid var(--color-primary, #8B4513)`,
              borderLeft: `2px solid var(--color-primary, #8B4513)`,
              opacity: 0.6,
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '20px',
              height: '20px',
              borderBottom: `2px solid var(--color-primary, #8B4513)`,
              borderRight: `2px solid var(--color-primary, #8B4513)`,
              opacity: 0.6,
            }}
          />
        </>
      )}
    </div>
  );
} 