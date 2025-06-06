'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ColorPaletteSettingsProps {
  previewColors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textMuted: string;
  };
  onColorsChange: (colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    textMuted: string;
  }) => void;
}

export default function ColorPaletteSettings({ previewColors, onColorsChange }: ColorPaletteSettingsProps) {
  const handleColorChange = (colorKey: keyof typeof previewColors, value: string) => {
    onColorsChange({
      ...previewColors,
      [colorKey]: value,
    });
  };

  const colorFields = [
    { key: 'primary' as const, label: 'Primary Color' },
    { key: 'secondary' as const, label: 'Secondary Color' },
    { key: 'accent' as const, label: 'Accent Color' },
    { key: 'background' as const, label: 'Background' },
    { key: 'text' as const, label: 'Text Color' },
    { key: 'textMuted' as const, label: 'Muted Text' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle style={{ color: 'var(--color-secondary)' }}>
          Color Palette
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {colorFields.map(({ key, label }) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={`color-${key}`}>{label}</Label>
              <div className="flex gap-2 items-center">
                <Input
                  type="color"
                  value={previewColors[key]}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                  className="w-12 h-10 p-1 rounded cursor-pointer"
                />
                <Input
                  type="text"
                  value={previewColors[key]}
                  onChange={(e) => handleColorChange(key, e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 