'use server';

import { db } from '@/lib/db';
import { tadaCssVariables } from '@/lib/schema';
import { eq } from 'drizzle-orm';

export async function getCssVariablesFromDb() {
  try {
    const variables = await db
      .select()
      .from(tadaCssVariables)
      .where(eq(tadaCssVariables.isActive, true));

    const cssVars: Record<string, string> = {};
    variables.forEach(variable => {
      cssVars[variable.name] = variable.value;
    });

    return cssVars;
  } catch (error) {
    console.error('Error fetching CSS variables:', error);
    return {};
  }
}

export async function updateCssVariable(name: string, value: string) {
  try {
    // Get the ID from the name (remove -- prefix and convert to kebab-case)
    const id = name.replace('--', '').replace(/-/g, '-');
    
    const result = await db
      .update(tadaCssVariables)
      .set({ 
        value: value,
        updatedAt: new Date()
      })
      .where(eq(tadaCssVariables.name, name))
      .returning();

    if (result.length === 0) {
      // If variable doesn't exist, create it
      await db.insert(tadaCssVariables).values({
        id: id,
        name: name,
        value: value,
        category: name.includes('font') ? 'typography' : 'colors',
        description: `Dynamic CSS variable: ${name}`,
        isActive: true,
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating CSS variable:', error);
    throw new Error('Failed to update CSS variable');
  }
} 