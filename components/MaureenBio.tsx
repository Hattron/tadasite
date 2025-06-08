import { getMaureenImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function MaureenBio() {
  const maureeenImage = await getMaureenImage();
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
          C. Maureen Rice, certified interior decorator
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            {maureeenImage ? (
              <img
                src={`${imagekitConfig.urlEndpoint}${getImagePath(maureeenImage.imagekitUrl)}?tr=w-600,h-600,q-90`}
                alt={maureeenImage.alt || 'Maureen Rice, certified interior decorator'}
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
                  Set a Maureen image in the gallery manager
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
              After graduating with honours from the Residential Décor program at Algonquin 
              college Maureen embarked on her childhood dream of being an interior design 
              professional and founded TaDa! Interiors. Since 2002 Maureen has used her 
              strong understanding of the Elements of Design to create interiors that are unique 
              and most importantly truly reflect her client&apos;s personalities and ways of living.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
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
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
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
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Maureen values the great relationships that develop while working with her 
              clients. Many of her clients are repeat customers, contacting TaDa! Interiors time 
              after time to tackle more areas in their homes. It is a joy to be called upon with 
              future projects and most of her clients become like family.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
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