import { useState } from "react";

const AdminPaymentManagement = () => {
  const [venues, setVenues] = useState([
    {
      id: 1,
      name: "Laugh Factory",
      location: "Los Angeles, CA",
      status: "pending",
      reports: 2,
      bookings: 120,
    },
    {
      id: 2,
      name: "Comedy Cellar",
      location: "New York, NY",
      status: "approved",
      reports: 0,
      bookings: 200,
    },
  ]);

  const [payments, setPayments] = useState([
    {
      id: 1,
      artist: "John Doe",
      venue: "Laugh Factory",
      revenue: 5000,
      commission: 500,
      status: "pending",
    },
    {
      id: 2,
      artist: "Jane Smith",
      venue: "Comedy Cellar",
      revenue: 7000,
      commission: 700,
      status: "approved",
    },
  ]);

  const approveVenue = (id) => {
    setVenues(
      venues.map((venue) =>
        venue.id === id ? { ...venue, status: "approved" } : venue
      )
    );
  };

  const denyVenue = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
  };

  const resolveReport = (id) => {
    setVenues(
      venues.map((venue) =>
        venue.id === id ? { ...venue, reports: 0 } : venue
      )
    );
  };

  const approvePayout = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: "approved" } : payment
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Venue Management</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Venue Name</th>
            <th className="py-2 px-4 border">Location</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Reports</th>
            <th className="py-2 px-4 border">Bookings</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id} className="border">
              <td className="py-2 px-4">{venue.name}</td>
              <td className="py-2 px-4">{venue.location}</td>
              <td className="py-2 px-4 text-green-500">{venue.status}</td>
              <td className="py-2 px-4 text-red-500">{venue.reports}</td>
              <td className="py-2 px-4">{venue.bookings}</td>
              <td className="py-2 px-4 flex gap-2">
                {venue.status === "pending" && (
                  <button
                    onClick={() => approveVenue(venue.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => denyVenue(venue.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Deny
                </button>
                {venue.reports > 0 && (
                  <button
                    onClick={() => resolveReport(venue.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Resolve Report
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold mt-8 mb-4">
        Payment & Revenue Tracking
      </h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Artist</th>
            <th className="py-2 px-4 border">Venue</th>
            <th className="py-2 px-4 border">Revenue</th>
            <th className="py-2 px-4 border">Commission</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id} className="border">
              <td className="py-2 px-4">{payment.artist}</td>
              <td className="py-2 px-4">{payment.venue}</td>
              <td className="py-2 px-4">${payment.revenue}</td>
              <td className="py-2 px-4">${payment.commission}</td>
              <td className="py-2 px-4 text-green-500">{payment.status}</td>
              <td className="py-2 px-4">
                {payment.status === "pending" && (
                  <button
                    onClick={() => approvePayout(payment.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Approve Payout
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPaymentManagement;
