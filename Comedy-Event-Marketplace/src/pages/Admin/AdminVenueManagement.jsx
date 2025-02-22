import { useState } from "react";

const AdminVenueManagement = () => {
  const [venues, setVenues] = useState([
    {
      id: 1,
      name: "Laugh Lounge",
      location: "New York, NY",
      status: "pending",
      bookings: 120,
      issues: 2,
    },
    {
      id: 2,
      name: "Comedy Hub",
      location: "Los Angeles, CA",
      status: "approved",
      bookings: 200,
      issues: 0,
    },
    {
      id: 3,
      name: "Funny Spot",
      location: "Chicago, IL",
      status: "denied",
      bookings: 50,
      issues: 5,
    },
  ]);

  const updateVenueStatus = (id, newStatus) => {
    setVenues(
      venues.map((venue) =>
        venue.id === id ? { ...venue, status: newStatus } : venue
      )
    );
  };

  const resolveIssue = (id) => {
    setVenues(
      venues.map((venue) =>
        venue.id === id
          ? { ...venue, issues: Math.max(venue.issues - 1, 0) }
          : venue
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Venue Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Name</th>
              <th className="border p-2">Location</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Bookings</th>
              <th className="border p-2">Issues</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {venues.map((venue) => (
              <tr key={venue.id} className="text-center">
                <td className="border p-2">{venue.name}</td>
                <td className="border p-2">{venue.location}</td>
                <td
                  className={`border p-2 ${
                    venue.status === "approved"
                      ? "text-green-500"
                      : venue.status === "denied"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {venue.status}
                </td>
                <td className="border p-2">{venue.bookings}</td>
                <td className="border p-2">{venue.issues}</td>
                <td className="border p-2 flex gap-2 justify-center">
                  {venue.status === "pending" && (
                    <>
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
                        onClick={() => updateVenueStatus(venue.id, "approved")}
                      >
                        Approve
                      </button>
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                        onClick={() => updateVenueStatus(venue.id, "denied")}
                      >
                        Deny
                      </button>
                    </>
                  )}
                  {venue.issues > 0 && (
                    <button
                      className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600"
                      onClick={() => resolveIssue(venue.id)}
                    >
                      Resolve Issue
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminVenueManagement;
