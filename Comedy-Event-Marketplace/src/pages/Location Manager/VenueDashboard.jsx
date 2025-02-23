import React, { useState } from 'react';
import { Home, BarChart, Users, PlusCircle, LogOut, Plus, Trash2, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

// VenueList component
const VenueList = ({ venues, onToggleApproval, onDelete }) => (
   <div className="bg-white rounded-lg shadow">
      <div className="p-6">
         <h2 className="text-xl font-semibold mb-4">Venue List</h2>
         <div className="space-y-4">
            {venues.map((venue) => (
               <div key={venue.id} className="border rounded-lg p-4 flex items-center justify-between">
                  <div>
                     <h3 className="font-medium">{venue.name}</h3>
                     <p className="text-sm text-gray-500">{venue.address}, {venue.city}</p>
                     <p className="text-sm text-gray-500">Capacity: {venue.capacity}</p>
                  </div>
                  <div className="flex space-x-2">
                     <button
                        onClick={() => onToggleApproval(venue.id)}
                        className={`p-2 rounded-full ${venue.isApproved ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
                     >
                        <Check className="w-5 h-5" />
                     </button>
                     <button
                        onClick={() => onDelete(venue.id)}
                        className="p-2 rounded-full bg-red-100 text-red-600"
                     >
                        <Trash2 className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   </div>
);

// RevenueChart component
const RevenueChart = () => {
   const data = [
      { name: 'Jan', revenue: 4000 },
      { name: 'Feb', revenue: 3000 },
      { name: 'Mar', revenue: 5000 },
      { name: 'Apr', revenue: 4500 },
      { name: 'May', revenue: 6000 },
   ];

   return (
      <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
         <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#4f46e5" />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

// Analytics component
const Analytics = () => (
   <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="text-lg font-medium text-indigo-600">Total Bookings</h3>
            <p className="text-2xl font-bold">1,234</p>
         </div>
         <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="text-lg font-medium text-green-600">Revenue</h3>
            <p className="text-2xl font-bold">$45,678</p>
         </div>
         <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-medium text-purple-600">Active Venues</h3>
            <p className="text-2xl font-bold">12</p>
         </div>
      </div>
   </div>
);

// ArtistRequests component
const ArtistRequests = () => (
   <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Artist Requests</h2>
      <div className="space-y-4">
         {[
            { id: 1, name: 'John Doe', date: '2024-03-01', status: 'pending' },
            { id: 2, name: 'Jane Smith', date: '2024-03-15', status: 'approved' },
         ].map((request) => (
            <div key={request.id} className="border rounded-lg p-4 flex items-center justify-between">
               <div>
                  <h3 className="font-medium">{request.name}</h3>
                  <p className="text-sm text-gray-500">Requested: {request.date}</p>
               </div>
               <span className={`px-3 py-1 rounded-full text-sm ${request.status === 'approved' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                  {request.status}
               </span>
            </div>
         ))}
      </div>
   </div>
);

// AddVenueForm component
const AddVenueForm = ({ onAddVenue, onCancel }) => {
   const [formData, setFormData] = useState({
      name: '',
      city: '',
      address: '',
      capacity: '',
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      onAddVenue({
         ...formData,
         capacity: parseInt(formData.capacity),
         imageUrl: '/api/placeholder/400/300',
      });
   };

   return (
      <div className="bg-white p-6 rounded-lg shadow">
         <h2 className="text-xl font-semibold mb-4">Add New Venue</h2>
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
               <label className="block text-sm font-medium text-gray-700">Venue Name</label>
               <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
               />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700">City</label>
               <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
               />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700">Address</label>
               <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
               />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700">Capacity</label>
               <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.capacity}
                  onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                  required
               />
            </div>
            <div className="flex justify-end space-x-3">
               <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
               >
                  Cancel
               </button>
               <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
               >
                  Add Venue
               </button>
            </div>
         </form>
      </div>
   );
};

// Main VenueDashboard component
const VenueDashboard = () => {
   const [activeTab, setActiveTab] = useState('dashboard');
   const [venues, setVenues] = useState([
      {
         id: '1',
         name: 'Mumbai Comedy Club',
         city: 'Mumbai',
         address: '123 Marine Drive',
         capacity: 400,
         imageUrl: '/api/placeholder/400/300',
         isApproved: true,
      }
   ]);

   const navigate = useNavigate();

   const handleSignOut = () => {
      console.log('Signing out...');
      navigate('/');
   };

   const addVenue = (newVenue) => {
      setVenues([...venues, { ...newVenue, id: Date.now().toString(), isApproved: false }]);
      setActiveTab('dashboard');
   };

   const toggleApproval = (id) => {
      setVenues(venues.map((venue) =>
         venue.id === id ? { ...venue, isApproved: !venue.isApproved } : venue
      ));
   };

   const deleteVenue = (id) => {
      setVenues(venues.filter((venue) => venue.id !== id));
   };

   const renderContent = () => {
      switch (activeTab) {
         case 'dashboard':
            return (
               <div className="grid grid-cols-1 gap-8">
                  <RevenueChart />
                  <VenueList venues={venues} onToggleApproval={toggleApproval} onDelete={deleteVenue} />
               </div>
            );
         case 'analytics':
            return <Analytics />;
         case 'artists':
            return <ArtistRequests />;
         case 'add-venue':
            return (
               <AddVenueForm
                  onAddVenue={addVenue}
                  onCancel={() => setActiveTab('dashboard')}
               />
            );
         default:
            return null;
      }
   };

   return (
      <div className="flex min-h-screen bg-gray-50">
         {/* Sidebar */}
         <div className="w-64 bg-white shadow-lg flex flex-col min-h-screen">
            <div className="p-5 flex-1">
               <h2 className="text-2xl font-bold text-gray-900 mb-6">Venue Manager</h2>
               <nav className="flex flex-col space-y-4">
                  <button
                     className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     onClick={() => setActiveTab('dashboard')}
                  >
                     <Home className="w-5 h-5 mr-2" /> Dashboard
                  </button>
                  <button
                     className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     onClick={() => setActiveTab('analytics')}
                  >
                     <BarChart className="w-5 h-5 mr-2" /> Analytics
                  </button>
                  <button
                     className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'artists' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     onClick={() => setActiveTab('artists')}
                  >
                     <Users className="w-5 h-5 mr-2" /> Artist Requests
                  </button>
                  <button
                     className={`flex items-center p-3 rounded-md transition-colors ${activeTab === 'add-venue' ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     onClick={() => setActiveTab('add-venue')}
                  >
                     <PlusCircle className="w-5 h-5 mr-2" /> Add Venue
                  </button>
               </nav>
            </div>
            <div className="p-5">
               <button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center p-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
               >
                  <LogOut className="w-5 h-5 mr-2" /> Sign Out
               </button>
            </div>
         </div>

         {/* Main Content */}
         <div className="flex-1 p-8">
            <div className="max-w-7xl mx-auto">
               <div className="flex justify-between items-center mb-8">
                  <div>
                     <h1 className="text-3xl font-bold text-gray-900">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                     </h1>
                     <p className="mt-2 text-gray-600">Manage your comedy event locations</p>
                  </div>
                  {activeTab === 'dashboard' && (
                     <button
                        onClick={() => setActiveTab('add-venue')}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                     >
                        <Plus className="w-5 h-5 mr-2" />
                        Add New Venue
                     </button>
                  )}
               </div>
               {renderContent()}
            </div>
         </div>
      </div>
   );
};

export default VenueDashboard;