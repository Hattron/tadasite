export default function Home() {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-primary, #3b82f6) 100%)`,
        fontFamily: 'var(--font-primary)',
      }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0" style={{ padding: 'var(--spacing-lg)' }}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div 
            className="text-2xl font-bold"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Ta Da
          </div>
          <div 
            className="text-sm"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Interior Design
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main 
        className="flex flex-col items-center justify-center min-h-screen"
        style={{ padding: `var(--spacing-md) var(--spacing-lg)` }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-light"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-primary)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              Ta Da
            </h1>
            <p 
              className="text-xl sm:text-2xl font-light tracking-wide"
              style={{ 
                color: 'var(--color-secondary)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Interior Design
            </p>
          </div>

          {/* Under Construction Message */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-light"
              style={{ 
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-primary)',
                marginBottom: 'var(--spacing-lg)'
              }}
            >
              Something Beautiful is Coming
            </h2>
            <p 
              className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ 
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              We&apos;re crafting an extraordinary experience that will transform how you think about interior design. 
              Our new website is under construction, but great things are worth the wait.
            </p>
          </div>

          {/* CSS Variables Demo Section */}
          <div 
            className="rounded-lg p-6 mb-8"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: `2px solid var(--color-primary)`,
              marginBottom: 'var(--spacing-xl)'
            }}
          >
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              CSS Variables Test
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div 
                className="p-4 rounded"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <p style={{ color: 'white', fontFamily: 'var(--font-secondary)' }}>
                  Primary Color
                </p>
              </div>
              <div 
                className="p-4 rounded"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <p style={{ color: 'white', fontFamily: 'var(--font-secondary)' }}>
                  Secondary Color
                </p>
              </div>
              <div 
                className="p-4 rounded"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <p style={{ color: 'white', fontFamily: 'var(--font-secondary)' }}>
                  Accent Color
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p style={{ 
                color: 'var(--color-text)', 
                fontFamily: 'var(--font-primary)',
                fontSize: '1.1rem'
              }}>
                Primary Font (Quicksand fallback)
              </p>
              <p style={{ 
                color: 'var(--color-text-muted)', 
                fontFamily: 'var(--font-secondary)',
                fontSize: '1rem'
              }}>
                Secondary Font (Inter fallback)
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <div 
              className="w-full max-w-md mx-auto rounded-full h-2"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              <div 
                className="h-2 rounded-full transition-all duration-1000 ease-out" 
                style={{
                  background: `linear-gradient(90deg, var(--color-secondary) 0%, var(--color-primary) 100%)`,
                  width: '65%'
                }}
              ></div>
            </div>
            <p 
              className="text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              We&apos;re 65% there
            </p>
          </div>

          {/* Contact Information */}
          <div style={{ marginTop: 'var(--spacing-xl)' }}>
            <p 
              style={{ 
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              Ready to transform your space? Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@tadainteriordesign.com" 
                className="inline-flex items-center gap-2 rounded-full transition-all font-medium"
                style={{
                  padding: `var(--spacing-sm) var(--spacing-lg)`,
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  fontFamily: 'var(--font-secondary)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
              <a 
                href="tel:+1234567890" 
                className="inline-flex items-center gap-2 rounded-full transition-all font-medium"
                style={{
                  padding: `var(--spacing-sm) var(--spacing-lg)`,
                  border: `2px solid var(--color-secondary)`,
                  color: 'var(--color-text)',
                  backgroundColor: 'transparent',
                  fontFamily: 'var(--font-secondary)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer 
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: 'var(--spacing-lg)' }}
      >
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          <p 
            className="text-sm"
            style={{ 
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            © 2024 Ta Da Interior Design. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div 
        className="absolute top-1/4 left-0 w-32 h-32 rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--color-accent)', opacity: '0.2' }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full blur-3xl"
        style={{ backgroundColor: 'var(--color-secondary)', opacity: '0.2' }}
      ></div>
    </div>
  );
}
