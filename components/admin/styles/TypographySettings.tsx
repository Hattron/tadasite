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
];

interface TypographySettingsProps {
  previewFont: string;
  onFontChange: (font: string) => void;
}

export default function TypographySettings({ previewFont, onFontChange }: TypographySettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ color: 'var(--color-primary)' }}>
          Typography Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="font-select">Primary Font</Label>
          <Select value={previewFont} onValueChange={onFontChange}>
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
  );
} 