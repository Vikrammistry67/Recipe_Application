import { useForm } from 'react-hook-form';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {

    const isEmailAlreadyRegistered = await axios.get(`http://localhost:3000/users?email=${data.email}`);
    if (isEmailAlreadyRegistered.data.length > 0) {
      toast.error("EMAIL ALREADY IN USE.");
      return;
    }

    const isUsernameTaken = await axios.get(`http://localhost:3000/users?username=${data.username}`);
    if (isUsernameTaken.data.length > 0) {
      toast.error("USERNAME TAKEN.");
      return;
    }

    const isPasswordWeak = data.password.length < 8;
    if (isPasswordWeak) {
      toast.error("PASSWORD TOO WEAK.");
      return;
    }



    try {
      const response = await axios.post(`http://localhost:3000/users`, { id: nanoid(), ...data });
      toast.success("ID CREATED. PROCEED.", {
        style: { background: '#000', color: '#10b981', border: '1px solid #10b981' }
      });
      navigate('/login');
      reset();
    } catch (error) {
      toast.error("PROTOCOL FAILED.");
    }
  };

  return (
    <div style={{ paddingTop: '90px' }} className="min-h-screen  w-full bg-[#020202] flex items-center justify-center p-4 md:p-10 relative overflow-hidden font-sans">

      <div className="hidden md:block absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[150px] rounded-full"></div>
      <div className="hidden md:block absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/[0.03] blur-[150px] rounded-full"></div>

      <div className="w-full max-w-[480px]  relative z-10 animate-in fade-in zoom-in duration-700">
        <div className="bg-zinc-900/40 backdrop-blur-3xl p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/[0.05] shadow-2xl">

          {/* Header Area */}
          <header className="mb-10  text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-white">Join Us.</h1>
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-500">Initiating Neural Link // v4.0</p>
          </header>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">

            {/* INPUT FIELD COMPONENT (Username) */}
            <div className="group ">
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-emerald-500 transition-colors">Identification</label>
                {errors.username && <span className="text-[8px] font-bold text-red-500 uppercase tracking-tighter">Required</span>}
              </div>
              <input
                className="w-full h-14 md:h-16 bg-black/40 border border-white/5 rounded-2xl md:rounded-[1.4rem] px-6 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-zinc-800"
                {...register('username', { required: true, minLength: 8 })}
                type="text"
                placeholder="Username"
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="group ">
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-emerald-500 transition-colors">Digital Mail</label>
                {errors.email && <span className="text-[8px] font-bold text-red-500 uppercase tracking-tighter">Invalid</span>}
              </div>
              <input
                className="w-full h-14 md:h-16 bg-black/40 border border-white/5 rounded-2xl md:rounded-[1.4rem] px-6 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-zinc-800"
                {...register('email', { required: true })}
                type="email"
                placeholder="Email Address"
              />
            </div>

            {/* PASSWORD FIELD */}
            <div className="group ">
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500 group-focus-within:text-emerald-500 transition-colors">Secret Key</label>
                {errors.password && <span className="text-[8px] font-bold text-red-500 uppercase tracking-tighter">Too Short</span>}
              </div>
              <input
                className="w-full h-14 md:h-16 bg-black/40 border border-white/5 rounded-2xl md:rounded-[1.4rem] px-6 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:bg-black/80 transition-all placeholder:text-zinc-800"
                {...register('password', { required: true, minLength: 8 })}
                type="password"
                placeholder="Password"
              />
            </div>

            {/* ACTION BUTTON (ADAPTIVE) */}
            <div className="pt-6">
              <button
                type='submit'
                className="group cursor-pointer relative w-full h-14 md:h-16 bg-white rounded-2xl overflow-hidden active:scale-[0.97] transition-all duration-300 shadow-xl shadow-white/5"
              >
                <div className="relative cursor-pointer z-10 flex items-center justify-center gap-3 text-black text-[11px] font-black uppercase tracking-[0.4em]">
                  Initialize
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-emerald-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </div>
          </form>

          {/* REDIRECT LINK */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Authorized?</span>
            <Link to="/login" className="text-[9px] font-black text-white hover:text-emerald-500 uppercase tracking-widest border-b border-white/10 hover:border-emerald-500 transition-all">Sign In</Link>
          </div>
        </div>

        {/* MOBILE FOOTER TAGline */}
        <p className="mt-8 text-center text-[8px] text-zinc-700 font-black uppercase tracking-[0.6em] opacity-40 px-4">
          Encrypted Connection Secure // 2026 Aurum Systems
        </p>
      </div>
    </div>
  );
};

export default Register;