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
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white'
                }}
              >
                <svg 
                  className="w-8 h-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
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
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white'
                }}
              >
                <svg 
                  className="w-8 h-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54-.37-2.01-.99l-.49-.64c-.32-.42-.85-.37-1.09.09L8.5 12l3.5 1.5V22h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 10.17 11 11s.67 1.5 1.5 1.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
                </svg>
              </div>
            </div>
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
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: 'white'
                }}
              >
                <svg 
                  className="w-8 h-8" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4v-9zm10-5-1 1-2-2 1-1a1 1 0 0 1 1.41 0l.59.59a1 1 0 0 1 0 1.41zM11 13.5l6.5-6.5 2 2-6.5 6.5H11v-2z"/>
                </svg>
              </div>
            </div>
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

        {/* Desktop Layout - Aligned columns with icons */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Column 1: Our Philosophy */}
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  <svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl lg:text-2xl font-bold"
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
                className="text-base lg:text-lg leading-relaxed"
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
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  <svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54-.37-2.01-.99l-.49-.64c-.32-.42-.85-.37-1.09.09L8.5 12l3.5 1.5V22h2zm-7.5-10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 10.17 11 11s.67 1.5 1.5 1.5zm-2.5 1c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-2 0c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl lg:text-2xl font-bold"
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
                className="text-base lg:text-lg leading-relaxed"
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
            <div className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--color-primary)',
                    color: 'white'
                  }}
                >
                  <svg 
                    className="w-10 h-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4v-9zm10-5-1 1-2-2 1-1a1 1 0 0 1 1.41 0l.59.59a1 1 0 0 1 0 1.41zM11 13.5l6.5-6.5 2 2-6.5 6.5H11v-2z"/>
                  </svg>
                </div>
              </div>
              <h3 
                className="text-xl lg:text-2xl font-bold"
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
                className="text-base lg:text-lg leading-relaxed"
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