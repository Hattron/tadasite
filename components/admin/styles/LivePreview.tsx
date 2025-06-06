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
        {/* Sample Typography */}
        <div className="space-y-4">
          <h3 
            className="text-3xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            Sample Heading
          </h3>
          <p 
            className="text-lg leading-relaxed"
            style={{ color: 'var(--color-text)' }}
          >
            This is how your content will look with the selected font and colors. 
            The typography should feel readable and the colors should work well together.
          </p>
          <p 
            className="text-sm"
            style={{ color: 'var(--color-text-muted)' }}
          >
            This is muted text that provides secondary information.
          </p>
        </div>

        <Separator />

        {/* Sample Buttons */}
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

        <Separator />

        {/* Sample Review Card */}
        <Card style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-2">Customer Review</h4>
            <p className="text-sm opacity-90 mb-3">
              &ldquo;Ta Da Interior Design transformed our space completely. 
              The attention to detail and creative vision exceeded our expectations. 
              Highly recommend their services!&rdquo;
            </p>
            <div className="text-sm opacity-75">
              - Sarah Johnson, Happy Client
            </div>
          </CardContent>
        </Card>

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