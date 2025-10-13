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
  Cpu,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree (free tier allows 50 submissions per month)
      // You'll need to create an account at formspree.io and get your form endpoint
      const response = await fetch('https://formspree.io/f/xnngapzl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description:
            'Thank you for contacting us. We will get back to you within 24 hours.',
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <h1 className='text-4xl md:text-6xl font-bold mb-6'>
                Let's Build Something
                <span className='block gradient-primary bg-clip-text text-transparent'>
                  Amazing Together
                </span>
              </h1>
              <div className='mb-6'>
                <p className='text-2xl md:text-3xl font-semibold text-foreground'>
                  Think beyond. Build beyond.
                </p>
              </div>
              <p className='text-xl text-muted-foreground text-balance'>
                Ready to transform your ideas into reality? Get in touch with
                our team to discuss your next project and explore partnership
                opportunities. As your 360° technology partner, we're here to
                help you achieve digital excellence.
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
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input
                          id='firstName'
                          placeholder='John'
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input
                          id='lastName'
                          placeholder='Doe'
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='email'>Email</Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@example.com'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='company'>Company (Optional)</Label>
                      <Input
                        id='company'
                        placeholder='Your Company Name'
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='subject'>Subject</Label>
                      <Input
                        id='subject'
                        placeholder='Project Inquiry'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='message'>Message</Label>
                      <Textarea
                        id='message'
                        placeholder='Tell us about your project requirements...'
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      variant='brand'
                      className='w-full'
                      type='submit'
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className='mr-2 h-4 w-4' />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
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
                      <Phone className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Phone</div>
                        <div className='text-sm text-muted-foreground'>
                          +91 9744880311
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3 mt-4'>
                      <MapPin className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Location</div>
                        <div className='text-sm text-muted-foreground'>
                          Saudi Arabia
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Phone className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Phone</div>
                        <div className='text-sm text-muted-foreground'>
                          +966 546886134
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-3'>
                      <Mail className='h-5 w-5 text-primary' />
                      <div>
                        <div className='font-medium'>Email</div>
                        <div className='text-sm text-muted-foreground'>
                          infoarneor@gmail.com
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
                        Discuss your next technology project
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
                        What services do you offer?
                      </h4>
                      <p className='text-sm text-muted-foreground'>
                        We offer comprehensive 360° technology services
                        including web & mobile development, AI/ML solutions,
                        digital marketing, cloud services, and more.
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
                        We specialize in a wide range of modern technologies
                        including Flutter, React, Node.js, Python, AI/ML
                        frameworks, cloud platforms, and emerging technologies.
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
                Ready to Transform Your Business?
              </h2>
              <p className='text-xl text-muted-foreground mb-8'>
                Join the growing list of businesses that trust Arneor as their
                360° technology & digital partner.
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
