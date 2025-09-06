import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SEOWrapper from "./components/SEOWrapper";
import ScrollToAnchor from "./components/ScrollToAnchor";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Global structured data for the organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arneor",
  legalName: "Arneor Private Limited",
  url: "https://www.arneor.com",
  logo: "https://www.arneor.com/arneor-logo.png",
  description:
    "Leading product development, engineering, and design company in India specializing in innovative solutions, Flutter development, SaaS architecture, and digital product creation.",
  foundingDate: "2025",
  slogan: "Engineering Tomorrow's Products Today",
  founders: [
    {
      "@type": "Person",
      name: "Vahab",
      jobTitle: "Co-Founder & Chief Technology Officer",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Kerala",
    addressLocality: "Kerala",
    postalCode: "680001",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9744880311",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
  sameAs: [
    "https://www.instagram.com/arneor",
    "https://linkedin.com/company/arneor",
    "https://github.com/arneor",
    "https://twitter.com/arneor",
  ],
  knowsAbout: [
    "Product Development",
    "Engineering Solutions",
    "Design Innovation",
    "Flutter Development",
    "SaaS Architecture",
    "UI/UX Design",
    "Mobile App Development",
    "Digital Product Strategy",
  ],
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToAnchor />

        {/* Global SEO defaults and organization schema */}
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Arneor" />
          <meta
            name="copyright"
            content="© 2025 Arneor. All rights reserved."
          />
          <meta name="theme-color" content="#000000" />

          {/* Global Organization Schema */}
          <script type="application/ld+json">
            {JSON.stringify(organizationSchema)}
          </script>

          {/* Website Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Arneor",
              url: "https://www.arneor.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.arneor.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            })}
          </script>
        </Helmet>

        <Routes>
          {/* Homepage - Enhanced with local business schema */}
          <Route
            path="/"
            element={
              <SEOWrapper
                title="Arneor | Leading Product Development, Engineering & Design Company in India"
                description="Transform your ideas into market-ready products with India's premier product development company. Expert engineering solutions, innovative design, Flutter development, SaaS architecture, and comprehensive digital product creation services."
                keywords="product development India, engineering solutions, design company Kerala, Flutter app development, SaaS development, UI/UX design, mobile app development, digital product design, tech startup solutions, MVP development, product engineering, custom software development, Arneor"
                canonicalUrl="/"
                localBusinessSchema={true}
                lastModified="2025-09-06"
              >
                <Index />
              </SEOWrapper>
            }
          />

          {/* About Page - Team and company information */}
          <Route
            path="/about"
            element={
              <SEOWrapper
                title="About Arneor | Meet Our Product Development, Engineering & Design Experts"
                description="Discover Arneor's journey in transforming ideas into successful products. Meet our founding team of engineers and designers - Vahab - and learn about our mission to engineer tomorrow's products today."
                keywords="about Arneor, product development team, engineering experts, design professionals, company founders, Vahab Kerala tech company, startup story, company mission"
                canonicalUrl="/about"
                breadcrumbs={[
                  { name: "Home", url: "/" },
                  { name: "About", url: "/about" },
                ]}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "AboutPage",
                  mainEntity: {
                    "@type": "Organization",
                    name: "Arneor",
                  },
                }}
              >
                <About />
              </SEOWrapper>
            }
          />

          {/* Portfolio Page - Showcase work and projects */}
          <Route
            path="/portfolio"
            element={
              <SEOWrapper
                title="Portfolio | Innovative Product Development Projects by Arneor"
                description="Explore Arneor's portfolio of successful product development projects, engineering solutions, and design innovations. See how we've helped businesses transform ideas into market-leading products through expert Flutter development, SaaS solutions, and creative design."
                keywords="product development portfolio, engineering projects, design case studies, Flutter apps, SaaS solutions, UNEVEE, mobile app portfolio, UI/UX design projects, successful product launches, client success stories"
                canonicalUrl="/portfolio"
                breadcrumbs={[
                  { name: "Home", url: "/" },
                  { name: "Portfolio", url: "/portfolio" },
                ]}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "CollectionPage",
                  name: "Arneor Portfolio",
                  description:
                    "Collection of Arneor's product development projects and design solutions",
                }}
              >
                <Portfolio />
              </SEOWrapper>
            }
          />

          {/* Services Page - Comprehensive service offerings */}
          <Route
            path="/services"
            element={
              <SEOWrapper
                title="Product Development Services | Engineering, Design & Flutter Development | Arneor"
                description="Comprehensive product development services from concept to launch. Expert engineering solutions, innovative design, Flutter mobile development, SaaS architecture, UI/UX design, and MVP development. Transform your ideas into successful products."
                keywords="product development services, engineering consulting, design services, Flutter development, SaaS development, UI/UX design, mobile app development, MVP development, prototype design, software architecture, cloud solutions, tech consulting"
                canonicalUrl="/services"
                breadcrumbs={[
                  { name: "Home", url: "/" },
                  { name: "Services", url: "/services" },
                ]}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "Service",
                  serviceType: "Product Development",
                  provider: {
                    "@type": "Organization",
                    name: "Arneor",
                  },
                  description:
                    "Comprehensive product development services including engineering, design, and technical implementation",
                }}
              >
                <Services />
              </SEOWrapper>
            }
          />

          {/* Careers Page - Job opportunities */}
          <Route
            path="/careers"
            element={
              <SEOWrapper
                title="Careers at Arneor | Join India's Leading Product Development Team"
                description="Join Arneor's innovative product development team in Kerala, India. Exciting career opportunities for engineers, designers, Flutter developers, and product managers passionate about creating tomorrow's digital products."
                keywords="careers Arneor, product development jobs Kerala, engineering jobs India, Flutter developer careers, UI/UX designer jobs, remote work opportunities, tech startup careers, design engineering positions, software developer jobs"
                canonicalUrl="/careers"
                breadcrumbs={[
                  { name: "Home", url: "/" },
                  { name: "Careers", url: "/careers" },
                ]}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  specialty: "Job Listings",
                  about: {
                    "@type": "Organization",
                    name: "Arneor",
                  },
                }}
              >
                <Careers />
              </SEOWrapper>
            }
          />

          {/* Contact Page - Business inquiries */}
          <Route
            path="/contact"
            element={
              <SEOWrapper
                title="Contact Arneor | Start Your Product Development Project Today"
                description="Ready to transform your idea into a successful product? Contact Arneor for expert product development, engineering, and design services. Get in touch for a free consultation and project discussion."
                keywords="contact Arneor, product development inquiry, project consultation, engineering services contact, design consultation, Flutter development quote, SaaS development inquiry, Kerala tech company contact"
                canonicalUrl="/contact"
                breadcrumbs={[
                  { name: "Home", url: "/" },
                  { name: "Contact", url: "/contact" },
                ]}
                structuredData={{
                  "@context": "https://schema.org",
                  "@type": "ContactPage",
                  mainEntity: {
                    "@type": "Organization",
                    name: "Arneor",
                  },
                }}
              >
                <Contact />
              </SEOWrapper>
            }
          />

          {/* 404 Error Page - No index */}
          <Route
            path="*"
            element={
              <SEOWrapper
                title="Page Not Found - 404 | Arneor Product Development"
                description="The page you're looking for doesn't exist. Return to Arneor's homepage to explore our product development, engineering, and design services, or contact us for assistance."
                keywords="404 error, page not found, Arneor"
                canonicalUrl="/404"
                noIndex={true}
              >
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
