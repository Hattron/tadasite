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
  '--spacing-2xl': '3rem',
  '--spacing-3xl': '4rem',
  // Typography sizing variables
  '--font-size-base': '1rem',
  '--font-size-lg': '1.125rem',
  '--font-size-xl': '1.25rem',
  '--font-size-2xl': '1.5rem',
  '--font-size-3xl': '1.875rem',
  '--font-size-4xl': '2.25rem',
  '--font-size-5xl': '3rem',
  // Component sizing variables
  '--image-max-width': '32rem',
  '--content-max-width': '42rem',
  '--container-max-width': '80rem',
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