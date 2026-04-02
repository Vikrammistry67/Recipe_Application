import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeDetailsCard from './RecipeDetailsCard';

const RecipeDetails = () => {
    const [findRecipe, setFindRecipe] = useState([]);
    const { id } = useParams();

    const getRecipe = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/recipes/${id}`);
            // Pure array structure ko maintain rakha hai jaisa aapne likha tha
            setFindRecipe([response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRecipe();
        // Page par aate hi scroll top par le jaye taaki experience smooth ho
        window.scrollTo(0, 0);
    }, [id]);

    return (
        /* BACKGROUND: Deep Obsidian with a very subtle Radial Glow */
        <div className="min-h-screen w-full bg-[#050505] relative overflow-hidden flex flex-col items-center justify-start py-20 px-4">

            {/* 1. AMBIENT ATMOSPHERE (Piche ka halka aura) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* 2. DECORATIVE SIDE TEXT (Vertical Magazine Look) */}
            <div className="fixed left-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
                <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[1em] rotate-90 origin-left">
                    The Aurum Signature Collection
                </p>
            </div>

            {/* 3. MAIN CONTENT AREA */}
            <div className="w-full max-w-7xl relative z-10">
                {findRecipe.length > 0 ? (
                    findRecipe.map((allRecipe, idx) => (
                        <div key={idx} className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
                            <RecipeDetailsCard {...allRecipe} />
                        </div>
                    ))
                ) : (
                    /* LOADING STATE: Minimal & Clean */
                    <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
                        <div className="w-12 h-12 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
                        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] animate-pulse">
                            Preparing Experience...
                        </p>
                    </div>
                )}
            </div>

            {/* 4. FOOTER ACCENT */}
            <div className="mt-20 opacity-20 hover:opacity-100 transition-opacity duration-700">
                <div className="flex items-center gap-4">
                    <div className="h-px w-20 bg-zinc-800"></div>
                    <span className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.5em]">Finest Quality Ingredients</span>
                    <div className="h-px w-20 bg-zinc-800"></div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;