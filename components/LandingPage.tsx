import React, { useEffect, useState } from 'react';

const LandingPage: React.FC<{ onTryDemo: () => void }> = ({ onTryDemo }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll position to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-800 relative z-20 shadow-2xl rounded-t-[3rem] mt-[-2rem] border-t border-white/10">
      
      {/* Product Highlight Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
            Version 2.0 Now Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Your Physical Collection,<br/> <span className="text-blue-600">Digitized Perfectly.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Newtro Library bridges the gap between retro physical media and modern digital convenience. 
            Organize your Vinyl, Cassettes, MiniDiscs, and CDs with rich metadata, cover art, and high-fidelity playback.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-32">
          <Feature 
            title="Auto Metadata" 
            desc="Automatically matches CDs and digital files with MusicBrainz database for accurate tags, artwork, and tracklists."
            icon={<SearchIcon />}
          />
          <Feature 
            title="Hi-Res Audio" 
            desc="Bit-perfect playback support up to 24bit/384kHz via USB-DAC with exclusive mode handling and Clarity Audio upsampling."
            icon={<AudioIcon />}
          />
          <Feature 
            title="MiniDisc TOC" 
            desc="Full NetMD support to read, edit, and write Table of Contents (TOC) data directly from your Sony MiniDisc recorders."
            icon={<DiscIcon />}
          />
        </div>

        {/* Visual Showcase (Screenshots) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Beautiful, Functional Interface</h3>
            <p className="text-slate-500">Designed to be distinct, minimal, and focused on the music.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
             <Screenshot 
                title="Album Library" 
                src="https://picsum.photos/seed/library/800/600" 
                caption="Visual grid with format indicators (CD, Vinyl, Hi-Res)"
             />
             <Screenshot 
                title="Playback Control" 
                src="https://picsum.photos/seed/player/800/600" 
                caption="Clean playback interface with spectrum analyzer"
             />
             <Screenshot 
                title="TOC Editor" 
                src="https://picsum.photos/seed/editor/800/600" 
                caption="Manage MiniDisc tracks with drag-and-drop ease"
             />
             <Screenshot 
                title="Dark Mode" 
                src="https://picsum.photos/seed/dark/800/600" 
                caption="Easy on the eyes for late night listening sessions"
             />
          </div>
        </div>

        {/* Downloads */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Rediscover Your Music?</h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg">
              Download Newtro Library today. Completely open source and available for macOS and Windows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DownloadButton label="Download for macOS" sub="Universal .dmg" icon="apple" />
              <DownloadButton label="Download for Windows" sub="Installer .exe" icon="windows" />
            </div>
            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-slate-500">
               <span>v2.0.4 Stable</span>
               <span className="hidden md:inline">•</span>
               <span className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                 Open Source
               </span>
               <span className="hidden md:inline">•</span>
               <button onClick={onTryDemo} className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                 Scroll up to Try Demo
               </button>
            </div>
          </div>
          
          {/* Decorative BG */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-purple-900 to-slate-900"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
        </div>

        {/* Footer */}
        <div className="mt-24 text-center text-slate-400 text-sm">
           <p>© 2024 Newtro Library. Created for audio enthusiasts.</p>
        </div>

      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={onTryDemo}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-500 transition-all duration-300 transform ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>

    </div>
  );
};

// --- Sub Components ---

const Feature = ({title, desc, icon}: {title: string, desc: string, icon: React.ReactNode}) => (
  <div className="text-left p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100">
    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const Screenshot = ({title, src, caption}: {title: string, src: string, caption: string}) => (
  <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 group bg-slate-50">
    <div className="bg-white p-3 border-b border-slate-100 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-red-400 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-yellow-400 transition-colors"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-200 group-hover:bg-green-400 transition-colors"></div>
      </div>
      <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{title}</span>
      <div className="w-8"></div> {/* Spacer for centering */}
    </div>
    <div className="overflow-hidden relative">
        <img src={src} alt={title} className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm font-medium">{caption}</p>
        </div>
    </div>
  </div>
);

const DownloadButton = ({label, sub, icon}: {label: string, sub: string, icon: 'apple' | 'windows'}) => (
  <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center sm:justify-start gap-4 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
    <div className="text-2xl text-slate-800 group-hover:text-blue-600 transition-colors">
      {icon === 'apple' ? (
          <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
      ) : (
          <svg viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z"/></svg>
      )}
    </div>
    <div className="text-left">
      <div className="text-base leading-none mb-1 text-slate-900">{label}</div>
      <div className="text-xs text-slate-500 font-normal">{sub}</div>
    </div>
  </button>
);

// Icons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const AudioIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
);

const DiscIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
  </svg>
);

export default LandingPage;
