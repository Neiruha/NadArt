import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-semibold tracking-wider">СТО</a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#why" className="hover:text-purple-300 transition-colors">Почему СТО</a>
            <a href="#services" className="hover:text-purple-300 transition-colors">Услуги</a>
            <a href="#journey" className="hover:text-purple-300 transition-colors">Путь клиента</a>
            <a href="#testimonials" className="hover:text-purple-300 transition-colors">Отзывы</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#why" className="hover:text-purple-300 transition-colors">Почему СТО</a>
              <a href="#services" className="hover:text-purple-300 transition-colors">Услуги</a>
              <a href="#journey" className="hover:text-purple-300 transition-colors">Путь клиента</a>
              <a href="#testimonials" className="hover:text-purple-300 transition-colors">Отзывы</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}