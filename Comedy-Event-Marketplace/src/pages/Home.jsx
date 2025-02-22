function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Comedy Hub</h1>
      <p className="text-xl text-gray-600 mb-8">
        Your one-stop platform for discovering and organizing comedy shows
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">For Venues</h2>
          <p className="text-gray-600">List your venue and host amazing comedy shows</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">For Artists</h2>
          <p className="text-gray-600">Submit your show concepts and reach new audiences</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">For Comedy Fans</h2>
          <p className="text-gray-600">Discover and book tickets for the best comedy shows</p>
        </div>
      </div>
    </div>
  );
}

export default Home;