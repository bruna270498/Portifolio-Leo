import React from 'react';

const About = () => {
  const stats = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "100+", label: "Projetos Concluídos" },
    { number: "24/7", label: "Suporte Técnico" },
    { number: "100%", label: "Satisfação do Cliente" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Sobre a PowerSeg Soluções
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Com 5 anos de experiência no mercado, a PowerSeg Soluções atua com excelência em serviços de instalação elétrica residencial e industrial, sempre com foco em qualidade, segurança e inovação.</p>
            <p className="text-lg text-gray-600 mb-8">
              Ao longo desses 5 anos, construímos uma história baseada em dedicação, confiança e no compromisso de entregar sempre o melhor serviço com o melhor preço, priorizando a satisfação de cada cliente.</p>
            <ul>
              <li className="text-lg text-gray-600 mb-2"><strong>* Automação Inteligente:</strong> instalação de portões automáticos com controlador de acesso facial e antena veicular;</li>
              <li className="text-lg text-gray-600 mb-2"><strong>* Segurança e Monitoramento:</strong>  instalação de câmeras, cercas elétricas e sistemas de interfonia;</li>
              <li className="text-lg text-gray-600 mb-2"><strong>* Iluminação Pública:</strong> projetos e manutenções que garantem eficiência e durabilidade;</li>
              <li className="text-lg text-gray-600 mb-2"><strong>* Serviços Técnicos:</strong> orçamentos detalhados e visitas técnicas para oferecer as melhores soluções aos nossos clientes.</li>
            </ul>
            <p className="text-lg text-gray-600 mb-8">
              Nossa equipe é formada por profissionais qualificados, certificados em Eletromecânica pelo SENAI, além de possuir treinamentos e certificações em normas regulamentadoras como:
            </p>
            <ul>
              <li className="text-lg text-gray-600 mb-2"><strong> * NR-10: </strong>Segurança em Instalações e Serviços em Eletricidade</li>
              <li className="text-lg text-gray-600 mb-2"><strong> * NR-35: </strong>Trabalho em Altura</li>
            </ul>
            <p className="text-lg text-gray-600 mb-8">
              Na PowerSeg Soluções, acreditamos que tecnologia, segurança e qualidade caminham juntas. Por isso, estamos sempre em busca de inovações que facilitem a vida de nossos clientes, mantendo o compromisso com a confiança e a excelência em cada projeto realizado.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;