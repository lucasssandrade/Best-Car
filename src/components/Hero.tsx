import { Phone, MapPin, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-primary-foreground font-medium">5.0 no Google</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-none mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            BEST CAR
          </h1>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-gradient mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Centro Automotivo
          </h2>

          {/* Description */}
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Seu carro em boas mãos. Serviço de qualidade com profissionais experientes em Santo André.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://wa.me/5511977035404?text=Olá! Gostaria de agendar um serviço." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </a>
            <button 
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 hover:border-secondary text-primary-foreground hover:text-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Como Chegar
            </button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 text-primary-foreground/70 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Santo André - SP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>Seg a Sex: 8h às 18h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
