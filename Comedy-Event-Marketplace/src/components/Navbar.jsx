import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Comedy Hub
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-gray-900">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
