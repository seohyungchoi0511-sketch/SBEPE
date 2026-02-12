
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'company' | 'ceo' | 'projects' | 'news') => void;
  currentView: 'home' | 'company' | 'ceo' | 'projects' | 'news';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: 'home' | 'company' | 'ceo' | 'projects' | 'news', e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(view);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || currentView !== 'home' ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Brand */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity text-left"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <img
              src={isLogoHovered ? "/images/logo/logo korean.png" : "/images/logo/logo.png"}
              alt="(주)서울건축환경기술사사무소"
              className="h-12 w-auto object-contain transition-all duration-300"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => handleNav('company')}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === 'company' ? 'text-blue-600 bg-blue-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              회사소개
            </button>
            <button
              onClick={() => handleNav('ceo')}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === 'ceo' ? 'text-blue-600 bg-blue-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              CEO 인사말
            </button>
            <button
              onClick={() => handleNav('projects')}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === 'projects' ? 'text-blue-600 bg-blue-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              수행실적
            </button>
            <button
              onClick={() => handleNav('news')}
              className={`relative px-4 py-2 rounded-xl text-base font-bold transition-all ${currentView === 'news' ? 'text-blue-600 bg-blue-50' : 'text-slate-900 hover:bg-slate-50'}`}
            >
              정보·뉴스
            </button>
          </nav>

          <button className="p-2 md:hidden text-slate-900" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
