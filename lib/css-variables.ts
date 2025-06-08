import { db } from './db';
import { tadaCssVariables } from './schema';
import { eq } from 'drizzle-orm';

// Default CSS variables that will be used if database is unavailable
export const defaultCssVariables = {
  '--font-primary': 'Quicksand, sans-serif',
  '--font-secondary': 'Inter, sans-serif',
  '--color-primary': '#3b82f6',
  '--color-secondary': '#10b981',
  '--color-accent': '#f59e0b',
  '--color-background': '#ffffff',
  '--color-text': '#1f2937',
  '--color-text-muted': '#6b7280',
  '--spacing-xs': '0.25rem',
  '--spacing-sm': '0.5rem',
  '--spacing-md': '1rem',
  '--spacing-lg': '1.5rem',
  '--spacing-xl': '2rem',
  // Frame styling variables
  '--frame-background': 'rgba(255, 255, 255, 0.95)',
  '--frame-background-dark': 'rgba(0, 0, 0, 0.85)',
  '--frame-border': '2px solid rgba(255, 255, 255, 0.3)',
  '--frame-border-radius': '1rem',
  '--frame-shadow': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  '--frame-padding': '2rem',
  '--frame-padding-sm': '1.5rem',
};

export async function getCssVariables(): Promise<Record<string, string>> {
  try {
    const variables = await db
      .select()
      .from(tadaCssVariables)
      .where(eq(tadaCssVariables.isActive, true));

    const cssVars: Record<string, string> = {};
    
    // Add database variables
    variables.forEach(variable => {
      cssVars[variable.name] = variable.value;
    });

    // Merge with defaults (database values take precedence)
    return { ...defaultCssVariables, ...cssVars };
  } catch (error) {
    console.error('Failed to load CSS variables from database, using defaults:', error);
    return defaultCssVariables;
  }
}

export function cssVariablesToString(variables: Record<string, string>): string {
  return Object.entries(variables)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
} 