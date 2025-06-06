'use client';

import { useState, useEffect } from 'react';
import { updateCssVariable, getCssVariablesFromDb } from '@/app/admin/actions';
import TypographySettings from './TypographySettings';
import ColorPaletteSettings from './ColorPaletteSettings';
import SaveButton from './SaveButton';
import LivePreview from './LivePreview';

interface PreviewColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  textMuted: string;
}

export default function StyleSettings() {
  const [previewFont, setPreviewFont] = useState('Quicksand');
  const [previewColors, setPreviewColors] = useState<PreviewColors>({
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

  if (isLoadingInitial) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 mx-auto mb-4" style={{ borderColor: 'var(--color-primary)' }}></div>
          <p style={{ color: 'var(--color-text-muted)' }}>Loading current styles from database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls Panel */}
      <div className="space-y-6">
        <TypographySettings 
          previewFont={previewFont} 
          onFontChange={setPreviewFont} 
        />
        
        <ColorPaletteSettings 
          previewColors={previewColors} 
          onColorsChange={setPreviewColors} 
        />
        
        <SaveButton 
          onSave={handleSave}
          isLoading={isLoading}
          saveStatus={saveStatus}
        />
      </div>

      {/* Live Preview Panel */}
      <LivePreview />
    </div>
  );
} 