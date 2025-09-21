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
  MapPin,
  Clock,
  Users,
  Heart,
  Laptop,
  Coffee,
  Gift,
  TrendingUp,
  Code,
  Smartphone,
  Database,
  Cpu,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const openPositions = [
    {
      title: 'Flutter Developer',
      type: 'Full-time',
      location: 'Remote / India',
      experience: '2-4 years',
      description:
        'Join our mobile development team to build cutting-edge cross-platform applications using Flutter.',
      skills: ['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Mobile UI/UX'],
      urgent: true,
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Remote / India',
      experience: '3-5 years',
      description:
        'Work on our SaaS applications, building both frontend and backend components using modern technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
      urgent: false,
    },
    {
      title: 'AI/ML Engineer',
      type: 'Full-time',
      location: 'Remote / India',
      experience: '3-5 years',
      description:
        'Develop intelligent solutions leveraging artificial intelligence and machine learning technologies.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science', 'NLP'],
      urgent: false,
    },
    {
      title: 'Product Designer',
      type: 'Contract',
      location: 'Remote',
      experience: '2-3 years',
      description:
        'Design intuitive user experiences for our growing portfolio of SaaS and mobile applications.',
      skills: [
        'Figma',
        'UI/UX Design',
        'Prototyping',
        'Design Systems',
        'User Research',
      ],
      urgent: false,
    },
  ];

  const benefits = [
    {
      icon: Laptop,
      title: 'Remote-First Culture',
      description:
        'Work from anywhere in India with flexible hours that suit your lifestyle.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description:
        'Fast-track your career with mentorship and learning opportunities.',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description:
        'Comprehensive health coverage and wellness programs for you and your family.',
    },
    {
      icon: Coffee,
      title: 'Learning Budget',
      description:
        'Annual budget for courses, conferences, and skill development.',
    },
    {
      icon: Gift,
      title: 'Performance Bonuses',
      description:
        'Competitive salary with performance-based bonuses and equity options.',
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description:
        'Work with passionate individuals who share your love for technology.',
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
                Join Our Team
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Build the Future
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  With Arneor
                </span>
              </h1>
              <div className='mb-6'>
                <p className='text-2xl md:text-3xl font-semibold text-foreground'>
                  Think beyond. Build beyond.
                </p>
              </div>
              <p className='text-xl text-muted-foreground text-balance'>
                Join a dynamic team of innovators creating cutting-edge
                technology solutions that make a real impact on businesses
                worldwide. As your 360° technology partner, we're shaping the
                future of digital innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className='py-20'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Open Positions
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                We're looking for talented individuals who are passionate about
                technology and want to make a difference in the world of
                software development.
              </p>
            </div>

            <div className='space-y-6 max-w-4xl mx-auto'>
              {openPositions.map((position, index) => (
                <Card
                  key={index}
                  className='hover:shadow-brand transition-all duration-300'>
                  <CardHeader>
                    <div className='flex items-start justify-between'>
                      <div>
                        <div className='flex items-center gap-3 mb-2'>
                          <CardTitle className='text-xl'>
                            {position.title}
                          </CardTitle>
                          {position.urgent && (
                            <Badge
                              variant='destructive'
                              className='text-xs'>
                              Urgent Hiring
                            </Badge>
                          )}
                        </div>
                        <CardDescription className='text-base'>
                          {position.description}
                        </CardDescription>
                      </div>
                      <Button
                        variant='brand'
                        size='sm'>
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-4'>
                      <div className='flex items-center gap-2'>
                        <Clock className='h-4 w-4 text-muted-foreground' />
                        <span className='text-sm'>{position.type}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <MapPin className='h-4 w-4 text-muted-foreground' />
                        <span className='text-sm'>{position.location}</span>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Users className='h-4 w-4 text-muted-foreground' />
                        <span className='text-sm'>{position.experience}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className='font-medium mb-2'>Required Skills</h4>
                      <div className='flex flex-wrap gap-2'>
                        {position.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant='outline'
                            className='text-xs'>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className='text-center mt-12'>
              <p className='text-muted-foreground mb-6'>
                Don't see the perfect role? We're always looking for exceptional
                talent.
              </p>
              <Button
                variant='outline'
                size='lg'
                asChild>
                <Link to='/contact'>Send Us Your Resume</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Why Work With Us
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                We believe in creating an environment where our team can thrive
                both professionally and personally.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card
                    key={index}
                    className='text-center hover:shadow-lg transition-all duration-300'>
                    <CardHeader>
                      <div className='mx-auto p-3 rounded-lg bg-primary/10 w-fit mb-4'>
                        <IconComponent className='h-6 w-6 text-primary' />
                      </div>
                      <CardTitle className='text-lg'>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-muted-foreground text-sm'>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-4xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                  Our Culture
                </h2>
                <p className='text-xl text-muted-foreground'>
                  At Arneor, we foster a culture of innovation, collaboration,
                  and continuous learning.
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-2xl font-semibold mb-4'>
                      Innovation First
                    </h3>
                    <p className='text-muted-foreground'>
                      We encourage our team to explore new technologies,
                      experiment with innovative solutions, and push the
                      boundaries of what's possible in software development.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold mb-4'>
                      Work-Life Balance
                    </h3>
                    <p className='text-muted-foreground'>
                      We believe that great work comes from individuals who are
                      fulfilled both professionally and personally. That's why
                      we offer flexible working arrangements and respect
                      personal time.
                    </p>
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold mb-4'>
                      Continuous Learning
                    </h3>
                    <p className='text-muted-foreground'>
                      Technology evolves rapidly, and so do we. We provide
                      resources, time, and support for our team members to
                      continuously upgrade their skills and knowledge.
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <Card className='bg-gradient-hero'>
                    <CardContent className='p-6'>
                      <Code className='h-8 w-8 text-primary mb-3' />
                      <h4 className='font-semibold mb-2'>Tech Talks</h4>
                      <p className='text-sm text-muted-foreground'>
                        Regular knowledge sharing sessions and tech discussions
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className='p-6'>
                      <Smartphone className='h-8 w-8 text-primary mb-3' />
                      <h4 className='font-semibold mb-2'>Latest Tools</h4>
                      <p className='text-sm text-muted-foreground'>
                        Access to cutting-edge development tools and
                        technologies
                      </p>
                    </CardContent>
                  </Card>
                  <Card className='bg-gradient-hero'>
                    <CardContent className='p-6'>
                      <Database className='h-8 w-8 text-primary mb-3' />
                      <h4 className='font-semibold mb-2'>Real Impact</h4>
                      <p className='text-sm text-muted-foreground'>
                        Work on projects that make a real difference to users
                        and businesses
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Join Our Team?
              </h2>
              <p className='text-xl text-muted-foreground mb-8'>
                Take the next step in your career and help us build the future
                of technology.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  variant='brand'
                  size='lg'>
                  View Open Positions
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  asChild>
                  <Link to='/contact'>Get In Touch</Link>
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

export default Careers;
