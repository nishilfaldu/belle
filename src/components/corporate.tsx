import { Briefcase, Check } from 'lucide-react';

const Corporate = () => (
  <div className="min-h-screen pt-20 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 bg-stone-900 text-white p-12 md:p-24 flex flex-col justify-center">
      <Briefcase className="w-12 h-12 text-amber-500 mb-8" />
      <h2 className="text-4xl md:text-6xl font-serif mb-8">Corporate <br/> & Events</h2>
      <p className="text-stone-300 font-light text-lg leading-relaxed mb-12 max-w-md">
        Elevate your brand with our bespoke gifting solutions. From logo-branded macarons to 
        curated dessert hampers for large-scale events.
      </p>
      <div className="space-y-6">
        <div className="flex items-start">
          <Check className="w-6 h-6 text-amber-500 mr-4 mt-1" />
          <div>
            <h4 className="font-serif text-lg">Custom Branding</h4>
            <p className="text-stone-400 text-sm mt-1">Logo edible prints and custom ribbon packaging.</p>
          </div>
        </div>
        <div className="flex items-start">
          <Check className="w-6 h-6 text-amber-500 mr-4 mt-1" />
          <div>
            <h4 className="font-serif text-lg">Bulk Logistics</h4>
            <p className="text-stone-400 text-sm mt-1">Temperature controlled delivery to multiple locations.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
      <form className="max-w-md w-full space-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Company Name</label>
          <input type="text" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 outline-none transition-colors" />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
          <input type="email" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 outline-none transition-colors" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Estimated Quantity</label>
            <input type="number" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Date Required</label>
            <input type="date" className="w-full border-b border-stone-300 py-2 focus:border-stone-900 outline-none transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2">Message</label>
          <textarea rows={4} className="w-full border-b border-stone-300 py-2 focus:border-stone-900 outline-none transition-colors"></textarea>
        </div>
        <button className="bg-stone-900 text-white px-8 py-4 w-full text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors">
          Request Catalogue & Quote
        </button>
      </form>
    </div>
  </div>
);

export default Corporate;
