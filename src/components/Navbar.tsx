'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    // Toujours en mode clair
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projets' },
    //{ name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="hidden sm:block text-slate-900 dark:text-white font-bold text-lg">Mohamed</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions group */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Button 
            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300"
            >
              Me contacter
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
            >
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-[calc(100%+1rem)] left-0 w-full bg-white/90 backdrop-blur-xl border border-white/80 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-50 hover:text-cyan-600 rounded-xl transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="block w-full px-4 py-3 bg-slate-900 text-white font-semibold rounded-xl text-center hover:bg-slate-800 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
