import { useForm } from 'react-hook-form';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddRecipe = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(`http://localhost:3000/recipes`, { ...data, id: nanoid() });
      if (response.status === 201) {
        toast.success('ENTRY_LOCKED', {
          style: { background: '#000', color: '#10b981', fontSize: '9px', border: '1px solid #10b981' }
        });
        navigate('/');
        reset();
      }
    } catch (error) { console.log(error) }
  }

  return (
    <div className="min-h-screen w-full pt-32  bg-[#020202] flex items-center justify-center p-4 overflow-hidden font-sans">
      <div className="absolute w-[400px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full -z-10"></div>

      <div className="w-full max-w-[500px]  relative animate-in fade-in zoom-in-95 duration-700">
        <div className="bg-zinc-900/20 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/[0.05] shadow-2xl relative">

          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>

          <header className="mb-4 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-black italic tracking-tighter text-white uppercase leading-none">Draft_</h1>
              <p className="text-[6px] font-black uppercase tracking-[0.5em] text-emerald-500/40 mt-1">Archive_v4.0.1</p>
            </div>
            <div className="text-[5px] font-black text-zinc-700 uppercase tracking-widest border-l border-zinc-800 pl-2">Neural_Link</div>
          </header>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-2">
            {/* Row 1 & 2 */}
            <input {...register('recipeName')} className="w-full h-9 bg-black/40 border border-white/5 rounded-lg px-4 text-[10px] text-zinc-200 focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="text" placeholder="RECIPE_IDENTITY" />
            <input {...register('recipeImage')} className="w-full h-9 bg-black/40 border border-white/5 rounded-lg px-4 text-[10px] text-zinc-200 focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="text" placeholder="SOURCE_HASH_URL" />

            {/* Row 3: Grid pass lane ke liye gap-1.5 */}
            <div className="grid grid-cols-3 gap-1.5">
              <input {...register('chefName')} className="h-9 bg-black/40 border border-white/5 rounded-lg px-3 text-[10px] text-zinc-200 focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="text" placeholder="CHEF" />
              <select {...register('category')} className="h-9 bg-black/40 border border-white/5 rounded-lg px-2 text-[9px] font-black text-zinc-600 focus:outline-none focus:border-emerald-500/30 transition-all uppercase outline-none">
                <option value="">TYPE</option>
                <option value="breakfast">BRK</option>
                <option value="lunch">LNC</option>
                <option value="dinner">DNR</option>
              </select>
              <input {...register('time')} className="h-9 bg-black/40 border border-white/5 rounded-lg px-2 text-[10px] text-zinc-600 focus:outline-none focus:border-emerald-500/30 transition-all" type="time" />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-2 gap-1.5">
              <input {...register('price')} className="h-9 bg-black/40 border border-white/5 rounded-lg px-4 text-[10px] text-white focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="number" placeholder="VAL_CREDITS (₹)" />
              <input {...register('Ingredients')} className="h-9 bg-black/40 border border-white/5 rounded-lg px-4 text-[10px] text-zinc-200 focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="text" placeholder="CORE_COMPONENTS" />
            </div>

            {/* Row 5 */}
            <input {...register('description')} className="w-full h-9 bg-black/40 border border-white/5 rounded-lg px-4 text-[10px] text-zinc-200 focus:outline-none focus:border-emerald-500/30 transition-all placeholder:text-zinc-800" type="text" placeholder="DATA_DESCRIPTION_LOG" />

            {/* Action Button: Margin kam kar di pt-2 se */}
            <div className="pt-2">
              <button type='submit' className="group relative w-full h-10 bg-white rounded-xl overflow-hidden active:scale-95 transition-all shadow-xl">
                <span className="relative z-10 text-black text-[9px] font-black uppercase tracking-[0.4em] group-hover:text-white transition-colors duration-500">
                  <h1 className='cursor-pointer'> EXECUTE_SYNC</h1>
                </span>
                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          </form>
        </div>

        <p className="mt-4 text-center text-[5px] text-zinc-800 font-black uppercase tracking-[1em] opacity-30 px-4">
          AURUM_CORE_RECORDS_2026_//_SECURE_VAULT
        </p>
      </div>
    </div>
  )
}

export default AddRecipe;