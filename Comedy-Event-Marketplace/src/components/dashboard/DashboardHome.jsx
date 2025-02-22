import React from 'react'
import { Calendar, DollarSign, Users, Star, Bell, ThumbsUp } from 'lucide-react'

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, Dave!</h1>
          <p className="text-gray-600 dark:text-gray-400">Your comedy career dashboard</p>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
          Create New Show
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Next 30 Days</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8</h3>
          <p className="text-gray-600 dark:text-gray-400">Upcoming Gigs</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">This Month</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">$3,250</h3>
          <p className="text-gray-600 dark:text-gray-400">Total Earnings</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Last 7 Days</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</h3>
          <p className="text-gray-600 dark:text-gray-400">Profile Views</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Average</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">4.9</h3>
          <p className="text-gray-600 dark:text-gray-400">Show Rating</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Notifications</h2>
          <Bell className="w-5 h-5 text-gray-500" />
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="p-2 bg-purple-100 dark:bg-purple-800 rounded-full">
              <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">New Gig Invitation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Comedy Club NYC wants to book you for their weekend special</p>
              <div className="mt-2 space-x-2">
                <button className="text-sm bg-purple-600 text-white px-4 py-1 rounded-full">Accept</button>
                <button className="text-sm border border-gray-300 dark:border-gray-600 px-4 py-1 rounded-full">Decline</button>
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-2 bg-green-100 dark:bg-green-800 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Payment Received</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">$500 payment processed for Laugh Factory show</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="p-2 bg-blue-100 dark:bg-blue-800 rounded-full">
              <ThumbsUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">New Review</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">"Best comedy show I've seen this year!" - Recent audience review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Gigs */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Gigs</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Comedy Club NYC</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 15, 2024 • 8:00 PM</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">200 tickets sold</p>
              </div>
            </div>
            <button className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
          <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Laugh Factory</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">March 20, 2024 • 9:00 PM</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">150 tickets sold</p>
              </div>
            </div>
            <button className="text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome