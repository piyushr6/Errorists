import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MapPin, Users, Link as LinkIcon, CheckCircle, XCircle, Trash2 } from 'lucide-react';

function VenueCard({ venue, onToggleApproval, onDelete }) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleDelete = () => {
      setIsModalOpen(true);
   };

   const confirmDelete = () => {
      onDelete(venue.id);
      setIsModalOpen(false);
   };

   return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex">

         <img
            src={venue.imageUrl || "https://via.placeholder.com/400"}
            alt={venue.city}
            className="w-48 pt-12 h-full object-cover"
         />

         <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-2">
               <h3 className="text-xl font-semibold text-gray-900">{venue.name}</h3>
               <div className="flex space-x-2">
                  <button
                     onClick={() => onToggleApproval(venue.id)}
                     className={`${venue.isApproved ? 'text-green-500' : 'text-red-500'} hover:opacity-75 transition-opacity`}
                  >
                     {venue.isApproved ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
                  </button>
                  <button
                     onClick={handleDelete}
                     className="text-red-500 hover:opacity-75 transition-opacity"
                  >
                     <Trash2 className="w-6 h-6" />
                  </button>
               </div>
            </div>
            <div className="space-y-3">
               <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{venue.city}</span>
               </div>
               <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span>{venue.capacity} seats</span>
               </div>
               {venue.googleMapsLink && (
                  <a href={venue.googleMapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
                     <LinkIcon className="w-5 h-5 mr-2" />
                     <span>View on Maps</span>
                  </a>
               )}
               <div className="mt-4 flex items-center">
                  <div className="text-sm text-gray-500">Status:</div>
                  <div className={`ml-2 px-2 py-1 text-sm rounded ${venue.isApproved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                     {venue.isApproved ? 'Approved' : 'Waiting for approval'}
                  </div>
               </div>
            </div>
         </div>

         {/* Modal */}
         {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
               <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                  <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
                  <p className="text-gray-600 mb-4">Are you sure you want to delete the venue <b>{venue.name}</b>?</p>
                  <div className="flex justify-end space-x-3">
                     <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                     >
                        Cancel
                     </button>
                     <button
                        onClick={confirmDelete}
                        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                     >
                        Delete
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

VenueCard.propTypes = {
   venue: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      capacity: PropTypes.number.isRequired,
      googleMapsLink: PropTypes.string,
      isApproved: PropTypes.bool.isRequired,
      imageUrl: PropTypes.string,
   }).isRequired,
   onToggleApproval: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
};

export default VenueCard;