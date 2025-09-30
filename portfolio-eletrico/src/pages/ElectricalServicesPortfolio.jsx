import React from 'react';
import { AppProvider, useApp } from '../context/createContext';
import Header from '../pages/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Services from '../components/Services';

const PortfolioContent = () => {
  const { activeSection } = useApp();

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

// Componente principal que provê o Context
const ElectricalServicesPortfolio = () => {
  return (
    <AppProvider>
      <PortfolioContent />
    </AppProvider>
  );
};

export default ElectricalServicesPortfolio;