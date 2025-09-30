import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Zap className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold">PowerSeg Soluções</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © 2025 PowerSeg Soluções. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Desenvolvido com tecnologia e inovação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;