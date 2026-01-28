import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>
          <h2 className="section-title text-foreground mt-2 mb-4">
            VENHA NOS VISITAR
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos localizados no Jardim Monte Líbano, Santo André. Venha tomar um café!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  R. Itatinga, 32 - Jardim Monte Líbano<br />
                  Santo André - SP, 09290-420
                </p>
                <a 
                  href="https://maps.app.goo.gl/FGjDQBAPkSKoRa6J9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline text-sm font-medium mt-2 inline-block"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Telefone</h3>
                <a 
                  href="tel:+5511977035404" 
                  className="text-foreground hover:text-secondary transition-colors text-lg font-medium"
                >
                  (11) 97703-5404
                </a>
                <p className="text-muted-foreground text-sm mt-1">
                  Ligue ou mande mensagem
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-card border border-border rounded-xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-1">Horário</h3>
                <p className="text-foreground font-medium">Segunda a Sexta</p>
                <p className="text-muted-foreground">8:00 às 18:00</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href="https://wa.me/5511977035404?text=Olá! Gostaria de agendar um serviço." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] w-full"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar pelo WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4!2d-46.5311!3d-23.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c8d6e6eb9d%3A0x0!2sR.%20Itatinga%2C%2032%20-%20Jardim%20Monte%20Libano%2C%20Santo%20Andr%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Best Car Centro Automotivo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
