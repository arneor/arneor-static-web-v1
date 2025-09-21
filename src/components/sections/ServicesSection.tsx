import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Globe,
  Code2,
  Zap,
  Palette,
  BarChart,
  Shield,
  ShoppingCart,
  Search,
  Cpu,
  Video,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  // Group services into categories
  const serviceCategories = [
    {
      name: 'Development & Technology',
      services: [
        {
          icon: Globe,
          title: 'Web Development',
          description:
            'Custom websites and web applications built with modern technologies for optimal performance.',
          features: [
            'Responsive Design',
            'E-commerce Solutions',
            'CMS Integration',
            'Performance Optimization',
          ],
          highlight: 'Core Service',
        },
        {
          icon: Smartphone,
          title: 'Mobile App Development',
          description:
            'Cross-platform mobile applications using Flutter for iOS and Android platforms.',
          features: [
            'Flutter Development',
            'iOS & Android',
            'Real-time Features',
            'Offline Capabilities',
          ],
          highlight: 'Expertise',
        },
        {
          icon: Cpu,
          title: 'AI & Machine Learning',
          description:
            'Intelligent solutions leveraging artificial intelligence and machine learning technologies.',
          features: [
            'Predictive Analytics',
            'Natural Language Processing',
            'Computer Vision',
            'Custom AI Models',
          ],
          highlight: 'Innovation',
        },
      ],
    },
    {
      name: 'Digital Marketing & Strategy',
      services: [
        {
          icon: Search,
          title: 'SEO & Digital Marketing',
          description:
            'Comprehensive digital marketing strategies to increase visibility and drive growth.',
          features: [
            'Search Engine Optimization',
            'Content Marketing',
            'Social Media Management',
            'PPC Campaigns',
          ],
          highlight: null,
        },
        {
          icon: BarChart,
          title: 'Data Analytics',
          description:
            'Actionable insights from your data to make informed business decisions.',
          features: [
            'Business Intelligence',
            'Data Visualization',
            'Performance Tracking',
            'Market Analysis',
          ],
          highlight: null,
        },
        {
          icon: ShoppingCart,
          title: 'E-commerce Solutions',
          description:
            'Complete online store solutions with payment integration and inventory management.',
          features: [
            'Platform Development',
            'Payment Gateway Integration',
            'Inventory Management',
            'Conversion Optimization',
          ],
          highlight: null,
        },
      ],
    },
    {
      name: 'Design & Branding',
      services: [
        {
          icon: Palette,
          title: 'UI/UX Design',
          description:
            'User-centered design solutions that enhance engagement and improve conversion rates.',
          features: [
            'User Research',
            'Prototyping',
            'Interface Design',
            'Usability Testing',
          ],
          highlight: null,
        },
        {
          icon: Video,
          title: 'Brand & Video Production',
          description:
            'Complete branding solutions and professional video content for your business.',
          features: [
            'Brand Identity',
            'Graphic Design',
            'Motion Graphics',
            'Video Production',
          ],
          highlight: null,
        },
        {
          icon: Shield,
          title: 'Cybersecurity',
          description:
            'Protect your digital assets with our comprehensive security solutions and best practices.',
          features: [
            'Security Audits',
            'Data Protection',
            'Threat Monitoring',
            'Compliance Management',
          ],
          highlight: null,
        },
      ],
    },
  ];

  return (
    <section className='py-20'>
      <div className='container'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Our Services</h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Comprehensive 360° technology solutions to transform your business
            and drive growth.
          </p>
        </div>

        {/* Service Categories */}
        <div className='space-y-20'>
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className='text-center mb-12'>
                <h3 className='text-2xl font-bold text-primary'>
                  {category.name}
                </h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {category.services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <Card
                      key={index}
                      className='hover:shadow-lg transition-all duration-300 group border-border'>
                      <CardHeader>
                        <div className='flex items-start justify-between'>
                          <div className='p-3 rounded-lg bg-primary/10 w-fit'>
                            <IconComponent className='h-6 w-6 text-primary' />
                          </div>
                          {service.highlight && (
                            <Badge
                              variant='secondary'
                              className='bg-accent/10 text-accent'>
                              {service.highlight}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className='group-hover:text-primary transition-colors'>
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className='space-y-2'>
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className='flex items-center gap-2 text-sm'>
                              <div className='w-1.5 h-1.5 rounded-full bg-primary' />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className='bg-gradient-hero rounded-2xl p-8 md:p-12 mt-20'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Our Technology Stack
            </h3>
            <p className='text-muted-foreground'>
              We use cutting-edge technologies to build robust, scalable, and
              efficient solutions.
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
            {[
              { name: 'Flutter', category: 'Mobile' },
              { name: 'React', category: 'Frontend' },
              { name: 'Node.js', category: 'Backend' },
              { name: 'Firebase', category: 'Database' },
              { name: 'TypeScript', category: 'Language' },
              { name: 'Tailwind CSS', category: 'Styling' },
              { name: 'MongoDB', category: 'Database' },
              { name: 'AWS', category: 'Cloud' },
              { name: 'Python', category: 'AI/ML' },
              { name: 'TensorFlow', category: 'AI/ML' },
              { name: 'Figma', category: 'Design' },
              { name: 'Docker', category: 'DevOps' },
            ].map((tech, index) => (
              <div
                key={index}
                className='text-center'>
                <div className='bg-white rounded-lg p-4 shadow-sm mb-2'>
                  <Code2 className='h-8 w-8 text-primary mx-auto' />
                </div>
                <div className='font-medium text-sm'>{tech.name}</div>
                <div className='text-xs text-muted-foreground'>
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='text-center mt-12'>
          <Button
            variant='brand'
            size='lg'
            asChild>
            <Link
              to='/services'
              className='group'>
              Explore All Services
              <Zap className='ml-2 h-4 w-4 group-hover:scale-110 transition-transform' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
