import { Wrench, Droplets, Gauge, Settings, Zap, Car } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Mecânica Geral",
    description: "Manutenção completa do motor, suspensão, freios e embreagem.",
  },
  {
    icon: Droplets,
    title: "Troca de Óleo",
    description: "Óleo de qualidade e filtros originais para seu veículo.",
  },
  {
    icon: Gauge,
    title: "Diagnóstico",
    description: "Scanner automotivo para identificar problemas com precisão.",
  },
  {
    icon: Settings,
    title: "Alinhamento",
    description: "Alinhamento e balanceamento para rodar com segurança.",
  },
  {
    icon: Zap,
    title: "Elétrica",
    description: "Reparo de sistemas elétricos, bateria e alternador.",
  },
  {
    icon: Car,
    title: "Revisão",
    description: "Revisão completa preventiva para manter seu carro em dia.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="section-title text-foreground mt-2 mb-4">
            O QUE FAZEMOS DE MELHOR
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços automotivos para manter seu veículo funcionando perfeitamente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
