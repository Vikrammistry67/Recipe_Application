import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RecipeCon } from '../context/RecipeContext/RecipeContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const RecipeDetailsCard = ({ recipeName, recipeImage, chefName, Ingredients, time, category, description }) => {
    const navigate = useNavigate();
    const { user } = useContext(RecipeCon);
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    const getRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/recipes/${id}`)
            setRecipe(response.data);
        } catch (error) { console.log(error) }
    };

    useEffect(() => { getRecipe() }, []);

    const setRecipeToCart = async () => {
        try {
            await axios.post(`http://localhost:3000/cart`, { ...recipe });
            toast.success('Successfully added to collection');
            navigate('/cart');
        } catch (error) {
            toast.error('Failed to add.');
        }
    };

    return (
        /* SIZE COMPACT KIYA HAI: max-w-4xl aur height control */
        <div className="w-full mt-2 max-w-4xl mx-auto bg-[#080808] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-amber-500/30">
            <div className="flex flex-col md:flex-row min-h-[500px]">

                {/* 1. LEFT SIDE: IMAGE WITH MICRO-INTERACTION */}
                <div className="w-full md:w-[45%] relative h-[350px] md:h-auto overflow-hidden">
                    <img
                        src={recipeImage || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                        alt={recipeName}
                    />
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80"></div>

                    {/* Floating Info Pill (RecipeCard Style) */}
                    <div className="absolute bottom-6 left-6 flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="bg-amber-500 text-black text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] w-fit shadow-xl">
                            {category || 'Signature'}
                        </span>
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full w-fit">
                            <p className="text-white text-[9px] font-bold tracking-widest">{time || '30m'}</p>
                        </div>
                    </div>
                </div>

                {/* 2. RIGHT SIDE: CONTENT & TYPOGRAPHY */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-between bg-[#080808]">

                    <div className="space-y-6">
                        {/* Subtle Header */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-8 bg-amber-500/50 group-hover:w-12 transition-all duration-700"></div>
                            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.4em]">Masterclass by {chefName}</p>
                        </div>

                        {/* Title - Fixed & Clean */}
                        <h1 className="text-4xl md:text-5xl font-serif font-light text-zinc-100 tracking-tight leading-none group-hover:text-amber-500 transition-colors duration-500">
                            {recipeName}
                        </h1>

                        {/* Description - Compact */}
                        <p className="text-zinc-500 text-sm leading-relaxed font-light italic border-l border-zinc-800 pl-5 group-hover:border-amber-500/40 transition-colors">
                            {description || 'A masterpiece of flavors, curated for those with a refined palate.'}
                        </p>

                        {/* Ingredients Section - Pill Style */}
                        <div className="pt-4 space-y-3">
                            <h3 className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em]">Components</h3>
                            <div className="flex flex-wrap gap-2">
                                {Ingredients?.split(',').map((item, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-zinc-400 text-[10px] font-medium hover:text-white hover:border-amber-500/30 transition-all cursor-default">
                                        {item.trim()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. ACTION AREA - Micro-Interaction Button */}
                    <div className="pt-10 border-t border-white/5 mt-6">
                        {user ? (
                            <button
                                onClick={setRecipeToCart}
                                className="w-full cursor-pointer py-4 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-amber-500 transition-all duration-300 active:scale-95 shadow-lg flex items-center justify-center gap-2 group/btn"
                            >
                                Secure to Collection
                                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        ) : (
                            <button
                                onClick={() => navigate('/login')}
                                className="w-full cursor-pointer py-4 border border-zinc-800 text-zinc-400 text-[11px] font-black uppercase tracking-[0.3em] rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Authenticate Access
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecipeDetailsCard;