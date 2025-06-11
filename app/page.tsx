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
    <>
      <HeroSection />
      
      <Services />
      
      <ParallaxSection 
        title={firstImage?.firstImageTitle || ""}
        subtitle={firstImage?.firstImageSubtitle || ""}
        imageSrc={firstImage?.imagekitUrl || undefined}
        altText={firstImage?.alt || undefined}
        position="left"
      />
      
      <AboutUs />
      
      <ParallaxSection 
        title={secondImage?.secondImageTitle || ""}
        subtitle={secondImage?.secondImageSubtitle || ""}
        imageSrc={secondImage?.imagekitUrl || undefined}
        altText={secondImage?.alt || undefined}
        position="right"
      />
      
      <Testimonials />
      
      <ParallaxSection 
        title={thirdImage?.thirdImageTitle || ""}
        subtitle={thirdImage?.thirdImageSubtitle || ""}
        imageSrc={thirdImage?.imagekitUrl || undefined}
        altText={thirdImage?.alt || undefined}
        position="left"
      />
    </>
  );
}
