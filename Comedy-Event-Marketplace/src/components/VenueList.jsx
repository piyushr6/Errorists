import React from 'react';
import PropTypes from 'prop-types';
import VenueCard from './VenueCard';

function VenueList({ venues, onToggleApproval, onDelete }) {
   return (
      <div className="flex flex-col space-y-6 mx-4">
         {venues.map((venue) => (
            <VenueCard
               key={venue.id}
               venue={venue}
               onToggleApproval={onToggleApproval}
               onDelete={onDelete}
            />
         ))}
      </div>
   );
}

VenueList.propTypes = {
   venues: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         city: PropTypes.string.isRequired,
         capacity: PropTypes.number.isRequired,
         googleMapsLink: PropTypes.string,
         isApproved: PropTypes.bool.isRequired,
         imageUrl: PropTypes.string,
      })
   ).isRequired,
   onToggleApproval: PropTypes.func.isRequired,
   onDelete: PropTypes.func.isRequired,
};

export default VenueList;