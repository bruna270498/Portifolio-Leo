import React from 'react';
import cameraImg from "../images/cameras.jpg";
import posteImg from "../images/images.jpg";
import fechaduraImg from "../images/fechadura.png";
import eletricaImg from "../images/eletrica.jpg"; 
import facialImg from "../images/facial.jpg";
import tagVeicularImg from "../images/tagVeicular.jpg";
import motorPortaoImg from "../images/motor.jpg";
import interfoneImg from "../images/interfone.webp";
import visitaTecnicaImg from "../images/visita.jpeg";
import projetoImg from "../images/projetoEletrico.jpg";
import quadroImg from "../images/quadro.jpeg";
import lacoImg from "../images/laco.png";

const Projects = () => {
  const projects = [
    {
      title: "Instalação e Monitoramento de Câmeras",
      category: "Segurança",
      description: "Oferecemos sistemas de videomonitoramento modernos, com câmeras de alta resolução e gravação contínua. Garantimos a proteção de residências, comércios, condomínios e indústrias, com suporte para monitoramento local ou remoto.",
      image: cameraImg
    },
    {
      title: "Instalação de Iluminação em Postes",
      category: "Iluminação Pública",
      description: "Realizamos a instalação e manutenção de luminárias em postes, utilizando equipamentos duráveis e de alta eficiência energética. Atendemos condomínios, áreas públicas e privadas, proporcionando maior segurança e economia.",
      image: posteImg
    },
    {
      title: "Instalação de Fechaduras Eletrônicas",
      category: "Acesso Seguro",
      description: "Trabalhamos com fechaduras digitais e eletrônicas de última geração, ideais para residências, empresas e condomínios. Proporcionamos praticidade e segurança, com acesso por senha, biometria ou cartão de proximidade.",
      image: fechaduraImg
    },
    {
      title: "Instalação Elétrica Residencial e Predial",
      category: "Elétrica",
      description: "Executamos projetos elétricos completos para residências, comércios e indústrias, seguindo todas as normas de segurança. Nossa equipe garante instalações eficientes, organizadas e seguras, prontas para suportar alta demanda.",
      image: eletricaImg
    },
    {
      title: "Portaria Inteligente com Reconhecimento Facial",
      category: "Automação",
      description: "Implementamos sistemas de portaria inteligente com tecnologia de reconhecimento facial. Uma solução moderna que aumenta a segurança e agiliza o acesso de moradores, funcionários e visitantes autorizados.",
      image: facialImg
    },
    {
      title: "Controle de Acesso com Tag Veicular",
      category: "Automação",
      description: "Instalamos antenas veiculares que permitem a entrada automática de veículos por meio de tags de proximidade. Essa solução é prática, segura e ideal para condomínios, empresas e estacionamentos.",
      image: tagVeicularImg
    },
    {
      title: "Automação de Motores de Portões",
      category: "Automação",
      description: "Oferecemos serviços de automação de portões residenciais e condominal, garantindo praticidade no dia a dia. Nossos sistemas proporcionam abertura rápida e segura, com durabilidade e baixa manutenção.",
      image: motorPortaoImg
    },
    {
      title: "Instalação e Manutenção de Centrais telefônicas e Interfones",
      category: "Comunicação",
      description: "Realizamos instalação e manutenção de sistemas de interfonia em residências e condomínios. Garantimos comunicação clara, confiável e segura, além de integração com outros sistemas de segurança.",
      image: interfoneImg
    },
    {
      title: "Visita Técnica",
      category: "Atendimento",
      description: "Nossa equipe realiza visitas técnicas para avaliar as necessidades de cada cliente. Dessa forma, conseguimos oferecer soluções personalizadas, com orçamento justo e de acordo com o ambiente.",
      image: visitaTecnicaImg
    },
    {
      title: "Criação de Projeto Elétrico",
      category: "Planejamento",
      description: "Desenvolvemos projetos completos de instalação elétrica, de segurança e automação. Cada projeto é planejado de acordo com as normas técnicas, garantindo qualidade, eficiência e segurança em todas as etapas.",
      image: projetoImg
    },
    {
      title: "Montagem e Manutenção de QDC",
      category: "Elétrica",
      description:"Projetamos e montamos quadros de distribuição de energia personalizados para residências, comércios e indústrias. Utilizamos componentes de qualidade e seguimos todas as normas de segurança, garantindo organização, eficiência e proteção das instalações elétricas.",
      image: quadroImg
    },
    {
      title: "Laço Indutivo para Controle de Portões",
      category: "Automação",
      description: "Implementamos sistemas de laço indutivo para automação de portões veiculares. Essa tecnologia detecta a presença de veículos, permitindo abertura automática com praticidade, segurança e sem necessidade de contato físico.",
      image: lacoImg
    },
    {
      title: "Instalação de Infraestrutura de Fibra Óptica",
      category: "Conectividade",
      description: "Realizamos projetos completos de infraestrutura em fibra óptica, garantindo alta velocidade, baixa latência e estabilidade na transmissão de dados. Ideal para empresas, condomínios e redes de grande porte.",
      image: "../images/fibra.jpg"
    },
    {
      title: "Cabeamento de Redes e Backbone",
      category: "Redes",
      description: "Executamos a instalação de cabeamento estruturado para redes de computadores, incluindo backbone para integração de sistemas de chat, monitoramento e automação. Garantimos organização, desempenho e escalabilidade.",
      image: "../images/rede.jpg"
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">
                  <img src={project.image} alt={project.title}/>
                </div>
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
