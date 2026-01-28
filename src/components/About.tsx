import { CheckCircle, Award, Users, Clock } from "lucide-react";

const features = [
  "Profissionais experientes e qualificados",
  "Peças originais e de qualidade",
  "Orçamento transparente e justo",
  "Garantia em todos os serviços",
];

const stats = [
  { icon: Award, value: "5.0", label: "Avaliação Google" },
  { icon: Users, value: "+500", label: "Clientes Atendidos" },
  { icon: Clock, value: "8h-18h", label: "Horário de Funcionamento" },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Sobre Nós
            </span>
            <h2 className="section-title text-primary-foreground mt-2 mb-6">
              QUALIDADE E CONFIANÇA PARA O SEU VEÍCULO
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              A Best Car - Automotive Performance é referência em serviços mecânicos em Santo André. 
              Com uma equipe qualificada e equipamentos modernos, garantimos o melhor atendimento 
              para você e seu veículo.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/5511977035404?text=Olá! Gostaria de saber mais sobre a oficina." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <div className="font-display text-4xl text-primary-foreground">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
