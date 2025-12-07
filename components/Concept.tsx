import React from 'react';
import { SectionId } from '../types';

export const Concept: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} className="py-12 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-black mt-2">
            Philosophie
          </h3>
        </div>
        <div className="md:col-span-8">
          <p className="font-serif text-2xl md:text-3xl italic text-gray-800 mb-8 leading-relaxed">
            "On ne voit bien qu'avec le cœur."
          </p>
          <div className="columns-1 md:columns-2 gap-12 font-sans text-base text-gray-500 leading-7 text-justify">
            <p className="mb-6">
              Notre démarche est minimaliste par essence. Chaque assiette est conçue comme une épure, une recherche d'équilibre où rien n'est ajouté sans raison. Le noir et le blanc de notre identité reflètent cette quête de clarté.
            </p>
            <p>
              Dans l'assiette, les couleurs de la nature explosent, contrastant avec la sobriété du lieu. C'est ici que s'exprime notre signature : une trace, un goût, un souvenir indélébile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};