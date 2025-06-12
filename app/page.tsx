import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import ParallaxSection from '@/components/ParallaxSection';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import { getFirstImage, getSecondImage, getThirdImage } from '@/lib/image-actions';

export default async function Home() {
  const [firstImage, secondImage, thirdImage] = await Promise.all([
    getFirstImage(),
    getSecondImage(),
    getThirdImage()
  ]);

  return (
    <div 
      className="flex flex-col" 
      style={{ 
        gap: 'var(--spacing-3xl)',
        paddingTop: 'var(--spacing-xl)',
        paddingBottom: 'var(--spacing-xl)'
      }}
    >
      <HeroSection />
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <Services />
      </div>
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <ParallaxSection 
          title={firstImage?.firstImageTitle || ""}
          subtitle={firstImage?.firstImageSubtitle || ""}
          imageSrc={firstImage?.imagekitUrl || undefined}
          altText={firstImage?.alt || undefined}
          position="left"
        />
      </div>
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <AboutUs />
      </div>
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <ParallaxSection 
          title={secondImage?.secondImageTitle || ""}
          subtitle={secondImage?.secondImageSubtitle || ""}
          imageSrc={secondImage?.imagekitUrl || undefined}
          altText={secondImage?.alt || undefined}
          position="right"
        />
      </div>
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <Testimonials />
      </div>
      
      <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
        <ParallaxSection 
          title={thirdImage?.thirdImageTitle || ""}
          subtitle={thirdImage?.thirdImageSubtitle || ""}
          imageSrc={thirdImage?.imagekitUrl || undefined}
          altText={thirdImage?.alt || undefined}
          position="left"
        />
      </div>
    </div>
  );
}
