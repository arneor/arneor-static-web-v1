import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our flagship projects and the innovative solutions we've built 
            to transform businesses and improve lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* UNEVEE Featured Project */}
          <Card className="overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-accent/10 text-accent">
                  Live Project
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Flagship</span>
                </div>
              </div>
              <CardTitle className="text-2xl">UNEVEE</CardTitle>
              <CardDescription className="text-base">
                Comprehensive health, fitness, and management platform serving both 
                customers and business owners.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">4.8</div>
                  <div className="text-sm text-muted-foreground">User Rating</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Key Features</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Customer & Business Management
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Health & Fitness Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Cross-Platform Mobile App
                  </li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="brand" size="sm" asChild>
                  <a href="https://www.unevee.com" target="_blank" rel="noopener noreferrer">
                    Visit UNEVEE
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/portfolio">View Case Study</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon Projects */}
          <Card className="overflow-hidden">
            <CardHeader>
              <Badge variant="outline" className="w-fit">
                In Development
              </Badge>
              <CardTitle className="text-2xl">More Innovation Coming</CardTitle>
              <CardDescription className="text-base">
                We're working on exciting new projects that will revolutionize 
                different industries. Stay tuned for announcements.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-lg font-semibold text-primary">Q2 2024</div>
                  <div className="text-sm text-muted-foreground">Next Launch</div>
                </div>
                <div className="p-4 bg-muted rounded-lg text-center">
                  <div className="text-lg font-semibold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">In Pipeline</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {["E-commerce", "EdTech", "FinTech", "Healthcare"].map((area) => (
                    <Badge key={area} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-gradient-hero rounded-lg">
                <p className="text-sm text-muted-foreground mb-3">
                  Want to be the first to know about our new launches?
                </p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to="/contact">Get Notified</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;