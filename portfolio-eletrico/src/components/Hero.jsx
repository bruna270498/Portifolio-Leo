import React from 'react';
import { useApp } from '../context/createContext';

const Hero = () => {
  const { setActiveSection } = useApp();

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Soluções Elétricas Inteligentes
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
           Especialistas em serviços elétricos, monitoramento avançado e sistemas de controle de acesso, garantindo segurança, eficiência e praticidade para residências e empresas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('services')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Nossos Serviços
          </button>
          <button
            onClick={() => setActiveSection('contact')}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;