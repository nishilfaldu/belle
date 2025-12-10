import { Clock } from 'lucide-react';
import type { Product } from '../data/patisserie';

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => (
  <div className="group relative cursor-pointer">
    <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {product.tags.includes('bestseller') && (
        <span className="absolute top-4 left-4 bg-amber-600 text-white text-[10px] uppercase tracking-wider px-2 py-1">
          Bestseller
        </span>
      )}
      {product.leadTime <= 6 && (
        <span className="absolute top-4 right-4 bg-white/90 text-stone-900 backdrop-blur text-[10px] uppercase tracking-wider px-2 py-1 flex items-center">
          <Clock className="w-3 h-3 mr-1" /> Quick Order
        </span>
      )}
      
      {/* Quick Add Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <button 
          onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          className="w-full bg-white text-black py-3 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors"
        >
          Add to Bag — ${product.price}
        </button>
      </div>
    </div>
    <div className="space-y-1">
      <h3 className="font-serif text-lg">{product.name}</h3>
      <div className="text-xs text-stone-500 uppercase tracking-wide">
        {product.category} • {product.dietary.join(', ') || 'Standard'}
      </div>
    </div>
  </div>
);

export default ProductCard;
