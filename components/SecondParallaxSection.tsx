import ParallaxSection from '@/components/ParallaxSection';
import { getSecondImage } from '@/lib/image-actions';

export default async function SecondParallaxSection() {
  const secondImage = await getSecondImage();

  return (
    <ParallaxSection
      title='“Designing spaces that feel like home- beautiful, thoughtful, and uniquely you”'
      subtitle=""
      imageSrc={secondImage?.imagekitUrl || undefined}
      altText={secondImage?.alt || undefined}
      position="right"
    />
  );
} 