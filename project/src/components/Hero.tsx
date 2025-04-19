import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <Shield className="w-16 h-16 text-blue-500 mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Advanced Security Solutions for the Quantum Age
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Cybersecurity, blockchain, and AI expertise to protect your digital assets in an evolving technological landscape.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center mx-auto space-x-2 transition transform hover:scale-105">
          <span>Explore Our Services</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}