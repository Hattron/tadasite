interface Testimonial {
  quote: string;
  name: string;
  title?: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "TaDa! Interiors was there from day one, all the way to completion. Joanna took the time to ensure that my living spaces that have truly enhanced the value of my home. Now that my first renovation project is done, I'm looking to start another one with TaDa! Interiors.",
    name: "Marina",
    location: "Kanata"
  },
  {
    quote: "Maureen has done several decorating and sewing projects for my business. She is very professional, creative, and pleasant to deal with and the results are always on time, on budget and exceed my expectations. I would not hesitate to recommend TaDa! Interior Design.",
    name: "Mike Traub",
    title: "Vice President, Riverstone Retirement Community",
    location: "Ottawa"
  },
  {
    quote: "I want you to know how pleased I am with the outstanding service your company has provided me. I couldn't let our business relationship come to an end without telling you how much I've enjoyed your friendly service. It's been a pleasure to work with people who knows the meaning of creativity, efficiency and dedication. I have always been able to rely on your flexibility and courteous service. Thank you again for making my home a 'beautiful home'",
    name: "Anna",
    location: "Orleans"
  }
];

export default function Testimonials() {
  return (
    <section 
      className="py-20 px-8" 
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-primary)'
            }}
          >
            Testimonials
          </h2>
          
          {/* Decorative line */}
          <div className="flex justify-center mb-6">
            <div 
              className="w-16 h-0.5"
              style={{ backgroundColor: 'var(--color-secondary)' }}
            ></div>
          </div>
          
          <p 
            className="text-lg max-w-3xl mx-auto"
            style={{ 
              color: 'var(--color-text)',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Hear what our clients have to say about working with TaDa! Interior Design.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative rounded-2xl shadow-sm border p-8 group hover:shadow-md transition-shadow duration-300 flex flex-col min-h-[400px]"
              style={{ 
                backgroundColor: 'white',
                borderColor: 'var(--color-text-muted)',
                borderWidth: '1px'
              }}
            >
              {/* Quote text */}
              <blockquote 
                className="text-base leading-relaxed italic relative z-10 flex-grow"
                style={{ 
                  color: 'var(--color-text)',
                  fontFamily: 'var(--font-secondary)'
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author info - positioned at bottom */}
              <div className="relative z-10 mt-6">
                <div 
                  className="font-semibold text-lg mb-1"
                  style={{ 
                    color: 'var(--color-text)',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  {testimonial.name}
                  {testimonial.title && (
                    <span 
                      className="font-normal text-sm block"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {testimonial.title}
                    </span>
                  )}
                </div>
                <div 
                  className="text-sm"
                  style={{ 
                    color: 'var(--color-text-muted)',
                    fontFamily: 'var(--font-secondary)'
                  }}
                >
                  {testimonial.location}
                </div>
              </div>

              {/* Large decorative quote mark - bottom right */}
              <div className="absolute bottom-4 right-6 opacity-20 text-8xl leading-none" style={{ color: 'var(--color-secondary)' }}>
                <span style={{ fontFamily: 'serif' }}>&rdquo;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 