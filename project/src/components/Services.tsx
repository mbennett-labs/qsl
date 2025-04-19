import React from 'react';
import { Shield, Brain, Database, Lock } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Security Consulting',
    description: 'Comprehensive risk assessments and penetration testing to identify and address vulnerabilities in your security infrastructure.'
  },
  {
    icon: Database,
    title: 'Blockchain Integration',
    description: 'Expert implementation of secure blockchain solutions to enhance transactional integrity and transparency.'
  },
  {
    icon: Brain,
    title: 'AI-Driven Security',
    description: 'Intelligent threat detection and response systems powered by machine learning algorithms.'
  },
  {
    icon: Lock,
    title: 'Quantum Resistance',
    description: 'Future-proof security measures designed to withstand the computational power of quantum computers.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition">
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}