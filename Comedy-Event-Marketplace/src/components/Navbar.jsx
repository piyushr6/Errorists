import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Navbar() {
  const { user, profile, signOut } = useAuthStore();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Comedy Hub
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {profile?.role === 'admin' && (
                  <Link to="/admin" className="text-gray-600 hover:text-gray-900">Admin</Link>
                )}
                {profile?.role === 'venue' && (
                  <Link to="/venue" className="text-gray-600 hover:text-gray-900">Venues</Link>
                )}
                {profile?.role === 'artist' && (
                  <Link to="/artist" className="text-gray-600 hover:text-gray-900">Artists</Link>
                )}
                <Link to="/events" className="text-gray-600 hover:text-gray-900">Events</Link>
                <button
                  onClick={signOut}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-900">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;