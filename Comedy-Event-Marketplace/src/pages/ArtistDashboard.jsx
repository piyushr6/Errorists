function ArtistDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Artist Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Submit Show</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create New Show
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">My Shows</h2>
          <p className="text-gray-600">View and manage your shows</p>
        </div>
      </div>
    </div>
  );
}

export default ArtistDashboard;