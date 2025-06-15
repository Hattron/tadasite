import { getProjectDetails } from '@/lib/image-actions';
import InteractiveImageGallery from '@/components/InteractiveImageGallery';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
          <InteractiveImageGallery images={project.images} projectName={project.name} />
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