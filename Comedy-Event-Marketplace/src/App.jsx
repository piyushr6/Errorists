import React, { useState } from 'react';
import VenueList from './components/VenueList.jsx';
import AddVenueForm from './components/AddVenueForm.jsx';
import { Plus } from 'lucide-react';

function App() {
  const [venues, setVenues] = useState([
    {
      id: '1',
      name: 'Mumbai Comedy Club',
      city: 'Mumbai',
      address: '123 Marine Drive',
      capacity: 400,
      googleMapsLink: 'https://maps.google.com/?q=Mumbai+Comedy+Club',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_QP_KLlcSpz72Yr0GJ61iDBwdcWE6MSC6Ew&s',
      isApproved: true,
    },
    {
      id: '2',
      name: 'Delhi Laughter Hub',
      city: 'Delhi',
      address: '456 Connaught Place',
      capacity: 350,
      googleMapsLink: 'https://maps.google.com/?q=Delhi+Laughter+Hub',
      imageUrl: 'https://media.istockphoto.com/id/1475568218/photo/the-india-gate-is-a-war-memorial-located-at-kartavya-path-new-delhi-india.jpg?s=612x612&w=0&k=20&c=gpsGqunmvZsOLAK5320GA6tUnSf6DpmeVcSEAqUmNKs=',
      isApproved: false,
    },
    {
      id: '3',
      name: 'Bangalore Laughs',
      city: 'Bangalore',
      address: '789 MG Road',
      capacity: 300,
      googleMapsLink: 'https://maps.google.com/?q=Bangalore+Laughs',
      imageUrl: 'https://www.agoda.com/wp-content/uploads/2024/01/Featured-image-The-Vidhana-Soudha-in-Bangalore.jpg',
      isApproved: true,
    },
    {
      id: '4',
      name: 'Pune Giggles',
      city: 'Pune',
      address: '101 FC Road',
      capacity: 280,
      googleMapsLink: 'https://maps.google.com/?q=Pune+Giggles',
      imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQF9TIOxMgK6aA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697400949285?e=2147483647&v=beta&t=oh07fj1yKZODvdFfOrpUpVUwTzPnZCJ_me-Xszwf-PM',
      isApproved: false,
    },
    {
      id: '5',
      name: 'Hyderabad Chuckles',
      city: 'Hyderabad',
      address: '202 Jubilee Hills',
      capacity: 350,
      googleMapsLink: 'https://maps.google.com/?q=Hyderabad+Chuckles',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtc3yIvKd4TQnLO04xPBzdyVUexAI2hR5mg&s',
      isApproved: true,
    },
    {
      id: '6',
      name: 'Chennai Haha Club',
      city: 'Chennai',
      address: '303 Marina Beach Road',
      capacity: 320,
      googleMapsLink: 'https://maps.google.com/?q=Chennai+Haha+Club',
      imageUrl: 'https://s7ap1.scene7.com/is/image/incredibleindia/1-marina-beach-city-hero?qlt=82&ts=1726654999969',
      isApproved: false,
    },
    {
      id: '7',
      name: 'Ahmedabad Roars',
      city: 'Ahmedabad',
      address: '404 CG Road',
      capacity: 290,
      googleMapsLink: 'https://maps.google.com/?q=Ahmedabad+Roars',
      imageUrl: 'https://www.shutterstock.com/image-photo/kankaria-lake-second-largest-ahmedabad-600nw-2283829069.jpg',
      isApproved: true,
    },
    {
      id: '8',
      name: 'Kolkata Smiles',
      city: 'Kolkata',
      address: '505 Park Street',
      capacity: 310,
      googleMapsLink: 'https://maps.google.com/?q=Kolkata+Smiles',
      imageUrl: 'https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=',
      isApproved: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const addVenue = (newVenue) => {
    setVenues([...venues, { ...newVenue, id: Date.now().toString(), isApproved: false }]);
    setShowAddForm(false);
  };

  const toggleApproval = (id) => {
    setVenues(
      venues.map((venue) =>
        venue.id === id ? { ...venue, isApproved: !venue.isApproved } : venue
      )
    );
  };

  const deleteVenue = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Venue Manager</h1>
            <p className="mt-2 text-gray-600">Manage your comedy event locations</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Venue
          </button>
          <button
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
          >
            Sign Out
          </button>
        </div>

        {showAddForm && <AddVenueForm onAddVenue={addVenue} onCancel={() => setShowAddForm(false)} />}

        <VenueList venues={venues} onToggleApproval={toggleApproval} onDelete={deleteVenue} />
      </div>
    </div>
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import AuthGuard from './components/AuthGuard';
import AdminDashboard from './pages/AdminDashboard';
import VenueDashboard from './pages/VenueDashboard';
import ArtistDashboard from './pages/ArtistDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import useAuthStore from './store/authStore';

function App() {
  const { loadUser, loading } = useAuthStore();
  const [error, setError] = useState(null);

  useEffect(() => {
    loadUser().catch(err => {
      console.error('Failed to load user:', err);
      setError(err.message);
    });
  }, [loadUser]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Error Loading Application</h2>
          <p>{error}</p>
          <p className="mt-2 text-sm">Please ensure Supabase is properly configured.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <AuthGuard allowedRoles={['admin']}>
                  <AdminDashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/venue"
              element={
                <AuthGuard allowedRoles={['venue']}>
                  <VenueDashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/artist"
              element={
                <AuthGuard allowedRoles={['artist']}>
                  <ArtistDashboard />
                </AuthGuard>
              }
            />
            <Route
              path="/events"
              element={
                <AuthGuard allowedRoles={['customer', 'artist', 'venue', 'admin']}>
                  <CustomerDashboard />
                </AuthGuard>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;