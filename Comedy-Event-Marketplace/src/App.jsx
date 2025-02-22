import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminEventManagement from "./pages/Admin/AdminEventManagement";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";
import AdminVenueManagement from "./pages/Admin/AdminVenueManagement";
import AdminPaymentManagement from "./pages/Admin/AdminPaymentManagement";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Sticky Navbar */}
        <Navbar />
        <div className="pt-16">
          {" "}
          {/* Offset main content for navbar */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/artist" element={<ArtistDashboard />} />
            <Route path="/events" element={<CustomerDashboard />} />

            {/* Admin Routes with Persistent Sidebar */}
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminEventManagement />} />
              <Route path="events" element={<AdminEventManagement />} />
              <Route path="users" element={<AdminUserManagement />} />
              <Route path="venues" element={<AdminVenueManagement />} />
              <Route path="payments" element={<AdminPaymentManagement />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
