import React from 'react';
import { SectionId, MenuCategory, MenuItem } from '../types';
import { MENU_DATA, TABLE_DHOTE_OFFER } from '../constants';

const MenuSection = ({ category, twoColumns = false }: { category: MenuCategory, twoColumns?: boolean }) => (
  <div className="mb-8 last:mb-0">
    <div className="flex items-baseline mb-6">
      <h3 className="text-3xl font-signature text-black pr-4 shrink-0">
        {category.title}
      </h3>
      <div className="h-[1px] bg-gray-200 flex-grow self-center"></div>
    </div>

    <div className={`grid grid-cols-1 ${twoColumns ? 'lg:grid-cols-2 gap-x-12' : ''} gap-y-8`}>
      {category.items.map((item: MenuItem) => (
        <div key={item.id} className="relative group break-inside-avoid">
          <div className="flex items-baseline justify-between mb-2">
            <h4 className="font-serif text-lg font-bold text-black uppercase tracking-wider">
              {item.title}
            </h4>
            <div className="flex-grow mx-3 border-b border-dotted border-gray-300 relative top-[-5px]"></div>
            {item.price && (
              <span className="font-sans text-base font-bold text-black shrink-0">
                {item.price}
              </span>
            )}
          </div>
          
          {item.description && (
            <p className="font-sans text-sm text-gray-600 leading-snug pr-4">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
);

const TableDhote = () => (
  <div className="my-10 p-6 border-y-2 border-black bg-gray-50 relative">
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      <div className="flex-1 text-center md:text-left">
         <h4 className="font-signature text-3xl text-black mb-2 leading-none">
           {TABLE_DHOTE_OFFER.title}
         </h4>
         <p className="font-sans text-sm text-gray-700 leading-relaxed text-justify md:pr-10">
           {TABLE_DHOTE_OFFER.description}
         </p>
      </div>
      <div className="flex flex-col items-center justify-center min-w-[90px] shrink-0">
          <span className="font-serif text-2xl font-bold italic block mb-1">
             + {TABLE_DHOTE_OFFER.price}
          </span>
          <span className="text-xs uppercase tracking-widest text-gray-500">Extra</span>
      </div>
    </div>
  </div>
);

export const Menu: React.FC = () => {
  const entrees = MENU_DATA[0];
  const plats = MENU_DATA[1];
  const desserts = MENU_DATA[2];
  const breuvages = MENU_DATA[3];

  return (
    <section id={SectionId.MENU} className="py-4">
      
      {/* 1. Entrées - 2 Columns */}
      {entrees && <MenuSection category={entrees} twoColumns={true} />}

      {/* 2. Table d'Hôte Banner */}
      <TableDhote />

      {/* 3. Plats - 2 Columns */}
      {plats && <MenuSection category={plats} twoColumns={true} />}

      <div className="h-10"></div>

      {/* 4. Desserts & Breuvages - Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-100 pt-10">
          {desserts && <MenuSection category={desserts} />}
          {breuvages && <MenuSection category={breuvages} />}
      </div>

      <div className="mt-16 text-center">
         <span className="font-serif text-3xl italic text-gray-400">
            Apportez votre vin
         </span>
      </div>
    </section>
  );
};