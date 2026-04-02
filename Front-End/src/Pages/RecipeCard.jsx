import { useContext } from "react"
import { RecipeCon } from '../context/RecipeContext/RecipeContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RecipeCard = ({ recipeName, chefName, time, id, recipeImage, category }) => {
    const { user } = useContext(RecipeCon);
    const navigate = useNavigate();

    const deleHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/recipes/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-[450px] h-[600px] group relative mx-auto p-4">

            {/* 1. ANIMATED GLOW (Card ke piche halki roshni) */}
            <div className="absolute inset-0 bg-amber-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            {/* MAIN CONTAINER */}
            <div className="relative w-full h-full bg-[#080808] rounded-[3rem] overflow-hidden border border-white/[0.05] shadow-2xl transition-all duration-500 group-hover:border-amber-500/40 group-hover:-translate-y-2 flex flex-col">

                {/* 2. IMAGE SECTION (With Glass Badge) */}
                <div className="relative w-full h-[60%] overflow-hidden">
                    <img
                        src={recipeImage || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                        alt={recipeName}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 cursor-pointer bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>

                    {/* LUXURY BADGE (Top Left) */}
                    <div className="absolute top-8 left-8 flex flex-col gap-2">
                        <span className="bg-amber-500 text-black text-[8px] font-black px-4 py-1 rounded-full uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(245,158,11,0.4)]">
                            {category || 'Signature'}
                        </span>
                        <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full w-fit">
                            <p className="text-white text-[9px] font-medium tracking-widest uppercase">{time || '25 MIN'}</p>
                        </div>
                    </div>

                    {/* SIGNATURE STAMP (Top Right) */}
                    <div className="absolute top-8 right-8 h-12 w-12 border border-white/5 rounded-full flex items-center justify-center italic text-[8px] text-zinc-500 group-hover:border-amber-500/20 group-hover:text-amber-500 transition-all">
                        Aurum
                    </div>
                </div>

                {/* 3. CONTENT SECTION */}
                <div className="flex-1 px-10 py-8 flex flex-col justify-between relative">

                    {/* Floating Line Decorative */}
                    <div className="absolute top-0 left-10 w-10 h-[2px] bg-amber-500 group-hover:w-[80%] transition-all duration-700"></div>

                    <div className="space-y-3">
                        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.5em] opacity-40 group-hover:opacity-100 transition-opacity">
                            Masterclass by {chefName}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-zinc-100 tracking-tighter leading-tight group-hover:text-white transition-colors">
                            {recipeName}
                        </h2>
                    </div>

                    {/* 4. PREMIUM ACTION BUTTONS */}
                    <div className="flex items-center gap-4 pt-6">
                        {user?.role === 'user' ? (
                            <button
                                onClick={() => navigate(`recipeDetails/${id}`)}
                                className="w-full py-4 bg-zinc-100 text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-amber-500 transition-all duration-500 shadow-xl active:scale-95 flex items-center justify-center gap-2"
                            >
                                Experience
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => navigate(`/updateRecipe/${id}`)}
                                    className="flex-1 py-4 border border-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all duration-500"
                                >
                                    Refine
                                </button>
                                <button
                                    onClick={() => deleHandler(id)}
                                    className="p-4 cursor-pointer bg-zinc-900 text-zinc-600 rounded-2xl hover:bg-red-600/10 hover:text-red-500 transition-all active:scale-75"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Border Trace Effect */}
                <div className="absolute inset-0 pointer-events-none border-[1px] border-amber-500/0 group-hover:border-amber-500/20 rounded-[3rem] transition-all duration-700"></div>
            </div>
        </div>
    )
}

export default RecipeCard;