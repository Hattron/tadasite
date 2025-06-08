import { getTeamImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function Team() {
  const teamImage = await getTeamImage();

  return (
    <section className="py-20 px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-5xl font-bold text-center mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          About TaDa! Interiors
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            {teamImage ? (
              <img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(teamImage.imagekitUrl)}?tr=w-600,h-600,q-90`}
                alt={teamImage.alt || 'TaDa! Interiors Team'}
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
                  Set a team image in the gallery manager
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
              At TaDa! Interiors, we&apos;ve been bringing inspired design to homes and 
              businesses across Ottawa for over 20 years. From personalized paint 
              consultations to full scale renovations, we offer a wide range of residential and 
              commercial design services tailored to meet each client&apos;s needs.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              We&apos;re celebrated for our ability to transform and reimagine spaces in a way that 
              reflects every client&apos;s personality, style and lifestyle. Our warm, collaborative 
              approach ensures that every project feels thoughtful, functional, and visually 
              harmonious.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              We work closely with a trusted team of skilled trades professionals, allowing 
              TaDa! Interiors to deliver exceptional craftsmanship and seamless results every step of the way.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              At TaDa! Interiors, we take pride in sourcing the finest products and materials the 
              market has to offer. Backed by a trusted network of skilled tradespeople and a 
              keen eye for finding the perfect finishing touches, we make the design process 
              both seamless and enjoyable. Whether you are refreshing a room or transforming 
              an entire space, we ensure the journey is as rewarding as the final result.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              In addition to residential work, TaDa! Interiors has completed a wide range of 
              commercial projects. Our portfolio includes - though is not limited to - restaurants, 
              retail environments, office spaces, condominiums and even a church.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 