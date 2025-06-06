import { getProjectsByType } from '@/lib/image-actions';
import { imagekitConfig } from '@/lib/imagekit';
import Link from 'next/link';

const getImagePath = (fullUrl: string) => {
  return fullUrl.replace(/^https:\/\/ik\.imagekit\.io\/[^\/]+/, '');
};

export default async function CommercialPage() {
  const commercialProjects = await getProjectsByType('commercial');

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
        <div className="text-center mb-16">
          <Link 
            href="/gallery"
            className="inline-block mb-6 text-sm font-medium hover:underline"
            style={{ color: 'var(--color-secondary)' }}
          >
            ← Back to Gallery
          </Link>
          <h1 
            className="text-5xl font-bold mb-6"
            style={{ color: 'var(--color-primary)' }}
          >
            Commercial Projects
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Designing inspiring workspaces that enhance productivity, foster collaboration, and strengthen brand identity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercialProjects.map((project) => (
            <Link 
              key={project.id} 
              href={`/gallery/commercial/${project.id}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all group-hover:shadow-xl group-hover:scale-105">
                {project.coverImage ? (
                  <img
                    src={`${imagekitConfig.urlEndpoint}${getImagePath(project.coverImage.imagekitUrl)}?tr=w-500,h-400,q-85`}
                    alt={project.coverImage.alt || project.name}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {project.name}
                  </h3>
                  {project.description && (
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {project.description}
                    </p>
                  )}
                  <div className="mt-4">
                    <span 
                      className="text-sm font-medium group-hover:underline"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      View Project →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {commercialProjects.length === 0 && (
          <div className="text-center py-16">
            <p 
              className="text-xl"
              style={{ color: 'var(--color-text-muted)' }}
            >
              No commercial projects available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 