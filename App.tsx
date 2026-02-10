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

  // Handle History API (Back Button for Android/WeChat)
  useEffect(() => {
    // 1. When the app loads, replace the current state to ensure 'home' is the base.
    // This handles the case where the user refreshes the page.
    window.history.replaceState({ page: 'home' }, '', '');

    // 2. Define the listener for the "popstate" event (Physical Back Button)
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as { page: PageRoute } | null;
      if (state && state.page) {
        // If history state exists (we pushed it there), go to that page
        setCurrentPage(state.page);
      } else {
        // Fallback to home if state is missing or we are at the root
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Navigate Forward (Push new state)
  const navigate = (page: PageRoute) => {
    setCurrentPage(page);
    // Push the new page to the browser history stack
    window.history.pushState({ page }, '', '');
  };

  // Navigate Backward (Mimic browser back to keep stack clean)
  // This is used by the UI "<" button to match the physical button behavior
  const goBack = () => {
    // This triggers 'popstate', which our useEffect listener handles
    window.history.back();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'product-sugar':
        return <ProductSugar onBack={goBack} />;
      case 'product-fermentable':
        return <ProductFermentable onBack={goBack} />;
      case 'product-lignin':
        return <ProductLignin onBack={goBack} />;
      case 'equip-explosion':
        return <EquipExplosion onBack={goBack} />;
      case 'equip-reactor':
        return <EquipReactor onBack={goBack} />;
      case 'platform-langfang':
        return <PlatformLangfang onBack={goBack} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto bg-forest-50 relative shadow-2xl overflow-hidden text-forest-950">
      {renderPage()}
    </div>
  );
};

export default App;