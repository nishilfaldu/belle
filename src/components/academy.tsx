import { useState } from 'react';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { CLASSES, type Course } from '../data/patisserie';

// Course Player Component
const CoursePlayer = ({ course, onBack }: { course: Course; onBack: () => void }) => {
  const [activeTab, setActiveTab] = useState<'method' | 'ingredients'>('method');

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Academy
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Video & Title */}
        <div className="lg:col-span-2">
          {/* Mock Video Player */}
          <div className="aspect-video bg-black w-full mb-8 relative flex items-center justify-center group cursor-pointer">
             <div className="absolute inset-0 opacity-60">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
             </div>
             <Play className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all z-10" />
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="h-1 w-full bg-stone-600 rounded-full overflow-hidden">
                   <div className="h-full w-1/3 bg-amber-500"></div>
                </div>
                <div className="flex justify-between items-center text-white mt-4 text-xs tracking-widest uppercase">
                  <span>0:15 / {course.duration}</span>
                  <span>HD • CC</span>
                </div>
             </div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-amber-600 uppercase tracking-widest mb-4">
            <span>{course.level}</span>
            <span>•</span>
            <span>{course.duration}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mb-6">{course.title}</h1>
          <p className="text-stone-600 leading-relaxed text-lg font-light mb-8">
            Detailed video instruction on how to master this technique in your own home kitchen.
            Follow the steps on the right to replicate this exact result.
          </p>
        </div>

        {/* Right Column: Recipe & Info */}
        <div className="bg-stone-50 p-8 h-fit border border-stone-100">
           <div className="flex border-b border-stone-200 mb-6">
             <button 
               onClick={() => setActiveTab('method')}
               className={`flex-1 pb-4 text-xs uppercase tracking-widest text-center transition-colors ${activeTab === 'method' ? 'border-b-2 border-stone-900 font-bold' : 'text-stone-500'}`}
             >
               Method
             </button>
             <button 
               onClick={() => setActiveTab('ingredients')}
               className={`flex-1 pb-4 text-xs uppercase tracking-widest text-center transition-colors ${activeTab === 'ingredients' ? 'border-b-2 border-stone-900 font-bold' : 'text-stone-500'}`}
             >
               Ingredients
             </button>
           </div>

           <div className="min-h-[400px]">
             {activeTab === 'ingredients' ? (
               <ul className="space-y-4">
                 {course.ingredients.map((ing, i) => (
                   <li key={i} className="flex items-center text-sm text-stone-700 font-light border-b border-stone-200 pb-2 last:border-0">
                     <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                     {ing}
                   </li>
                 ))}
               </ul>
             ) : (
               <div className="space-y-6">
                 {course.method.map((step, i) => (
                   <div key={i} className="flex">
                     <span className="font-serif text-2xl text-stone-300 mr-4">0{i+1}</span>
                     <p className="text-sm text-stone-700 leading-relaxed pt-1">{step}</p>
                   </div>
                 ))}
               </div>
             )}
           </div>
           
           <button className="w-full mt-8 bg-stone-900 text-white py-4 text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors">
             Download PDF Guide
           </button>
        </div>
      </div>
    </div>
  );
};

const Academy = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // If a course is selected, show the CoursePlayer
  if (selectedCourse) {
    return <CoursePlayer course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">The Academy</h2>
        <p className="text-stone-600 font-light leading-relaxed">
          Unlock professional pastry secrets. From free demo sessions for beginners to 
          intensive masterclasses for the aspiring pâtissier.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="bg-stone-100 p-1 rounded-full inline-flex">
          {['all', 'free', 'paid'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-all ${
                activeTab === tab 
                  ? 'bg-white shadow-sm text-stone-900' 
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {CLASSES.filter(c => activeTab === 'all' || c.type === activeTab).map(course => (
          <div key={course.id} className="group relative bg-white border border-stone-100 flex flex-col md:flex-row h-auto md:h-80 transition-all hover:shadow-xl hover:border-amber-100">
            <div className="w-full md:w-1/3 overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center flex-1 relative">
              <div className="flex items-center space-x-2 text-xs text-amber-600 uppercase tracking-widest mb-4">
                <span>{course.level}</span>
                <span>•</span>
                <span>{course.duration}</span>
                {course.type === 'free' && <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Free Demo</span>}
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-4">{course.title}</h3>
              <p className="text-stone-500 font-light mb-8 max-w-md">
                Learn the techniques required to master this specific skill set. 
                Includes downloadable PDF recipe and lifetime access.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-serif">
                  {course.price === 0 ? 'Free' : `$${course.price}`}
                </span>
                <button 
                  onClick={() => setSelectedCourse(course)}
                  className="flex items-center text-xs uppercase tracking-widest font-bold hover:text-amber-600 transition-colors"
                >
                  {course.type === 'free' ? 'Watch Now' : 'Enroll Now'} <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academy;
