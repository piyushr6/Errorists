import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProfileSettings = ({ onClose }) => {
  const [currentSection, setCurrentSection] = useState("personalInfo");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Aditya",
    lastName: "Sharma",
    email: "adityas@gmail.com",
    phone: "+91 9787324610",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [actualPassword, setActualPassword] = useState("prem1234");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log("Saved data:", formData);
    setIsEditing(false);
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    setCurrentPasswordInput("");
    setIsModalOpen(true);
  };

  const handleModalSubmit = () => {
    if (currentPasswordInput === actualPassword) {
      setIsCurrentPasswordValid(true);
      setIsModalOpen(false);
      setCurrentPasswordInput("");
    } else {
      alert("Incorrect current password. Please try again.");
    }
  };

  const handleChangeNewPassword = () => {
    if (newPassword) {
      setActualPassword(newPassword);
      alert("Password changed successfully!");
      setNewPassword("");
      setIsCurrentPasswordValid(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen">
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
        <ul>
          <li
            onClick={() => handleSectionChange("personalInfo")}
            className={`py-2 px-3 m-1 rounded cursor-pointer ${currentSection === "personalInfo"
              ? "bg-gray-300"
              : "hover:bg-gray-300"
              }`}
          >
            Edit Profile
          </li>
          <li
            onClick={() => handleSectionChange("passwordChange")}
            className={`py-2 px-3  m-1 rounded cursor-pointer ${currentSection === "passwordChange"
              ? "bg-gray-300"
              : "hover:bg-gray-300"
              }`}
          >
            Change Password
          </li>

        </ul>
        <Link to="/">
          <button
            onClick={onClose}
            className="mt-4 bg-red-600 hover:bg-red-500 text-white w-full px-4 py-2 rounded"
          >
            Logout
          </button>
        </Link>
      </div>

      <div className="flex-1 p-6">
        {currentSection === "personalInfo" ? (
          <>
            <h3 className="text-2xl font-semibold mb-4">Personal Info</h3>
            <div className="mb-4">
              <label className="block mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                className="border border-gray-300 p-2 rounded w-1/2"
                placeholder="Ahmad"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ color: isEditing ? "black" : "gray" }}
              />
              <label className="p-1 block mb-2">Last Name</label>
              <input
                type="text"
                name="firstName"
                className="border border-gray-300 p-2 rounded w-1/2"
                placeholder="Abdulla"
                value={formData.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ color: isEditing ? "black" : "gray" }}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 p-2 rounded w-1/2"
                placeholder="ahmadsaris@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ color: isEditing ? "black" : "gray" }}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="border border-gray-300 p-2 rounded w-1/2"
                placeholder="+1 03203202"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
                style={{ color: isEditing ? "black" : "gray" }}
              />
            </div>
            {isEditing ? (
              <button
                onClick={handleSaveClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Details
              </button>
            ) : (
              <button
                onClick={handleEditClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
              >
                Edit Details
              </button>
            )}
          </>
        ) : currentSection === "passwordChange" ? (
          <>
            <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
            {!isCurrentPasswordValid ? (
              <button
                onClick={handleChangePassword}
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Proceed
              </button>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block mb-2">New Password</label>
                  <input
                    type="password"
                    className="border border-gray-300 p-2 rounded w-1/2"
                    placeholder="********"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleChangeNewPassword}
                  className="bg-purple-600 text-white w-full px-4 py-2 rounded"
                >
                  Change Password
                </button>
              </>
            )}
          </>
        ) : null}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">
              Enter Current Password
            </h3>
            <div className="flex items-center mb-4">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPasswordInput}
                onChange={(e) => setCurrentPasswordInput(e.target.value)}
                className="border border-gray-300 p-2 rounded w-full"
                placeholder="Current Password"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="ml-2 text-blue-500"
              >
                {showCurrentPassword ? "Hide" : "See"}
              </button>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleModalSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Okay
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
