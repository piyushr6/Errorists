function CustomerDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Discover Comedy Shows</h1>
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search shows..."
            className="px-4 py-2 border rounded-lg"
          />
          <select className="px-4 py-2 border rounded-lg">
            <option value="">All Locations</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option value="">All Genres</option>
          </select>
          <input
            type="date"
            className="px-4 py-2 border rounded-lg"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Event Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://placehold.co/600x400"
            alt="Event"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Comedy Night Special</h3>
            <p className="text-gray-600 mb-4">Join us for a night of laughter!</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">$25.00</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;