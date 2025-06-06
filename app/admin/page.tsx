'use client';

import { useState, useEffect } from 'react';
import { updateCssVariable, getCssVariablesFromDb } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const googleFonts = [
  'Inter',
  'Quicksand',
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Poppins',
  'Source Sans Pro',
  'Nunito',
  'Playfair Display',
];

export default function AdminPage() {
  const [previewFont, setPreviewFont] = useState('Quicksand');
  const [previewColors, setPreviewColors] = useState({
    primary: '#6366f1',
    secondary: '#06b6d4',
    accent: '#f59e0b',
    background: '#ffffff',
    text: '#1f2937',
    textMuted: '#6b7280',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [saveStatus, setSaveStatus] = useState<string>('');

  useEffect(() => {
    // Load current variables from database
    const loadDatabaseValues = async () => {
      try {
        const dbVariables = await getCssVariablesFromDb();
        
        // Extract font from database
        if (dbVariables['--font-primary']) {
          const fontName = dbVariables['--font-primary'].split(',')[0].replace(/['"]/g, '').trim();
          setPreviewFont(fontName);
        }
        
        // Extract colors from database
        setPreviewColors(prev => ({
          primary: dbVariables['--color-primary'] || prev.primary,
          secondary: dbVariables['--color-secondary'] || prev.secondary,
          accent: dbVariables['--color-accent'] || prev.accent,
          background: dbVariables['--color-background'] || prev.background,
          text: dbVariables['--color-text'] || prev.text,
          textMuted: dbVariables['--color-text-muted'] || prev.textMuted,
        }));
        
      } catch (error) {
        console.error('Failed to load database values, using defaults:', error);
        // Fallback to CSS computed values if database fails
        const root = document.documentElement;
        const currentFont = getComputedStyle(root).getPropertyValue('--font-primary').trim();
        
        if (currentFont) {
          const fontName = currentFont.split(',')[0].replace(/['"]/g, '');
          setPreviewFont(fontName);
        }
        
        setPreviewColors(prev => ({
          ...prev,
          primary: getComputedStyle(root).getPropertyValue('--color-primary').trim() || prev.primary,
          secondary: getComputedStyle(root).getPropertyValue('--color-secondary').trim() || prev.secondary,
          accent: getComputedStyle(root).getPropertyValue('--color-accent').trim() || prev.accent,
          background: getComputedStyle(root).getPropertyValue('--color-background').trim() || prev.background,
          text: getComputedStyle(root).getPropertyValue('--color-text').trim() || prev.text,
          textMuted: getComputedStyle(root).getPropertyValue('--color-text-muted').trim() || prev.textMuted,
        }));
      } finally {
        setIsLoadingInitial(false);
      }
    };

    loadDatabaseValues();
  }, []);

  useEffect(() => {
    // Apply live preview changes
    const root = document.documentElement;
    root.style.setProperty('--font-primary', `${previewFont}, sans-serif`);
    root.style.setProperty('--color-primary', previewColors.primary);
    root.style.setProperty('--color-secondary', previewColors.secondary);
    root.style.setProperty('--color-accent', previewColors.accent);
    root.style.setProperty('--color-background', previewColors.background);
    root.style.setProperty('--color-text', previewColors.text);
    root.style.setProperty('--color-text-muted', previewColors.textMuted);

    // Load Google Font dynamically
    const existingLink = document.querySelector(`link[href*="${previewFont}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.href = `https://fonts.googleapis.com/css2?family=${previewFont.replace(' ', '+')}:wght@300;400;500;600;700&display=swap`;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, [previewFont, previewColors]);

  const handleSave = async () => {
    setIsLoading(true);
    setSaveStatus('Saving...');
    
    try {
      const updates = [
        { name: '--font-primary', value: `${previewFont}, sans-serif` },
        { name: '--color-primary', value: previewColors.primary },
        { name: '--color-secondary', value: previewColors.secondary },
        { name: '--color-accent', value: previewColors.accent },
        { name: '--color-background', value: previewColors.background },
        { name: '--color-text', value: previewColors.text },
        { name: '--color-text-muted', value: previewColors.textMuted },
      ];

      for (const update of updates) {
        await updateCssVariable(update.name, update.value);
      }

      setSaveStatus('✅ Saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('❌ Error saving changes');
      console.error('Save error:', error);
      setTimeout(() => setSaveStatus(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen p-8"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
        fontFamily: 'var(--font-primary)',
      }}
    >
                <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 
            className="text-4xl font-bold mb-2"
            style={{ color: 'var(--color-primary)' }}
          >
            Admin Panel
          </h1>
          <p 
            className="text-lg"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Manage site settings and customization
          </p>
          <Separator className="mt-6" />
        </div>

        <Tabs defaultValue="styles" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="styles">Style Settings</TabsTrigger>
            <TabsTrigger value="gallery">Gallery Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="styles" className="mt-6">
            {isLoadingInitial ? (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--color-primary)' }}></div>
                  <p style={{ color: 'var(--color-text-muted)' }}>Loading current styles from database...</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Typography Card */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: 'var(--color-primary)' }}>
                  Typography Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="font-select">Primary Font</Label>
                  <Select value={previewFont} onValueChange={setPreviewFont}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {googleFonts.map(font => (
                        <SelectItem key={font} value={font}>
                          {font}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Colors Card */}
            <Card>
              <CardHeader>
                <CardTitle style={{ color: 'var(--color-secondary)' }}>
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="color-primary">Primary Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.primary}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, primary: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.primary}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, primary: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color-secondary">Secondary Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.secondary}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, secondary: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.secondary}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, secondary: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color-accent">Accent Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.accent}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, accent: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.accent}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, accent: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color-background">Background</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.background}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, background: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.background}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, background: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color-text">Text Color</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.text}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, text: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.text}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, text: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color-text-muted">Muted Text</Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="color"
                        value={previewColors.textMuted}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, textMuted: e.target.value }))}
                        className="w-12 h-10 p-1 rounded cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={previewColors.textMuted}
                        onChange={(e) => setPreviewColors(prev => ({ ...prev, textMuted: e.target.value }))}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <Card>
              <CardContent className="pt-6">
                <Button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full"
                  size="lg"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                  }}
                >
                  {isLoading ? 'Saving Changes...' : 'Save to Database'}
                </Button>
                
                {saveStatus && (
                  <div className="text-center mt-3">
                    <span className="text-sm font-medium">{saveStatus}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Live Preview Panel */}
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
        </div>
            )}
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Gallery Controls */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: 'var(--color-primary)' }}>
                      Gallery Configuration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: 'var(--color-text-muted)' }}>
                      Gallery settings will be available here. Configure image uploads, 
                      layout options, and display preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: 'var(--color-secondary)' }}>
                      Upload Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Maximum File Size</Label>
                      <Input placeholder="5MB" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Allowed Formats</Label>
                      <Input placeholder="JPG, PNG, WebP" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Auto-resize Images</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Gallery Preview */}
              <Card>
                <CardHeader>
                  <CardTitle style={{ color: 'var(--color-accent)' }}>
                    Gallery Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div 
                      className="w-full h-48 rounded-lg border-2 border-dashed flex items-center justify-center"
                      style={{ borderColor: 'var(--color-text-muted)' }}
                    >
                      <div className="text-center">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                          Gallery preview will appear here
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold" style={{ color: 'var(--color-text)' }}>
                        Coming Soon Features:
                      </h4>
                      <ul 
                        className="text-sm space-y-1"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        <li>• Image upload and management</li>
                        <li>• Gallery layout options</li>
                        <li>• Category organization</li>
                        <li>• Lightbox settings</li>
                        <li>• SEO optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 