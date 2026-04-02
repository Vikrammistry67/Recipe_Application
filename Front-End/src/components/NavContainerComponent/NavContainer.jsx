import Logo from '../NavComponent/Logo';
import Navbar from '../NavComponent/Navbar';

const NavContainer = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[999] px-4 md:px-10 py-4">
      <div className="max-w-7xl mx-auto h-[10vh] flex items-center justify-between px-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] transition-all duration-500 hover:bg-zinc-900/60 hover:border-emerald-500/20 group">

        {/* Logo Section with subtle scale effect */}
        <div className="flex items-center transform transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Navbar Section */}
        <div className="flex items-center">
          <Navbar />
        </div>

        {/* Optional: Add a "Call to Action" or Glow effect on the side */}
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default NavContainer;