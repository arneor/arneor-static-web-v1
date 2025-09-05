import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Database, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Code,
  Shield,
  Zap,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "SaaS Application Development",
      description: "End-to-end development of scalable Software-as-a-Service applications with modern architecture.",
      features: [
        "Cloud-native architecture design",
        "Multi-tenant SaaS platforms",
        "API development and integration",
        "Payment gateway integration",
        "User management and authentication",
        "Analytics and reporting dashboards"
      ],
      technologies: ["React", "Node.js", "AWS", "Firebase", "Stripe"],
      highlight: "Flagship Service"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter for superior performance and user experience.",
      features: [
        "iOS and Android development",
        "Cross-platform Flutter apps",
        "Real-time data synchronization",
        "Offline functionality",
        "Push notifications",
        "App store optimization"
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
      highlight: "Core Expertise"
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description: "Robust backend systems with secure APIs and efficient database management solutions.",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Security implementation",
        "Performance optimization",
        "Microservices architecture",
        "Third-party integrations"
      ],
      technologies: ["Node.js", "MongoDB", "PostgreSQL", "Firebase"],
      highlight: null
    },
    {
      icon: MessageSquare,
      title: "Business Consultation",
      description: "Strategic technology guidance for digital transformation and growth optimization.",
      features: [
        "Technology strategy planning",
        "Digital transformation roadmap",
        "Process optimization",
        "Technology stack selection",
        "Scalability planning",
        "Cost optimization strategies"
      ],
      technologies: ["Strategic Planning", "Architecture Review", "Consulting"],
      highlight: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                Technology Solutions
                <span className="block gradient-primary bg-clip-text text-transparent">
                  That Drive Growth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                We specialize in building innovative SaaS applications and mobile solutions 
                that empower businesses to achieve their digital transformation goals.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="hover:shadow-brand transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 w-fit">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        {service.highlight && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {service.highlight}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a proven methodology that ensures quality, efficiency, and client satisfaction 
                throughout every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your requirements, define project scope, and create a comprehensive development roadmap.",
                  icon: MessageSquare
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  description: "Our team designs user-centric interfaces and robust system architecture for optimal performance.",
                  icon: Code
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "We build your solution using modern technologies with rigorous testing at every stage.",
                  icon: Zap
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "We deploy your application and provide ongoing support to ensure continued success.",
                  icon: Shield
                }
              ].map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto mb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-xs font-bold">
                          {phase.step}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose ARNEOR</h2>
                <p className="text-xl text-muted-foreground">
                  We combine technical expertise with business understanding to deliver 
                  solutions that truly make a difference.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    title: "Proven Track Record",
                    description: "Successfully delivered UNEVEE, our flagship SaaS platform serving hundreds of users.",
                    icon: CheckCircle
                  },
                  {
                    title: "Modern Technology Stack",
                    description: "We use cutting-edge technologies like Flutter, React, and Firebase for optimal results.",
                    icon: Code
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Our applications are built to scale with your business growth and evolving needs.",
                    icon: Zap
                  },
                  {
                    title: "Dedicated Support",
                    description: "Ongoing support and maintenance to ensure your applications continue to perform excellently.",
                    icon: Users
                  }
                ].map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 w-fit h-fit">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{advantage.title}</h3>
                        <p className="text-muted-foreground text-sm">{advantage.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center">
                <Button variant="brand" size="lg" asChild>
                  <Link to="/contact" className="group">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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