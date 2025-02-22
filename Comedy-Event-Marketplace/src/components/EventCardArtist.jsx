import React from 'react'


import { 
    Calendar,
    DollarSign,
    Users,
    Star,
    Bell,
    Search,
    Menu,
    X,
    ChevronRight,
    MessageSquare,
    Settings,
    LogOut,
    TrendingUp,
    Clock,
    MapPin
  } from 'lucide-react';
  
export default function EventCard({ event }) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl text-indigo-600 font-semibold">
              {event.date.split(' ')[0]}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{event.venue}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock size={14} />
                <span>{event.time}</span>
                <span>•</span>
                <MapPin size={14} />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            event.status === 'Confirmed' ? 'bg-green-50 text-green-600' :
            event.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
            'bg-red-50 text-red-600'
          }`}>
            {event.status}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-gray-400" />
            <span className="text-gray-600">{event.capacity} capacity</span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-gray-400" />
            <span className="text-gray-600">${event.payment}</span>
          </div>
        </div>
      </div>
    );
  }