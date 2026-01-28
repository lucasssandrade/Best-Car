import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Best Car Automotive Performance" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("inicio")} 
              className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("servicos")} 
              className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("sobre")} 
              className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("contato")} 
              className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+5511977035404" 
              className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(11) 97703-5404</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("inicio")} 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection("servicos")} 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection("sobre")} 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection("contato")} 
                className="text-primary-foreground/80 hover:text-secondary transition-colors font-medium text-left"
              >
                Contato
              </button>
              <a 
                href="tel:+5511977035404" 
                className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold w-fit"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 97703-5404</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
