import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Code,
  Shield,
  Zap,
  Users,
  Palette,
  Cpu,
  Wrench,
  TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  // Comprehensive service categories
  const serviceCategories = [
    {
      name: 'Web & Software Development',
      icon: Code,
      services: [
        {
          title: 'Website Development',
          description:
            'Custom websites built with modern technologies for optimal performance and user experience.',
          features: [
            'Responsive Design',
            'E-commerce Integration',
            'CMS Solutions',
            'SEO Optimization',
            'Performance Optimization',
            'Maintenance & Support',
          ],
          technologies: ['React', 'Next.js', 'WordPress', 'Tailwind CSS'],
          highlight: 'Core Service',
        },
        {
          title: 'Website Design (UI/UX)',
          description:
            'User-centered design solutions that enhance engagement and improve conversion rates.',
          features: [
            'User Research',
            'Wireframing & Prototyping',
            'Interface Design',
            'Usability Testing',
            'Design Systems',
            'Accessibility Compliance',
          ],
          technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
          highlight: 'Design Expertise',
        },
        {
          title: 'Software Development',
          description:
            'Custom software solutions tailored to your business needs and processes.',
          features: [
            'Enterprise Software',
            'Custom Applications',
            'System Integration',
            'API Development',
            'Quality Assurance',
            'Deployment & Maintenance',
          ],
          technologies: ['Node.js', 'Python', 'Java', 'C#', '.NET'],
          highlight: null,
        },
        {
          title: 'Database Design & System Architecture',
          description:
            'Robust database solutions and scalable system architectures designed for performance and growth.',
          features: [
            'Database Design & Modeling',
            'System Architecture Planning',
            'Scalability Solutions',
            'Data Security Implementation',
            'Performance Optimization',
            'Migration Strategies',
          ],
          technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS'],
          highlight: null,
        },
        {
          title: 'E-commerce Development',
          description:
            'Complete e-commerce solutions to grow your online business.',
          features: [
            'Platform Development',
            'Payment Integration',
            'Inventory Management',
            'Order Processing',
            'Customer Management',
            'Analytics & Reporting',
          ],
          technologies: [
            'Shopify',
            'WooCommerce',
            'Magento',
            'Custom Solutions',
          ],
          highlight: null,
        },
        {
          title: 'SaaS Product Development',
          description:
            'End-to-end development of scalable Software-as-a-Service applications.',
          features: [
            'Cloud Architecture',
            'Multi-tenant Solutions',
            'Subscription Management',
            'User Management',
            'Analytics Dashboard',
            'API Integration',
          ],
          technologies: ['React', 'Node.js', 'AWS', 'Firebase', 'Stripe'],
          highlight: 'Flagship Service',
        },
        {
          title: 'CRM & ERP Development',
          description:
            'Custom CRM and ERP systems to streamline your business operations.',
          features: [
            'Customer Management',
            'Sales Automation',
            'Inventory Control',
            'Financial Management',
            'Reporting & Analytics',
            'Integration Services',
          ],
          technologies: ['Salesforce', 'Odoo', 'Custom Solutions'],
          highlight: null,
        },
        {
          title: 'API Development & Integration',
          description:
            'Robust API solutions and third-party integrations for seamless operations.',
          features: [
            'RESTful API Development',
            'GraphQL Implementation',
            'Third-party Integrations',
            'API Documentation',
            'Security Implementation',
            'Performance Optimization',
          ],
          technologies: ['Node.js', 'Express', 'Python', 'Postman'],
          highlight: null,
        },
        {
          title: 'Performance Optimization',
          description:
            'Optimization services to improve speed and performance of your digital products.',
          features: [
            'Website Speed Optimization',
            'Mobile App Performance',
            'Database Optimization',
            'Server Configuration',
            'CDN Implementation',
            'Monitoring & Analytics',
          ],
          technologies: ['Lighthouse', 'WebPageTest', 'New Relic'],
          highlight: null,
        },
      ],
    },
    {
      name: 'Mobile Development',
      icon: Smartphone,
      services: [
        {
          title: 'Mobile App Development',
          description:
            'Cross-platform mobile applications using Flutter for superior performance.',
          features: [
            'iOS and Android Development',
            'Cross-platform Solutions',
            'Real-time Features',
            'Offline Functionality',
            'Push Notifications',
            'App Store Optimization',
          ],
          technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
          highlight: 'Core Expertise',
        },
        {
          title: 'Mobile App Maintenance & Support',
          description:
            'Ongoing maintenance, updates, and support for your mobile applications to ensure optimal performance.',
          features: [
            'Regular Updates & Patches',
            'Performance Monitoring',
            'Bug Fixes & Troubleshooting',
            'Security Updates',
            'User Feedback Implementation',
            'App Store Management',
          ],
          technologies: ['Flutter', 'Dart', 'Firebase', 'Analytics Tools'],
          highlight: null,
        },
      ],
    },
    {
      name: 'Emerging Technologies',
      icon: Cpu,
      services: [
        {
          title: 'AI & Machine Learning Solutions',
          description:
            'Intelligent solutions leveraging artificial intelligence and machine learning.',
          features: [
            'Predictive Analytics',
            'Natural Language Processing',
            'Computer Vision',
            'Custom AI Models',
            'Chatbot Development',
            'Recommendation Systems',
          ],
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
          highlight: 'Innovation',
        },
        {
          title: 'Blockchain & Web3 Development',
          description:
            'Decentralized solutions and blockchain applications for modern businesses.',
          features: [
            'Smart Contract Development',
            'DApp Creation',
            'Token Development',
            'Wallet Integration',
            'NFT Marketplaces',
            'DeFi Solutions',
          ],
          technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Truffle'],
          highlight: null,
        },
        {
          title: 'AR/VR Development',
          description:
            'Immersive augmented and virtual reality experiences for various industries.',
          features: [
            'AR Applications',
            'VR Experiences',
            '3D Modeling',
            'Interactive Content',
            'Spatial Computing',
            'Training Simulations',
          ],
          technologies: ['Unity', 'Unreal Engine', 'ARKit', 'ARCore'],
          highlight: null,
        },
        {
          title: 'IoT Solutions',
          description:
            'Internet of Things solutions connecting devices and systems for smarter operations.',
          features: [
            'IoT Device Development',
            'Sensor Integration',
            'Data Analytics',
            'Cloud Connectivity',
            'Edge Computing',
            'Security Implementation',
          ],
          technologies: [
            'Arduino',
            'Raspberry Pi',
            'AWS IoT',
            'Google Cloud IoT',
          ],
          highlight: null,
        },
      ],
    },
    {
      name: 'Digital Marketing & Strategy',
      icon: TrendingUp,
      services: [
        {
          title: 'SEO (Search Engine Optimization)',
          description:
            'Improve your online visibility and organic search rankings.',
          features: [
            'Keyword Research',
            'On-page Optimization',
            'Technical SEO',
            'Content Strategy',
            'Link Building',
            'Performance Tracking',
          ],
          technologies: ['Google Analytics', 'Ahrefs', 'SEMrush', 'Moz'],
          highlight: null,
        },
        {
          title: 'Digital Marketing',
          description:
            'Comprehensive digital marketing strategies to grow your business online.',
          features: [
            'Campaign Strategy',
            'Content Creation',
            'Social Media Marketing',
            'Email Marketing',
            'Analytics & Reporting',
            'ROI Optimization',
          ],
          technologies: [
            'Google Ads',
            'Facebook Ads',
            'LinkedIn Ads',
            'HubSpot',
          ],
          highlight: null,
        },
        {
          title: 'Social Media Management',
          description:
            'Professional management of your social media presence and engagement.',
          features: [
            'Content Creation',
            'Community Management',
            'Ad Campaigns',
            'Analytics Reporting',
            'Brand Monitoring',
            'Influencer Collaboration',
          ],
          technologies: [
            'Instagram',
            'Facebook',
            'Twitter',
            'LinkedIn',
            'TikTok',
          ],
          highlight: null,
        },
        {
          title: 'Email & Automation Marketing',
          description:
            'Automated email campaigns and marketing automation solutions.',
          features: [
            'Email Campaigns',
            'Automation Workflows',
            'Segmentation Strategies',
            'Personalization',
            'A/B Testing',
            'Performance Analytics',
          ],
          technologies: ['Mailchimp', 'HubSpot', 'ActiveCampaign', 'SendGrid'],
          highlight: null,
        },
        {
          title: 'Content Strategy & Copywriting',
          description:
            'Compelling content strategies and professional copywriting services.',
          features: [
            'Content Planning',
            'Blog Writing',
            'Copywriting',
            'Content Optimization',
            'Brand Voice Development',
            'Content Distribution',
          ],
          technologies: ['WordPress', 'Ghost', 'Medium', 'Contentful'],
          highlight: null,
        },
        {
          title: 'Influencer & Affiliate Marketing',
          description:
            'Strategic partnerships and affiliate programs to expand your reach.',
          features: [
            'Influencer Identification',
            'Partnership Management',
            'Affiliate Program Setup',
            'Performance Tracking',
            'ROI Analysis',
            'Compliance Management',
          ],
          technologies: ['AspireIQ', 'Traackr', 'Impact', 'ShareASale'],
          highlight: null,
        },
        {
          title: 'Paid Advertising',
          description:
            'Targeted paid advertising campaigns across multiple platforms.',
          features: [
            'Google Ads Management',
            'Meta Ads (Facebook/Instagram)',
            'LinkedIn Advertising',
            'Display Advertising',
            'Remarketing Campaigns',
            'Conversion Optimization',
          ],
          technologies: [
            'Google Ads',
            'Facebook Ads',
            'LinkedIn Ads',
            'Twitter Ads',
          ],
          highlight: null,
        },
        {
          title: 'Conversion Rate Optimization',
          description:
            'Optimize your digital assets to increase conversions and revenue.',
          features: [
            'User Behavior Analysis',
            'A/B Testing',
            'Landing Page Optimization',
            'Checkout Optimization',
            'Heatmap Analysis',
            'Performance Reporting',
          ],
          technologies: ['Hotjar', 'Optimizely', 'VWO', 'Google Optimize'],
          highlight: null,
        },
        {
          title: 'Online Brand Management',
          description:
            'Protect and enhance your brand reputation across digital channels.',
          features: [
            'Brand Monitoring',
            'Reputation Management',
            'Review Management',
            'Crisis Management',
            'Brand Consistency',
            'Competitor Analysis',
          ],
          technologies: [
            'Brandwatch',
            'Mention',
            'ReviewTrackers',
            'Google Alerts',
          ],
          highlight: null,
        },
        {
          title: 'Customer Experience Solutions',
          description:
            'Comprehensive CX strategies to improve customer satisfaction and loyalty.',
          features: [
            'Customer Journey Mapping',
            'Experience Design',
            'Feedback Collection',
            'Personalization',
            'Support Optimization',
            'Loyalty Programs',
          ],
          technologies: ['Zendesk', 'Salesforce', 'HubSpot', 'Qualtrics'],
          highlight: null,
        },
      ],
    },
    {
      name: 'Design & Branding',
      icon: Palette,
      services: [
        {
          title: 'UI/UX Consulting & Prototyping',
          description:
            'Expert consulting and prototyping services for optimal user experiences.',
          features: [
            'User Research',
            'Information Architecture',
            'Prototyping',
            'Usability Testing',
            'Design Systems',
            'Accessibility Audit',
          ],
          technologies: ['Figma', 'Sketch', 'InVision', 'Axure'],
          highlight: null,
        },
        {
          title: 'Brand Identity & Graphic Design',
          description:
            'Complete branding solutions and professional graphic design services.',
          features: [
            'Logo Design',
            'Brand Guidelines',
            'Marketing Materials',
            'Packaging Design',
            'Print Design',
            'Brand Strategy',
          ],
          technologies: [
            'Adobe Creative Suite',
            'Figma',
            'Illustrator',
            'Photoshop',
          ],
          highlight: null,
        },
        {
          title: 'Video Production & Motion Graphics',
          description:
            'Professional video content and motion graphics for your brand.',
          features: [
            'Corporate Videos',
            'Explainer Videos',
            'Motion Graphics',
            'Animation',
            'Editing & Post-Production',
            'Distribution Strategy',
          ],
          technologies: [
            'After Effects',
            'Premiere Pro',
            'Final Cut Pro',
            'Blender',
          ],
          highlight: null,
        },
      ],
    },
    {
      name: 'Business & IT Services',
      icon: Wrench,
      services: [
        {
          title: 'IT Consulting & Digital Transformation',
          description:
            'Strategic technology guidance for digital transformation and growth.',
          features: [
            'Technology Strategy',
            'Digital Transformation',
            'Process Optimization',
            'Technology Assessment',
            'Implementation Planning',
            'Change Management',
          ],
          technologies: [
            'Enterprise Architecture',
            'Business Process Modeling',
          ],
          highlight: null,
        },
        {
          title: 'Cybersecurity Services',
          description:
            'Comprehensive security solutions to protect your digital assets.',
          features: [
            'Security Assessment',
            'Threat Monitoring',
            'Data Protection',
            'Compliance Management',
            'Incident Response',
            'Security Training',
          ],
          technologies: [
            'SIEM',
            'Firewalls',
            'Encryption',
            'Penetration Testing',
          ],
          highlight: null,
        },
        {
          title: 'Cloud Solutions & DevOps',
          description:
            'Cloud infrastructure and DevOps solutions for scalable operations.',
          features: [
            'Cloud Migration',
            'Infrastructure as Code',
            'CI/CD Implementation',
            'Containerization',
            'Monitoring & Logging',
            'Cost Optimization',
          ],
          technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
          highlight: null,
        },
        {
          title: 'Data Analytics & Business Intelligence',
          description:
            'Actionable insights from your data to make informed business decisions.',
          features: [
            'Data Strategy',
            'Business Intelligence',
            'Data Visualization',
            'Predictive Analytics',
            'Dashboard Development',
            'Reporting Solutions',
          ],
          technologies: ['Tableau', 'Power BI', 'Python', 'SQL', 'BigQuery'],
          highlight: null,
        },
        {
          title: 'Product Strategy & MVP Development',
          description:
            'Strategic product development and rapid MVP creation for startups.',
          features: [
            'Product Ideation',
            'Market Research',
            'MVP Development',
            'Product Roadmapping',
            'User Testing',
            'Go-to-Market Strategy',
          ],
          technologies: ['Lean Startup', 'Agile', 'Design Thinking'],
          highlight: null,
        },
        {
          title: 'IT Infrastructure Setup & Management',
          description:
            'Complete IT infrastructure solutions for businesses of all sizes.',
          features: [
            'Network Design',
            'Server Management',
            'Backup Solutions',
            'Disaster Recovery',
            'Monitoring Systems',
            'Technical Support',
          ],
          technologies: ['Cisco', 'VMware', 'Microsoft', 'Linux'],
          highlight: null,
        },
        {
          title: 'Training & Corporate Workshops',
          description:
            'Professional training and workshops to upskill your team.',
          features: [
            'Technical Training',
            'Digital Literacy',
            'Product Workshops',
            'Custom Curriculum',
            'Hands-on Sessions',
            'Certification Programs',
          ],
          technologies: ['Learning Management Systems', 'Virtual Classrooms'],
          highlight: null,
        },
        {
          title: 'Hosting & Server Management',
          description:
            'Reliable hosting and server management solutions for your applications.',
          features: [
            'Cloud Hosting',
            'Dedicated Servers',
            'Server Monitoring',
            'Performance Optimization',
            'Security Management',
            'Backup & Recovery',
          ],
          technologies: ['AWS', 'DigitalOcean', 'Linode', 'cPanel'],
          highlight: null,
        },
        {
          title: 'Maintenance & Support Services',
          description:
            'Ongoing maintenance and support to keep your systems running smoothly.',
          features: [
            'System Monitoring',
            'Bug Fixes',
            'Updates & Patches',
            'Performance Tuning',
            'Technical Support',
            'SLA Management',
          ],
          technologies: ['Jira', 'Zendesk', 'Monitoring Tools'],
          highlight: null,
        },
        {
          title: 'Chatbot & Virtual Assistant Development',
          description:
            'Intelligent conversational agents to enhance customer experience.',
          features: [
            'Chatbot Development',
            'Voice Assistants',
            'NLP Implementation',
            'Integration Services',
            'Analytics & Reporting',
            'Continuous Improvement',
          ],
          technologies: ['Dialogflow', 'Amazon Lex', 'Microsoft Bot Framework'],
          highlight: null,
        },
        {
          title: 'Marketplace Development',
          description:
            'Custom marketplace solutions for B2B and B2C businesses.',
          features: [
            'Platform Development',
            'Vendor Management',
            'Payment Processing',
            'Search & Filtering',
            'Rating & Reviews',
            'Analytics Dashboard',
          ],
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          highlight: null,
        },
      ],
    },
  ];

  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='pt-16'>
        {/* Hero Section */}
        <section className='py-20 gradient-hero'>
          <div className='container'>
            <div className='max-w-4xl mx-auto text-center'>
              <Badge
                variant='secondary'
                className='mb-6'>
                Our Comprehensive Services
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold mb-8'>
                360° Technology Solutions
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  For Your Business Growth
                </span>
              </h1>
              <p className='text-xl text-muted-foreground text-balance'>
                Arneor offers end-to-end technology services to transform your
                ideas into successful digital products.
              </p>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className='py-20'>
          <div className='container'>
            <div className='space-y-24'>
              {serviceCategories.map((category, categoryIndex) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={categoryIndex}>
                    <div className='text-center mb-16'>
                      <div className='inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6'>
                        <CategoryIcon className='h-10 w-10 text-primary' />
                      </div>
                      <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                        {category.name}
                      </h2>
                      <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                        Comprehensive solutions tailored to your business needs
                        in {category.name.toLowerCase()}.
                      </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                      {category.services.map((service, serviceIndex) => (
                        <Card
                          key={serviceIndex}
                          className='hover:shadow-brand transition-all duration-300 group border-border'>
                          <CardHeader>
                            <div className='flex items-start justify-between mb-4'>
                              <div className='p-3 rounded-lg bg-primary/10 w-fit'>
                                <CategoryIcon className='h-6 w-6 text-primary' />
                              </div>
                              {service.highlight && (
                                <Badge
                                  variant='secondary'
                                  className='bg-accent/10 text-accent'>
                                  {service.highlight}
                                </Badge>
                              )}
                            </div>
                            <CardTitle className='text-2xl group-hover:text-primary transition-colors'>
                              {service.title}
                            </CardTitle>
                            <CardDescription className='text-base'>
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className='space-y-6'>
                            {/* Features */}
                            <div>
                              <h4 className='font-semibold mb-3'>
                                What's Included
                              </h4>
                              <ul className='space-y-2'>
                                {service.features.map(
                                  (feature, featureIndex) => (
                                    <li
                                      key={featureIndex}
                                      className='flex items-start gap-3'>
                                      <CheckCircle className='h-4 w-4 text-accent mt-1 flex-shrink-0' />
                                      <span className='text-sm text-muted-foreground'>
                                        {feature}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className='font-semibold mb-3'>
                                Technologies Used
                              </h4>
                              <div className='flex flex-wrap gap-2'>
                                {service.technologies.map((tech, techIndex) => (
                                  <Badge
                                    key={techIndex}
                                    variant='outline'
                                    className='text-xs'>
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Our Development Process
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                We follow a proven methodology that ensures quality, efficiency,
                and client satisfaction throughout every project.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description:
                    'We analyze your requirements, define project scope, and create a comprehensive development roadmap.',
                  icon: MessageSquare,
                },
                {
                  step: '02',
                  title: 'Design & Architecture',
                  description:
                    'Our team designs user-centric interfaces and robust system architecture for optimal performance.',
                  icon: Code,
                },
                {
                  step: '03',
                  title: 'Development & Testing',
                  description:
                    'We build your solution using modern technologies with rigorous testing at every stage.',
                  icon: Zap,
                },
                {
                  step: '04',
                  title: 'Deployment & Support',
                  description:
                    'We deploy your application and provide ongoing support to ensure continued success.',
                  icon: Shield,
                },
              ].map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <Card
                    key={index}
                    className='text-center hover:shadow-lg transition-all duration-300'>
                    <CardHeader>
                      <div className='mx-auto mb-4'>
                        <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                          <IconComponent className='h-8 w-8 text-primary' />
                        </div>
                        <Badge
                          variant='outline'
                          className='text-xs font-bold'>
                          {phase.step}
                        </Badge>
                      </div>
                      <CardTitle className='text-lg'>{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground text-sm'>
                        {phase.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Why Choose Arneor
                </h2>
                <p className='text-xl text-muted-foreground'>
                  We combine technical expertise with business understanding to
                  deliver solutions that truly make a difference.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                {[
                  {
                    title: 'Proven Track Record',
                    description:
                      'Successfully delivered projects across diverse industries, serving clients globally.',
                    icon: CheckCircle,
                  },
                  {
                    title: 'Cutting-Edge Technology',
                    description:
                      'We use the latest technologies and frameworks to build future-proof solutions.',
                    icon: Code,
                  },
                  {
                    title: 'Scalable Solutions',
                    description:
                      'Our applications are built to scale with your business growth and evolving needs.',
                    icon: Zap,
                  },
                  {
                    title: 'Dedicated Support',
                    description:
                      'Ongoing support and maintenance to ensure your applications continue to perform excellently.',
                    icon: Users,
                  },
                ].map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div
                      key={index}
                      className='flex gap-4'>
                      <div className='p-2 rounded-lg bg-primary/10 w-fit h-fit'>
                        <IconComponent className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='font-semibold mb-2'>
                          {advantage.title}
                        </h3>
                        <p className='text-muted-foreground text-sm'>
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className='text-center'>
                <Button
                  variant='brand'
                  size='lg'
                  asChild>
                  <Link
                    to='/contact'
                    className='group'>
                    Start Your Project
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
