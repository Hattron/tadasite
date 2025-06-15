'use client';

import { imagekitConfig } from '@/lib/imagekit';

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

interface Image {
  id: string;
  imagekitUrl: string;
  alt?: string | null;
  caption?: string | null;
  isProjectCover?: boolean | null;
}

interface InteractiveImageGalleryProps {
  images: Image[];
  projectName: string;
}

export default function InteractiveImageGallery({ images, projectName }: InteractiveImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className="group cursor-pointer"
          onClick={() => {
            window.open(`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-1920,q-95`, '_blank');
          }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg transition-all group-hover:shadow-xl group-hover:scale-105">
            <img
              src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-600,h-450,q-85`}
              alt={image.alt || `${projectName} - Image ${index + 1}`}
              className="w-full h-80 object-cover transition-transform group-hover:scale-110"
            />
            
            {/* Light Overlay - No Dark Background */}
            <div 
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%)',
                backdropFilter: 'blur(1px)'
              }}
            >
              <span 
                className="font-semibold px-4 py-2 rounded-full"
                style={{ 
                  color: 'var(--color-primary)',
                  backgroundColor: 'rgba(255,255,255,0.9)'
                }}
              >
                View Full Size
              </span>
            </div>
          </div>
          
          {/* Image Caption */}
          {image.caption && (
            <p 
              className="mt-3 text-sm text-center"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {image.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
} 