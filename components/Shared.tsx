import React from 'react';
import { ChevronLeft, Share2, Menu, Search } from 'lucide-react';

interface DetailHeaderProps {
  title: string;
  onBack: () => void;
}

export const DetailHeader: React.FC<DetailHeaderProps> = ({ title, onBack }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-950/80 backdrop-blur-md border-b border-white/5 h-14 flex items-center justify-between px-4 max-w-md mx-auto">
      <button 
        onClick={onBack}
        className="p-1 rounded-full hover:bg-white/10 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-neon-400" />
      </button>
      <h1 className="text-base font-bold text-white tracking-wide">{title}</h1>
      <button className="p-1 rounded-full hover:bg-white/10 transition-colors">
        <Share2 className="w-5 h-5 text-neon-400" />
      </button>
    </header>
  );
};

export const HomeHeader: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-forest-950/90 backdrop-blur-sm h-14 flex items-center justify-between px-4 max-w-md mx-auto">
      <Menu className="w-6 h-6 text-white/80" />
      <div className="text-xs font-medium text-white/80 flex flex-col items-center">
        <span>中国科学院过程工程研究所</span>
        <span className="text-[10px] text-white/50">生物质炼制团队</span>
      </div>
      <Search className="w-6 h-6 text-white/80" />
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
      <div className="w-1 h-5 bg-neon-400 rounded-full"></div>
      <h2 className="text-lg font-bold text-white">{title}</h2>
    </div>
  );
};