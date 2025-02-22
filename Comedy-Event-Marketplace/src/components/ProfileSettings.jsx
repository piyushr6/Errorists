import React from 'react';  

const ProfileSettings = ({ onClose }) => {  
  return (  
    <div className="flex flex-col md:flex-row bg-white min-h-screen">  
      {/* Sidebar */}  
      <div className="w-64 bg-gray-100 p-4">  
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>  
        <ul>  
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Edit Profile</li>  
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Password</li>  
          <li className="py-2 hover:bg-gray-200 cursor-pointer">Data Privacy</li>  
        </ul>  
        <button className="mt-4 text-red-600">Log Out</button>  
      </div>  

      {/* Main Content */}  
      <div className="flex-1 p-6">  
        <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>  
        <div className="mb-4">  
          <label className="block mb-2">First Name</label>  
          <input type="text" className="border border-gray-300 p-2 rounded w-full" placeholder="Ahmad" />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-2">Email Address</label>  
          <input type="email" className="border border-gray-300 p-2 rounded w-full" placeholder="ahmadsaris@gmail.com" />  
        </div>  
        <div className="mb-4">  
          <label className="block mb-2">Phone Number</label>  
          <input type="tel" className="border border-gray-300 p-2 rounded w-full" placeholder="+1 03203202" />  
        </div>  
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Edit Details</button>  
      </div>  
    </div>  
  );  
};  

export default ProfileSettings;