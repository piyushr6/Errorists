import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart, Users, PlusCircle, LogOut } from 'lucide-react';

const Sidebar = ({ onSelect }) => {
   const [activeTab, setActiveTab] = useState('dashboard');

   const handleTabClick = (tab) => {
      setActiveTab(tab);
      onSelect(tab);
   };

   return (
      <div className="h-screen w-64 bg-white-900 text-black p-5 flex flex-col space-y-6">
         <h2 className="text-2xl font-bold">Venue Manager</h2>
         <nav className="flex flex-col space-y-4">
            <button
               className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
               onClick={() => handleTabClick('dashboard')}
            >
               <Home className="w-5 h-5 mr-2" /> Dashboard
            </button>
            <button
               className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'analytics' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
               onClick={() => handleTabClick('analytics')}
            >
               <BarChart className="w-5 h-5 mr-2" /> Analytics
            </button>
            <button
               className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'artists' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
               onClick={() => handleTabClick('artists')}
            >
               <Users className="w-5 h-5 mr-2" /> Artist Requests
            </button>
            <button
               className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'add-venue' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
               onClick={() => handleTabClick('add-venue')}
            >
               <PlusCircle className="w-5 h-5 mr-2" /> Add Venue
            </button>
         </nav>
         <div className="mt-auto">
            <button className="flex items-center p-3 bg-red-600 rounded-md hover:bg-red-700 transition-colors">
               <LogOut className="w-5 h-5 mr-2" /> Sign Out
            </button>
         </div>
      </div>
   );
};

export default Sidebar;