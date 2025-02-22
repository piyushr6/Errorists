import React from 'react';
import { Calendar } from 'lucide-react';

const FeaturedEvent = ({ title, date, description, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-800 to-indigo-900">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative z-10 p-12 text-white">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <div className="flex items-center space-x-2 mb-6">
            <Calendar className="w-6 h-6" />
            <span className="text-xl">{date}</span>
          </div>
          <p className="text-xl mb-8">{description}</p>
          <div className="flex space-x-4">
            <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
              Get Tickets
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvent;
