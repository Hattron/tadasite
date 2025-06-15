import Team from '@/components/Team';
import MaureenBio from '@/components/MaureenBio';
import JoannaBio from '@/components/JoannaBio';
import OurApproach from '@/components/OurApproach';
import { getTeamImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import ImageFrame from '@/components/ui/ImageFrame';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function AboutPage() {
  const teamImage = await getTeamImage();

  return (
    <div className="pt-20 md:pt-24">
      <Team />
      <OurApproach />
      
      {/* Meet the Women Behind TaDa! Header Section */}
      <section 
        className="px-8" 
        style={{ 
          backgroundColor: 'var(--color-background)',
          paddingTop: 'var(--spacing-3xl)',
          paddingBottom: 'var(--spacing-xl)'
        }}
      >
        <div style={{ maxWidth: 'var(--container-max-width)' }} className="mx-auto">
          <div className="flex flex-col lg:flex-row items-start">
            {/* Text Content */}
            <div style={{ marginRight: 'var(--spacing-lg)' }}>
              <h2 
                className="font-bold"
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--font-size-5xl)',
                  marginBottom: 'var(--spacing-lg)'
                }}
              >
                Meet the Women Behind TaDa!
              </h2>
              
              <p 
                className="leading-relaxed"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)',
                  maxWidth: '600px'
                }}
              >
                Get to know Maureen and Joanna—the heart, soul, and creative force behind every project.
              </p>
            </div>

            {/* Team Image */}
            <div 
              className="flex items-start flex-shrink-0" 
              style={{ padding: 'var(--spacing-md)' }}
            >
              {teamImage ? (
                <ImageFrame variant="default">
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(teamImage.imagekitUrl)}?tr=w-300,h-300,q-90`}
                    alt={teamImage.alt || 'TaDa! Interiors Team'}
                    className="h-auto"
                    style={{ maxWidth: 'var(--image-about-medium-max-width)', display: 'block' }}
                  />
                </ImageFrame>
              ) : (
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{ maxWidth: 'var(--image-about-medium-max-width)', opacity: 0.1 }}
                >
                  <p 
                    className="text-center"
                    style={{ color: 'var(--color-text)', fontFamily: 'var(--font-secondary)', fontSize: 'var(--font-size-base)' }}
                  >
                    Set a team image in the gallery manager
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <MaureenBio />
      <JoannaBio />
    </div>
  );
} 