import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            About Us
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Quantum Shield Labs was established with a vision to redefine the landscape of cybersecurity and technology solutions. Founded by a team of seasoned professionals, we are committed to developing innovative solutions that protect organizations from emerging threats.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Our team comprises experts with diverse skill sets and profound understanding of cybersecurity complexities. Each member brings unique qualifications and experiences in software engineering, data analysis, and threat intelligence, ensuring we remain at the forefront of industry advancements.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
              <p className="text-gray-300 leading-relaxed">
                At Quantum Shield Labs, we foster an environment where creativity is encouraged and innovation is celebrated. Our employees are passionate individuals dedicated to making the digital world a safer place, valuing transparency, ethics, and a commitment to excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}