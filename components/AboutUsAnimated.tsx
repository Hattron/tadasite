'use client';

import { motion } from 'framer-motion';
import { getAboutUsImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import { useEffect, useState } from 'react';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

interface AboutUsImageData {
  id: string;
  imagekitUrl: string;
  alt: string | null;
  caption: string | null;
}

export default function AboutUsAnimated() {
  const [aboutUsImage, setAboutUsImage] = useState<AboutUsImageData | null>(null);

  useEffect(() => {
    getAboutUsImage().then(setAboutUsImage);
  }, []);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-start order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {aboutUsImage ? (
              <motion.img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(aboutUsImage.imagekitUrl)}?tr=w-600,h-600,q-90`}
                alt={aboutUsImage.alt || 'About TaDa! Interiors'}
                className="rounded-2xl shadow-lg max-w-full h-auto w-full max-w-xs sm:max-w-md lg:max-w-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              />
            ) : (
              <div 
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:h-96 rounded-2xl shadow-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.1 }}
              >
                <p 
                  className="text-center text-sm sm:text-base px-4"
                  style={{ color: 'var(--color-text)' }}
                >
                  Set an About Us image in the gallery manager
                </p>
              </div>
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="space-y-4 sm:space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p 
              className="text-base sm:text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At TaDa! Interiors, we&apos;ve been bringing inspired design 
              to homes and businesses across Ottawa for over 20 years. 
              From personalized paint consultations to full scale 
              renovations, we offer a wide range of residential and 
              commercial design services tailored to meet each client&apos;s 
              needs.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We&apos;re celebrated for our ability to transform and reimagine 
              spaces in a way that reflects every client&apos;s personality, style 
              and lifestyle. Our warm, collaborative approach ensures that 
              every project feels thoughtful, functional, and visually 
              harmonious.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              We work closely with a trusted team of skilled trades 
              professionals, allowing TaDa! Interiors to deliver exceptional 
              craftsmanship and seamless results every step of the way.
            </motion.p>

            {/* Call to Action */}
            <motion.div 
              className="pt-4 sm:pt-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a 
                href="mailto:hello@tadainteriordesign.com"
                className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'var(--font-secondary)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 