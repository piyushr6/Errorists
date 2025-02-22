import React ,{useState}from 'react'
import {  
    Calendar,  
    Ticket,  
    Users,  
    Star,  
    MapPin,  
    Menu,  
    X,  
    User,  
    Settings,  
    ChevronLeft,  
    ChevronRight,  
  } from "lucide-react"; 


const ProfileSettings = ({ onClose }) => {  
    return (  
      <div className="fixed top-0 left-64 w-full h-full bg-white z-40 p-6 overflow-y-auto">  
        <h2 className="text-3xl font-bold mb-4">Profile Settings</h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">  
          <div>  
            <h3 className="font-semibold">Personal Info</h3>  
            <div className="flex items-center mb-4">  
              <img  
                src="https://via.placeholder.com/100" // Placeholder for user image  
                alt="User"  
                className="rounded-full w-24 h-24 mr-4"  
              />  
              <div>  
                <p className="text-lg">Ahmad</p>  
                <p className="text-gray-500">ahmadsaris@gmail.com</p>  
              </div>  
            </div>  
            <div className="mb-4">  
              <label className="block mb-1">First Name</label>  
              <input  
                type="text"  
                className="border border-gray-300 rounded w-full p-2"  
                defaultValue="Ahmad"  
              />  
            </div>  
            <div className="mb-4">  
              <label className="block mb-1">Last Name</label>  
              <input  
                type="text"  
                className="border border-gray-300 rounded w-full p-2"  
                defaultValue="Saris"  
              />  
            </div>  
            <button className="bg-purple-600 text-white px-4 py-2 rounded">  
              Edit Details  
            </button>  
          </div>  
          <div>  
            <h3 className="font-semibold">General</h3>  
            <ul>  
              <li className="mb-2">  
                <button className="text-purple-600">Edit Profile</button>  
              </li>  
              <li className="mb-2">  
                <button className="text-purple-600">Password</button>  
              </li>  
              <li className="mb-2">  
                <button className="text-purple-600">Data Privacy</button>  
              </li>  
            </ul>  
            <button className="bg-red-600 text-white px-4 py-2 rounded">  
              Log Out  
            </button>  
          </div>  
        </div>  
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>  
          <X className="w-6 h-6" />  
        </button>  
      </div>  
    );  
  };  

  export default ProfileSettings;