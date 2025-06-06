import { getProjectDetails } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ResidentialProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = await getProjectDetails(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div 
      className="min-h-screen py-16 px-8"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-primary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/gallery/residential"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--color-secondary)' }}
            >
              ← Back to Residential
            </Link>
            <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>|</span>
            <Link 
              href="/gallery"
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--color-secondary)' }}
            >
              Gallery
            </Link>
          </div>
          
          <h1 
            className="text-5xl font-bold mb-6"
            style={{ color: 'var(--color-primary)' }}
          >
            {project.name}
          </h1>
          
          {project.description && (
            <p 
              className="text-xl max-w-4xl leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {project.description}
            </p>
          )}
        </div>

        {/* Image Gallery */}
        {project.images && project.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.images.map((image, index) => (
              <div 
                key={image.id} 
                className="group cursor-pointer"
                onClick={() => {
                  // Open lightbox or modal here if desired
                  window.open(`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-1920,q-95`, '_blank');
                }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all group-hover:shadow-xl group-hover:scale-105">
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(image.imagekitUrl)}?tr=w-600,h-450,q-85`}
                    alt={image.alt || `${project.name} - Image ${index + 1}`}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  
                  {/* Project Cover Badge */}
                  {image.isProjectCover && (
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ 
                          backgroundColor: 'var(--color-accent)',
                          color: 'white'
                        }}
                      >
                        Project Cover
                      </span>
                    </div>
                  )}
                  
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
        ) : (
          <div className="text-center py-16">
            <p 
              className="text-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              No images available for this project yet.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-20 pt-16 border-t border-gray-200">
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--color-primary)' }}
          >
            Inspired by This Project?
          </h3>
          <p 
            className="text-lg mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Let&apos;s create something beautiful for your space too.
          </p>
          <a 
            href="mailto:hello@tadainteriordesign.com" 
            className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-8 py-4 text-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
} 