import React from 'react';
import { ChevronDown, Zap, Shield, Camera, CheckCircle } from 'lucide-react';
import { useApp } from '../context/createContext';

const Services = () => {
  const { selectedService, setSelectedService } = useApp();

  const services = [
    {
      id: 1,
      icon: <Zap className="h-12 w-12 text-blue-500" />,
      title: "Instalações Elétricas",
      description: "Projetos e instalações elétricas residenciais, comerciais e industriais com padrões de segurança internacionais.",
      details: [
        "Projetos elétricos personalizados",
        "Instalações residenciais e comerciais",
        "Sistemas de iluminação LED",
        "Quadros elétricos e distribuição",
        "Manutenção preventiva e corretiva"
      ]
    },
    {
      id: 2,
      icon: <Camera className="h-12 w-12 text-green-500" />,
      title: "Monitoramento 24/7",
      description: "Sistemas avançados de videomonitoramento com tecnologia de ponta para máxima segurança.",
      details: [
        "Câmeras IP de alta resolução",
        "Monitoramento remoto via app",
        "Gravação em nuvem segura",
        "Detecção inteligente de movimento",
        "Alertas em tempo real"
      ]
    },
    {
      id: 3,
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Controle de Acesso",
      description: "Soluções completas de controle de acesso com biometria, cartões e tecnologias avançadas.",
      details: [
        "Sistemas biométricos",
        "Controle por cartão RFID",
        "Fechaduras eletrônicas",
        "Integração com sistemas existentes",
        "Relatórios de acesso detalhados"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas e personalizadas para atender todas as suas necessidades em segurança e infraestrutura elétrica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {selectedService === service.id && (
                  <div className="mt-6 space-y-3">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-6 flex items-center text-blue-600 font-semibold">
                  <span>Ver detalhes</span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    selectedService === service.id ? 'rotate-180' : ''
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;