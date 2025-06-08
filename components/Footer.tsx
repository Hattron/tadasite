import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="py-12"
      style={{ 
        backgroundColor: 'var(--color-primary, #3b82f6)',
        color: 'var(--color-background, #ffffff)'
      }}
    >
      <div className="max-w-7xl mx-auto" style={{ padding: 'var(--spacing-xl, 2rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 
              className="text-xl font-bold"
              style={{ 
                fontFamily: 'var(--font-primary, var(--font-quicksand, Quicksand, sans-serif))',
                marginBottom: 'var(--spacing-lg, 1.5rem)',
                color: 'var(--color-background, #ffffff)'
              }}
            >
              Tada Interior Design
            </h3>
            <p 
              className="mb-4"
              style={{ 
                color: 'var(--color-text-muted, #6b7280)',
                marginBottom: 'var(--spacing-lg, 1.5rem)'
              }}
            >
              Creating exceptional spaces that inspire and elevate your everyday experience.
            </p>
            <p style={{ color: 'var(--color-text-muted, #6b7280)' }}>
              Transforming visions into beautiful, functional environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-semibold"
              style={{ 
                marginBottom: 'var(--spacing-lg, 1.5rem)',
                color: 'var(--color-background, #ffffff)'
              }}
            >
              Quick Links
            </h4>
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

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg font-semibold"
              style={{ 
                marginBottom: 'var(--spacing-lg, 1.5rem)',
                color: 'var(--color-background, #ffffff)'
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm, 0.5rem)' }}>
              <a 
                href="mailto:hello@tadainteriordesign.com"
                className="block transition-colors hover:text-white"
                style={{ 
                  color: 'var(--color-text-muted, #6b7280)',
                  textDecoration: 'none'
                }}
              >
                hello@tadainteriordesign.com
              </a>
              <p style={{ color: 'var(--color-text-muted, #6b7280)' }}>
                Let&apos;s bring your vision to life
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="text-center"
          style={{ 
            borderTop: `1px solid var(--color-text-muted, #6b7280)`,
            marginTop: 'var(--spacing-xl, 2rem)',
            paddingTop: 'var(--spacing-xl, 2rem)'
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