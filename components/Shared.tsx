import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface DetailHeaderProps {
  title: string;
  onBack: () => void;
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({ title, onBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-md border-b border-white/10 h-14 flex items-center justify-center px-4 max-w-md mx-auto shadow-lg relative">
      <button 
        onClick={onBack}
        className="absolute left-4 p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-neon-400" />
      </button>
      <h1 className="text-base font-bold text-white tracking-wide">{title}</h1>
    </header>
  );
};

export const HomeHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-900/95 backdrop-blur-sm h-14 flex items-center justify-center px-4 max-w-md mx-auto shadow-lg">
      <div className="text-xs font-medium text-white/90 flex flex-col items-center">
        <span>中国科学院过程工程研究所</span>
        <span className="text-[10px] text-white/60">生物质炼制工程研究团队</span>
      </div>
    </header>
  );
};

interface SectionTitleProps {
  title: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 mb-4 ${className}`}>
      <div className="w-1.5 h-6 bg-forest-900 rounded-full"></div>
      <h2 className="text-lg font-bold text-forest-950">{title}</h2>
    </div>
  );
};