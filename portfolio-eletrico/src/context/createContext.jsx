import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <AppContext.Provider value={{
      activeSection,
      setActiveSection,
      mobileMenuOpen,
      setMobileMenuOpen,
      selectedService,
      setSelectedService
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro do AppProvider');
  }
  return context;
};