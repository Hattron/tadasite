'use client';

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Paintbrush, Sofa, Ruler, Home, Layers, Layout, Wrench, RefreshCw, ClipboardCheck, Camera, Hammer, Lightbulb, Blinds, Brush, Image as ArtIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const serviceGroups = [
  {
    title: 'Design & Selection',
    icon: <Paintbrush className="text-primary" />,
    services: [
      { icon: <Paintbrush />, text: 'Paint consultations' },
      { icon: <Sofa />, text: 'Furniture layout and selection' },
      { icon: <Layers />, text: 'Materials and finishes selections' },
      { icon: <Home />, text: 'New Home Finish selections' },
      { icon: <Camera />, text: 'Home Staging' },
    ],
  },
  {
    title: 'Planning & Management',
    icon: <Layout className="text-primary" />,
    services: [
      { icon: <Ruler />, text: 'Space planning and floor plans' },
      { icon: <Wrench />, text: 'Kitchen and bath remodels' },
      { icon: <RefreshCw />, text: 'Partial/ full renovations' },
      { icon: <ClipboardCheck />, text: 'Project Management' },
      { icon: <Camera />, text: '3D drawings and Mood Boards' },
    ],
  },
  {
    title: 'Custom & Decor',
    icon: <Hammer className="text-primary" />,
    services: [
      { icon: <Hammer />, text: 'Custom Millwork and furniture design' },
      { icon: <Lightbulb />, text: 'Lighting Plans and selections' },
      { icon: <Blinds />, text: 'Window treatments' },
      { icon: <Brush />, text: 'Decorative wall treatments' },
      { icon: <ArtIcon />, text: 'Art and accessories' },
    ],
  },
];

export default function Services() {
  return (
    <section 
      className="py-14 px-2" 
      style={{ 
        background: 'var(--color-background)', 
        textAlign: 'center' 
      }} 
      id="services"
    >
      <h2
        className="mb-10 text-4xl font-bold tracking-tight"
        style={{ 
          fontFamily: 'var(--font-primary)',
          color: 'var(--color-primary)',
          marginBottom: 'var(--spacing-2xl, 2.5rem)'
        }}
      >
        Services
      </h2>
      <div 
        className="grid gap-6 w-full max-w-7xl mx-auto px-4" 
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
      >
        {serviceGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
            className="relative rounded-3xl shadow-md p-6 sm:p-8 flex flex-col h-full justify-between border overflow-hidden"
            style={{ 
              background: 'var(--color-card, white)', 
              borderColor: 'var(--color-primary)',
              borderRadius: 'var(--radius-3xl, 1.5rem)',
              padding: 'var(--spacing-xl, 2rem)',
              boxShadow: 'var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))',
              transition: 'var(--transition-normal, all 0.3s ease)'
            }}
          >
            <div className="flex flex-col items-center mb-4">
              <span 
                className="mb-2" 
                style={{ 
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-sm, 0.5rem)'
                }}
              >
                {group.icon}
              </span>
              <span
                className="text-2xl font-semibold mb-2"
                style={{ 
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--text-2xl, 1.5rem)',
                  fontWeight: 'var(--font-weight-semibold, 600)',
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--spacing-sm, 0.5rem)'
                }}
              >
                {group.title}
              </span>
            </div>
            <div className="flex-1">
              <ul className="space-y-3">
                {group.services.map((service, j) => (
                  <li 
                    key={service.text} 
                    className="flex items-center gap-3 text-base" 
                    style={{ 
                      fontFamily: 'var(--font-secondary)', 
                      color: 'var(--color-text)',
                      fontSize: 'var(--text-base, 1rem)',
                      gap: 'var(--spacing-md, 0.75rem)'
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>
                      {service.icon}
                    </span>
                    <span>{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/contact">
          <Button 
            size="lg" 
            style={{
              fontFamily: 'var(--font-secondary)',
              fontSize: 'var(--button-font-size, 1rem)',
              fontWeight: 'var(--button-font-weight, 500)',
              padding: 'var(--button-padding, 0.75rem 1.5rem)',
              borderRadius: 'var(--button-radius, 0.5rem)',
              background: 'var(--color-primary)',
              color: 'white',
              transition: 'var(--transition-normal, all 0.3s ease)',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-primary-hover, var(--color-primary))';
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)';
              e.currentTarget.style.opacity = '1';
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
} 