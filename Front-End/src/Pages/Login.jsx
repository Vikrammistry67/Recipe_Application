import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { RecipeCon } from '../context/RecipeContext/RecipeContext';
import { nanoid } from 'nanoid';

const Login = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(RecipeCon);

  const submitHandler = async (data) => {
    login({ ...data, id: nanoid() });
    navigate('/');
    reset();
  };

  return (
    <div className="h-screen pt-32 w-full bg-[#020202] flex items-center justify-center p-4 overflow-hidden font-sans selection:bg-blue-500/30">

      {/* Background Deep Pulse */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/[0.05] blur-[150px] rounded-full animate-pulse"></div>

      <div className="w-full max-w-[290px] relative animate-in fade-in zoom-in duration-700">

        {/* Glass Card Container */}
        <div className="bg-zinc-900/40 w-[26vw] backdrop-blur-3xl p-7 md:p-9 rounded-[2.2rem] border border-white/[0.07] shadow-2xl relative overflow-hidden group">

          <header className="mb-8 relative">
            <div className="flex items-center gap-2">
              <div className="h-4 w-[2px] bg-blue-500"></div>
              <h1 className="text-xl font-black tracking-tighter text-white uppercase italic">Login_</h1>
            </div>
            <p className="text-[6px] font-black uppercase tracking-[0.5em] text-zinc-600 mt-2">Neural_Secure_v4.0</p>
          </header>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">

            {/* Input Group */}
            <div className="space-y-5">
              <div className="group relative">
                <input
                  {...register('email', { required: true })}
                  className="peer w-full bg-transparent border-b border-zinc-800 py-2 text-[11px] text-zinc-200 focus:outline-none focus:border-blue-500 transition-all duration-500 placeholder-transparent"
                  type="email" placeholder="Mail" id="email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3 text-[7px] font-black uppercase tracking-[0.3em] text-zinc-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-[9px] peer-focus:-top-3 peer-focus:text-blue-500">System_Mail</label>
              </div>

              <div className="group relative">
                <input
                  {...register('password', { required: true, minLength: 8 })}
                  className="peer w-full bg-transparent border-b border-zinc-800 py-2 text-[11px] text-zinc-200 focus:outline-none focus:border-blue-500 transition-all duration-500 placeholder-transparent"
                  type="password" placeholder="Pass" id="pass"
                />
                <label htmlFor="pass" className="absolute left-0 -top-3 text-[7px] font-black uppercase tracking-[0.3em] text-zinc-700 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-[9px] peer-focus:-top-3 peer-focus:text-blue-500">Access_Key</label>
              </div>
            </div>

            {/* Role Toggle */}
            <div className="flex bg-black/50 p-1 rounded-xl border border-white/[0.03] shadow-inner">
              <label className="flex-1 cursor-pointer">
                <input type='radio' className="peer hidden" {...register('role', { required: true })} value='user' />
                <div className="py-2 text-center text-[7px] font-black uppercase tracking-widest text-zinc-600 peer-checked:bg-white peer-checked:text-black peer-checked:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-lg transition-all duration-500">User</div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input type='radio' className="peer hidden" {...register('role', { required: true })} value='admin' />
                <div className="py-2 text-center text-[7px] font-black uppercase tracking-widest text-zinc-600 peer-checked:bg-white peer-checked:text-black peer-checked:shadow-[0_0_20px_rgba(255,255,255,0.1)] rounded-lg transition-all duration-500">Admin</div>
              </label>
            </div>

            {/* THE KILLER BUTTON: Ultra-Premium Interaction */}
            <div className="pt-4">
              <button
                type='submit'
                className="group relative w-full h-12 bg-white rounded-xl overflow-hidden active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-blue-500/20"
              >
                {/* Button Text Layer */}
                <div className="relative z-10 flex items-center justify-center gap-3 text-black text-[10px] font-black uppercase tracking-[0.4em] group-hover:tracking-[0.6em] group-hover:text-white transition-all duration-500">
                  Initialize
                  <div className="w-1.5 h-[1px] bg-black group-hover:bg-white group-hover:w-4 transition-all"></div>
                </div>

                {/* Animated Background Reveal (Liquid Flow) */}
                <div className="absolute inset-0 bg-[#000] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.9, 0, 0.1, 1)]"></div>

                {/* Secondary Blue Glow Reveal */}
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 group-hover:scale-110 blur-xl transition-all duration-700 -z-0"></div>
              </button>
            </div>
          </form>

          {errors.role && <p className="mt-4 text-[6px] text-center text-red-500 font-black uppercase tracking-widest italic animate-pulse">Auth_Required</p>}
        </div>

        <p className="mt-6 text-center text-[5px] text-zinc-800 font-black uppercase tracking-[1.5em] opacity-40">
          VAULT_CORE_V4_2026
        </p>
      </div>
    </div>
  );
};

export default Login;