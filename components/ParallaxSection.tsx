'use client';

import { motion } from 'framer-motion';
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
    <motion.div 
      className="relative w-full flex flex-col lg:flex-row lg:h-[75vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section - Full width on mobile, 1/4 width on desktop */}
      <motion.div 
        className={`${position === 'left' ? 'lg:order-2' : 'lg:order-1'} w-full lg:w-1/4 flex items-center justify-center py-8 px-4 sm:py-12 sm:px-8 lg:py-0`}
        style={{ 
          backgroundColor: 'var(--color-accent)',
          padding: 'var(--spacing-lg) var(--spacing-md)'
        }}
        initial={{ 
          x: position === 'left' ? 100 : -100,
          opacity: 0 
        }}
        whileInView={{ 
          x: 0,
          opacity: 1 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1,
          delay: 0.3,
          ease: "easeOut"
        }}
      >
        <div 
          className="text-center w-full max-w-md lg:max-w-none"
          style={{ maxWidth: 'var(--content-max-width)' }}
        >
          {/* Main Title - only show if provided */}
          {title && (
            <motion.h2 
              className="font-bold text-2xl sm:text-3xl lg:text-4xl"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--color-primary)',
                margin: `0 0 var(--spacing-md) 0`,
                textAlign: 'center',
                letterSpacing: '-0.02em',
                lineHeight: '1.3'
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {title.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.h2>
          )}
          
          {/* Subtitle - only show if provided */}
          {subtitle && (
            <motion.p 
              className="font-medium tracking-wide text-sm sm:text-base lg:text-lg"
              style={{ 
                fontFamily: 'var(--font-secondary)',
                color: 'var(--color-primary)',
                margin: '0',
                textAlign: 'center',
                lineHeight: '1.6',
                opacity: '0.8'
              }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {subtitle.split('\n').map((line: string, index: number) => (
                <span key={index}>
                  {line}
                  {index < subtitle.split('\n').length - 1 && <br />}
                </span>
              ))}
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Image Section - Full width on mobile, 3/4 width on desktop */}
      <motion.div 
        className={`relative overflow-hidden ${position === 'left' ? 'lg:order-1' : 'lg:order-2'} w-full lg:w-3/4 h-64 sm:h-80 lg:h-[75vh]`}
        initial={{ 
          x: position === 'left' ? -100 : 100,
          opacity: 0 
        }}
        whileInView={{ 
          x: 0,
          opacity: 1 
        }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
      >
        <ParallaxImage
          src={imageUrl}
          alt={altText || `${title} section background`}
          speed={speed}
          className="w-full h-full"
          transformation={transformation}
          overlay={false}
        />
      </motion.div>
    </motion.div>
  );
} 