import { useEffect, useState } from "react";

function AdminEventManagement() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Concert A",
      date: "2025-03-15T19:00:00Z",
      status: "pending",
    },
    {
      id: 2,
      title: "Festival B",
      date: "2025-04-20T14:00:00Z",
      status: "approved",
    },
    {
      id: 3,
      title: "Show C",
      date: "2025-05-10T18:00:00Z",
      status: "rejected",
    },
  ]);

  // Approve Event
  const approveEvent = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, status: "approved" } : event
      )
    );
  };

  // Reject Event
  const rejectEvent = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, status: "rejected" } : event
      )
    );
  };

  // Flag Event
  const flagEvent = (id) => {
    const reason = prompt("Enter reason for flagging this event:");
    if (!reason) return;
    setEvents(
      events.map((event) =>
        event.id === id
          ? { ...event, status: "flagged", flagged_reason: reason }
          : event
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Event Management</h1>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id} className="border border-gray-300">
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">
                {new Date(event.date).toLocaleString()}
              </td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-white ${
                    event.status === "approved"
                      ? "bg-green-500"
                      : event.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {event.status}
                </span>
              </td>
              <td className="border p-2 space-x-2">
                {event.status === "pending" && (
                  <>
                    <button
                      onClick={() => approveEvent(event.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => rejectEvent(event.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
                <button
                  onClick={() => flagEvent(event.id)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded cursor-pointer hover:bg-yellow-600"
                >
                  Flag
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminEventManagement;
