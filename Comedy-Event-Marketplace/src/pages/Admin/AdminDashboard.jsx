import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Event Management", path: "/admin/events", key: "events" },
    { name: "User Management", path: "/admin/users", key: "users" },
    { name: "Venue Management", path: "/admin/venues", key: "venues" },
    { name: "Payments & Revenue", path: "/admin/payments", key: "payments" },
    { name: "Analytics", path: "/admin/analytics", key: "analytics" },
  ];

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar - Fixed Position */}
      <aside className="w-64 bg-gray-800 text-white p-6 fixed h-full overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  to={item.path}
                  className={`block w-full p-2 rounded-lg hover:bg-gray-700 cursor-pointer ${
                    location.pathname === item.path ? "bg-gray-700" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content - No Extra Space */}
      <main className="flex-1 p-6 ml-64 overflow-auto pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
