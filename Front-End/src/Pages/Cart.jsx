import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart`);
      setCartItems(response.data);
    } catch (error) { console.log(error); }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${id}`);
      setCartItems(cartItems.filter((item) => item.id !== id));
      toast.success("REMOVED", {
        style: { background: '#111', color: '#fff', border: '1px solid #333' }
      });
    } catch (error) { toast.error("Error"); }
  };

  useEffect(() => { getCartItems() }, []);

  const subtotal = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0), 0);

  return (
    <div className="min-h-screen w-full bg-[#000] text-white p-4 md:p-10 font-sans selection:bg-emerald-500">

      {/* 1. DARK GRADIENT MESH (Top corner glow) */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] -z-10"></div>

      <div className="max-w-[1200px] mx-auto pt-10">

        {/* HEADER: Brutalist Style */}
        <div className="flex flex-col mb-12">
          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none italic opacity-20">My Bag</h1>
          <div className="flex items-center gap-4 -mt-6 md:-mt-10 ml-1">
            <span className="h-3 w-3 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-500">Inventory Status: {cartItems.length} Loaded</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SIDE: THE BENTO CARDS */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="group relative bg-zinc-900/40 border border-white/5 p-4 md:p-6 rounded-[2rem] flex items-center gap-6 hover:bg-zinc-900 transition-all duration-500 overflow-hidden">

                  {/* Image with Tilt-Hover */}
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] overflow-hidden bg-black flex-shrink-0 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                    <img src={item.recipeImage} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000" alt="" />
                  </div>

                  {/* Content Grid */}
                  <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-3xl font-black tracking-tighter uppercase italic group-hover:text-emerald-400 transition-colors">
                        {item.recipeName}
                      </h3>
                      <p className="text-[9px] text-zinc-500 font-black uppercase tracking-widest leading-none flex items-center gap-2">
                        <span className="w-4 h-[1px] bg-zinc-800"></span> Chef {item.chefName}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-2xl font-black tracking-tighter text-white">₹{item.price}</span>
                      <button
                        onClick={() => deleteHandler(item.id)}
                        className="bg-zinc-800 hover:bg-red-500/20 hover:text-red-500 p-4 rounded-2xl transition-all active:scale-90"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                      </button>
                    </div>
                  </div>

                  {/* Aesthetic Scan-line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out"></div>
                </div>
              ))
            ) : (
              <div className="h-60 flex items-center justify-center border border-dashed border-zinc-800 rounded-[3rem]">
                <p className="text-zinc-700 font-black uppercase tracking-[1em] text-xs">System_Empty</p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: THE COMMAND CENTER */}
          <aside className="lg:col-span-4 lg:sticky lg:top-10">
            <div className="bg-zinc-900 border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group/summary">

              {/* Subtle Animated Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/20 blur-3xl group-hover/summary:w-full transition-all duration-1000"></div>

              <div className="relative z-10 space-y-10">
                <div className="space-y-1">
                  <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Checkout_Summary</h2>
                  <div className="h-1 w-10 bg-emerald-500"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-zinc-400">
                    <span>Tax // Fees</span>
                    <span className="text-emerald-500">₹0.00</span>
                  </div>

                  <div className="pt-10 border-t border-white/10">
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] mb-2">Total Amount Due</p>
                    <h2 className="text-6xl font-black tracking-tighter italic group-hover:text-emerald-400 transition-colors">
                      ₹{subtotal}
                    </h2>
                  </div>
                </div>

                {/* THE "HARD-LOOK" BUTTON */}
                <button className="relative w-full py-6 bg-emerald-500 text-black font-black uppercase tracking-[0.3em] text-[12px] rounded-2xl overflow-hidden active:scale-95 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/50">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Execute Payment
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                  {/* Subtle Shine */}
                  <div className="absolute inset-0 bg-white/20 -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
                </button>

                <p className="text-center text-[8px] font-black text-zinc-700 uppercase tracking-[0.6em]">Encrypted_Stream_v4.2</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Cart;