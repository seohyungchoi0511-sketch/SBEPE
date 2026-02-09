
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Newsroom from './components/Newsroom';
import Footer from './components/Footer';
import CEOPage from './components/CEOPage';
import CompanyPage from './components/CompanyPage';
import ProjectListView from './components/ProjectListView';
import NewsListView from './components/NewsListView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'company' | 'ceo' | 'projects' | 'news'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  return (
    <div className="relative min-h-screen selection:bg-blue-500/30">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main key={currentView} className="page-transition">
        {currentView === 'home' ? (
          <>
            <Hero />
            <AboutSection />
            <Services />
            <Projects onNavigate={setCurrentView} />
            <Newsroom onNavigate={setCurrentView} />
          </>
        ) : currentView === 'company' ? (
          <CompanyPage onNavigate={setCurrentView} />
        ) : currentView === 'ceo' ? (
          <CEOPage />
        ) : currentView === 'projects' ? (
          <ProjectListView />
        ) : (
          <NewsListView />
        )}
      </main>

      <Footer onNavigate={setCurrentView} />
    </div>
  );
};

export default App;
