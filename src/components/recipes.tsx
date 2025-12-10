import { Clock, Star, ArrowRight } from 'lucide-react';
import { RECIPES } from '../data/patisserie';

const Recipes = () => (
  <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
     <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-amber-600 text-xs tracking-widest uppercase mb-2 block">The Journal</span>
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Chef's Notes</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Seasonal musings, leftover hacks, and simple recipes to bring a touch of the atelier into your home kitchen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {RECIPES.map(recipe => (
          <div key={recipe.id} className="group cursor-pointer">
            <div className="aspect-video overflow-hidden mb-6">
              <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="border-t border-black pt-4 flex justify-between items-start">
              <div>
                 <div className="flex items-center space-x-4 text-xs text-stone-500 uppercase tracking-widest mb-2">
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {recipe.time}</span>
                  <span className="flex items-center"><Star className="w-3 h-3 mr-1" /> {recipe.difficulty}</span>
                </div>
                <h3 className="text-2xl font-serif group-hover:text-amber-800 transition-colors">{recipe.title}</h3>
              </div>
              <ArrowRight className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        ))}
      </div>
  </div>
);

export default Recipes;
