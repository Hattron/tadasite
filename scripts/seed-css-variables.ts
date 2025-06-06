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