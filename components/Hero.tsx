import React from 'react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="pt-24 md:pt-12 pb-24 fade-in-up">
      <div className="max-w-2xl">
        <span className="block font-sans text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 pl-1">
          Saison 2026
        </span>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] text-black mb-12">
          Une cuisine d'instinct, brute et essentielle.
        </h2>
        <p className="font-sans text-base md:text-lg text-gray-500 leading-8 max-w-lg text-justify md:text-left">
          Bienvenue à La Signature. Nous vous invitons à une expérience où le superflu s'efface pour laisser place à la vérité du produit.
        </p>
      </div>
    </section>
  );
};