import { createFileRoute, Link } from '@tanstack/react-router';
import ProductCard from '../components/product-card';
import { PRODUCTS } from '../data/patisserie';
import { useCart } from '../components/patisserie-layout';
import Hero from '@/components/hero';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Hero />
      <div className="py-20 bg-stone-50">
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl">This Week's Favorites</h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map(p => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="border-b border-black pb-1 text-xs uppercase tracking-widest hover:text-amber-600 hover:border-amber-600 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
}
