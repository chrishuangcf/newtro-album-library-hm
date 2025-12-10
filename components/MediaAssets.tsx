import React from 'react';

// Common prop for hover/click effects
interface AssetProps {
  className?: string;
  onClick?: () => void;
}

export const VinylRecord: React.FC<AssetProps> = ({ className, onClick }) => (
  <div 
    onClick={onClick}
    className={`group relative cursor-pointer w-64 h-64 md:w-80 md:h-80 transition-transform duration-500 hover:scale-105 hover:rotate-3 ${className}`}
  >
    {/* Shadow */}
    <div className="absolute top-6 left-6 w-full h-full rounded-full bg-black/40 blur-2xl"></div>
    
    {/* Main Record */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-900 bg-black shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80" 
        alt="Vinyl Record" 
        className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
      />
      
      {/* Center Label Simulation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-1/3 h-1/3 bg-yellow-600/90 rounded-full border-[6px] border-black/80 flex items-center justify-center backdrop-blur-sm">
           <div className="w-3 h-3 bg-black rounded-full"></div>
           <span className="absolute bottom-2 text-[6px] md:text-[8px] font-bold text-black/60 uppercase tracking-widest">Newtro</span>
        </div>
      </div>

       {/* Reflection/Sheen */}
       <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none rounded-full"></div>
    </div>
  </div>
);

export const CassetteTape: React.FC<AssetProps> = ({ className, onClick }) => (
  <div 
    onClick={onClick}
    className={`group cursor-pointer relative w-72 h-48 md:w-80 md:h-52 transition-transform duration-500 hover:scale-105 hover:-rotate-2 ${className}`}
  >
     {/* Shadow */}
    <div className="absolute top-4 left-4 w-full h-full bg-black/40 blur-xl rounded-xl"></div>

    {/* Cassette Body - Clear Denon Style (Pure CSS/SVG) */}
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-slate-400/20 backdrop-blur-[2px] border-2 border-slate-300/30 flex flex-col items-center p-2 box-border">
      
      {/* Screws */}
      <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-slate-300 shadow-inner"></div>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-slate-300 shadow-inner"></div>
      <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-slate-300 shadow-inner"></div>
      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-slate-300 shadow-inner"></div>
      <div className="absolute bottom-4 left-[50%] -translate-x-1/2 w-2 h-2 rounded-full bg-slate-300 shadow-inner"></div>

      {/* Gold Label Area */}
      <div className="w-[92%] h-[60%] mt-2 relative bg-[#d4af37] rounded-sm shadow-sm overflow-hidden border border-yellow-700/20">
         {/* Gold Gradient Texture */}
         <div className="absolute inset-0 bg-gradient-to-b from-[#e5c55b] via-[#d4af37] to-[#b38f26]"></div>
         {/* Horizontal Lines */}
         <div className="absolute top-3 w-full h-[1px] bg-yellow-800/20"></div>
         <div className="absolute top-4 w-full h-[1px] bg-yellow-800/20"></div>
         
         <div className="absolute bottom-3 w-full h-[1px] bg-yellow-800/20"></div>
         <div className="absolute bottom-4 w-full h-[1px] bg-yellow-800/20"></div>

         {/* White Writing Area */}
         <div className="absolute top-1.5 left-2 w-[60%] h-8 bg-white/90 rounded-sm"></div>

         {/* Side Labels */}
         <div className="absolute top-2 right-2 text-[8px] font-mono text-black/70">JAPAN</div>
         <div className="absolute top-6 right-8 text-[8px] font-mono text-black/70">NR( )</div>

         {/* "A" Side Marker */}
         <div className="absolute bottom-4 left-4 text-2xl font-bold text-black/80 font-sans">A</div>

         {/* Brand Name */}
         <div className="absolute bottom-3 left-14 text-lg font-bold text-black/80 tracking-wide font-sans">DENON</div>
         
         {/* Type Info */}
         <div className="absolute bottom-4 right-16 text-[6px] font-bold text-black/60 uppercase tracking-tighter">NORMAL POSITION (TYPE I)</div>
         <div className="absolute bottom-3 right-2 text-xl font-bold text-black/80 tracking-tighter">DX1/90</div>

         {/* Window Cutout Background (Darker part behind reels) */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[50%] bg-zinc-800 rounded-md border border-zinc-600 flex items-center justify-between px-2">
            {/* Left Reel */}
            <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-300 relative animate-[spin_4s_linear_infinite_paused] group-hover:animate-[spin_4s_linear_infinite_running]">
               <div className="absolute inset-0 border-[3px] border-dashed border-slate-400 rounded-full"></div>
            </div>
             {/* Tape Window center */}
             <div className="w-16 h-8 bg-black/40 border border-white/10 mx-1 relative">
                {/* Tape remaining amount simulation */}
                <div className="absolute left-0 top-0 h-full w-[40%] bg-stone-700/90 rounded-r-md"></div>
                <div className="absolute right-0 top-0 h-full w-[20%] bg-stone-700/90 rounded-l-md"></div>
             </div>
            {/* Right Reel */}
            <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-300 relative animate-[spin_4s_linear_infinite_paused] group-hover:animate-[spin_4s_linear_infinite_running]">
               <div className="absolute inset-0 border-[3px] border-dashed border-slate-400 rounded-full"></div>
            </div>
         </div>
      </div>

      {/* Bottom Trapezoid Area (Head Access) */}
      <div className="w-[70%] h-[15%] mt-1 border-t-2 border-slate-400/20 relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-300/10"></div>
          {/* Holes */}
          <div className="absolute top-2 left-4 w-3 h-3 rounded-full bg-black/20 shadow-inner"></div>
          <div className="absolute top-2 right-4 w-3 h-3 rounded-full bg-black/20 shadow-inner"></div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-3 bg-zinc-300/50 rounded-sm"></div>
      </div>

      {/* Reflection */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/10 pointer-events-none rounded-xl"></div>
    </div>
  </div>
);

export const MiniDisc: React.FC<AssetProps> = ({ className, onClick }) => (
  <div 
    onClick={onClick}
    className={`group cursor-pointer relative w-56 h-56 md:w-64 md:h-64 transition-transform duration-500 hover:scale-105 hover:rotate-2 ${className}`}
  >
     {/* Shadow */}
    <div className="absolute top-4 left-4 w-full h-full bg-black/40 blur-xl rounded-md"></div>

    {/* MiniDisc Body - Recreating the CLEAR SONY MD Look */}
    {/* Outer Shell: Transparent Plastic */}
    <div className="relative w-full h-full rounded-md overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center">
      
      {/* The Disc Inside (Visible through clear case) */}
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-slate-200 via-slate-100 to-slate-300 shadow-md border border-slate-300/50">
             {/* Rainbow reflection on disc surface */}
             <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-blue-300/20 to-purple-400/30"></div>
         </div>
      </div>

      {/* Hub */}
      <div className="absolute w-[25%] h-[25%] rounded-full bg-slate-300 border border-slate-400/50 shadow-inner z-10 flex items-center justify-center">
          <div className="w-[40%] h-[40%] bg-blue-900/80 rounded-full"></div>
      </div>

      {/* Metal Shutter (Right Side) */}
      <div className="absolute top-0 right-4 w-[20%] h-full bg-gradient-to-r from-slate-300 to-slate-100 border-l border-white/50 shadow-lg z-20 opacity-90"></div>

      {/* Handwritten Label (Left Side) */}
      <div className="absolute top-4 left-4 w-[60%] h-[65%] bg-white/90 shadow-sm rounded-sm z-30 overflow-hidden transform -rotate-1 border border-slate-200">
         <div className="p-2">
           <div className="w-full h-full text-[8px] md:text-[10px] leading-tight text-slate-700 opacity-80" style={{fontFamily: 'cursive'}}>
             MISIA GREATEST HITS<br/>
             INTO THE LIGHT<br/>
             THE GLORY DAY<br/>
             BELIEVE<br/>
             FOR DIGITAL RECORDING
           </div>
         </div>
      </div>

      {/* "74" or "80" minute mark */}
      <div className="absolute top-4 right-6 z-30 text-slate-400 font-bold text-lg md:text-xl tracking-tighter mix-blend-multiply">80</div>

      {/* Logo */}
      <div className="absolute bottom-3 left-4 z-30 text-[8px] font-bold text-slate-500 tracking-widest border border-slate-400 px-1 rounded">MD</div>
    </div>
  </div>
);

export const CompactDisc: React.FC<AssetProps> = ({ className, onClick }) => (
  <div 
    onClick={onClick}
    className={`group cursor-pointer relative w-60 h-60 md:w-72 md:h-72 transition-transform duration-500 hover:scale-105 hover:rotate-6 ${className}`}
  >
     {/* Shadow */}
    <div className="absolute top-4 left-4 w-full h-full bg-black/40 blur-xl rounded-full"></div>

    {/* CD Body */}
    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-white/20 bg-slate-300">
      <img 
        src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=800&q=80" 
        alt="Compact Disc" 
        className="w-full h-full object-cover transform scale-110"
      />
       {/* Center Hole */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full border-4 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)] backdrop-blur-md"></div>
        {/* The 'hole' itself represented by dark background showing through */}
        <div className="absolute w-4 h-4 md:w-5 md:h-5 bg-neutral-900 rounded-full"></div>
      </div>
      
      {/* Rainbow Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-full mix-blend-color-dodge opacity-50 group-hover:opacity-80 transition-opacity"></div>
    </div>
  </div>
);
