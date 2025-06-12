'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function LivePreview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ color: 'var(--color-accent)' }}>
          Live Preview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Typography Demonstration */}
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-200">
            <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
              Headers & Titles (Primary Font)
            </p>
            <h1 
              className="text-4xl font-bold mb-2"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              Main Page Heading
            </h1>
            <h2 
              className="text-2xl font-semibold mb-1"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              Section Heading
            </h2>
            <h3 
              className="text-lg font-medium"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              Subsection Title
            </h3>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-2 border-dashed border-blue-200">
            <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wide">
              Body Text & Paragraphs (Secondary Font)
            </p>
            <p 
              className="text-lg leading-relaxed mb-3"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              This is how your main content will appear. The body text should be highly readable 
              and comfortable for extended reading. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit.
            </p>
            <p 
              className="text-base leading-relaxed mb-2"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              Regular paragraph text with standard spacing and line height. This demonstrates 
              how most of your content will look throughout the site.
            </p>
            <p 
              className="text-sm"
              style={{ 
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              This is smaller muted text used for captions, footnotes, and secondary information.
            </p>
          </div>
        </div>

        <Separator />

        {/* Sample Buttons */}
        <div>
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            Button Styles:
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button style={{ backgroundColor: 'var(--color-primary)' }}>
              Primary Button
            </Button>
            <Button style={{ backgroundColor: 'var(--color-secondary)' }}>
              Secondary Button
            </Button>
            <Button style={{ backgroundColor: 'var(--color-accent)' }}>
              Accent Button
            </Button>
          </div>
        </div>

        <Separator />

        {/* Sample Review Card */}
        <div 
          className="p-4 rounded-lg border"
          style={{ 
            backgroundColor: 'var(--color-background)',
            borderColor: 'var(--color-text-muted, #e5e7eb)'
          }}
        >
          <p className="text-sm font-medium mb-3" style={{ color: 'var(--color-text)' }}>
            Sample Content Card:
          </p>
          <blockquote className="border-l-4 pl-4" style={{ borderColor: 'var(--color-accent)' }}>
            <p 
              className="text-base italic mb-2"
              style={{ 
                color: 'var(--color-text)',
                fontFamily: 'var(--font-secondary)'
              }}
            >
              &ldquo;This is how testimonials and quoted content will appear with your selected typography and color scheme.&rdquo;
            </p>
            <footer 
              className="text-sm font-medium"
              style={{ 
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-primary)'
              }}
            >
              — Sample Author
            </footer>
          </blockquote>
        </div>

        {/* Color Swatches */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            className="p-4 rounded-lg text-center text-white text-sm font-medium"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Primary
          </div>
          <div 
            className="p-4 rounded-lg text-center text-white text-sm font-medium"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          >
            Secondary
          </div>
          <div 
            className="p-4 rounded-lg text-center text-white text-sm font-medium"
            style={{ backgroundColor: 'var(--color-accent)' }}
          >
            Accent
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 