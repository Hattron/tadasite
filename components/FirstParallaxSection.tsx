import ParallaxSection from '@/components/ParallaxSection';
import { getFirstImage } from '@/lib/image-actions';

export default async function FirstParallaxSection() {
  const firstImage = await getFirstImage();

  return (
    <ParallaxSection
      title='“Inspired design with heart, function, and a touch of the unexpected”'
      subtitle=""
      imageSrc={firstImage?.imagekitUrl || undefined}
      altText={firstImage?.alt || undefined}
      position="left"
    />
  );
} 