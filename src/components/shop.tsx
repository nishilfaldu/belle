import { useState } from 'react';
import { PRODUCTS } from '../data/patisserie';
import ProductCard from './product-card';
import type { Product } from '../data/patisserie';

interface ShopProps {
  addToCart: (product: Product) => void;
}

const Shop = ({ addToCart }: ShopProps) => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = PRODUCTS.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'healthy') return p.category === 'healthy';
    if (filter === 'staple') return p.tags.includes('staple');
    if (filter === 'seasonal') return p.tags.includes('seasonal');
    return true;
  });

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <span className="text-amber-600 text-xs tracking-widest uppercase mb-2 block">The Catalogue</span>
          <h2 className="text-4xl md:text-5xl font-serif">Curated Bakes</h2>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
          {['all', 'staple', 'seasonal', 'healthy'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                filter === f 
                  ? 'bg-stone-900 text-white border-stone-900' 
                  : 'border-stone-200 text-stone-500 hover:border-stone-900'
              }`}
            >
              {f === 'staple' ? 'Quick (6h)' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
