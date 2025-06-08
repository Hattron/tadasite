import Link from 'next/link';
import { imagekitConfig } from '@/lib/imagekit';

export default function Footer() {
  return (
    <footer 
      className="py-6"
      style={{ 
        backgroundColor: 'var(--color-primary, #3b82f6)',
        color: 'var(--color-background, #ffffff)'
      }}
    >
      <div className="max-w-7xl mx-auto" style={{ padding: 'var(--spacing-lg, 1rem)' }}>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          {/* Company Logo */}
          <img 
            src={`${imagekitConfig.urlEndpoint}/tada/Assets/logo.png?tr=h-320,q-90`}
            alt="Tada Interior Design"
            className="h-64 flex-shrink-0"
          />

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-semibold"
              style={{ 
                marginBottom: 'var(--spacing-sm, 0.5rem)',
                color: 'var(--color-background, #ffffff)'
              }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8" style={{ gap: 'var(--spacing-sm, 0.5rem)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm, 0.5rem)' }}>
                <Link 
                  href="/"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  About
                </Link>
                <Link 
                  href="/gallery"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Gallery
                </Link>
                <Link 
                  href="/contact"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Contact
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm, 0.5rem)' }}>
                <Link 
                  href="/gallery/residential"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Residential Projects
                </Link>
                <Link 
                  href="/gallery/commercial"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Commercial Projects
                </Link>
                <Link 
                  href="/admin"
                  className="block transition-colors hover:text-white"
                  style={{ 
                    color: 'var(--color-text-muted, #6b7280)',
                    textDecoration: 'none'
                  }}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="text-center"
          style={{ 
            borderTop: `1px solid var(--color-text-muted, #6b7280)`,
            marginTop: 'var(--spacing-md, 1rem)',
            paddingTop: 'var(--spacing-md, 1rem)'
          }}
        >
          <p style={{ color: 'var(--color-text-muted, #6b7280)' }}>
            © {new Date().getFullYear()} Tada Interior Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 