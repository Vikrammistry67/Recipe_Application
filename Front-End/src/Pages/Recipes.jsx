import axios from "axios"
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipes`);
      setRecipes(response.data);
    } catch (error) {
      console.log(`ERROR: ${error}`);
    }
  }

  useEffect(() => { getRecipes() }, []);

  return (
    <div className="min-h-screen pt-24 w-screen bg-[#080808] text-zinc-100 selection:bg-amber-500/30 selection:text-white">

      {/* --- HERO SECTION: MAGAZINE STYLE --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">

        {/* Background Decorative Text (Subtle) */}
        <div className="absolute -top-10 -left-10 text-[15rem] font-serif font-black text-white/[0.02] select-none pointer-events-none uppercase italic">
          Culina
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-zinc-800/50 pb-16">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-12 bg-amber-500/50"></div>
              <span className="text-amber-500 font-bold tracking-[0.6em] text-[10px] uppercase">Est. 2026</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-serif font-light tracking-tighter text-white leading-[0.85]">
              The <span className="text-amber-500 italic font-medium">Archive</span>
            </h1>

            <p className="text-zinc-500 text-sm md:text-base font-medium tracking-wide max-w-md leading-relaxed">
              Explore our curated selection of signature dishes, where tradition meets modern culinary artistry.
            </p>
          </div>

          <div className="hidden md:flex flex-col items-end gap-2">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em]">Inventory Status</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-light font-serif text-white">{recipes.length}</span>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Selected</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN GRID: THE GALLERY --- */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pb-32">
        {/* Responsive Grid with Modern Gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id || index}
              className="group animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Recipe Card Container with Hover Lift */}
              <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                <RecipeCard {...recipe} />
              </div>
            </div>
          ))}
        </div>

        {/* --- LOADING / EMPTY STATE --- */}
        {recipes.length === 0 && (
          <div className="py-40 flex flex-col items-center justify-center text-center space-y-8">
            <div className="w-16 h-16 border border-zinc-800 rounded-full flex items-center justify-center animate-spin">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <p className="text-zinc-600 font-bold uppercase tracking-[0.6em] text-[10px]">Consulting our Private Collection</p>
              <div className="h-px w-20 bg-zinc-900 mx-auto"></div>
            </div>
          </div>
        )}
      </main>

      {/* --- AMBIENT LIGHTING (For Deployment Flex) --- */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-amber-500/5 blur-[150px] rounded-full -z-10 pointer-events-none opacity-50"></div>
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-zinc-800/10 blur-[120px] rounded-full -z-10 pointer-events-none opacity-50"></div>

    </div>
  )
}

export default Recipes