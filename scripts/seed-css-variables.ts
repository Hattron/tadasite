import { db } from '../lib/db';
import { tadaCssVariables } from '../lib/schema';
import * as dotenv from 'dotenv';

dotenv.config();

const seedData = [
  {
    id: 'font-primary',
    name: '--font-primary',
    value: 'Quicksand, sans-serif',
    category: 'typography',
    description: 'Primary font family',
  },
  {
    id: 'font-secondary',
    name: '--font-secondary',
    value: 'Inter, sans-serif',
    category: 'typography',
    description: 'Secondary font family',
  },
  {
    id: 'color-primary',
    name: '--color-primary',
    value: '#6366f1',
    category: 'colors',
    description: 'Primary brand color',
  },
  {
    id: 'color-secondary',
    name: '--color-secondary',
    value: '#06b6d4',
    category: 'colors',
    description: 'Secondary brand color',
  },
  {
    id: 'color-accent',
    name: '--color-accent',
    value: '#f59e0b',
    category: 'colors',
    description: 'Accent color for highlights',
  },
  {
    id: 'color-background',
    name: '--color-background',
    value: '#ffffff',
    category: 'colors',
    description: 'Main background color',
  },
  {
    id: 'color-text',
    name: '--color-text',
    value: '#1f2937',
    category: 'colors',
    description: 'Primary text color',
  },
  {
    id: 'color-text-muted',
    name: '--color-text-muted',
    value: '#6b7280',
    category: 'colors',
    description: 'Muted text color',
  },
  {
    id: 'spacing-xs',
    name: '--spacing-xs',
    value: '0.25rem',
    category: 'spacing',
    description: 'Extra small spacing',
  },
  {
    id: 'spacing-sm',
    name: '--spacing-sm',
    value: '0.5rem',
    category: 'spacing',
    description: 'Small spacing',
  },
  {
    id: 'spacing-md',
    name: '--spacing-md',
    value: '1rem',
    category: 'spacing',
    description: 'Medium spacing',
  },
  {
    id: 'spacing-lg',
    name: '--spacing-lg',
    value: '1.5rem',
    category: 'spacing',
    description: 'Large spacing',
  },
  {
    id: 'spacing-xl',
    name: '--spacing-xl',
    value: '2rem',
    category: 'spacing',
    description: 'Extra large spacing',
  },
  {
    id: 'spacing-2xl',
    name: '--spacing-2xl',
    value: '3rem',
    category: 'spacing',
    description: 'Double extra large spacing',
  },
  {
    id: 'spacing-3xl',
    name: '--spacing-3xl',
    value: '4rem',
    category: 'spacing',
    description: 'Triple extra large spacing',
  },
  {
    id: 'font-size-base',
    name: '--font-size-base',
    value: '1rem',
    category: 'typography',
    description: 'Base font size',
  },
  {
    id: 'font-size-lg',
    name: '--font-size-lg',
    value: '1.125rem',
    category: 'typography',
    description: 'Large font size',
  },
  {
    id: 'font-size-xl',
    name: '--font-size-xl',
    value: '1.25rem',
    category: 'typography',
    description: 'Extra large font size',
  },
  {
    id: 'font-size-2xl',
    name: '--font-size-2xl',
    value: '1.5rem',
    category: 'typography',
    description: 'Double extra large font size',
  },
  {
    id: 'font-size-3xl',
    name: '--font-size-3xl',
    value: '1.875rem',
    category: 'typography',
    description: 'Triple extra large font size',
  },
  {
    id: 'font-size-4xl',
    name: '--font-size-4xl',
    value: '2.25rem',
    category: 'typography',
    description: 'Quadruple extra large font size',
  },
  {
    id: 'font-size-5xl',
    name: '--font-size-5xl',
    value: '3rem',
    category: 'typography',
    description: 'Quintuple extra large font size',
  },
  {
    id: 'image-max-width',
    name: '--image-max-width',
    value: '32rem',
    category: 'sizing',
    description: 'Maximum width for images',
  },
  {
    id: 'content-max-width',
    name: '--content-max-width',
    value: '42rem',
    category: 'sizing',
    description: 'Maximum width for content sections',
  },
  {
    id: 'container-max-width',
    name: '--container-max-width',
    value: '80rem',
    category: 'sizing',
    description: 'Maximum width for main containers',
  },
];

async function seedCssVariables() {
  try {
    console.log('🌱 Seeding CSS variables...');
    
    for (const variable of seedData) {
      await db.insert(tadaCssVariables).values(variable).onConflictDoNothing();
    }
    
    console.log('✅ CSS variables seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding CSS variables:', error);
  }
}

seedCssVariables(); 