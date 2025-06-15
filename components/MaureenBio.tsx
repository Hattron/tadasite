import { getMaureenImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import ImageFrame from '@/components/ui/ImageFrame';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function MaureenBio() {
  const maurImage = await getMaureenImage();

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
        {/* Main Title */}
        <h1 
          className="font-bold text-center"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-4xl)',
            marginBottom: 'var(--spacing-md)'
          }}
        >
          C. Maureen Rice
        </h1>
        
        {/* Subtitle */}
        <h2 
          className="text-center font-medium"
          style={{ 
            color: 'var(--color-text)',
            fontFamily: 'var(--font-secondary)',
            fontSize: 'var(--font-size-xl)',
            marginBottom: 'var(--spacing-3xl)',
            opacity: 0.8
          }}
        >
          Certified Interior Decorator
        </h2>
        
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
            {maurImage ? (
              <ImageFrame variant="default">
                <img
                  src={`${imagekitConfig.urlEndpoint}${getImagePath(maurImage.imagekitUrl)}?tr=w-300,h-300,q-90`}
                  alt={maurImage.alt || 'Maureen Rice, certified interior decorator'}
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
                  Set a Maureen image in the gallery manager
                </p>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex flex-col w-full lg:w-3/4" style={{ gap: 'var(--spacing-lg)' }}>
            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              After graduating with honours from the Residential Décor program at Algonquin 
              college Maureen embarked on her childhood dream of being an interior design 
              professional and founded TaDa! Interiors. Since 2002 Maureen has used her 
              strong understanding of the Elements of Design to create interiors that are unique 
              and most importantly truly reflect her client&apos;s personalities and ways of living.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Maureen brings a true passion for creativity to every project she takes on. 
              Constantly inspired by the world around her she&apos;s known for thinking outside the 
              box and finding fresh, unexpected solutions. Her meticulous attention to detail 
              ensures that each space is executed with care and precision right down to the 
              final finishing touch. With a thoughtful professional approach, Maureen 
              transforms ideas into beautifully realized, functional spaces that leave a lasting 
              impression.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Over the years Maureen has leant her skills and expertise to a number of 
              companies and organizations within the design community. Specifically, as an 
              invaluable cast member of HGTV&apos;s Design U (seasons 2-4), she proved herself 
              highly capable of turning out quality projects while working under arduous 
              deadlines and budgetary constraints. Using her first name Christina on the show, 
              she was able to showcase her skills as a drapery seamstress and furniture 
              upholsterer, as well as assist the carpentry team with the many projects as 
              required.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Maureen values the great relationships that develop while working with her 
              clients. Many of her clients are repeat customers, contacting TaDa! Interiors time 
              after time to tackle more areas in their homes. It is a joy to be called upon with 
              future projects and most of her clients become like family.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              In addition to being a wife and proud mom of two boys Maureen finds joy in 
              gardening, unwinding through yoga, and exploring her creativity through various 
              craft and textile arts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 