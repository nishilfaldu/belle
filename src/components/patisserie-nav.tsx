import { useState } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface PatisserieNavProps {
  cartCount: number;
  onCartClick: () => void;
}

const PatisserieNav = ({ cartCount, onCartClick }: PatisserieNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Atelier' },
    { path: '/shop', label: 'Shop Catalogue' },
    { path: '/academy', label: 'Academy' },
    { path: '/recipes', label: 'Journal' },
    { path: '/corporate', label: 'Corporate' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-stone-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-serif font-bold tracking-widest cursor-pointer hover:opacity-80 transition-opacity"
        >
          BELLE <span className="text-amber-600">CAKE</span> CRAFTS
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs uppercase tracking-widest hover:text-amber-600 transition-colors ${
                isActive(item.path) 
                  ? 'text-amber-600 font-bold border-b border-amber-600' 
                  : 'text-stone-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={onCartClick}
            className="relative p-2 hover:bg-stone-50 rounded-full transition-colors"
          >
            <ShoppingBag className="w-5 h-5 text-stone-800" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-amber-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-widest text-left py-2 border-b border-stone-50 text-stone-600"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PatisserieNav;
