import { getJoannaImage } from '@/lib/image-actions';
import { getCopyContentBySection } from '@/lib/copy-actions';
import { imagekitConfig } from '@/lib/imagekit';
import ImageFrame from '@/components/ui/ImageFrame';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function JoannaBio() {
  const [joannaImage, bioContent] = await Promise.all([
    getJoannaImage(),
    getCopyContentBySection('about', 'joanna-bio')
  ]);

  return (
    <section 
      className="px-8" 
      style={{ 
        backgroundColor: 'var(--color-background)',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)'
      }}
    >
      <div style={{ maxWidth: 'var(--container-max-width)' }} className="mx-auto">
        <h1 
          className="font-bold text-center"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-3xl)'
          }}
        >
          Joanna Dyment
        </h1>
        
        <div 
          className="grid grid-cols-1 lg:[grid-template-columns:auto_1fr] items-start place-items-start"
          style={{ gap: 'var(--spacing-about-image-gap-tight)' }}
        >
          {/* Image Section */}
          <div 
            className="mb-8 lg:mb-0 flex justify-center lg:justify-start items-start lg:pr-4 lg:md:pr-8 lg:lg:pr-12"
            style={{ 
              marginBottom: 'var(--spacing-2xl)',
              width: '100%'
            }}
          >
            {joannaImage ? (
              <ImageFrame variant="default">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(joannaImage.imagekitUrl)}?tr=w-300,h-300,q-90`}
                  alt={joannaImage.alt || 'Joanna, interior designer'}
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
                  Set a Joanna image in the gallery manager
                </p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col w-full lg:w-3/4" style={{ gap: 'var(--spacing-lg)' }}>
            {bioContent.map((content) => (
              <div
                key={content.id}
                className="leading-relaxed"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-lg)'
                }}
                dangerouslySetInnerHTML={{ __html: content.content }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 