import React from 'react';
import AlbumCard from './AlbumCard';
import { MOCK_ALBUMS } from '../constants';

const LibraryDashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-300/50 font-sans text-slate-800 animate-fadeIn">
      {/* Top Navigation Bar */}
      <div className="h-12 bg-white flex items-center px-4 border-b border-slate-200 shadow-sm z-20">
         <div className="flex space-x-1 h-full">
            <button className="px-4 h-full text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Home</button>
            <button className="px-4 h-full text-slate-800 font-bold text-sm border-b-2 border-orange-400">Album Library</button>
            <button className="px-4 h-full text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">TOC Editor</button>
            <button className="px-4 h-full text-slate-500 hover:text-slate-800 font-medium text-sm transition-colors">Settings</button>
         </div>
         <div className="ml-auto text-sm font-semibold text-slate-600">Newtro Metadata Catalog</div>
      </div>

      {/* Filter Toolbar */}
      <div className="h-16 bg-white mx-4 mt-4 rounded-lg shadow-sm flex items-center px-6 gap-6 z-10">
        
        {/* Slider */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-slate-800">Album Size:</span>
          <div className="relative w-32 h-2 bg-slate-200 rounded-full cursor-pointer group">
             <div className="absolute top-0 left-0 h-full w-1/3 bg-blue-500 rounded-full"></div>
             <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-4 h-4 bg-blue-600 rounded-full shadow border-2 border-white transform hover:scale-110 transition-transform"></div>
          </div>
          <span className="text-sm text-slate-500">Medium</span>
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-2">
           <span className="text-sm font-bold text-slate-800">Sort by:</span>
           <div className="relative">
              <select className="appearance-none bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm rounded py-1.5 pl-3 pr-8 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                 <option>Date Added</option>
                 <option>Artist</option>
                 <option>Title</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-2">
           <span className="text-sm font-bold text-slate-800">Filter by Tag:</span>
           <div className="relative">
              <select className="appearance-none bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm rounded py-1.5 pl-3 pr-8 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                 <option>All Albums</option>
                 <option>Rock</option>
                 <option>Jazz</option>
                 <option>Classical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-2">
           <span className="text-sm font-bold text-slate-800">Filter by Source:</span>
           <div className="relative">
              <select className="appearance-none bg-white border border-slate-300 hover:border-slate-400 text-slate-700 text-sm rounded py-1.5 pl-3 pr-8 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
                 <option>All Sources</option>
                 <option>CD</option>
                 <option>Vinyl</option>
                 <option>MiniDisc</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
           </div>
        </div>

      </div>

      {/* Main Grid Content */}
      <div className="flex-grow p-4 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
           {MOCK_ALBUMS.map((album) => (
             <AlbumCard key={album.id} album={album} />
           ))}
           {/* Empty slots to match visual density if needed */}
           <div className="min-h-[200px]"></div>
           <div className="min-h-[200px]"></div>
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <div className="h-6 bg-slate-200 flex items-center justify-between px-4 text-[10px] text-slate-500 border-t border-slate-300">
         <div>Ready</div>
         <div>Library Version 2.0.4</div>
      </div>
    </div>
  );
};

export default LibraryDashboard;
