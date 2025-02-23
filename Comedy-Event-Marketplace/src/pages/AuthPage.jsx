import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const AuthPage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("I am"); // Default to cust-Page
  const [showDropdown, setShowDropdown] = useState(false);

  const roles = ["Admin", "Artist", "Location Manager"];

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowDropdown(false);
  };

  const goToCust = () => {
    navigate('/cust-Dash'); // Navigate to the customer page
  };

  const handleLogin = () => {
    if (selectedRole === 'Admin') {
      navigate('/admin');
    } else if (selectedRole === 'Location Manager') {
      navigate('/location-manager');
    } else if (selectedRole === 'Artist') {
      navigate('/artist');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Promo */}
      <div className="w-1/2 bg-purple-600 text-white flex flex-col justify-center items-center p-10 relative opacity-90">
        <img
          src="src/assets/images/stage.jpg"
          alt="App Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <h2 className="white font-extrabold z-20 text-7xl">Comedy Hub</h2>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md login-wrapper">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Hey there, welcome back</h2>

          {/* Login Form */}
          <div className="space-y-4">
            <input type="text" placeholder="Email / Phone" className="w-full border rounded-lg px-4 py-2" />
            <input type="password" placeholder="Enter your password" className="w-full border rounded-lg px-4 py-2" />

            {/* Role Selection Dropdown */}
            <div className="relative mt-4">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-full bg-white border rounded-lg px-4 py-2 text-left cursor-pointer flex items-center justify-between focus:outline-none"
              >
                {selectedRole || "Select Role"}
                <FaChevronDown className="text-gray-500" />
              </button>

              {showDropdown && (
                <ul className="absolute w-full bg-white border rounded-lg mt-1 z-10 overflow-hidden">
                  {roles.map((role, index) => (
                    <li
                      key={role}
                      onClick={() => handleRoleSelect(role)}
                      className={`px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white ${index === 0 ? "rounded-t-lg" : index === roles.length - 1 ? "rounded-b-lg" : ""
                        }`}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div onClick={goToCust} className="text-right text-purple-600 cursor-pointer text-sm">Are you a customer?</div>
            <div className="text-right text-purple-600 cursor-pointer text-sm">Forgot Password?</div>
          </div>

          <div className="text-center my-4 text-gray-500">Or login with</div>
          {/* Social Login Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 text-gray-700 cursor-pointer transition-colors">
              <img src="src/assets/images/gmail.png" alt="Google" className="w-5" /> Login with Google
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 text-gray-700 cursor-pointer transition-colors">
              <img src="src/assets/images/facebook.png" alt="Facebook" className="w-5" /> Login with Facebook
            </button>
          </div>

          {/* Login Button */}
          <button onClick={handleLogin} className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg cursor-pointer transition-colors">
            Login
          </button>

          {/* Register Link */}
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <Link to="/register" className="text-purple-600 cursor-pointer">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;