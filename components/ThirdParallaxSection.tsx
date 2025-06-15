import ParallaxSection from '@/components/ParallaxSection';
import { getThirdImage } from '@/lib/image-actions';

export default async function ThirdParallaxSection() {
  const thirdImage = await getThirdImage();

  return (
    <ParallaxSection 
      title={thirdImage?.thirdImageTitle || ""}
      subtitle={thirdImage?.thirdImageSubtitle || ""}
      imageSrc={thirdImage?.imagekitUrl || undefined}
      altText={thirdImage?.alt || undefined}
      position="left"
    />
  );
} 