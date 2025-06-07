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
        title="Exceptional Design"
        subtitle="Creating spaces that inspire and elevate your everyday experience"
        imageSrc={firstImage?.imagekitUrl || undefined}
        altText={firstImage?.alt || undefined}
      />
      
      <AboutUs />
      
      <ParallaxSection 
        title="Your Vision, Our Expertise"
        subtitle="Transforming spaces into beautiful, functional environments that tell your story"
        imageSrc={secondImage?.imagekitUrl || undefined}
        altText={secondImage?.alt || undefined}
      />
      
      <Testimonials />
      
      <ParallaxSection 
        title="Ready to Get Started?"
        subtitle="Let's bring your vision to life with exceptional design and craftsmanship"
        imageSrc={thirdImage?.imagekitUrl || undefined}
        altText={thirdImage?.alt || undefined}
      />
    </>
  );
}
