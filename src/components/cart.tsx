import { ShoppingBag, X } from 'lucide-react';
import type { Product } from '../data/patisserie';

interface CartProps {
  cart: Product[];
  removeFromCart: (index: number) => void;
  closeCart: () => void;
}

const Cart = ({ cart, removeFromCart, closeCart }: CartProps) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={closeCart}></div>
      
      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 flex items-center justify-between border-b border-stone-100">
          <h2 className="font-serif text-xl">Your Selection</h2>
          <button onClick={closeCart}><X className="w-6 h-6 text-stone-400 hover:text-black" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-sm uppercase tracking-widest">Your bag is empty</p>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex gap-4">
                <div className="w-20 h-24 bg-stone-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-lg">{item.name}</h3>
                    <button onClick={() => removeFromCart(idx)} className="text-stone-300 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-stone-500 mt-1 mb-2">{item.category}</p>
                  <p className="text-sm">${item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t border-stone-100 p-6 bg-stone-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs uppercase tracking-widest text-stone-500">Subtotal</span>
            <span className="font-serif text-xl">${total}</span>
          </div>
          <div className="mb-4">
            <label className="block text-[10px] uppercase tracking-widest text-stone-500 mb-2">Delivery Date</label>
            <input type="date" className="w-full bg-white border border-stone-200 p-3 text-sm outline-none focus:border-stone-900" />
            <p className="text-[10px] text-amber-600 mt-1">* Required for cold kitchen scheduling</p>
          </div>
          <button className="w-full bg-stone-900 text-white py-4 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
