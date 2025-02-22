import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AVAILABLE_CITIES = [
   'Mumbai',
   'Delhi',
   'Bangalore',
   'Pune',
   'Hyderabad',
   'Chennai',
   'Ahmedabad',
   'Kolkata'
];

function AddVenueForm({ onAddVenue, onCancel }) {
   const [newVenue, setNewVenue] = useState({});

   const handleSubmit = (e) => {
      e.preventDefault();
      if (newVenue.name && newVenue.city && newVenue.capacity) {
         onAddVenue({
            id: Date.now().toString(),
            name: newVenue.name,
            city: newVenue.city,
            address: newVenue.address || '',
            capacity: Number(newVenue.capacity),
            googleMapsLink: newVenue.googleMapsLink || '',
            imageUrl: newVenue.imageUrl || '',
            isApproved: false,
         });
         setNewVenue({});
      }
   };
   return (
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
         <h2 className="text-xl font-semibold mb-4">Add New Venue</h2>
         <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
               type="text"
               placeholder="Venue Name"
               className="p-2 border rounded-md"
               value={newVenue.name || ''}
               onChange={(e) => setNewVenue({ ...newVenue, name: e.target.value })}
               required
            />
            <select
               className="p-2 border rounded-md bg-white"
               value={newVenue.city || ''}
               onChange={(e) => setNewVenue({ ...newVenue, city: e.target.value })}
               required
            >
               <option value="">Select a City</option>
               {AVAILABLE_CITIES.map(city => (
                  <option key={city} value={city}>{city}</option>
               ))}
            </select>
            <input
               type="number"
               placeholder="Capacity"
               className="p-2 border rounded-md"
               value={newVenue.capacity || ''}
               onChange={(e) => setNewVenue({ ...newVenue, capacity: e.target.value })}
               required
            />
            <input
               type="url"
               placeholder="Google Maps Link"
               className="p-2 border rounded-md"
               value={newVenue.googleMapsLink || ''}
               onChange={(e) => setNewVenue({ ...newVenue, googleMapsLink: e.target.value })}
            />
            <div className="flex gap-2">
               <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
               >
                  Add
               </button>
               <button
                  type="button"
                  onClick={onCancel}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
               >
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
}

AddVenueForm.propTypes = {
   onAddVenue: PropTypes.func.isRequired,
   onCancel: PropTypes.func.isRequired,
};

export default AddVenueForm;