import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Database, 
  MessageSquare,
  Code2,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "SaaS Development",
      description: "End-to-end SaaS application development with modern architecture and scalable solutions.",
      features: ["Cloud Architecture", "API Development", "User Management", "Payment Integration"],
      highlight: "Flagship"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using Flutter for iOS and Android platforms.",
      features: ["Flutter Development", "iOS & Android", "Real-time Features", "Offline Capabilities"],
      highlight: "Expertise"
    },
    {
      icon: Database,
      title: "Backend & API",
      description: "Robust backend systems with secure APIs and efficient database management.",
      features: ["RESTful APIs", "Database Design", "Security Implementation", "Performance Optimization"],
      highlight: null
    },
    {
      icon: MessageSquare,
      title: "Business Consultation",
      description: "Strategic guidance for digital transformation and technology adoption.",
      features: ["Tech Strategy", "Process Optimization", "Digital Transformation", "Growth Planning"],
      highlight: null
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in building innovative SaaS applications and mobile solutions 
            that drive business growth and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {service.highlight && (
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {service.highlight}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Technology Stack</h3>
            <p className="text-muted-foreground">
              We use cutting-edge technologies to build robust, scalable, and efficient solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Flutter", category: "Mobile" },
              { name: "React", category: "Frontend" },
              { name: "Node.js", category: "Backend" },
              { name: "Firebase", category: "Database" },
              { name: "TypeScript", category: "Language" },
              { name: "Tailwind CSS", category: "Styling" },
              { name: "MongoDB", category: "Database" },
              { name: "AWS", category: "Cloud" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                  <Code2 className="h-8 w-8 text-primary mx-auto" />
                </div>
                <div className="font-medium text-sm">{tech.name}</div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="brand" size="lg" asChild>
            <Link to="/services" className="group">
              Explore All Services
              <Zap className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;