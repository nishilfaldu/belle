import { Link } from '@tanstack/react-router';

const Hero = () => (
  <div className="relative h-screen w-full overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1601000938259-9e92002320b2?q=80&w=2000&auto=format&fit=crop" 
        alt="Hero Cake" 
        className="w-full h-full object-cover brightness-[0.7] transform hover:scale-105 transition-transform duration-[20s]"
      />
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
      <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-4 opacity-90 animate-fade-in-up">
        The Cold Kitchen Studio
      </span>
      <h1 className="text-5xl md:text-8xl font-serif mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
        Taste the <br/><span className="italic text-amber-200">Ephemeral</span>
      </h1>
      <Link 
        to="/shop"
        className="border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 animate-fade-in-up"
        style={{ animationDelay: '200ms' }}
      >
        Explore Collection
      </Link>
    </div>
    
    {/* Ticker */}
    <div className="absolute bottom-0 w-full bg-stone-900/90 text-white py-3 overflow-hidden whitespace-nowrap z-10">
      <div className="animate-marquee inline-block text-xs tracking-widest uppercase">
        <span className="mx-8">Orders must be placed 24h in advance</span>
        <span className="mx-8 text-amber-400">•</span>
        <span className="mx-8">New Summer Menu Live</span>
        <span className="mx-8 text-amber-400">•</span>
        <span className="mx-8">Free Delivery on Orders over $100</span>
        <span className="mx-8 text-amber-400">•</span>
        <span className="mx-8">Gluten Free Options Available</span>
      </div>
    </div>
  </div>
);

export default Hero;
