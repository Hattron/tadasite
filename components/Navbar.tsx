import Link from 'next/link';
import { imagekitConfig } from '@/lib/imagekit';

export default function Navbar() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300"
      style={{
        backgroundColor: 'var(--color-background, #ffffff)',
        borderBottomColor: 'var(--color-text-muted, #6b7280)/.2',
      }}
    >
      <div 
        className="max-w-7xl mx-auto flex items-center justify-between"
        style={{
          padding: 'var(--spacing-sm, 0.5rem) var(--spacing-xl, 2rem)',
        }}
      >
        <Link 
          href="/"
          className="transition-colors hover:opacity-80"
        >
          <img 
            src={`${imagekitConfig.urlEndpoint}/tada/Assets/logosimple.png?tr=h-60,q-90`}
            alt="Tada Interior Design"
            className="h-15"
            style={{ height: '3.75rem' }}
          />
        </Link>
        
        <div 
          className="flex items-center"
          style={{ gap: 'var(--spacing-xl, 2rem)' }}
        >
          <Link 
            href="/about"
            className="font-medium transition-colors hover:opacity-70"
            style={{ 
              color: 'var(--color-text, #1f2937)',
              fontFamily: 'var(--font-primary, Quicksand, sans-serif)',
            }}
          >
            About
          </Link>
          <Link 
            href="/gallery"
            className="font-medium transition-colors hover:opacity-70"
            style={{ 
              color: 'var(--color-text, #1f2937)',
              fontFamily: 'var(--font-primary, Quicksand, sans-serif)',
            }}
          >
            Gallery
          </Link>
          <Link 
            href="/contact"
            className="font-medium transition-colors hover:opacity-70"
            style={{ 
              color: 'var(--color-text, #1f2937)',
              fontFamily: 'var(--font-primary, Quicksand, sans-serif)',
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 