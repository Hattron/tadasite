import { Icon } from '@iconify/react';

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
    <section className="py-20 px-8" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl font-bold text-center mb-16"
          style={{ 
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-primary)'
          }}
        >
          Services
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
                  <Icon 
                    icon={category.icon} 
                    className="text-3xl text-white" 
                  />
                </div>
                <h3 
                  className="text-2xl font-bold"
                  style={{ 
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-primary)'
                  }}
                >
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex}
                    className="flex items-start gap-3"
                  >
                    <Icon 
                      icon={service.icon} 
                      className="text-xl mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-secondary)' }}
                    />
                    <span 
                      className="text-base leading-relaxed"
                      style={{ 
                        color: 'var(--color-text)',
                        fontFamily: 'var(--font-secondary)'
                      }}
                    >
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="mailto:hello@tadainteriordesign.com"
            className="inline-flex items-center gap-2 rounded-full transition-all font-medium px-8 py-4 text-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'white',
              fontFamily: 'var(--font-secondary)'
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
} 