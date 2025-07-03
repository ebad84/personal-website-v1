import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Mohammad Reza Ebadollah
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">
            Senior Back-end Developer
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate Python developer with 5+ years of experience building scalable web applications, 
            REST APIs, and microservices. Specialized in Django, Flask, and cloud infrastructure.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="mailto:mohammad.reza.ebadollah@example.com"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/mohammadrezaebadollah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/mohammadrezaebadollah"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full hover:bg-slate-800 transition-colors duration-300"
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
}