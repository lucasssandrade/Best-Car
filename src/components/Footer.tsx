import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Best Car Automotive Performance" 
            className="h-16 w-auto"
          />

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-primary-foreground/70">
            <a href="tel:+5511977035404" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span>(11) 97703-5404</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Santo André - SP</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Best Car - Automotive Performance. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;