function VenueDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Venue Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Venue Management</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add New Venue
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Event Calendar</h2>
          <p className="text-gray-600">View and manage upcoming events</p>
        </div>
      </div>
    </div>
  );
}

export default VenueDashboard;