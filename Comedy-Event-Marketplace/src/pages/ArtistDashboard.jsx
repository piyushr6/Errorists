import React, { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard'
import Sidebar from '../components/SideBar'
import EventCard from '../components/EventCard'
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


function ArtistDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const events = [
    {
      date: '15 Mar',
      venue: 'The Comedy Store',
      time: '8:00 PM',
      location: 'Los Angeles, CA',
      status: 'Confirmed',
      capacity: 200,
      payment: 500
    },
    {
      date: '18 Mar',
      venue: 'Laugh Factory',
      time: '9:30 PM',
      location: 'Hollywood, CA',
      status: 'Pending',
      capacity: 150,
      payment: 400
    },
    {
      date: '22 Mar',
      venue: 'Improv Club',
      time: '7:00 PM',
      location: 'New York, NY',
      status: 'Confirmed',
      capacity: 180,
      payment: 450
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
                <p className="text-gray-500 mt-1">Here's what's happening with your events.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative p-2 rounded-xl hover:bg-gray-100">
                  <Bell size={24} className="text-gray-600" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard 
                icon={<Calendar size={24} />}
                label="Upcoming Shows"
                value="12"
                trend="8"
              />
              <StatsCard 
                icon={<DollarSign size={24} />}
                label="Monthly Revenue"
                value="$3,240"
                trend="12"
              />
              <StatsCard 
                icon={<Users size={24} />}
                label="Total Audience"
                value="1,234"
                trend="24"
              />
              <StatsCard 
                icon={<Star size={24} />}
                label="Avg. Rating"
                value="4.8"
                trend="5"
              />
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <EventCard key={index} event={event} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                      <img
                        src={`https://images.unsplash.com/photo-${1500 + index}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                        alt="Reviewer"
                        className="w-10 h-10 rounded-xl"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">Sarah Johnson</h3>
                          <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">
                          Absolutely hilarious performance! Can't wait to see you again.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h2>
                <div className="space-y-4">
                  {['Ticket Sales', 'Audience Growth', 'Revenue'].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{metric}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-green-600">+12%</span>
                          <span className="text-gray-500">vs last month</span>
                        </div>
                      </div>
                      <div className="w-24 h-12 bg-gray-50 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ArtistDashboard;