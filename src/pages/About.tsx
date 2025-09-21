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
  Target,
  Users,
  Lightbulb,
  Trophy,
  ArrowRight,
  Cpu,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
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
                About Arneor
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Engineering the Future of
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  Digital Innovation
                </span>
              </h1>
              <div className='mb-6'>
                <p className='text-2xl md:text-3xl font-semibold text-foreground'>
                  Think beyond. Build beyond.
                </p>
              </div>
              <p className='text-xl text-muted-foreground text-balance'>
                Arneor is your 360° technology & digital partner, focused on
                developing innovative solutions that empower businesses and
                improve lives globally.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className='py-20'>
          <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div>
                <h2 className='text-3xl font-bold mb-6'>Our Story</h2>
                <div className='space-y-4 text-muted-foreground'>
                  <p>
                    Founded in 2025, Arneor emerged from a vision to create
                    technology solutions that genuinely impact businesses and
                    improve lives. Based in India with a global perspective, we
                    specialize in developing scalable SaaS applications, mobile
                    solutions, and emerging technology platforms.
                  </p>
                  <p>
                    Our journey began with UNEVEE, a comprehensive health and
                    fitness management platform that serves both customers and
                    business owners. This flagship project demonstrated our
                    ability to build complex, user-centric applications that
                    solve real-world problems.
                  </p>
                  <p>
                    Today, Arneor continues to expand its portfolio with
                    multiple projects in development, each designed to push the
                    boundaries of what's possible in modern software
                    development. As your 360° technology partner, we offer
                    comprehensive services across web, mobile, AI, cloud, and
                    digital marketing domains.
                  </p>
                </div>
              </div>
              <div className='space-y-6'>
                <Card>
                  <CardHeader>
                    <Target className='h-8 w-8 text-primary mb-2' />
                    <CardTitle>Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      To develop innovative technology solutions that empower
                      businesses, enhance user experiences, and drive digital
                      transformation across industries.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Lightbulb className='h-8 w-8 text-primary mb-2' />
                    <CardTitle>Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>
                      To become a leading technology holding company that
                      creates game-changing applications and platforms for the
                      global market.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Our Values
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                These core principles guide everything we do and shape the
                culture of innovation at Arneor.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                {
                  title: 'Innovation First',
                  description:
                    'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
                  icon: Lightbulb,
                },
                {
                  title: 'User-Centric Design',
                  description:
                    'Every decision we make prioritizes the end-user experience and genuine problem-solving.',
                  icon: Users,
                },
                {
                  title: 'Quality Excellence',
                  description:
                    'We maintain the highest standards in code quality, security, and performance optimization.',
                  icon: Trophy,
                },
                {
                  title: 'Scalable Solutions',
                  description:
                    "We build for growth, ensuring our applications can scale with our clients' success.",
                  icon: Target,
                },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className='text-center hover:shadow-lg transition-all duration-300'>
                    <CardHeader>
                      <div className='mx-auto p-3 rounded-lg bg-primary/10 w-fit mb-4'>
                        <IconComponent className='h-6 w-6 text-primary' />
                      </div>
                      <CardTitle className='text-lg'>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground text-sm'>
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Expertise */}
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Technology Expertise
              </h2>
              <p className='text-xl text-muted-foreground mb-12'>
                Our team specializes in modern technologies that enable us to
                build robust, scalable, and efficient applications across all
                domains.
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    Flutter
                  </div>
                  <div className='text-muted-foreground'>
                    Cross-platform mobile development with native performance
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    AI/ML
                  </div>
                  <div className='text-muted-foreground'>
                    Artificial Intelligence and Machine Learning solutions
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-4xl font-bold text-primary mb-2'>
                    Cloud
                  </div>
                  <div className='text-muted-foreground'>
                    Scalable cloud infrastructure and DevOps solutions
                  </div>
                </div>
              </div>

              <Button
                variant='brand'
                size='lg'
                asChild>
                <Link
                  to='/services'
                  className='group'>
                  Explore Our Services
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
