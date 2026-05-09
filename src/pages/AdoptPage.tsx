import { motion } from "motion/react";
import { Search, Info, ChevronRight, Heart } from "lucide-react";
import { cats } from "../data/cats";
import { useState } from "react";
import { AdoptionForm } from "../components/AdoptionForm";
import { Cat } from "../types";

export const AdoptPage = () => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredCats = cats.filter(cat => 
    cat.name.toLowerCase().includes(search.toLowerCase()) ||
    cat.breed.toLowerCase().includes(search.toLowerCase()) ||
    cat.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  );

  const handleAdoptClick = (cat: Cat) => {
    setSelectedCat(cat);
    setIsFormOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="max-w-[1280px] mx-auto px-4 md:px-16 py-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div className="max-w-2xl">
          <h1 className="font-headline text-5xl font-bold text-on-surface mb-4">Adopt a New <span className="text-primary">Best Friend</span></h1>
          <p className="font-body text-on-surface-variant text-lg">
            Our residents are carefully socialized and health-checked, waiting for the right human to share their sunbeams with.
          </p>
        </div>
        <div className="w-full md:w-auto relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            type="text"
            placeholder="Search by name, breed or trait..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-14 pr-8 py-4 bg-surface-container-high rounded-full w-full md:w-[350px] outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCats.map((cat) => (
          <motion.div 
            key={cat.id}
            layout
            className="bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-outline-variant/10 hover:shadow-2xl transition-all duration-300 flex flex-col group"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 flex gap-2">
                {cat.tags.map(tag => (
                  <span key={tag} className="bg-white/90 backdrop-blur-sm text-on-surface px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full text-secondary opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 active:scale-95"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline text-2xl font-bold text-on-surface">{cat.name}</h3>
                <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">{cat.age}</span>
              </div>
              <p className="text-secondary text-sm font-bold mb-3">{cat.breed}</p>
              <p className="font-body text-on-surface-variant text-sm line-clamp-2 mb-6 leading-relaxed flex-grow">
                {cat.description}
              </p>
              <button 
                onClick={() => handleAdoptClick(cat)}
                className="w-full bg-primary text-on-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 group-hover:bg-primary/90 transition-colors"
              >
                Adopt {cat.name} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Adoption Form Modal */}
      {selectedCat && (
        <AdoptionForm 
          cat={selectedCat} 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      )}

      <div className="mt-24 bg-surface-container-low rounded-[3rem] p-12 md:p-20 border border-outline-variant/10 text-center">
        <Info className="text-secondary w-12 h-12 mx-auto mb-6" />
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Our Adoption Process</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { step: "01", title: "Apply Online", desc: "Fill out our comprehensive questionnaire to help us find your perfect match." },
            { step: "02", title: "Meet & Greet", desc: "Spend time with your potential new family member in our cozy meet rooms." },
            { step: "03", title: "Home Check", desc: "A quick virtual tour of your home to ensure a safe environment for your kitty." }
          ].map(s => (
            <div key={s.step} className="text-center">
              <span className="text-4xl font-headline font-black text-primary opacity-20 block mb-4">{s.step}</span>
              <h3 className="font-headline font-bold text-on-surface mb-2">{s.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
