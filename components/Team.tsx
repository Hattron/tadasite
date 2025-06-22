import { getCopyContentBySection } from '@/lib/copy-actions';
import { imagekitConfig } from '@/lib/imagekit';
import ImageFrame from '@/components/ui/ImageFrame';
import Link from 'next/link';

export default async function Team() {
  const teamContent = await getCopyContentBySection('about', 'team');
  
  // Extract content by type
  const headingContent = teamContent.find(c => c.contentType === 'heading')?.content || 'About TaDa! Interiors';
  const paragraphContent = teamContent.find(c => c.contentType === 'paragraph')?.content || 
    'At TaDa! Interiors, we&apos;ve been bringing inspired design to homes and businesses across Ottawa for over 20 years. From personalized paint consultations to full scale renovations, we offer a wide range of residential and commercial design services tailored to meet each client&apos;s needs.';
  
  // Static ImageKit asset URLs
  const tubImageUrl = 'https://ik.imagekit.io/crimsonstack/tada/Assets/tub.png';
  const chairImageUrl = 'https://ik.imagekit.io/crimsonstack/tada/Assets/chair.png';
  const lightImageUrl = 'https://ik.imagekit.io/crimsonstack/tada/Assets/light.jpg';

  return (
    <section 
      style={{ 
        backgroundColor: 'var(--color-background)',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)',
        paddingLeft: 'var(--spacing-lg)',
        paddingRight: 'var(--spacing-lg)'
      }}
      className="md:px-8"
    >
      <div style={{ maxWidth: 'var(--container-max-width)' }} className="mx-auto">
        <h1 
          className="font-bold text-center text-3xl md:text-4xl lg:text-5xl"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)',
            marginBottom: 'var(--spacing-3xl)'
          }}
          dangerouslySetInnerHTML={{ __html: headingContent }}
        />
        
        
        {/* Mobile Layout - Alternating Images and Text */}
        <div className="block lg:hidden">
          {/* Tub Image */}
          <div 
            className="flex justify-center"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <ImageFrame variant="default">
              <img
                src={`${tubImageUrl}?tr=w-350,h-280,q-90`}
                alt="Interior design bathtub showcase"
                className="w-full h-auto"
                style={{ maxWidth: '280px', display: 'block' }}
              />
            </ImageFrame>
          </div>

          {/* First Text Block */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div 
              className="leading-relaxed text-center px-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
              dangerouslySetInnerHTML={{ __html: paragraphContent }}
            />
          </div>

          {/* Chair Image */}
          <div 
            className="flex justify-end"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <ImageFrame variant="default">
              <img
                src={`${chairImageUrl}?tr=w-300,h-240,q-90`}
                alt="Interior design chair showcase"
                className="w-full h-auto"
                style={{ maxWidth: '240px', display: 'block' }}
              />
            </ImageFrame>
          </div>

          {/* Second Text Block */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <p 
              className="leading-relaxed text-center px-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              We&apos;re celebrated for our ability to transform and reimagine spaces in a way that 
              reflects every client&apos;s personality, style and lifestyle. Our warm, collaborative 
              approach ensures that every project feels thoughtful, functional, and visually 
              harmonious.
            </p>
          </div>

          {/* Light Image */}
          <div 
            className="flex justify-start"
            style={{ marginBottom: 'var(--spacing-xl)' }}
          >
            <ImageFrame variant="default">
              <img
                src={`${lightImageUrl}?tr=w-320,h-260,q-90`}
                alt="Interior design lighting showcase"
                className="w-full h-auto"
                style={{ maxWidth: '260px', display: 'block' }}
              />
            </ImageFrame>
          </div>

          {/* Remaining Text */}
          <div className="space-y-6">
            <p 
              className="leading-relaxed text-center px-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              We work closely with a trusted team of skilled trades professionals, allowing 
              TaDa! Interiors to deliver exceptional craftsmanship and seamless results every step of the way.
            </p>
            
            <p 
              className="leading-relaxed text-center px-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              At TaDa! Interiors, we take pride in sourcing the finest products and materials the 
              market has to offer. Backed by a trusted network of skilled tradespeople and a 
              keen eye for finding the perfect finishing touches, we make the design process 
              both seamless and enjoyable. Whether you are refreshing a room or transforming 
              an entire space, we ensure the journey is as rewarding as the final result.
            </p>
            
            <p 
              className="leading-relaxed text-center px-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              In addition to residential work, TaDa! Interiors has completed a wide range of 
              commercial projects. Our portfolio includes - though is not limited to - restaurants, 
              retail environments, office spaces, condominiums and even a church.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Alternating/Staggered Images */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-8" style={{ gap: 'var(--spacing-xl)' }}>
            {/* Left Column - Staggered Images */}
            <div className="col-span-4">
              {/* Tub Image - Higher up */}
              <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                <ImageFrame variant="default">
                  <img
                    src={`${tubImageUrl}?tr=w-300,h-240,q-90`}
                    alt="Interior design bathtub showcase"
                    className="w-full h-auto"
                    style={{ display: 'block' }}
                  />
                </ImageFrame>
              </div>

              {/* Chair Image - Lower */}
              <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                <ImageFrame variant="default">
                  <img
                    src={`${chairImageUrl}?tr=w-280,h-220,q-90`}
                    alt="Interior design chair showcase"
                    className="w-full h-auto"
                    style={{ display: 'block' }}
                  />
                </ImageFrame>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="col-span-8 space-y-6" style={{ paddingLeft: 'var(--spacing-lg)' }}>
              <div 
                className="leading-relaxed text-lg"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
                dangerouslySetInnerHTML={{ __html: paragraphContent }}
              />

              <p 
                className="leading-relaxed text-lg"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
              >
                We&apos;re celebrated for our ability to transform and reimagine spaces in a way that 
                reflects every client&apos;s personality, style and lifestyle. Our warm, collaborative 
                approach ensures that every project feels thoughtful, functional, and visually 
                harmonious.
              </p>

              {/* Light Image - Inline with text */}
              <div 
                className="float-right ml-6 mb-4"
                style={{ 
                  marginLeft: 'var(--spacing-lg)',
                  marginBottom: 'var(--spacing-md)',
                  maxWidth: '240px'
                }}
              >
                <ImageFrame variant="default">
                  <img
                    src={`${lightImageUrl}?tr=w-240,h-180,q-90`}
                    alt="Interior design lighting showcase"
                    className="w-full h-auto"
                    style={{ display: 'block' }}
                  />
                </ImageFrame>
              </div>

              <p 
                className="leading-relaxed text-lg"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
              >
                We work closely with a trusted team of skilled trades professionals, allowing 
                TaDa! Interiors to deliver exceptional craftsmanship and seamless results every step of the way.
              </p>

              <p 
                className="leading-relaxed text-lg"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
              >
                At TaDa! Interiors, we take pride in sourcing the finest products and materials the 
                market has to offer. Backed by a trusted network of skilled tradespeople and a 
                keen eye for finding the perfect finishing touches, we make the design process 
                both seamless and enjoyable. Whether you are refreshing a room or transforming 
                an entire space, we ensure the journey is as rewarding as the final result.
              </p>

              <p 
                className="leading-relaxed text-lg"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
              >
                In addition to residential work, TaDa! Interiors has completed a wide range of 
                commercial projects. Our portfolio includes - though is not limited to - restaurants, 
                retail environments, office spaces, condominiums and even a church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 