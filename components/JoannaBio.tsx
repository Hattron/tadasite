import { getJoannaImage } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import ImageFrame from '@/components/ui/ImageFrame';

// Helper function to extract path from ImageKit URL
const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function JoannaBio() {
  const joannaImage = await getJoannaImage();

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
            fontSize: 'var(--font-size-5xl)',
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
          <div className="flex items-start pr-4 md:pr-8 lg:pr-12">
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
            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Design has always been a part of Joanna&apos;s life. Growing up with an artist father, 
              she was constantly surrounded by creativity, which naturally lead to her love of art 
              and design.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              While she studied sociology in university, Joanna found that understanding how 
              people live, interact, and use space has been an invaluable foundation in her 
              work as an Interior decorator.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              A people person at heart - social, intuitive, and deeply committed to creating 
              spaces that feel personal and meaningful.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Joanna&apos;s years working in the hospitality industry sharpened her eye for 
              functional beauty, especially in commercial and restaurant design, where every 
              detail matters.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              She later followed her passion and graduated with honours from the Interior 
              Decorating program at Algonquin College, where she refined her skills to bring 
              creative vision to life.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Joanna loves to travel and finds endless inspiration in the colours, textures, and 
              cultures she has encountered around the world. She thrives on creative problem-
              solving, always looking for unique and unexpected ways to infuse personality and 
              character into every space.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              As a mother of two, she understands how important it is for spaces to be both 
              stylish and livable. Her approach is warm, thoughtful, and highly collaborative.
            </p>

            <p 
              className="leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-lg)'
              }}
            >
              Joanna is proud to have built lasting relationships with many repeat clients, 
              tailoring each space to reflect her client&apos;s personalities and needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 