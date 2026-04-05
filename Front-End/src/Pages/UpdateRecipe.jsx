import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react';
import { HiArrowLeft, HiSparkles } from 'react-icons/hi2';

const UpdateRecipe = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { register, reset, handleSubmit } = useForm();

    const getRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/recipes/${id}`);
            reset(response.data);
        } catch (error) {
            toast.error("Sync Failed");
        }
    }

    useEffect(() => { getRecipe() }, [id]);

    const submitHandler = async (data) => {
        try {
            const response = await axios.put(`http://localhost:3000/recipes/${id}`, { ...data });
            if (response.status === 200) {
                toast.success('Recipe Perfected');
                navigate('/');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="min-h-screen pt-[17vh] w-full bg-[#0c0c0c] text-zinc-300 flex items-center justify-center p-8 selection:bg-orange-500/30">

            {/* Background Aesthetic Glows */}
            <div className="fixed top-0 left-1/4 w-64 h-64 bg-orange-600/10 blur-[120px] pointer-events-none"></div>
            <div className="fixed bottom-0 right-1/4 w-64 h-64 bg-blue-600/5 blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[600px] z-10">

                {/* Header Section */}
                <div className="flex items-end justify-between mb-8 px-2">
                    <div>
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 text-zinc-500 hover:text-orange-500 transition-all mb-3 group"
                        >
                            <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Return</span>
                        </button>
                        <h1 className="text-3xl font-medium text-white tracking-tight">Edit <span className="text-zinc-500 font-light italic text-2xl">Details</span></h1>
                    </div>
                    <div className="text-right pb-1">
                        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.2em]">Recipe ID: {id?.slice(-5)}</p>
                    </div>
                </div>

                {/* Main Form Card */}
                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="bg-zinc-900/40 backdrop-blur-2xl border border-zinc-800/50 p-10 rounded-[2.5rem] shadow-3xl space-y-6"
                >
                    {/* Full Width Inputs */}
                    <div className="space-y-5">
                        <div className="group">
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1  block group-focus-within:text-orange-500 transition-colors">Dish Designation</label>
                            <input
                                {...register('recipeName')}
                                className="w-full bg-zinc-950/50 border border-zinc-800 h-12 px-5 rounded-2xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-sm text-white"
                                type="text" placeholder="e.g. Smoked Ribeye"
                            />
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1  block group-focus-within:text-orange-500 transition-colors">Visual Assets (URL)</label>
                            <input
                                {...register('recipeImage')}
                                className="w-full bg-zinc-950/50 border border-zinc-800 h-12 px-5 rounded-2xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-sm text-white"
                                type="text" placeholder="https://unsplash.com/..."
                            />
                        </div>

                        {/* Grid for Chef and Time */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="group">
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1  block group-focus-within:text-orange-500 transition-colors">Culinary Lead</label>
                                <input
                                    {...register('chefName')}
                                    className="w-full bg-zinc-950/50 border border-zinc-800 h-12 px-5 rounded-2xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-sm text-white"
                                    type="text" placeholder="Chef Name"
                                />
                            </div>
                            <div className="group">
                                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1  block group-focus-within:text-orange-500 transition-colors">Duration</label>
                                <input
                                    {...register('time')}
                                    className="w-full bg-zinc-950/50 border border-zinc-800 h-12 px-5 rounded-2xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-sm text-white invert-[0.1]"
                                    type="time"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-orange-500 transition-colors">Curated Category</label>
                            <select
                                {...register('category')}
                                className="w-full bg-zinc-950/50 border border-zinc-800 h-12 px-5 rounded-2xl outline-none focus:border-orange-500/50 transition-all text-sm text-white appearance-none cursor-pointer"
                            >
                                <option value="breakfast">Breakfast Selection</option>
                                <option value="lunch">Lunch Selection</option>
                                <option value="dinner">Dinner Selection</option>
                            </select>
                        </div>

                        <div className="group">
                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-orange-500 transition-colors">Culinary Notes</label>
                            <textarea
                                {...register('description')}
                                className="w-full bg-zinc-950/50 border border-zinc-800 p-5 rounded-2xl outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all text-sm text-white min-h-[110px] resize-none"
                                placeholder="Describe the flavor profile..."
                            />
                        </div>
                    </div>

                    {/* Final CTA */}
                    <button
                        type='submit'
                        className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-2xl transition-all shadow-[0_10px_30px_rgba(234,88,12,0.2)] flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] mt-4 hover:-translate-y-0.5 active:translate-y-0"
                    >
                        Synchronize Recipe <HiSparkles className="text-base" />
                    </button>
                </form>

                <p className="text-center mt-10 text-zinc-700 text-[10px] font-medium tracking-[0.3em] uppercase">Premium Internal Tool v2.0</p>
            </div>
        </div>
    )
}

export default UpdateRecipe;