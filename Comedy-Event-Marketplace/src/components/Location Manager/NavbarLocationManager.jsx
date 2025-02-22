import { useState } from "react";
import { ShoppingCart, Bell, User } from "lucide-react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Placeholder state

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-indigo-600">ComedyHub</div>
      <div className="flex items-center gap-6">
        <a href="/location-manager/revenue" className="text-gray-700 hover:text-indigo-600">Revenue Overview</a>
        <a href="/location-manager/analytics" className="text-gray-700 hover:text-indigo-600">Performance Analytics</a>
        <a href="/location-manager/artist-requests" className="text-gray-700 hover:text-indigo-600">Artist Requests</a>
        <div className="relative">
          <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
        </div>
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
        </div>
        {isLoggedIn ? (
          <div className="relative">
            <User className="w-6 h-6 text-gray-700 hover:text-indigo-600 cursor-pointer" />
          </div>
        ) : (
          <a href="/login" className="text-indigo-600 font-semibold">Login/Signup</a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
