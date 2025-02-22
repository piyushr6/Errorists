import { useState } from "react";

const AdminUserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "artist",
      status: "active",
    },
    {
      id: 2,
      name: "Comedy Club",
      email: "club@example.com",
      role: "venue",
      status: "active",
    },
    {
      id: 3,
      name: "Alice Smith",
      email: "alice@example.com",
      role: "customer",
      status: "suspended",
    },
  ]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const updateRole = (id, newRole) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, role: newRole } : user))
    );
  };

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "active" ? "suspended" : "active",
            }
          : user
      )
    );
  };

  const moderateContent = (user) => {
    setSelectedUser(user);
    setModalVisible(true);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Role</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">
                  <select
                    value={user.role}
                    onChange={(e) => updateRole(user.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="artist">Artist</option>
                    <option value="venue">Venue Manager</option>
                    <option value="customer">Customer</option>
                  </select>
                </td>
                <td className="py-2 px-4 border">
                  <span
                    className={
                      user.status === "active"
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4 border flex gap-2">
                  <button
                    onClick={() => toggleStatus(user.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-blue-600"
                  >
                    {user.status === "active" ? "Suspend" : "Activate"}
                  </button>
                  <button
                    onClick={() => moderateContent(user)}
                    className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-600"
                  >
                    Moderate Content
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h3 className="text-lg font-bold">Moderate Content</h3>
            <p>Review media uploaded by {selectedUser?.name}.</p>
            <button
              onClick={() => {
                alert("Content flagged for review.");
                setModalVisible(false);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600 mt-4"
            >
              Flag Content
            </button>
            <button
              onClick={() => setModalVisible(false)}
              className="ml-2 bg-gray-300 text-black px-4 py-2 rounded cursor-pointer hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;
