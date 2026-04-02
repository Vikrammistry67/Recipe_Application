import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900 pt-16 pb-8 px-6 md:px-12 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Identity */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-amber-500 rounded-full flex items-center justify-center">
                <span className="text-amber-500 font-serif text-xs">A</span>
              </div>
              <h2 className="text-xl font-serif tracking-[0.2em] text-white uppercase">AURUM</h2>
            </div>
            <p className="text-zinc-500 text-[11px] leading-relaxed tracking-wider uppercase font-medium italic opacity-60">
              Crafting timeless culinary experiences through digital innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-zinc-100 font-black text-[10px] tracking-[0.4em] uppercase mb-6">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-zinc-500 hover:text-amber-500 text-[11px] uppercase tracking-widest transition-colors duration-300">Recipes</Link></li>
              <li><Link to="/cart" className="text-zinc-500 hover:text-amber-500 text-[11px] uppercase tracking-widest transition-colors duration-300">Your Bag</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-zinc-100 font-black text-[10px] tracking-[0.4em] uppercase mb-6">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-zinc-500 hover:text-amber-500 text-[11px] uppercase tracking-widest transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link to="/" className="text-zinc-500 hover:text-amber-500 text-[11px] uppercase tracking-widest transition-colors duration-300">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div className="space-y-4">
            <h3 className="text-zinc-100 font-black text-[10px] tracking-[0.4em] uppercase mb-6">Connect</h3>
            <div className="flex gap-4">
              {['Instagram', 'Twitter'].map((social) => (
                <a key={social} href="#" className="text-zinc-500 hover:text-white text-[11px] uppercase tracking-widest border-b border-zinc-800 pb-1 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Signature */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.4em]">
            © 2026 AURUM STUDIO. All Rights Reserved.
          </p>

          {/* Subtle Aesthetic Touch */}
          <div className="flex items-center gap-4 opacity-30">
            <div className="h-[1px] w-12 bg-zinc-700"></div>
            <span className="text-[8px] text-zinc-500 uppercase tracking-[0.8em] italic">Established 2024</span>
            <div className="h-[1px] w-12 bg-zinc-700"></div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer