import React, { useState } from "react";
import { FaChevronDown, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Calculate Age from DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleDobChange = (e) => {
    const value = e.target.value;
    setDob(value);
    if (value) {
      setAge(calculateAge(value));
    } else {
      setAge("");
    }
  };

  const roles = ["Customer", "Admin", "Artist", "Location Manager"];

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setShowDropdown(false);
  };

  // Dynamic background image based on role
  const getBackgroundImage = () => {
    if (role === "Customer") return "src/assets/images/audience.jpg";
    if (role === "Artist") return "src/assets/images/stage.jpg";
    return "src/assets/images/loginBG.jpg"; // Default
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Dynamic Promo Background */}
      <div className="w-1/2 relative">
        <img
          src={getBackgroundImage()}
          alt="App Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md register-wrapper">
          <h2 className="text-2xl font-bold text-gray-800">Create your account</h2>

          {/* Registration Form */}
          <div className="mt-6 space-y-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 border rounded-lg px-4 py-2" />
              <input type="text" placeholder="Last Name" className="w-1/2 border rounded-lg px-4 py-2" />
            </div>

            {/* DOB and Age */}
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            {age && <p className="text-sm text-gray-600">Your Age: {age}</p>}

            {/* Email */}
            <input type="email" placeholder="Email" className="w-full border rounded-lg px-4 py-2" />

            {/* Password Fields with Eye Icon */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-lg px-4 py-2"
              />
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border rounded-lg px-4 py-2"
              />
              <button
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
                className="absolute right-3 top-3 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Role Selection - Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="w-full bg-white border rounded-lg px-4 py-2 text-left cursor-pointer flex items-center justify-between focus:outline-none"
              >
                {role || "Select Role"}
                <FaChevronDown className="text-gray-500" />
              </button>

              {/* Dropdown Options */}
              {showDropdown && (
                <ul className="absolute w-full bg-white border rounded-lg mt-1 z-10 overflow-hidden">
                  {roles.map((r, index) => (
                    <li
                      key={r}
                      onClick={() => handleRoleSelect(r)}
                      className={`px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white ${
                        index === 0 ? "rounded-t-lg" : index === roles.length - 1 ? "rounded-b-lg" : ""
                      }`}
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Register Button */}
            <Link to="/">
              <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg cursor-pointer transition-colors">
                Register
              </button>
            </Link>
           

            {/* Link to Login */}
            <p className="mt-4 text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/" className="text-purple-600 cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
