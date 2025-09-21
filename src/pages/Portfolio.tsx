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
  Cpu,
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
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Projects That
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  Make a Difference
                </span>
              </h1>
              <div className='mb-6'>
                <p className='text-2xl md:text-3xl font-semibold text-foreground'>
                  Think beyond. Build beyond.
                </p>
              </div>
              <p className='text-xl text-muted-foreground text-balance'>
                Discover our innovative solutions and the impact they've made on
                businesses and users worldwide. As your 360° technology partner,
                we deliver comprehensive digital transformation.
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
                          <div className='font-semibold'>2025</div>
                          <div className='text-sm text-muted-foreground'>
                            Launch Year
                          </div>
                        </div>
                        <div className='bg-muted rounded-lg p-4 text-center'>
                          <Clock className='h-6 w-6 text-primary mx-auto mb-2' />
                          <div className='font-semibold'>Under Development</div>
                          <div className='text-sm text-muted-foreground'>
                            This project is ongoing
                          </div>
                        </div>
                      </div>
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

        {/* WALLET7 Case Study */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='max-w-6xl mx-auto'>
              <Card className='overflow-hidden shadow-brand'>
                <CardHeader className='bg-gradient-hero'>
                  <div className='flex items-center justify-between mb-4'>
                    <Badge
                      variant='secondary'
                      className='bg-accent/10 text-accent'>
                      Upcoming Project
                    </Badge>
                    <div className='flex items-center gap-1'>
                      <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                      <span className='text-sm font-medium'>
                        In Development
                      </span>
                    </div>
                  </div>
                  <CardTitle className='text-3xl mb-4'>WALLET7</CardTitle>
                  <CardDescription className='text-lg'>
                    A comprehensive fintech solution that revolutionizes
                    personal finance management with AI-powered insights.
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
                        WALLET7 is our innovative fintech solution designed to
                        simplify personal finance management. With AI-powered
                        financial assistance, it helps users make smarter
                        financial decisions and achieve their monetary goals.
                      </p>
                      <div className='flex gap-2 mb-4'>
                        <Button
                          variant='brand'
                          size='sm'
                          asChild>
                          <a
                            href='https://wallet7.vercel.app'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit Website
                            <ExternalLink className='ml-2 h-4 w-4' />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <div className='space-y-4'>
                      <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-muted rounded-lg p-4 text-center'>
                          <Calendar className='h-6 w-6 text-primary mx-auto mb-2' />
                          <div className='font-semibold'>2026</div>
                          <div className='text-sm text-muted-foreground'>
                            Expected Launch
                          </div>
                        </div>
                        <div className='bg-muted rounded-lg p-4 text-center'>
                          <Clock className='h-6 w-6 text-primary mx-auto mb-2' />
                          <div className='font-semibold'>Q4 2026</div>
                          <div className='text-sm text-muted-foreground'>
                            Launch Timeline
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='text-xl font-semibold mb-4'>
                        Core Features
                      </h3>
                      <ul className='space-y-3'>
                        {[
                          'ROSCA management',
                          'Chit fund management',
                          'Personal finance management',
                          'Credit card management',
                          'AI-powered financial assistant',
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
                        Advanced Features
                      </h3>
                      <ul className='space-y-3'>
                        {[
                          'Personalized AI finance advisor',
                          'Budget planning and tracking',
                          'Investment portfolio management',
                          'Expense categorization',
                          'Financial goal setting',
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

        {/* Client Projects */}
        <section className='py-20'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Client Projects
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                Our successful collaborations with clients across various
                industries.
              </p>
            </div>

            <div className='max-w-6xl mx-auto'>
              {/* Delivered Projects */}
              <div className='mb-16'>
                <h3 className='text-2xl font-bold mb-8 text-center'>
                  Delivered Projects
                </h3>
                <Card className='overflow-hidden'>
                  <CardHeader className='bg-gradient-hero'>
                    <div className='flex items-center justify-between mb-4'>
                      <Badge
                        variant='secondary'
                        className='bg-accent/10 text-accent'>
                        Delivered
                      </Badge>
                      <div className='flex items-center gap-1'>
                        <CheckCircle className='h-4 w-4 text-green-500' />
                        <span className='text-sm font-medium'>Completed</span>
                      </div>
                    </div>
                    <CardTitle className='text-3xl mb-4'>
                      Atheko Website
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      A modern, responsive website for Atheko showcasing their
                      products and services.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='p-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                      <div className='flex-1'>
                        <h4 className='text-xl font-semibold mb-2'>
                          Project Highlights
                        </h4>
                        <ul className='space-y-2'>
                          {[
                            'Responsive design for all devices',
                            'E-commerce integration',
                            'SEO optimization',
                            'Content management system',
                          ].map((feature, index) => (
                            <li
                              key={index}
                              className='flex items-start gap-2'>
                              <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                              <span className='text-muted-foreground'>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='flex gap-2'>
                        <Button
                          variant='brand'
                          size='sm'
                          asChild>
                          <a
                            href='https://www.atheko.com'
                            target='_blank'
                            rel='noopener noreferrer'>
                            Visit Website
                            <ExternalLink className='ml-2 h-4 w-4' />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Ongoing Projects */}
              <div>
                <h3 className='text-2xl font-bold mb-8 text-center'>
                  Ongoing Projects
                </h3>
                <Card className='overflow-hidden'>
                  <CardHeader className='bg-gradient-hero'>
                    <div className='flex items-center justify-between mb-4'>
                      <Badge
                        variant='secondary'
                        className='bg-primary/10 text-primary'>
                        In Progress
                      </Badge>
                      <div className='flex items-center gap-1'>
                        <Clock className='h-4 w-4 text-primary' />
                        <span className='text-sm font-medium'>
                          Ongoing Development
                        </span>
                      </div>
                    </div>
                    <CardTitle className='text-3xl mb-4'>
                      Atheko Mobile App
                    </CardTitle>
                    <CardDescription className='text-lg'>
                      A feature-rich mobile application for Atheko to enhance
                      customer engagement.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='p-8'>
                    <div className='space-y-8'>
                      {/* Customer Features */}
                      <div>
                        <h4 className='text-xl font-semibold mb-4'>
                          Customer End Features
                        </h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              User Management
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Secure registration & login (mobile/email/social)',
                                'Profile creation with personal details and preferences',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Services & Packages
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Service browsing with descriptions and pricing',
                                'Advanced filters and search functionality',
                                'Predefined service packages with customization options',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Order Management
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Place new orders with selected services/packages',
                                'View order history (active, completed, cancelled)',
                                'Pickup scheduling with date/time selection',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Tracking & Delivery
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Real-time order tracking and status updates',
                                'Push notifications for all service updates',
                                'Doorstep delivery scheduling and confirmation',
                                'Proof of delivery (OTP or digital signature)',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Engagement Features
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Reward points system with redemption options',
                                'Review and rating functionality',
                                'Company information and FAQ section',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Admin Features */}
                      <div>
                        <h4 className='text-xl font-semibold mb-4'>
                          Admin/Business End Features
                        </h4>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Operations Management
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Central dashboard for order management',
                                'Order status tracking (Pending to Completed)',
                                'Revenue tracking and sales reporting',
                                'Daily/weekly/monthly analytics',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Staff & Support
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Delivery staff management and assignment',
                                'Staff performance tracking with ratings',
                                'In-app customer support and live chat',
                                'Ticket system for complaints and queries',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className='font-medium mb-3 text-primary'>
                              Business Tools
                            </h5>
                            <ul className='space-y-2'>
                              {[
                                'Inventory management with low stock alerts',
                                'Multi-outlet branch management',
                                'Outlet-wise performance analytics',
                                'Secure payment gateway integration',
                                'Refund and transaction management',
                              ].map((feature, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-2'>
                                  <CheckCircle className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                                  <span className='text-muted-foreground text-sm'>
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6'>
                      <div className='bg-muted rounded-lg p-4 text-center'>
                        <div className='font-semibold text-primary'>
                          Q4 2025
                        </div>
                        <div className='text-sm text-muted-foreground'>
                          Expected Delivery
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button
                          variant='outline'
                          size='sm'
                          disabled>
                          In Development
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                  timeline: 'Q2 2026',
                  status: 'In Development',
                },
                {
                  title: 'Wearable Product',
                  description:
                    'Cutting-edge wearable technology designed for seamless lifestyle integration',
                  timeline: 'Q3 2026',
                  status: 'Planning Phase',
                },
                {
                  title: 'FinTech Solution',
                  description:
                    'Smart and secure UPI-based financial tools for faster digital transactions',
                  timeline: 'Q4 2026',
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
