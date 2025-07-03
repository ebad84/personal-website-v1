import React from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">DevPortfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === id ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4 space-y-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 hover:text-blue-400 hover:bg-slate-700 ${
                  activeSection === id ? 'text-blue-400 bg-slate-700' : 'text-gray-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}