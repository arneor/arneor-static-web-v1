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
  ExternalLink,
  Users,
  TrendingUp,
  Star,
  Calendar,
  Clock,
  CheckCircle,
} from 'lucide-react';

const Portfolio = () => {
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
                Our Portfolio
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold mb-8'>
                Projects That
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  Make a Difference
                </span>
              </h1>
              <p className='text-xl text-muted-foreground text-balance'>
                Discover our innovative solutions and the impact they've made on
                businesses and users worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* UNEVEE Case Study */}
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-6xl mx-auto'>
              <Card className='overflow-hidden shadow-brand'>
                <CardHeader className='bg-gradient-hero'>
                  <div className='flex items-center justify-between mb-4'>
                    <Badge
                      variant='secondary'
                      className='bg-accent/10 text-accent'>
                      Live Project
                    </Badge>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='text-sm font-medium'>
                        Flagship Project
                      </span>
                    </div>
                  </div>
                  <CardTitle className='text-3xl mb-4'>UNEVEE</CardTitle>
                  <CardDescription className='text-lg'>
                    A comprehensive health, fitness, and management platform
                    that serves both customers seeking wellness solutions and
                    business owners managing their operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className='p-8'>
                  {/* Project Overview */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <div>
                      <h3 className='text-xl font-semibold mb-4'>
                        Project Overview
                      </h3>
                      <p className='text-muted-foreground mb-4'>
                        UNEVEE represents our flagship achievement in SaaS
                        development, combining health and fitness management
                        with comprehensive business tools. The platform serves a
                        dual purpose: empowering individuals on their wellness
                        journey while providing business owners with powerful
                        management capabilities.
                      </p>
                      <div className='flex gap-2 mb-4'>
                        <Button
                          variant='brand'
                          size='sm'
                          asChild>
                          <a
                            href='https://www.unevee.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit UNEVEE
                            <ExternalLink className='ml-2 h-4 w-4' />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-muted rounded-lg p-4 text-center'>
                          <Calendar className='h-6 w-6 text-primary mx-auto mb-2' />
                          <div className='font-semibold'>2024</div>
                          <div className='text-sm text-muted-foreground'>
                            Launch Year
                          </div>
                        </div>
                        <div className='bg-muted rounded-lg p-4 text-center'>
                          <Clock className='h-6 w-6 text-primary mx-auto mb-2' />
                          <div className='font-semibold'>6 Months</div>
                          <div className='text-sm text-muted-foreground'>
                            Development
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className='mb-8'>
                    <h3 className='text-xl font-semibold mb-6'>
                      Key Metrics & Results
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                      {[
                        { number: '500+', label: 'Active Users', icon: Users },
                        { number: '98%', label: 'Uptime', icon: CheckCircle },
                        { number: '4.8/5', label: 'User Rating', icon: Star },
                        {
                          number: '150%',
                          label: 'Growth Rate',
                          icon: TrendingUp,
                        },
                      ].map((metric, index) => {
                        const IconComponent = metric.icon;
                        return (
                          <div
                            key={index}
                            className='text-center'>
                            <IconComponent className='h-8 w-8 text-primary mx-auto mb-2' />
                            <div className='text-2xl font-bold text-primary'>
                              {metric.number}
                            </div>
                            <div className='text-sm text-muted-foreground'>
                              {metric.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Features */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='text-xl font-semibold mb-4'>
                        Customer Features
                      </h3>
                      <ul className='space-y-3'>
                        {[
                          'Personalized fitness tracking and goal setting',
                          'Nutrition planning and meal tracking',
                          'Progress monitoring with detailed analytics',
                          'Community features and social challenges',
                          'Integration with wearable devices',
                        ].map((feature, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-3'>
                            <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                            <span className='text-muted-foreground'>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold mb-4'>
                        Business Features
                      </h3>
                      <ul className='space-y-3'>
                        {[
                          'Comprehensive client management system',
                          'Appointment scheduling and calendar integration',
                          'Payment processing and invoicing',
                          'Business analytics and reporting',
                          'Multi-location support and staff management',
                        ].map((feature, index) => (
                          <li
                            key={index}
                            className='flex items-start gap-3'>
                            <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                            <span className='text-muted-foreground'>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Projects */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                What's Coming Next
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                We're working on exciting new projects that will continue to
                push the boundaries of innovation in different industries.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'E-commerce Platform',
                  description:
                    'Next-generation e-commerce solution with AI-powered recommendations',
                  timeline: 'Q2 2024',
                  status: 'In Development',
                },
                {
                  title: 'EdTech Solution',
                  description:
                    'Revolutionary learning management system for modern education',
                  timeline: 'Q3 2024',
                  status: 'Planning Phase',
                },
                {
                  title: 'FinTech Application',
                  description:
                    'Innovative financial management tools for small businesses',
                  timeline: 'Q4 2024',
                  status: 'Research Phase',
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className='hover:shadow-lg transition-all duration-300'>
                  <CardHeader>
                    <Badge
                      variant='outline'
                      className='w-fit mb-2'>
                      {project.status}
                    </Badge>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='bg-muted rounded-lg p-3 text-center'>
                      <div className='font-semibold text-primary'>
                        {project.timeline}
                      </div>
                      <div className='text-sm text-muted-foreground'>
                        Expected Launch
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
