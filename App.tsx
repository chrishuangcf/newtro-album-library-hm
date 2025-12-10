import React, { useState, useEffect } from 'react';
import LibraryDashboard from './components/LibraryDashboard';
import LandingPage from './components/LandingPage';
import { VinylRecord, CassetteTape, MiniDisc, CompactDisc } from './components/MediaAssets';
import { MediaType } from './types';

type AppState = 'intro' | 'inserting' | 'library';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('intro');
  const [selectedMedia, setSelectedMedia] = useState<MediaType | null>(null);
  const [loadingText, setLoadingText] = useState('');

  const handleMediaClick = (type: MediaType) => {
    if (appState !== 'intro') return;
    
    // Scroll to top immediately to ensure smooth animation
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setSelectedMedia(type);
    setAppState('inserting');
    
    // Simulate connection/reading sequence
    const sequence = async () => {
      setLoadingText('Detecting Device...');
      await new Promise(r => setTimeout(r, 800));
      
      if (type === 'minidisc') setLoadingText('Reading TOC...');
      else if (type === 'cd') setLoadingText('Reading Disc Signature...');
      else if (type === 'vinyl') setLoadingText('Calibrating Needle...');
      else setLoadingText('Aligning Tape Head...');
      
      await new Promise(r => setTimeout(r, 1200));
      setLoadingText('Searching MusicBrainz...');
      
      await new Promise(r => setTimeout(r, 800));
      setAppState('library');
    };
    
    sequence();
  };

  const handleScrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`w-full bg-neutral-900 font-sans ${appState === 'intro' ? 'overflow-auto min-h-screen' : 'overflow-hidden h-screen'}`}>
      
      {/* 
        Background Overlay during intro 
        Fixed position so it covers scrolling content background too
      */}
      {appState !== 'library' && (
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-800 to-slate-900 pointer-events-none"></div>
      )}

      {/* 
        MAIN LANDING WRAPPER
        This contains the Hero (Interactive) and the Content (Static).
        It is hidden/removed when entering the app interface.
      */}
      <div className={`relative z-10 transition-opacity duration-500 ${appState === 'library' ? 'opacity-0 pointer-events-none absolute top-0 w-full h-full' : 'opacity-100'}`}>
        
        {/* HERO SECTION (Interactive Demo) */}
        {/* This takes up at least 100vh */}
        <div className={`flex flex-col items-center justify-center min-h-screen relative transition-all duration-1000 transform ${appState === 'inserting' ? 'scale-105' : ''}`}>
          
          <div className={`text-center mb-12 transition-all duration-500 ${appState === 'inserting' ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
               Newtro Library
             </h1>
             <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed px-4">
               Interactive Demo: Select a physical medium to begin the digital archival process.
             </p>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-2 gap-8 md:gap-24 perspective-container mb-12">
            
            {/* Vinyl */}
            <div className={`transition-all duration-1000 ${appState === 'inserting' && selectedMedia !== 'vinyl' ? 'opacity-0 scale-50 blur-sm' : ''} ${appState === 'inserting' && selectedMedia === 'vinyl' ? 'scale-125 translate-y-20 z-50' : ''}`}>
               <VinylRecord onClick={() => handleMediaClick('vinyl')} className="w-40 h-40 md:w-64 md:h-64" />
               <p className="text-center text-slate-500 mt-4 text-xs md:text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">Vinyl</p>
            </div>

            {/* CD */}
            <div className={`transition-all duration-1000 ${appState === 'inserting' && selectedMedia !== 'cd' ? 'opacity-0 scale-50 blur-sm' : ''} ${appState === 'inserting' && selectedMedia === 'cd' ? 'scale-125 translate-y-20 z-50' : ''}`}>
               <CompactDisc onClick={() => handleMediaClick('cd')} className="w-40 h-40 md:w-56 md:h-56" />
               <p className="text-center text-slate-500 mt-4 text-xs md:text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">CD</p>
            </div>

            {/* MiniDisc */}
            <div className={`transition-all duration-1000 ${appState === 'inserting' && selectedMedia !== 'minidisc' ? 'opacity-0 scale-50 blur-sm' : ''} ${appState === 'inserting' && selectedMedia === 'minidisc' ? 'scale-125 -translate-y-10 z-50' : ''}`}>
               <MiniDisc onClick={() => handleMediaClick('minidisc')} className="w-32 h-32 md:w-48 md:h-48" />
               <p className="text-center text-slate-500 mt-4 text-xs md:text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">MiniDisc</p>
            </div>

            {/* Cassette */}
            <div className={`transition-all duration-1000 ${appState === 'inserting' && selectedMedia !== 'cassette' ? 'opacity-0 scale-50 blur-sm' : ''} ${appState === 'inserting' && selectedMedia === 'cassette' ? 'scale-125 -translate-y-10 z-50' : ''}`}>
               <CassetteTape onClick={() => handleMediaClick('cassette')} className="w-40 h-24 md:w-64 md:h-40" />
               <p className="text-center text-slate-500 mt-4 text-xs md:text-sm font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100">Cassette</p>
            </div>

          </div>

          {/* Scroll Down Indicator (Only visible in normal intro state) */}
          {appState === 'intro' && (
            <div 
              className="absolute bottom-10 flex flex-col items-center text-slate-400/60 hover:text-white cursor-pointer transition-colors animate-bounce"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
            >
              <span className="text-xs font-bold uppercase tracking-widest mb-2">Learn More</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          )}

          {/* Loading Overlay during insertion */}
          {appState === 'inserting' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-500 rounded-xl">
               <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                  <h2 className="text-2xl font-mono text-white animate-pulse tracking-wide">{loadingText}</h2>
               </div>
            </div>
          )}
        </div>

        {/* DETAILS SECTION (Below Fold) */}
        {appState === 'intro' && (
          <LandingPage onTryDemo={handleScrollToTop} />
        )}

      </div>

      {/* 
        LIBRARY INTERFACE 
        Fades in after animation, taking over screen
      */}
      <div 
        className={`fixed inset-0 bg-gray-100 z-50 transition-all duration-1000 transform 
          ${appState === 'library' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95 pointer-events-none'}
        `}
      >
        <LibraryDashboard />
        
        {/* Eject / Back button */}
        <button 
          onClick={() => {
            setAppState('intro');
            // Slight delay to ensure DOM is ready for scroll reset if needed, mostly handled by layout change
            setTimeout(() => window.scrollTo({ top: 0 }), 100);
          }}
          className="absolute bottom-4 left-4 z-50 bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg hover:bg-slate-700 transition-colors opacity-50 hover:opacity-100 flex items-center gap-2"
        >
          <span className="text-lg leading-none">⏏</span> Eject Media
        </button>
      </div>

    </div>
  );
};

export default App;
