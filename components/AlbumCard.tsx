import React from 'react';
import { Album } from '../types';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  // Map badge color to tailwind classes
  const badgeColors: Record<string, string> = {
    yellow: 'bg-yellow-400 text-yellow-900',
    blue: 'bg-blue-400 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-400 text-white',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col group cursor-pointer border border-slate-200/60">
      {/* Top Image Section */}
      <div className="relative aspect-square w-full bg-slate-200 overflow-hidden">
        {/* Album Art */}
        {album.coverUrl ? (
          <img src={album.coverUrl} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-300">
            <div className="w-16 h-16 rounded-full border-4 border-slate-100"></div>
          </div>
        )}

        {/* Format Badge (Top Left) */}
        <div className={`absolute top-3 left-3 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide ${badgeColors[album.formatColor] || 'bg-gray-400 text-white'}`}>
          {album.format}
        </div>

        {/* Folder Icon (Top Left next to badge) */}
        <div className="absolute top-3 left-14 text-yellow-400 drop-shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
          </svg>
        </div>

        {/* Menu Icon (Top Right) */}
        <div className="absolute top-3 right-3 text-white/90 hover:text-white cursor-pointer bg-black/20 hover:bg-black/40 rounded-full p-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </div>

        {/* Center Disc Overlay (visible on hover or default style) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white"></div>
           </div>
        </div>

        {/* Hi-Res Badge (Bottom Right) */}
        {album.isHiRes && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-yellow-500/50 flex flex-col items-center leading-tight">
             <span>Hi-Res</span>
             <span className="text-[8px] text-white">AUDIO</span>
          </div>
        )}
        
        {/* Title Overlay for some cards (Optional, based on design) */}
        {album.artist === 'David Elias' && (
           <div className="absolute bottom-3 left-3 text-white text-xs drop-shadow-md font-medium">
             {album.artist} ~ Crossing
           </div>
        )}
      </div>

      {/* Details Section */}
      <div className="p-3 bg-white flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1 truncate">{album.format}</h3>
          <p className="text-slate-500 text-xs truncate">{album.artist}</p>
        </div>
        
        <div className="flex items-center text-[10px] text-slate-400 mt-3 font-medium">
          <span>{album.tracks} tracks</span>
          <span className="mx-1.5">•</span>
          <span>{album.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
