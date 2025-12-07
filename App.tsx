import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white flex flex-col md:flex-row">
      {/* Sidebar Navigation (Fixed on Desktop) */}
      <Navbar />
      
      {/* Main Content Area (Scrollable) */}
      <main className="w-full md:w-3/4 md:ml-[25%] lg:w-4/5 lg:ml-[20%] bg-white min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <Hero />
          <Concept />
          <div className="h-8 md:h-12"></div> {/* Spacer réduit */}
          <Menu />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;