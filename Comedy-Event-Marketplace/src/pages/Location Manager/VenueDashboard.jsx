import React, { useState } from 'react';
import VenueList from '../../components/Location Manager/VenueList.jsx';
import AddVenueForm from '../../components/Location Manager/AddVenueForm.jsx';
import ImageUploader from '../../components/Location Manager/ImageUploader.jsx';
import RevenueChart from '../../components/Location Manager/RevenueChart.jsx';
import Analytics from '../../components/Location Manager/Analytics.jsx';
import ArtistRequests from '../../components/Location Manager/ArtistRequests.jsx';
import NavbarLocationManager from '../../components/Location Manager/NavbarLocationManager.jsx'
import AnalyticsPage from './AnalyticsPage.jsx'
import { Plus } from 'lucide-react';

function VenueDashboard() {
   const [venues, setVenues] = useState([
      {
         id: '1',
         name: 'Mumbai Comedy Club',
         city: 'Mumbai',
         address: '123 Marine Drive',
         capacity: 400,
         googleMapsLink: 'https://maps.google.com/?q=Mumbai+Comedy+Club',
         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QP_KLlcSpz72Yr0GJ61iDBwdcWE6MSC6Ew&s',
         isApproved: true,
      },

   ]);

   const [showAddForm, setShowAddForm] = useState(false);

   const addVenue = (newVenue) => {
      setVenues([...venues, { ...newVenue, id: Date.now().toString(), isApproved: false }]);
      setShowAddForm(false);
   };

   const toggleApproval = (id) => {
      setVenues(
         venues.map((venue) =>
            venue.id === id ? { ...venue, isApproved: !venue.isApproved } : venue
         )
      );
   };

   const deleteVenue = (id) => {
      setVenues(venues.filter((venue) => venue.id !== id));
   };

   return (

      <div className="min-h-screen bg-gray-50">
         <NavbarLocationManager />
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h1 className="text-3xl font-bold text-gray-900">Venue Manager</h1>
                  <p className="mt-2 text-gray-600">Manage your comedy event locations</p>
               </div>
               <div className="flex space-x-4">
                  <button
                     onClick={() => setShowAddForm(true)}
                     className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                  >
                     <Plus className="w-5 h-5 mr-2" />
                     Add New Venue
                  </button>
                  <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors">
                     Sign Out
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-8">
               <RevenueChart />
               <Analytics />
               <ArtistRequests />
            </div>

            {showAddForm && (
               <div className="mb-8">
                  <AddVenueForm onAddVenue={addVenue} onCancel={() => setShowAddForm(false)} />
                  <div className="mt-4">
                     <h3 className="text-lg font-medium mb-2">Upload Venue Images</h3>
                     <ImageUploader onImageUpload={(imageUrl) => console.log('Image uploaded:', imageUrl)} />
                  </div>
               </div>
            )}

            <VenueList venues={venues} onToggleApproval={toggleApproval} onDelete={deleteVenue} />
         </div>
      </div>
   );
}

export default VenueDashboard;