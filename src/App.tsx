import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Index from './pages/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SEOWrapper from './components/SEOWrapper';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global SEO defaults */}
        <Helmet>
          <html lang='en' />
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
          <meta
            name='robots'
            content='index, follow'
          />
          <meta
            name='author'
            content='ARNEOR'
          />
        </Helmet>

        <Routes>
          <Route
            path='/'
            element={
              <SEOWrapper
                title='ARNEOR - Product Development, Design & Engineering Company'
                description='Leading product development company specializing in innovative design and engineering solutions. Expert in SaaS applications, Flutter development, and digital product design.'
                keywords='product development, design engineering, SaaS development, Flutter app development, UI/UX design, digital products, ARNEOR'
                canonicalUrl='/'>
                <Index />
              </SEOWrapper>
            }
          />

          <Route
            path='/about'
            element={
              <SEOWrapper
                title='About ARNEOR - Product Development Experts | Design & Engineering Team'
                description='Meet the ARNEOR team - passionate product developers, designers, and engineers creating innovative digital solutions. Founded by Vahab and Nidhin Lal.'
                keywords='about ARNEOR, product development team, design engineering experts, company history, founders'
                canonicalUrl='/about'>
                <About />
              </SEOWrapper>
            }
          />

          <Route
            path='/portfolio'
            element={
              <SEOWrapper
                title='Portfolio - Our Product Development Work | ARNEOR Design & Engineering'
                description="Explore ARNEOR's portfolio showcasing innovative product development projects, design solutions, and engineering excellence across various industries."
                keywords='product development portfolio, design projects, engineering solutions, UNEVEE, case studies, ARNEOR work'
                canonicalUrl='/portfolio'>
                <Portfolio />
              </SEOWrapper>
            }
          />

          <Route
            path='/services'
            element={
              <SEOWrapper
                title='Services - Product Development, Design & Engineering | ARNEOR'
                description='Comprehensive product development services including design, engineering, SaaS development, Flutter mobile apps, and UI/UX design solutions.'
                keywords='product development services, design engineering, SaaS development, Flutter development, UI/UX design, mobile app development'
                canonicalUrl='/services'>
                <Services />
              </SEOWrapper>
            }
          />

          <Route
            path='/careers'
            element={
              <SEOWrapper
                title='Careers at ARNEOR - Join Our Product Development Team'
                description="Join ARNEOR's innovative product development team. Exciting opportunities for designers, engineers, and developers passionate about creating amazing products."
                keywords='careers at ARNEOR, product development jobs, design engineering careers, Flutter developer jobs, UI/UX designer positions'
                canonicalUrl='/careers'>
                <Careers />
              </SEOWrapper>
            }
          />

          <Route
            path='/contact'
            element={
              <SEOWrapper
                title='Contact ARNEOR - Get in Touch for Product Development Projects'
                description="Contact ARNEOR for your product development needs. Let's discuss how our design and engineering expertise can bring your ideas to life."
                keywords='contact ARNEOR, product development inquiry, design engineering consultation, project discussion'
                canonicalUrl='/contact'>
                <Contact />
              </SEOWrapper>
            }
          />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path='*'
            element={
              <SEOWrapper
                title='Page Not Found - 404 | ARNEOR Product Development'
                description="The page you're looking for doesn't exist. Return to ARNEOR's homepage to explore our product development services."
                keywords='404, page not found, ARNEOR'
                canonicalUrl='/404'
                noIndex={true}>
                <NotFound />
              </SEOWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
