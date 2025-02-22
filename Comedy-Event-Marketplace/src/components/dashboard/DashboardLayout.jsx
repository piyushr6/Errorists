import React from 'react'
import { 
  LayoutDashboard, 
  Calendar, 
  DollarSign, 
  BarChart, 
  Video, 
  Users, 
  Settings, 
  UserCircle,
  LogOut 
} from 'lucide-react'

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Comedian Portal</h2>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-2">
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-200">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <UserCircle className="w-5 h-5" />
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5" />
              <span>Gigs & Bookings</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <DollarSign className="w-5 h-5" />
              <span>Earnings</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <BarChart className="w-5 h-5" />
              <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <Video className="w-5 h-5" />
              <span>Content</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <Users className="w-5 h-5" />
              <span>Community</span>
            </a>
            <a href="#" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300">
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </div>
          <div className="px-4 mt-12">
            <button className="flex items-center space-x-2 p-3 w-full rounded-lg hover:bg-red-50 dark:hover:bg-red-900/50 text-red-600 dark:text-red-400">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout