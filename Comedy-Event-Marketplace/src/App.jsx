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