import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.phone && formData.service && formData.message) {
      const numero = "5575982346666"; // coloque aqui o número com DDD
      const texto = `Olá, meu nome é ${formData.name}.
      📧 Email: ${formData.email}
      📞 Telefone: ${formData.phone}
      💡 Serviço de interesse: ${formData.service}
      📝 Mensagem: ${formData.message}`;

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
      window.open(url, "_blank"); 
      setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-300">
            Solicite orçamento para seu serviço
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Lado esquerdo - Informações */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-300">(75) 9 8234-6666</div>
                  <div className="text-gray-300">(75) 9 8374-5556</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">suporte_seguranca_eletronica@outlook.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="text-gray-300">
                    Rua Paloma, Santa Terezinha - Santo Antônio de Jesus, BA
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Emergências 24h: (75) 9 8234-6666</div>
              </div>
            </div>
          </div>

          {/* Lado direito - Formulário */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Serviço de Interesse</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Instalações Elétrica">Instalações Elétrica</option>
                  <option value="Manutenção/Instalação de Camêras">Manutenção/Instalação de Camêras</option>
                  <option value="Controle de Acesso">Controle de Acesso</option>
                  <option value="Automação de Portão">Automação de Portão</option>
                  <option value="Concerto/Manutenção Interfone">Concerto/Manutenção Interfone</option>
                  <option value="Outros Serviços">Outros Serviços</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Descreva seu projeto ou necessidade..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
              >
                Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
