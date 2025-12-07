import React, { useState } from 'react';
import { SectionId } from '../types';
import { Menu as MenuIcon, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small offset for mobile header, no offset needed for desktop sidebar layout
      const offset = window.innerWidth < 768 ? 80 : 40; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: 'Le Concept', id: SectionId.CONCEPT },
    { label: 'La Carte', id: SectionId.MENU },
    { label: 'Réservations', id: SectionId.RESERVATION },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR (Visible md+) */}
      <aside className="hidden md:flex flex-col justify-between fixed top-0 left-0 h-screen w-1/4 lg:w-1/5 border-r border-gray-100 bg-white p-12 z-50">
        {/* Top: Logo */}
        <div className="pt-8">
          <h1 className="font-signature text-5xl lg:text-6xl text-black cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            La Signature
          </h1>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.25em] text-gray-400">
            Restaurant
          </p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-col space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm font-sans font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-black hover:translate-x-1 transition-all duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom: Contact Info */}
        <div className="text-left">
           <div className="w-8 h-[1px] bg-black mb-6"></div>
           <address className="not-italic font-serif text-base text-gray-600 leading-relaxed">
             155 Rue Saint-Honoré<br/>
             <span className="block mt-2 font-sans text-xs uppercase tracking-wider text-gray-400">
               +1 418 555 0123
             </span>
           </address>
        </div>
      </aside>

      {/* MOBILE HEADER (Visible < md) */}
      <nav className="md:hidden fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex justify-between items-center transition-all">
        <h1 className="font-signature text-3xl text-black">
          La Signature
        </h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-black p-2 focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-serif italic text-black"
            >
              {link.label}
            </button>
          ))}
          <div className="absolute bottom-12 text-center">
            <p className="font-sans text-xs uppercase tracking-widest text-gray-400">
              La Signature
            </p>
          </div>
        </div>
      </div>
    </>
  );
};