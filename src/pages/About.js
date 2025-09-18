import React from 'react';
import { aboutContent } from '../data/mockData';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">
          {aboutContent.title}
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {aboutContent.content}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between artists and art lovers, creating a platform where 
                creativity meets appreciation and every piece tells a unique story.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-gray-600">
                To become the premier destination for contemporary art, fostering a community 
                that celebrates artistic expression and cultural diversity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;