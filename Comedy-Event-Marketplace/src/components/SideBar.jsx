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
  
export default function Sidebar({ isOpen, setIsOpen }) {
    const menuItems = [
      { icon: <Calendar size={20} />, label: 'Events', active: true },
      { icon: <DollarSign size={20} />, label: 'Earnings' },
      { icon: <Users size={20} />, label: 'Audience' },
      { icon: <Star size={20} />, label: 'Reviews' },
      { icon: <MessageSquare size={20} />, label: 'Messages' },
      { icon: <Settings size={20} />, label: 'Settings' }
    ];
  
    return (
      <div className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-72`}>
        <div className="h-full bg-white border-r border-gray-100 flex flex-col">
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Artist Hub</h1>
              <button 
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
  
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                    item.active 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                  {item.active && (
                    <div className="ml-auto w-1.5 h-1.5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              ))}
            </nav>
          </div>
  
          <div className="mt-auto p-6 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-10 h-10 rounded-xl"
              />
              <div>
                <p className="font-medium text-gray-900">Alex Rivera</p>
                <p className="text-sm text-gray-500">Stand-up Comedian</p>
              </div>
            </div>
            <button className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

