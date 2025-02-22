import React from 'react';
import { Star } from 'lucide-react';

const ComedianCard = ({ comedian }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={comedian.image}
          alt={comedian.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{comedian.name}</h3>
        <p className="text-gray-600 mb-4">{comedian.specialty}</p>
        <div className="flex items-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-semibold">{comedian.rating}</span>
          <span className="text-gray-500">({comedian.shows} shows)</span>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ComedianCard;
