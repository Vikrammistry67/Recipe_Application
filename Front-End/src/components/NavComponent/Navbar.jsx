import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RecipeCon } from '../../context/RecipeContext/RecipeContext'

const Navbar = () => {
    const { user, logout, cartItems } = useContext(RecipeCon);
    const logoutHandler = () => logout();

    const cartCount = cartItems?.length || 0;

    return (
        <nav className='flex items-center justify-between lg:justify-end gap-3 sm:gap-6 md:gap-10 w-full px-2 sm:px-4'>

            {/* Nav Links Container - Mobile pe Scrollable, Desktop pe Fixed */}
            <div className='flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-2'>
                {/* Recipes */}
                <NavLink
                    className={({ isActive }) => isActive
                        ? 'whitespace-nowrap text-amber-500 font-bold tracking-widest text-[10px] sm:text-[11px] uppercase border-b-2 border-amber-500 pb-1'
                        : 'whitespace-nowrap text-zinc-400 hover:text-white transition-all duration-300 font-medium tracking-widest text-[10px] sm:text-[11px] uppercase'
                    }
                    to='/'
                >
                    Recipes
                </NavLink>

                {/* Admin Access */}
                {user?.role === 'admin' && (
                    <NavLink
                        className={({ isActive }) => isActive
                            ? 'whitespace-nowrap text-amber-500 font-bold tracking-widest text-[11px] uppercase border-b-2 border-amber-500 pb-1'
                            : 'whitespace-nowrap text-zinc-400 hover:text-white transition-all duration-300 font-medium tracking-widest text-[11px] uppercase'
                        }
                        to='/addRecipe'
                    >
                        Add
                    </NavLink>
                )}

                {/* Register/Auth */}
                {!user && (
                    <NavLink
                        className={({ isActive }) => isActive
                            ? 'whitespace-nowrap text-amber-500 font-bold tracking-widest text-[11px] uppercase border-b-2 border-amber-500 pb-1'
                            : 'text-zinc-400 hover:text-white transition-all duration-300 font-medium tracking-widest text-[11px] uppercase'
                        }
                        to='/register'
                    >
                        Join
                    </NavLink>
                )}

                {/* Login/Logout Logic */}
                <NavLink
                    className={({ isActive }) => isActive
                        ? 'whitespace-nowrap text-amber-500 font-bold tracking-widest text-[11px] uppercase border-b-2 border-amber-500 pb-1'
                        : 'whitespace-nowrap text-zinc-400 hover:text-white transition-all duration-300 font-medium tracking-widest text-[11px] uppercase'
                    }
                    to='/login'
                >
                    {user ? (
                        <span onClick={logoutHandler} className="cursor-pointer">Logout</span>
                    ) : (
                        <span>Login</span>
                    )}
                </NavLink>
            </div>

            {/* --- RESPONSIVE CART BUTTON --- */}
            <NavLink
                to='/cart'
                className={({ isActive }) => isActive
                    ? 'relative bg-amber-500 text-black px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-black tracking-widest text-[9px] sm:text-[10px] uppercase shadow-lg shadow-amber-500/20 active:scale-95 transition-all'
                    : 'relative border border-zinc-800 text-zinc-300 px-5 sm:px-8 py-2 sm:py-2.5 rounded-full font-black tracking-widest text-[9px] sm:text-[10px] uppercase hover:bg-white hover:text-black transition-all duration-500 active:scale-95 group/cart'
                }
            >
                <div className="flex items-center gap-2">
                    <span className="hidden xs:inline">Cart</span>
                    {/* Minimal Cart Icon for very small screens */}
                    <svg className="w-3 h-3 xs:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>

                    {/* Pop Effect Badge */}
                    {cartCount > 0 && (
                        <span
                            key={cartCount}
                            className="absolute -top-1.5 -right-1 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-black text-[9px] sm:text-[10px] font-black border-2 border-[#080808] shadow-xl animate-[pop_0.3s_ease-out]"
                        >
                            {cartCount}
                        </span>
                    )}
                </div>
            </NavLink>

            {/* Mobile Animation Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes pop {
                    0% { transform: scale(0.6); opacity: 0; }
                    70% { transform: scale(1.25); }
                    100% { transform: scale(1); opacity: 1; }
                }
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            ` }} />
        </nav>
    )
}

export default Navbar;