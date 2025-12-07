import React from 'react';
import { SectionId } from '../types';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.RESERVATION} className="pt-32 pb-12 border-t border-gray-100 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div>
           <h5 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
             Horaires d'ouverture
           </h5>
           <ul className="font-serif text-lg text-black space-y-6">
             <li>
               <span className="block font-sans text-xs font-bold uppercase tracking-wider text-black mb-1">Mercredi à Samedi</span>
               <span className="text-gray-600 block">08h00 — 14h00</span>
               <span className="text-gray-600 block">17h00 — 22h00</span>
             </li>
             <li>
               <span className="block font-sans text-xs font-bold uppercase tracking-wider text-black mb-1">Dimanche</span>
               <span className="text-gray-600 block">08h00 — 14h30</span>
             </li>
             <li>
               <span className="block font-sans text-xs font-bold uppercase tracking-wider text-black mb-1">Lundi & Mardi</span>
               <span className="italic text-gray-400">Fermé</span>
             </li>
           </ul>
        </div>

        <div className="flex flex-col items-start md:items-end justify-between">
           <a 
             href="https://book.example.com" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-block bg-black text-white font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-gray-800 transition-colors mb-8"
           >
             Réserver une table
           </a>
           
           <p className="font-sans text-xs text-gray-300 uppercase tracking-widest">
             © 2024 La Signature
           </p>
        </div>

      </div>
    </footer>
  );
};