import { Heart, Users, Award } from 'lucide-react';

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
                <Heart className="w-8 h-8" />
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
                <Users className="w-8 h-8" />
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
                <Award className="w-8 h-8" />
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
                  <Heart className="w-10 h-10" />
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
                  <Users className="w-10 h-10" />
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
                  <Award className="w-10 h-10" />
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