import React from 'react';
import { FileText, Video, BookOpen, Newspaper } from 'lucide-react';

const resources = [
  {
    icon: FileText,
    title: 'Whitepapers',
    description: 'In-depth research and analysis on cybersecurity trends and challenges.'
  },
  {
    icon: Video,
    title: 'Webinars',
    description: 'Live sessions with industry experts covering emerging technologies.'
  },
  {
    icon: BookOpen,
    title: 'E-Books',
    description: 'Comprehensive guides on blockchain technology and AI applications.'
  },
  {
    icon: Newspaper,
    title: 'Blog',
    description: 'Latest insights on cybersecurity, blockchain, and AI innovations.'
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 cursor-pointer hover:bg-gray-800/50 transition">
              <resource.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
              <p className="text-gray-400">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}