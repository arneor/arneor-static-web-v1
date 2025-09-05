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
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Users,
  Briefcase,
  Clock,
} from 'lucide-react';

const Contact = () => {
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
                Get In Touch
              </Badge>
              <h1 className='text-4xl md:text-6xl font-bold mb-8'>
                Let's Build Something
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  Amazing Together
                </span>
              </h1>
              <p className='text-xl text-muted-foreground text-balance'>
                Ready to transform your ideas into reality? Get in touch with
                our team to discuss your next project and explore partnership
                opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className='py-20'>
          <div className='container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <Card className='shadow-brand'>
                <CardHeader>
                  <CardTitle className='text-2xl'>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='space-y-2'>
                      <Label htmlFor='firstName'>First Name</Label>
                      <Input
                        id='firstName'
                        placeholder='John'
                      />
                    </div>
                    <div className='space-y-2'>
                      <Label htmlFor='lastName'>Last Name</Label>
                      <Input
                        id='lastName'
                        placeholder='Doe'
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                      id='email'
                      type='email'
                      placeholder='john@example.com'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='company'>Company (Optional)</Label>
                    <Input
                      id='company'
                      placeholder='Your Company Name'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input
                      id='subject'
                      placeholder='Project Inquiry'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                      id='message'
                      placeholder='Tell us about your project requirements...'
                      rows={5}
                    />
                  </div>

                  <Button
                    variant='brand'
                    className='w-full'>
                    <Send className='mr-2 h-4 w-4' />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information & Quick Options */}
              <div className='space-y-8'>
                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      Contact Information
                    </CardTitle>
                    <CardDescription>
                      Reach out to us through any of these channels.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <MapPin className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Location</div>
                        <div className='text-sm text-muted-foreground'>
                          India
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Mail className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Email</div>
                        <div className='text-sm text-muted-foreground'>
                          hello@Arneor.com
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Clock className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Response Time</div>
                        <div className='text-sm text-muted-foreground'>
                          Within 24 hours
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <Card className='hover:shadow-lg transition-all duration-300 cursor-pointer group'>
                    <CardContent className='p-6 text-center'>
                      <Briefcase className='h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform' />
                      <h3 className='font-semibold mb-2'>Project Inquiry</h3>
                      <p className='text-sm text-muted-foreground'>
                        Discuss your next SaaS or mobile app project
                      </p>
                    </CardContent>
                  </Card>

                  <Card className='hover:shadow-lg transition-all duration-300 cursor-pointer group'>
                    <CardContent className='p-6 text-center'>
                      <Users className='h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform' />
                      <h3 className='font-semibold mb-2'>Partnership</h3>
                      <p className='text-sm text-muted-foreground'>
                        Explore collaboration opportunities
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ */}
                <Card>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-4'>
                    <div>
                      <h4 className='font-medium mb-1'>
                        What's your typical project timeline?
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Most projects take 3-6 months depending on complexity.
                        We'll provide a detailed timeline during our initial
                        consultation.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>
                        Do you work with startups?
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        Absolutely! We love working with startups and can
                        provide flexible engagement models to fit your budget
                        and timeline.
                      </p>
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'>
                        What technologies do you specialize in?
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        We specialize in Flutter for mobile apps, React for web
                        applications, and Firebase/Node.js for backend
                        development.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-secondary/50'>
          <div className='container'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Get Started?
              </h2>
              <p className='text-xl text-muted-foreground mb-8'>
                Join the growing list of businesses that trust Arneor to bring
                their digital visions to life.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  variant='brand'
                  size='lg'>
                  <MessageSquare className='mr-2 h-4 w-4' />
                  Schedule a Consultation
                </Button>
                <Button
                  variant='outline'
                  size='lg'>
                  <Mail className='mr-2 h-4 w-4' />
                  Send Email
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

export default Contact;
