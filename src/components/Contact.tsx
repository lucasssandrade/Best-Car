import { MapPin, Phone, Clock, MessageCircle, Send, Car } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    veiculo: "",
    servico: "",
    mensagem: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, servico: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome.trim() || !formData.telefone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Monta mensagem para WhatsApp
    const mensagem = `*Solicitação de Orçamento*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.nome.trim())}%0A` +
      `*Telefone:* ${encodeURIComponent(formData.telefone.trim())}%0A` +
      `${formData.email ? `*Email:* ${encodeURIComponent(formData.email.trim())}%0A` : ""}` +
      `${formData.veiculo ? `*Veículo:* ${encodeURIComponent(formData.veiculo.trim())}%0A` : ""}` +
      `${formData.servico ? `*Serviço:* ${encodeURIComponent(formData.servico)}%0A` : ""}` +
      `${formData.mensagem ? `%0A*Mensagem:*%0A${encodeURIComponent(formData.mensagem.trim())}` : ""}`;

    // Abre WhatsApp com a mensagem
    window.open(`https://wa.me/5511977035404?text=${mensagem}`, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Complete o envio pelo WhatsApp para finalizar seu orçamento.",
    });

    setIsSubmitting(false);
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      veiculo: "",
      servico: "",
      mensagem: "",
    });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>
          <h2 className="section-title text-foreground mt-2 mb-4">
            SOLICITE SEU ORÇAMENTO
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário abaixo e entraremos em contato rapidamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Orçamento */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Car className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">Formulário de Orçamento</h3>
                <p className="text-muted-foreground text-sm">Resposta rápida via WhatsApp</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={255}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="veiculo">Veículo</Label>
                  <Input
                    id="veiculo"
                    name="veiculo"
                    placeholder="Ex: Civic 2020"
                    value={formData.veiculo}
                    onChange={handleInputChange}
                    maxLength={100}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="servico">Tipo de Serviço</Label>
                <Select value={formData.servico} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o serviço desejado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Preparação de Motor">Preparação de Motor</SelectItem>
                    <SelectItem value="Retífica">Retífica</SelectItem>
                    <SelectItem value="Suspensão Esportiva">Suspensão Esportiva</SelectItem>
                    <SelectItem value="Injeção Eletrônica">Injeção Eletrônica</SelectItem>
                    <SelectItem value="Manutenção Preventiva">Manutenção Preventiva</SelectItem>
                    <SelectItem value="Diagnóstico Geral">Diagnóstico Geral</SelectItem>
                    <SelectItem value="Outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Descreva o que você precisa..."
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  maxLength={1000}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 text-lg"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar pelo WhatsApp
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Informações de Contato e Mapa */}
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

            {/* Map */}
            <div className="h-[250px] rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4!2d-46.5311!3d-23.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42c8d6e6eb9d%3A0x0!2sR.%20Itatinga%2C%2032%20-%20Jardim%20Monte%20Libano%2C%20Santo%20Andr%C3%A9%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Best Car Automotive Performance"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
