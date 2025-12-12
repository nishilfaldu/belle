import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { PRODUCTS, CAKE_THEMES } from '../data/patisserie';
import ProductCard from './product-card';
import type { Product } from '../data/patisserie';

interface ShopProps {
  addToCart: (product: Product) => void;
}

const Shop = ({ addToCart }: ShopProps) => {
  const [filter, setFilter] = useState('all'); // 'all', 'staple', 'seasonal', 'healthy'
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null); // specific theme
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    // 1. Filter by Main Category (Tabs)
    let categoryMatch = true;
    if (filter === 'healthy') categoryMatch = p.category === 'healthy';
    if (filter === 'staple') categoryMatch = p.tags.includes('staple');
    if (filter === 'seasonal') categoryMatch = p.tags.includes('seasonal');
    
    // 2. Filter by Theme (Sidebar)
    let themeMatch = true;
    if (selectedTheme) {
      themeMatch = p.theme === selectedTheme;
    }

    return categoryMatch && themeMatch;
  });

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-amber-600 text-xs tracking-widest uppercase mb-2 block">The Catalogue</span>
          <h2 className="text-4xl md:text-5xl font-serif">Curated Bakes</h2>
        </div>
        
        {/* Main Category Tabs */}
        <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
          {['all', 'staple', 'seasonal', 'healthy'].map(f => (
            <button 
              key={f}
              onClick={() => { setFilter(f); setSelectedTheme(null); }}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${filter === f && !selectedTheme ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 text-stone-500 hover:border-stone-900'}`}
            >
              {f === 'staple' ? 'Quick (6h)' : f}
            </button>
          ))}
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden px-4 py-2 flex items-center rounded-full border border-stone-200 text-xs uppercase tracking-widest"
          >
            <Filter className="w-3 h-3 mr-2" /> Themes
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters (Desktop) */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <h3 className="font-serif text-lg border-b border-stone-200 pb-4 mb-6">Collections</h3>
          <ul className="space-y-3">
            <li 
              className={`cursor-pointer text-xs uppercase tracking-widest hover:text-amber-600 transition-colors ${!selectedTheme ? 'font-bold text-amber-600' : 'text-stone-500'}`}
              onClick={() => setSelectedTheme(null)}
            >
              View All
            </li>
            {CAKE_THEMES.map(theme => (
              <li 
                key={theme}
                className={`cursor-pointer text-xs uppercase tracking-widest hover:text-amber-600 transition-colors ${selectedTheme === theme ? 'font-bold text-amber-600' : 'text-stone-500'}`}
                onClick={() => setSelectedTheme(theme)}
              >
                {theme}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {selectedTheme && (
            <div className="mb-6 flex items-center justify-between bg-stone-50 p-4 rounded">
              <span className="text-xs uppercase tracking-widest">Showing: <span className="font-bold">{selectedTheme}</span></span>
              <button onClick={() => setSelectedTheme(null)} className="text-xs text-stone-400 hover:text-black">Clear</button>
            </div>
          )}
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          ) : (
             <div className="flex flex-col items-center justify-center py-20 text-stone-400">
               <div className="text-4xl font-serif mb-4 italic">No bakes found</div>
               <p className="text-xs uppercase tracking-widest">Try selecting a different theme or category</p>
               <button onClick={() => setSelectedTheme(null)} className="mt-6 text-amber-600 border-b border-amber-600 text-xs uppercase tracking-widest">View All</button>
             </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsFilterOpen(false)}></div>
          <div className="relative w-3/4 bg-white h-full shadow-2xl flex flex-col animate-slide-in">
            <div className="p-6 flex items-center justify-between border-b border-stone-100">
              <h2 className="font-serif text-xl">Themes</h2>
              <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
            </div>
            <div className="overflow-y-auto p-6 space-y-4">
               <button 
                  className={`block w-full text-left text-xs uppercase tracking-widest py-2 ${!selectedTheme ? 'font-bold text-amber-600' : 'text-stone-500'}`}
                  onClick={() => { setSelectedTheme(null); setIsFilterOpen(false); }}
                >
                  View All
                </button>
              {CAKE_THEMES.map(theme => (
                <button 
                  key={theme}
                  className={`block w-full text-left text-xs uppercase tracking-widest py-2 ${selectedTheme === theme ? 'font-bold text-amber-600' : 'text-stone-500'}`}
                  onClick={() => { setSelectedTheme(theme); setIsFilterOpen(false); }}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
