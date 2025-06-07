import { getAboutUsImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function AboutUs() {
  const aboutUsImage = await getAboutUsImage();

  return (
    <section className="py-20 px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          About Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            {aboutUsImage ? (
              <img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(aboutUsImage.imagekitUrl)}?tr=w-600,h-600,q-90`}
                alt={aboutUsImage.alt || 'About TaDa! Interiors'}
                className="rounded-2xl shadow-lg max-w-full h-auto"
                style={{ maxWidth: '500px' }}
              />
            ) : (
              <div 
                className="w-full max-w-md h-96 rounded-2xl shadow-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--color-secondary)', opacity: 0.1 }}
              >
                <p 
                  className="text-center"
                  style={{ color: 'var(--color-text)' }}
                >
                  Set an About Us image in the gallery manager
                </p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              At TaDa! Interiors, we&apos;ve been bringing inspired design 
              to homes and businesses across Ottawa for over 20 years. 
              From personalized paint consultations to full scale 
              renovations, we offer a wide range of residential and 
              commercial design services tailored to meet each client&apos;s 
              needs.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              We&apos;re celebrated for our ability to transform and reimagine 
              spaces in a way that reflects every client&apos;s personality, style 
              and lifestyle. Our warm, collaborative approach ensures that 
              every project feels thoughtful, functional, and visually 
              harmonious.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              We work closely with a trusted team of skilled trades 
              professionals, allowing TaDa! Interiors to deliver exceptional 
              craftsmanship and seamless results every step of the way.
            </p>

            {/* Call to Action */}
            <div className="pt-6">
              <a 
                href="mailto:hello@tadainteriordesign.com"
                className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-8 py-4 text-lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'var(--font-secondary)'
                }}
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 