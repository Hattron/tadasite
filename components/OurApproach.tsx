export default function OurApproach() {
  return (
    <section 
      style={{ 
        backgroundColor: 'var(--color-background)',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)',
        paddingLeft: 'var(--spacing-lg)',
        paddingRight: 'var(--spacing-lg)'
      }}
      className="md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 
          className="font-bold text-center text-3xl md:text-4xl lg:text-5xl"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)',
            marginBottom: 'var(--spacing-3xl)'
          }}
        >
          Our Approach
        </h2>
        
        {/* Mobile Layout - Stacked with Spacing */}
        <div className="block md:hidden space-y-8">
          {/* Column 1: Our Philosophy */}
          <div className="text-center px-4">
            <h3 
              className="text-xl font-bold"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              Our Philosophy
            </h3>
            <div 
              className="w-20 h-1 mx-auto"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                marginBottom: 'var(--spacing-lg)'
              }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
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

          {/* Column 2: Every Client Is Unique */}
          <div className="text-center px-4">
            <h3 
              className="text-xl font-bold"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              Every Client Is Unique
            </h3>
            <div 
              className="w-20 h-1 mx-auto"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                marginBottom: 'var(--spacing-lg)'
              }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
              }}
            >
              No two clients are alike - and neither 
              are our designs. We create spaces that 
              are as individual as the people who live 
              or work in them.
            </p>
          </div>

          {/* Column 3: Why Choose Us */}
          <div className="text-center px-4">
            <h3 
              className="text-xl font-bold"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)',
                marginBottom: 'var(--spacing-md)'
              }}
            >
              Why Choose Us
            </h3>
            <div 
              className="w-20 h-1 mx-auto"
              style={{ 
                backgroundColor: 'var(--color-primary)',
                marginBottom: 'var(--spacing-lg)'
              }}
            ></div>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)',
                fontSize: 'var(--font-size-base)'
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

        {/* Desktop Layout - Alternating/Staggered */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Our Philosophy - Higher position */}
            <div className="space-y-4">
              <h3 
                className="text-xl font-bold"
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: 'var(--spacing-md)'
                }}
              >
                Our Philosophy
              </h3>
              <div 
                className="w-20 h-1"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-lg)'
                }}
              ></div>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-base)'
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

            {/* Column 2: Every Client Is Unique - Lower position */}
            <div 
              className="space-y-4"
              style={{ marginTop: 'var(--spacing-2xl)' }}
            >
              <h3 
                className="text-xl font-bold"
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: 'var(--spacing-md)'
                }}
              >
                Every Client Is Unique
              </h3>
              <div 
                className="w-20 h-1"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-lg)'
                }}
              ></div>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-base)'
                }}
              >
                No two clients are alike - and neither 
                are our designs. We create spaces that 
                are as individual as the people who live 
                or work in them.
              </p>
            </div>

            {/* Column 3: Why Choose Us - Middle position */}
            <div 
              className="space-y-4"
              style={{ marginTop: 'var(--spacing-lg)' }}
            >
              <h3 
                className="text-xl font-bold"
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: 'var(--spacing-md)'
                }}
              >
                Why Choose Us
              </h3>
              <div 
                className="w-20 h-1"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-lg)'
                }}
              ></div>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)',
                  fontSize: 'var(--font-size-base)'
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
      </div>
    </section>
  );
} 