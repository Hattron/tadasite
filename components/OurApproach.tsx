export default function OurApproach() {
  return (
    <section className="py-20 px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          Our Approach
        </h2>
        
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: TaDa! Thoughts */}
          <div className="space-y-4">
            <h3 
              className="text-xl font-bold mb-4"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              TADA! THOUGHTS:
            </h3>
            <div 
              className="w-20 h-1 mb-6"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Renovating doesn&apos;t have to be stressful. 
              With our experience, guidance, and 
              collaborative approach, we make the 
              journey as enjoyable as the destination 
              - bringing your dream space to life, one 
              thoughtful decision at a time.
            </p>
          </div>

          {/* Column 2: Individual Approach */}
          <div className="space-y-4">
            <div 
              className="w-20 h-1 mb-6"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              No two clients are alike - and neither 
              are our designs. We create spaces that 
              are as individual as the people who live 
              or work in them.
            </p>
          </div>

          {/* Column 3: Why Hire TaDa! */}
          <div className="space-y-4">
            <h3 
              className="text-xl font-bold mb-4"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              Why Hire TaDa! Interiors?
            </h3>
            <div 
              className="w-20 h-1 mb-6"
              style={{ backgroundColor: 'var(--color-primary)' }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Working with TaDa! Interiors means 
              saving time, avoiding costly mistakes, 
              and gaining expert guidance every step 
              of the way. From selecting finishes and 
              furnishings to choosing the perfect 
              lighting, we streamline the process and 
              help you make confident, well-informed 
              decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 