import { Link } from 'react-router-dom';
import { Linkedin, Instagram, X } from 'lucide-react';
import arneorLogo from '@/assets/arneor-logo.png';

const Footer = () => {
  return (
    <footer className='bg-card border-t border-border'>
      <div className='container py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-8 h-8 black rounded-lg flex items-center justify-center'>
                <img
                  src={arneorLogo}
                  alt='ARNEOR'
                  className='h-8 w-8 filter rounded-full object-cover'
                />
              </div>
              <span className='font-bold text-xl'>Arneor</span>
            </div>
            <p className='text-muted-foreground text-sm'>
              Your 360° technology & digital partner. Engineering the future of
              digital innovation.
            </p>
            <p className='text-muted-foreground text-sm italic'>
              Think beyond. Build beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold mb-4'>Company</h3>
            <ul className='space-y-2'>
              {['About', 'Portfolio', 'Services', 'Careers'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className='text-muted-foreground hover:text-primary text-sm transition-colors'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-semibold mb-4'>Top Services</h3>
            <ul className='space-y-2'>
              {[
                'Web Development',
                'Mobile Apps',
                'AI & Machine Learning',
                'Digital Marketing',
                'UI/UX Design',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to='/services'
                    className='text-muted-foreground hover:text-primary text-sm transition-colors'>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-semibold mb-4'>Contact</h3>
            <div className='space-y-3'>
              <p className='text-muted-foreground text-sm'>India</p>
              <p className='text-muted-foreground text-sm'>+91 9744880311</p>
              <p className='text-muted-foreground text-sm mt-4'>Saudi Arabia</p>
              <p className='text-muted-foreground text-sm'>+966 546886134</p>
              <Link
                to='/contact'
                className='text-primary hover:text-primary-hover text-sm transition-colors block'>
                Get in Touch
              </Link>

              {/* Social Media Links */}
              <div className='pt-2'>
                <p className='text-muted-foreground text-sm mb-2'>Follow Us</p>
                <div className='flex space-x-3'>
                  <a
                    href='https://www.linkedin.com/company/arneor'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
                    aria-label='Follow us on LinkedIn'>
                    <Linkedin className='h-5 w-5' />
                  </a>
                  <a
                    href='https://www.instagram.com/arneor'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
                    aria-label='Follow us on Instagram'>
                    <Instagram className='h-5 w-5' />
                  </a>
                  <a
                    href='https://x.com/ArneorHq?t=DGrCdsSkWymhCxsqaO0EQg&s=09'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary transition-colors'
                    aria-label='Follow us on X'>
                    <X className='h-5 w-5' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-muted-foreground text-sm'>
            © 2025 Arneor. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4 md:mt-0'>
            <Link
              to='/privacy-policy'
              className='text-muted-foreground hover:text-primary text-sm transition-colors'>
              Privacy Policy
            </Link>
            <Link
              to='/terms-of-service'
              className='text-muted-foreground hover:text-primary text-sm transition-colors'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
