'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

const serviceItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function Services() {
  const serviceCategories = [
    {
      title: 'Design & Selection',
      icon: 'mdi:palette-outline',
      services: [
        { name: 'Paint consultations', icon: 'mdi:brush' },
        { name: 'Furniture layout and selection', icon: 'mdi:sofa' },
        { name: 'Materials and finishes selections', icon: 'mdi:texture' },
        { name: 'New Home Finish selections', icon: 'mdi:home-outline' },
        { name: 'Home Staging', icon: 'mdi:camera' }
      ]
    },
    {
      title: 'Planning & Management',
      icon: 'mdi:floor-plan',
      services: [
        { name: 'Space planning and floor plans', icon: 'mdi:floor-plan' },
        { name: 'Kitchen and bath remodels', icon: 'mdi:silverware-fork-knife' },
        { name: 'Partial/ full renovations', icon: 'mdi:wrench' },
        { name: 'Project Management', icon: 'mdi:clipboard-check' },
        { name: '3D drawings and Mood Boards', icon: 'mdi:cube-outline' }
      ]
    },
    {
      title: 'Custom & Decor',
      icon: 'mdi:lightbulb-outline',
      services: [
        { name: 'Custom Millwork and furniture design', icon: 'mdi:saw-blade' },
        { name: 'Lighting Plans and selections', icon: 'mdi:lightbulb' },
        { name: 'Window treatments', icon: 'mdi:blinds' },
        { name: 'Decorative wall treatments', icon: 'mdi:wall' },
        { name: 'Art and accessories', icon: 'mdi:image-frame' }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-center mb-6 sm:mb-8">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon 
                    icon={category.icon} 
                    className="text-2xl sm:text-3xl text-white" 
                  />
                </motion.div>
                <h3 
                  className="text-xl sm:text-2xl font-bold"
                  style={{ 
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  {category.title}
                </h3>
              </div>
              
              <motion.ul 
                className="space-y-3 sm:space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.li 
                    key={serviceIndex}
                    className="flex items-start gap-2 sm:gap-3"
                    variants={serviceItemVariants}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Icon 
                      icon={service.icon} 
                      className="text-lg sm:text-xl mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-secondary)' }}
                    />
                    <span 
                      className="text-sm sm:text-base leading-relaxed"
                      style={{ 
                        color: 'var(--color-text)',
                        fontFamily: 'var(--font-secondary)'
                      }}
                    >
                      {service.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              fontFamily: 'var(--font-secondary)'
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 