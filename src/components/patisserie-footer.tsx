import { Instagram, Mail } from 'lucide-react';

const PatisserieFooter = () => (
  <footer className="bg-stone-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-6">
        <div className="text-2xl font-serif font-bold tracking-widest">
          BELLE <span className="text-amber-500">CAKE</span> CRAFTS
        </div>
        <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
          A modern cold kitchen atelier delivering ephemeral luxury desserts. 
          Baked to order, never shelved.
        </p>
        <div className="flex space-x-4">
          <Instagram className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer" />
          <Mail className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer" />
        </div>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest mb-6 text-stone-500">Shop</h4>
        <ul className="space-y-4 text-sm text-stone-300">
          <li className="hover:text-white cursor-pointer">All Cakes</li>
          <li className="hover:text-white cursor-pointer">Healthy Bakes</li>
          <li className="hover:text-white cursor-pointer">Gift Sets</li>
          <li className="hover:text-white cursor-pointer">Corporate</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest mb-6 text-stone-500">Support</h4>
        <ul className="space-y-4 text-sm text-stone-300">
          <li className="hover:text-white cursor-pointer">Delivery Areas</li>
          <li className="hover:text-white cursor-pointer">Allergen Info</li>
          <li className="hover:text-white cursor-pointer">Track Order</li>
          <li className="hover:text-white cursor-pointer">FAQ</li>
        </ul>
      </div>

      <div>
        <h4 className="text-xs uppercase tracking-widest mb-6 text-stone-500">Newsletter</h4>
        <p className="text-stone-400 text-sm mb-4">Subscribe for seasonal menu drops.</p>
        <div className="flex border-b border-stone-700 pb-2">
          <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-sm placeholder-stone-600" />
          <button className="text-xs uppercase tracking-widest hover:text-amber-500">Join</button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 text-xs text-stone-600 flex justify-between">
      <p>© 2024 Belle Cake Crafts. All rights reserved.</p>
      <div className="space-x-4">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </div>
  </footer>
);

export default PatisserieFooter;
