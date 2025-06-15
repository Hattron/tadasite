import ParallaxSection from '@/components/ParallaxSection';
import { getSecondImage } from '@/lib/image-actions';

export default async function SecondParallaxSection() {
  const secondImage = await getSecondImage();

  return (
    <ParallaxSection 
      title={secondImage?.secondImageTitle || ""}
      subtitle={secondImage?.secondImageSubtitle || ""}
      imageSrc={secondImage?.imagekitUrl || undefined}
      altText={secondImage?.alt || undefined}
      position="right"
    />
  );
} 