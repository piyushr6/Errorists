import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ArtistDashboard from "./pages/ArtistDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminEventManagement from "./pages/Admin/AdminEventManagement";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";
import AdminVenueManagement from "./pages/Admin/AdminVenueManagement";
import AdminPaymentManagement from "./pages/Admin/AdminPaymentManagement";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";
import VenueDashboard from "./pages/Location Manager/VenueDashboard";
import AuthPage from './pages/AuthPage'
import RegisterPage from './pages/RegisterPage'
function App() {
  return (
    <Router>
      
          {" "}
          {/* Offset main content for navbar */}
          <Routes>
          
              <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminEventManagement />} />
              <Route path="events" element={<AdminEventManagement />} />
              <Route path="users" element={<AdminUserManagement />} />
              <Route path="venues" element={<AdminVenueManagement />} />
              <Route path="payments" element={<AdminPaymentManagement />} />
              <Route path="analytics" element={<AdminAnalytics />} />
            </Route>
            <Route path="/cust-Dash" element={<CustomerDashboard />} />
            <Route path="/artist" element={<ArtistDashboard />} />
            <Route path="/location-manager" element={<VenueDashboard />} />
            <Route path="/" element={<AuthPage />} />
            <Route path="/register" element={<RegisterPage />} />
           
          </Routes>
        
    </Router>
  );
}

export default App;
