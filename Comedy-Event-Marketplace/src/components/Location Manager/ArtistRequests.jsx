import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

function ArtistRequests() {
   const [requests, setRequests] = useState([
      {
         id: 1,
         artist: 'Rahul Kumar',
         date: '2024-04-15',
         venue: 'Mumbai Comedy Club',
         status: 'pending',
         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
      },
      {
         id: 2,
         artist: 'Priya Singh',
         date: '2024-04-18',
         venue: 'Delhi Laughter Hub',
         status: 'pending',
         image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
      },
      {
         id: 3,
         artist: 'Arun Patel',
         date: '2024-04-20',
         venue: 'Bangalore Laughs',
         status: 'pending',
         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80'
      }
   ]);

   const handleRequest = (id, status) => {
      setRequests(requests.map(request =>
         request.id === id ? { ...request, status } : request
      ));
   };

   return (
      <div className="bg-white rounded-lg shadow p-6">
         <h2 className="text-lg font-semibold mb-6">Artist Performance Requests</h2>
         <div className="space-y-4">
            {requests.map(request => (
               <div key={request.id} className={`flex items-center justify-between p-4 rounded-lg ${request.status === 'pending' ? 'bg-gray-50' :
                     request.status === 'approved' ? 'bg-green-50' : 'bg-red-50'
                  }`}>
                  <div className="flex items-center space-x-4">
                     <img
                        src={request.image}
                        alt={request.artist}
                        className="w-12 h-12 rounded-full object-cover"
                     />
                     <div>
                        <h3 className="font-medium">{request.artist}</h3>
                        <p className="text-sm text-gray-600">{request.venue} - {request.date}</p>
                     </div>
                  </div>
                  {request.status === 'pending' && (
                     <div className="flex space-x-2">
                        <button
                           onClick={() => handleRequest(request.id, 'approved')}
                           className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200"
                        >
                           <Check className="w-5 h-5" />
                        </button>
                        <button
                           onClick={() => handleRequest(request.id, 'rejected')}
                           className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200"
                        >
                           <X className="w-5 h-5" />
                        </button>
                     </div>
                  )}
                  {request.status !== 'pending' && (
                     <span className={`px-3 py-1 rounded-full text-sm ${request.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                     </span>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}

export default ArtistRequests;