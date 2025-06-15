import ContactForm from './components/ContactForm';

export default function ContactPage() {
  return (
    <div 
      className="min-h-screen py-16 pt-24 md:pt-28"
      style={{
        backgroundColor: 'var(--color-background)',
        fontFamily: 'var(--font-primary)',
        paddingBottom: 'calc(var(--spacing-xl) * 4)',
      }}
    >
      <div className="container mx-auto" style={{ padding: 'var(--spacing-md)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-end">
              <ContactForm />
            </div>
            
            {/* Apples Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div 
                  className="rounded-lg overflow-hidden shadow-sm"
                  style={{
                    backgroundColor: 'var(--color-background)',
                    border: `1px solid var(--color-text-muted)`,
                  }}
                >
                  <img
                    src="https://ik.imagekit.io/crimsonstack/tada/Assets/vase.jpg?tr=w-600,h-400,q-90,c-fill"
                    alt="Interior design apples showcase"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="space-y-6">
            {/* Business Hours */}
            <div 
              className="rounded-lg p-6 shadow-sm"
              style={{
                backgroundColor: 'var(--color-background)',
                border: `1px solid var(--color-text-muted)`,
                padding: 'var(--spacing-lg)',
              }}
            >
              <h3 
                className="text-xl font-medium mb-4" 
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                Business Hours
              </h3>
              <div className="space-y-2" style={{ color: 'var(--color-text)' }}>
                <p>Office hours are <strong>Monday to Friday 9:00 - 5:00pm</strong>.</p>
                <p>We are <strong>closed on weekends and holidays</strong>.</p>
              </div>
            </div>

            {/* Vase Image */}
            <div 
              className="rounded-lg overflow-hidden shadow-sm"
              style={{
                backgroundColor: 'var(--color-background)',
                border: `1px solid var(--color-text-muted)`,
              }}
            >
              <img
                src="https://ik.imagekit.io/crimsonstack/tada/Assets/apples.jpg?tr=w-600,h-300,q-90,c-fill"
                alt="Interior design vase showcase"
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Our Services */}
            <div 
              className="rounded-lg p-6 shadow-sm"
              style={{
                backgroundColor: 'var(--color-background)',
                border: `1px solid var(--color-text-muted)`,
                padding: 'var(--spacing-lg)',
              }}
            >
              <h3 
                className="text-xl font-medium mb-4" 
                style={{ 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                Our Services
              </h3>
              
              {/* Residential Services */}
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h4 
                  className="text-lg font-medium mb-3" 
                  style={{ 
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-primary)',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  Residential Services
                </h4>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ 
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-secondary)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  At TaDal Interiors, we take pride in sourcing the finest products and 
                  materials the market has to offer. Backed by a trusted network of 
                  skilled tradespeople and a keen eye for finding the perfect finishing 
                  touches, we make the design process both seamless and enjoyable. Whether 
                  you are refreshing a room or transforming an entire space, we ensure the 
                  journey is as rewarding as the final result.
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  Time and expertise for residential services are billed at an hourly 
                  rate of <strong>$150.00/hour plus HST</strong>
                </p>
              </div>

              {/* Commercial Services */}
              <div>
                <h4 
                  className="text-lg font-medium mb-3" 
                  style={{ 
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-primary)',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  Commercial Services
                </h4>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ 
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-secondary)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  In addition to residential work, TaDal Interiors has completed a 
                  wide range of commercial projects. Our portfolio includes - though 
                  is not limited to - restaurants, retail environments, office spaces, 
                  condominiums and even a church.
                </p>
                <p 
                  className="text-sm"
                  style={{ 
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  Time and expertise for commercial services are billed at an hourly 
                  rate of <strong>$165.00/hour plus hst</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 