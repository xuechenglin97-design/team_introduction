import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import {
  ProductSugar,
  ProductFermentable,
  ProductLignin,
  EquipExplosion,
  EquipReactor,
  PlatformLangfang
} from './components/DetailPages';

// Simple Router Type
export type PageRoute = 
  | 'home' 
  | 'product-sugar' 
  | 'product-fermentable' 
  | 'product-lignin' 
  | 'equip-explosion' 
  | 'equip-reactor' 
  | 'platform-langfang';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: PageRoute) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'product-sugar':
        return <ProductSugar onBack={() => navigate('home')} />;
      case 'product-fermentable':
        return <ProductFermentable onBack={() => navigate('home')} />;
      case 'product-lignin':
        return <ProductLignin onBack={() => navigate('home')} />;
      case 'equip-explosion':
        return <EquipExplosion onBack={() => navigate('home')} />;
      case 'equip-reactor':
        return <EquipReactor onBack={() => navigate('home')} />;
      case 'platform-langfang':
        return <PlatformLangfang onBack={() => navigate('home')} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-forest-950 relative shadow-2xl overflow-hidden">
      {renderPage()}
    </div>
  );
};

export default App;