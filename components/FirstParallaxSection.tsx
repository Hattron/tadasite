import ParallaxSection from '@/components/ParallaxSection';
import { getFirstImage } from '@/lib/image-actions';

export default async function FirstParallaxSection() {
  const firstImage = await getFirstImage();

  return (
    <ParallaxSection 
      title={firstImage?.firstImageTitle || ""}
      subtitle={firstImage?.firstImageSubtitle || ""}
      imageSrc={firstImage?.imagekitUrl || undefined}
      altText={firstImage?.alt || undefined}
      position="left"
    />
  );
} 