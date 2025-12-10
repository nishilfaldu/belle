import { useState, createContext, useContext } from 'react';
import PatisserieNav from './patisserie-nav';
import PatisserieFooter from './patisserie-footer';
import Cart from './cart';
import type { Product } from '../data/patisserie';

// Cart Context
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartContext');
  return ctx;
};

function PatisserieLayout({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <div className="font-sans text-stone-900 bg-white min-h-screen selection:bg-amber-100">
        <PatisserieNav 
          cartCount={cart.length} 
          onCartClick={() => setIsCartOpen(true)}
        />
        
        <main className="animate-fade-in">
          {children}
        </main>

        <PatisserieFooter />

        {isCartOpen && (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            closeCart={() => setIsCartOpen(false)} 
          />
        )}
      </div>
    </CartContext.Provider>
  );
}

export { PatisserieLayout };
