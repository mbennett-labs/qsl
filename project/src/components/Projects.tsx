import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Telecom Security Enhancement',
    description: 'Implemented comprehensive encryption framework resulting in 40% reduction in security breaches.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg'
  },
  {
    title: 'Financial Compliance System',
    description: 'Developed robust compliance management system leading to 60% decrease in compliance-related errors.',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg'
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Restructured logistics operations achieving 25% reduction in operational costs through AI implementation.',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <button className="mt-4 flex items-center text-blue-500 group-hover:text-blue-400">
                  Learn more <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}