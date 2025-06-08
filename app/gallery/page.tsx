import { getResidentialCoverImage, getCommercialCoverImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import Link from 'next/link';

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function GalleryPage() {
  const [residentialCover, commercialCover] = await Promise.all([
    getResidentialCoverImage(),
    getCommercialCoverImage(),
  ]);

  return (
    <div 
      className="min-h-screen py-16 px-8"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl font-bold mb-6"
            style={{ color: 'var(--color-primary)' }}
          >
            Our Portfolio
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Explore our diverse collection of interior design projects, from cozy residential spaces to dynamic commercial environments.
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Residential Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--color-secondary)' }}
              >
                Residential
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Creating beautiful, functional homes that reflect your personal style
              </p>
              
              {/* Residential Cover Image */}
              {residentialCover && (
                <div className="relative mb-8 group cursor-pointer">
                  <Link href="/gallery/residential">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={`${imagekitConfig.urlEndpoint}${getImagePath(residentialCover.imagekitUrl)}?tr=w-600,h-400,q-90`}
                        alt={residentialCover.alt || 'Residential Design'}
                        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                          backdropFilter: 'blur(2px)'
                        }}
                      >
                        <span 
                          className="text-xl font-semibold px-6 py-3 rounded-full"
                          style={{ 
                            color: 'var(--color-primary)',
                            backgroundColor: 'rgba(255,255,255,0.9)'
                          }}
                        >
                          View All Residential Projects
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Commercial Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ color: 'var(--color-secondary)' }}
              >
                Commercial
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Designing inspiring workspaces that enhance productivity and brand identity
              </p>
              
              {/* Commercial Cover Image */}
              {commercialCover && (
                <div className="relative mb-8 group cursor-pointer">
                  <Link href="/gallery/commercial">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={`${imagekitConfig.urlEndpoint}${getImagePath(commercialCover.imagekitUrl)}?tr=w-600,h-400,q-90`}
                        alt={commercialCover.alt || 'Commercial Design'}
                        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                          backdropFilter: 'blur(2px)'
                        }}
                      >
                        <span 
                          className="text-xl font-semibold px-6 py-3 rounded-full"
                          style={{ 
                            color: 'var(--color-primary)',
                            backgroundColor: 'rgba(255,255,255,0.9)'
                          }}
                        >
                          View All Commercial Projects
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Ready to Transform Your Space?
          </h3>
          <p 
            className="text-lg mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Let&apos;s discuss your vision and create something extraordinary together.
          </p>
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
  );
} 