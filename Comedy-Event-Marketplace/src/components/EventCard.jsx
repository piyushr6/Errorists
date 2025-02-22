import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-purple-600 font-semibold mb-4">{event.comedian}</p>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.venue}</span>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">{event.price}</span>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
