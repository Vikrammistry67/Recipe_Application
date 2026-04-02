import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center gap-6 group cursor-pointer select-none">

      {/* The Monogram: Luxury Hotel Seal */}
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Outer Thin Circle */}
        <div className="absolute inset-0 border-[0.5px] border-zinc-700 rounded-full group-hover:border-amber-500/50 group-hover:scale-110 transition-all duration-700"></div>

        {/* Inner Decorative Frame */}
        <div className="w-9 h-9 border-[1px] border-zinc-800 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-1000">
          <span className="text-amber-500 font-serif text-xl font-light tracking-tighter group-hover:scale-110 transition-transform">
            A
          </span>
        </div>

        {/* Floating Accent Dots */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-top-2"></div>
      </div>

      {/* Brand Typography: High-End Serif */}
      <div className="flex flex-col">
        <h1 className="text-2xl font-light tracking-[0.3em] text-zinc-100 font-serif uppercase leading-none group-hover:text-amber-500 transition-colors duration-500">
          AURUM
        </h1>

        <div className="flex items-center gap-2 mt-2">
          <div className="h-[0.5px] w-4 bg-zinc-800 group-hover:w-8 group-hover:bg-amber-800 transition-all duration-700"></div>
          <span className="text-[8px] font-medium tracking-[0.6em] text-zinc-500 uppercase">
            Culinary House
          </span>
        </div>
      </div>

      {/* Hover Background Blur (The "Aura") */}
      <div className="absolute -inset-10 bg-amber-900/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"></div>
    </div>
  )
}

export default Logo