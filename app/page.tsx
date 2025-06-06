import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* Additional content sections can go here */}
      <section className="min-h-screen p-8" style={{ backgroundColor: 'var(--color-background)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl font-bold mb-6"
            style={{ 
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Transform Your Space
          </h2>
          <p 
            className="text-lg leading-relaxed mb-8"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Our team of expert interior designers specializes in creating stunning, 
            functional spaces that reflect your unique style and personality.
          </p>
          
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:hello@tadainteriordesign.com" 
              className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-6 py-3"
              style={{
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
              className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-6 py-3"
              style={{
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
      </section>
    </>
  );
}
