import React from 'react';
import { Shield, Brain, Database, Phone, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Resources from './components/Resources';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Quantum Shield Labs</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#resources" className="hover:text-blue-500 transition">Resources</a>
            <a href="#about" className="hover:text-blue-500 transition">About</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Services />
        <Projects />
        <Resources />
        <About />
        <Contact />
      </main>

      <footer className="bg-black/50 backdrop-blur-lg py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-semibold">Quantum Shield Labs</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-500 transition"><Github className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="hover:text-blue-500 transition"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Quantum Shield Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;