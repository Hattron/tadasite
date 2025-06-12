'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
  'Oswald',
  'Raleway',
  'Ubuntu',
  'Merriweather',
  'PT Sans',
];

interface TypographySettingsProps {
  previewHeaderFont: string;
  previewBodyFont: string;
  onHeaderFontChange: (font: string) => void;
  onBodyFontChange: (font: string) => void;
}

export default function TypographySettings({ 
  previewHeaderFont, 
  previewBodyFont,
  onHeaderFontChange, 
  onBodyFontChange 
}: TypographySettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ color: 'var(--color-primary)' }}>
          Typography Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Header/Title Font Selection */}
        <div className="space-y-2">
          <Label htmlFor="header-font-select">Headers & Titles Font</Label>
          <Select value={previewHeaderFont} onValueChange={onHeaderFontChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a font for headers" />
            </SelectTrigger>
            <SelectContent>
              {googleFonts.map(font => (
                <SelectItem key={font} value={font}>
                  <span style={{ fontFamily: font }}>{font}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Used for page titles, section headings, and navigation
          </p>
        </div>

        {/* Body Text Font Selection */}
        <div className="space-y-2">
          <Label htmlFor="body-font-select">Body Text & Paragraphs Font</Label>
          <Select value={previewBodyFont} onValueChange={onBodyFontChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a font for body text" />
            </SelectTrigger>
            <SelectContent>
              {googleFonts.map(font => (
                <SelectItem key={font} value={font}>
                  <span style={{ fontFamily: font }}>{font}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Used for paragraphs, descriptions, and general content
          </p>
        </div>
      </CardContent>
    </Card>
  );
} 