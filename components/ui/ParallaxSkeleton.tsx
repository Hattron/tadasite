export default function ParallaxSkeleton() {
  return (
    <section 
      className="relative overflow-hidden"
      style={{
        height: '60vh',
        minHeight: '400px',
        backgroundColor: 'var(--color-background)',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text skeleton */}
            <div className="space-y-4">
              <div 
                className="h-8 rounded animate-pulse" 
                style={{ 
                  backgroundColor: 'var(--color-text-muted)',
                  opacity: 0.2,
                  width: '60%'
                }}
              />
              <div 
                className="h-4 rounded animate-pulse" 
                style={{ 
                  backgroundColor: 'var(--color-text-muted)',
                  opacity: 0.15,
                  width: '80%'
                }}
              />
              <div 
                className="h-4 rounded animate-pulse" 
                style={{ 
                  backgroundColor: 'var(--color-text-muted)',
                  opacity: 0.15,
                  width: '70%'
                }}
              />
            </div>
            
            {/* Image skeleton */}
            <div 
              className="h-64 rounded-lg animate-pulse" 
              style={{ 
                backgroundColor: 'var(--color-text-muted)',
                opacity: 0.1
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 