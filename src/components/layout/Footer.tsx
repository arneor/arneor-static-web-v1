import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import arneorLogo from "@/assets/arneor-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 black rounded-lg flex items-center justify-center">
                <img
                  src={arneorLogo}
                  alt="ARNEOR"
                  className="h-8 w-8 filter rounded-full object-cover"
                />
              </div>
              <span className="font-bold text-xl">Arneor</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building innovative SaaS solutions and mobile applications for the
              global market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About", "Portfolio", "Services", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "SaaS Development",
                "Mobile Apps",
                "API Development",
                "Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">India</p>
              <Link
                to="/contact"
                className="text-primary hover:text-primary-hover text-sm transition-colors block"
              >
                Get in Touch
              </Link>

              {/* Social Media Links */}
              <div className="pt-2">
                <p className="text-muted-foreground text-sm mb-2">Follow Us</p>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/company/arneor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/arneor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Arneor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-muted-foreground text-sm">
              Privacy Policy
            </span>
            <span className="text-muted-foreground text-sm">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
