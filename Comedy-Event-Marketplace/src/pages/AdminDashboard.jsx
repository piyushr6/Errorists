import React, { useState } from 'react';  
import { Card, CardContent, CardHeader, CardTitle } from '../src/components/ui/card'; 
import { 
  Home, 
  Video, 
  DollarSign, 
  BarChart2, 
  AlertCircle, 
  MessageSquare,
  Users,
  Search,
  Filter 
} from 'lucide-react'; 

const DeleteConfirmationModal = ({ isOpen, user, onClose, onConfirm }) => {  
  if (!isOpen) return null;  

  return (  
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">  
      <div className="bg-white rounded-lg p-6 shadow-lg">  
        <h3 className="text-lg font-semibold mb-4">Delete User</h3>  
        <p>Are you sure you want to delete {user?.name}?</p>  
        <div className="flex justify-end mt-4">  
          <button   
            type="button"   
            onClick={onClose}   
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"  
          >  
            Cancel  
          </button>  
          <button   
            onClick={onConfirm}   
            className="bg-red-600 text-white px-4 py-2 rounded"  
          >  
            Delete  
          </button>  
        </div>  
      </div>  
    </div>  
  );  
}; 
// Modal Component  
const EditUserModal = ({ isOpen, user, onClose, onSave }) => {  
  const [name, setName] = useState(user?.name || '');  
  const [email, setEmail] = useState(user?.email || '');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    onSave({ ...user, name, email });  
    onClose();  
  };  

  if (!isOpen) return null;  


  

  

  return (  
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">  
      <div className="bg-white rounded-lg p-6 shadow-lg">  
        <h3 className="text-lg font-semibold mb-4">Edit User</h3>  
        <form onSubmit={handleSubmit}>  
          <div className="mb-4">  
            <label className="block text-sm font-medium">Name</label>  
            <input   
              type="text"   
              value={name}   
              onChange={(e) => setName(e.target.value)}   
              className="border px-3 py-2 rounded w-full"  
              required   
            />  
          </div>  
          <div className="mb-4">  
            <label className="block text-sm font-medium">Email</label>  
            <input   
              type="email"   
              value={email}   
              onChange={(e) => setEmail(e.target.value)}   
              className="border px-3 py-2 rounded w-full"  
              required   
            />  
          </div>  
          <div className="flex justify-end">  
            <button   
              type="button"   
              onClick={onClose}   
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2"  
            >  
              Cancel  
            </button>  
            <button   
              type="submit"   
              className="bg-indigo-600 text-white px-4 py-2 rounded"  
            >  
              Save  
            </button>  
          </div>  
        </form>  
      </div>  
    </div>  
  );  
};  

// User Management Page Component  
const UserManagement = () => {  

  
  const [users, setUsers] = useState([  
    { id: 1, name: 'User One', email: 'user1@example.com' },  
    { id: 2, name: 'User Two', email: 'user2@example.com' },  
    { id: 3, name: 'User Three', email: 'user3@example.com' },  
  ]);  
  const [isModalOpen, setModalOpen] = useState(false);  
  const [selectedUser, setSelectedUser] = useState(null);  
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); 

  const handleEdit = (user) => {  
    setSelectedUser(user);  
    setModalOpen(true);  
  };  

  const handleSave = (updatedUser) => {  
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));  
  };  

  const handleDelete = (user) => {  
    setSelectedUser(user);  
    setDeleteModalOpen(true);  
  };

  const handleConfirmDelete = () => {  
    setUsers(users.filter(user => user.id !== selectedUser.id));  
    setDeleteModalOpen(false); // Close delete modal after confirming delete  
  };  

  const handleDeleteCancel = () => {  
    setDeleteModalOpen(false);  
  };  

  const userTypes = [  
    { label: 'Venue Owners', count: 245, trend: '+12%' },  
    { label: 'Artists', count: 1023, trend: '+8%' },  
    { label: 'Customers', count: 23315, trend: '+15%' }  
  ];  

  return (  
    <div className="p-6 space-y-6">  
      <h2 className="text-3xl font-bold mb-6">User Management</h2>  

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">  
        {userTypes.map((type, idx) => (  
          <Card key={idx} className="transition-all duration-300 hover:shadow-lg">  
            <CardContent className="p-6">  
              <h3 className="text-xl font-semibold mb-2">{type.label}</h3>  
              <div className="flex items-center justify-between">  
                <span className="text-3xl font-bold">{type.count}</span>  
                <span className="text-green-500">{type.trend}</span>  
              </div>  
            </CardContent>  
          </Card>  
        ))}  
      </div>  

      <Card>  
        <CardHeader>  
          <div className="flex justify-between items-center">  
            <CardTitle>User Activity</CardTitle>  
            <div className="flex space-x-2">  
              <input   
                type="text"   
                placeholder="Search users..."  
                className="px-4 py-2 border rounded-lg"  
              />  
              <select className="px-4 py-2 border rounded-lg">  
                <option>All Users</option>  
                <option>Venue Owners</option>  
                <option>Artists</option>  
                <option>Customers</option>  
              </select>  
            </div>  
          </div>  
        </CardHeader>  
        <CardContent>  
          <div className="space-y-4">  
            {users.map((user) => (  
              <div key={user.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">  
                <div>  
                  <h4 className="font-semibold">{user.name}</h4>  
                  <p className="text-sm text-gray-500">{user.email}</p>  
                </div>  
                <div className="flex space-x-2">  
                  <button  
                    className="px-3 py-1 bg-indigo-600 text-white rounded-md"  
                    onClick={() => handleEdit(user)}  
                  >  
                    Edit  
                  </button>  
                   <button  
                    className="px-3 py-1 bg-red-600 text-white rounded-md"  
                    onClick={() => handleDelete(user)}  
                  >  
                    Delete  
                  </button> 
                </div>  
              </div>  
            ))}  
          </div>  
        </CardContent>  
      </Card>  

      {/* Edit User Modal */}  
      <EditUserModal  
        isOpen={isModalOpen}  
        user={selectedUser}  
        onClose={() => setModalOpen(false)}  
        onSave={handleSave}  
      />  

      <DeleteConfirmationModal  
        isOpen={isDeleteModalOpen}  
        user={selectedUser}  
        onClose={handleDeleteCancel}  
        onConfirm={handleConfirmDelete}  
      /> 
   
    </div>  
  );  
};  


 
// Event Approvals Page Component

const EventApprovals = () => {  
  const initialEvents = [  
    { name: 'Jazz Night', venue: 'Blue Note', status: 'pending', date: '2024-03-01' },  
    { name: 'Rock Concert', venue: 'Madison Square', status: 'pending', date: '2024-03-15' },  
    { name: 'Classical Evening', venue: 'Symphony Hall', status: 'pending', date: '2024-03-20' }  
  ];  

  const [events, setEvents] = useState(initialEvents);  

  const handleApprove = (index) => {  
    const updatedEvents = [...events];  
    updatedEvents[index].status = 'approved'; // Change the status to approved  
    setEvents(updatedEvents); // Update the state  
  };  

  const handleReject = (index) => {  
    const updatedEvents = [...events];  
    updatedEvents[index].status = 'rejected'; // Change the status to rejected  
    setEvents(updatedEvents); // Update the state  
  };  

  return (  
    <div className="p-6 space-y-6">  
      <h2 className="text-3xl font-bold mb-6">Event Approvals</h2>  
      <Card>  
        <CardContent className="p-6">  
          <div className="space-y-4">  
            {events.map((event, idx) => (  
              <div  
                key={idx}  
                className={`p-4 rounded-lg flex justify-between items-center ${event.status === 'approved' ? 'bg-green-100' : event.status === 'rejected' ? 'bg-red-100' : 'bg-gray-50'}`}  
              >  
                <div>  
                  <h4 className="font-semibold">{event.name}</h4>  
                  <p className="text-sm text-gray-500">{event.venue} - {event.date}</p>  
                </div>  
                <div className="flex space-x-2">  
                  {event.status === 'pending' ? (  
                    <>  
                      <button  
                        className="px-3 py-1 bg-green-600 text-white rounded-md"  
                        onClick={() => handleApprove(idx)}  
                      >  
                        Approve  
                      </button>  
                      <button  
                        className="px-3 py-1 bg-red-600 text-white rounded-md"  
                        onClick={() => handleReject(idx)}  
                      >  
                        Reject  
                      </button>  
                    </>  
                  ) : (  
                    <button className={`px-3 py-1 ${event.status === 'approved' ? 'bg-green-300' : 'bg-red-300'} text-white rounded-md`} disabled>  
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}d  
                    </button>  
                  )}  
                </div>  
              </div>  
            ))}  
          </div>  
        </CardContent>  
      </Card>  
    </div>  
  );  
};  


// Payments & Revenue Page Component
const PaymentsRevenue = () => {
  const stats = [
    { label: 'Total Revenue', value: '$1,234,567', trend: '+12%' },
    { label: 'Monthly Revenue', value: '$123,456', trend: '+8%' },
    { label: 'Average Transaction', value: '$85', trend: '+5%' },
    { label: 'Pending Payouts', value: '$34,567', trend: '-' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Payments & Revenue</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-gray-500 mb-2">{stat.label}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{stat.value}</span>
                <span className="text-green-500">{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Platform Analytics Page Component
const PlatformAnalytics = () => {
  const metrics = [
    { label: 'Active Users', value: '24.5K', trend: '+15%' },
    { label: 'Event Bookings', value: '1.2K', trend: '+8%' },
    { label: 'Average Rating', value: '4.8', trend: '+0.2' },
    { label: 'User Retention', value: '92%', trend: '+3%' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Platform Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <Card key={idx} className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-gray-500 mb-2">{metric.label}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-green-500">{metric.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Reports & Complaints Page Component
const ReportsComplaints = () => {
  const reports = [
    { type: 'Technical Issue', priority: 'High', status: 'Open', count: 5 },
    { type: 'Payment Dispute', priority: 'Medium', status: 'Open', count: 3 },
    { type: 'User Complaint', priority: 'Low', status: 'Open', count: 8 }
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Reports & Complaints</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {reports.map((report, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{report.type}</h4>
                  <p className="text-sm text-gray-500">Priority: {report.priority}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold">{report.count}</span>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded-md">View</button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Marketing & Promotions Page Component
const MarketingPromotions = () => {
  const campaigns = [
    { name: 'Summer Festival', status: 'Active', reach: '50K', engagement: '12%' },
    { name: 'New Year Events', status: 'Scheduled', reach: '75K', engagement: '15%' },
    { name: 'Local Artists', status: 'Draft', reach: '30K', engagement: '8%' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-6">Marketing & Promotions</h2>
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            {campaigns.map((campaign, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{campaign.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                    campaign.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                  <span>Reach: {campaign.reach}</span>
                  <span>Engagement: {campaign.engagement}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Layout Component
const AdminLayout = () => {
  const [currentPage, setCurrentPage] = useState('users');

  const pages = {
    users: { component: UserManagement, icon: Home, label: 'User Management' },
    events: { component: EventApprovals, icon: Video, label: 'Event Approvals' },
    payments: { component: PaymentsRevenue, icon: DollarSign, label: 'Payments & Revenue' },
    analytics: { component: PlatformAnalytics, icon: BarChart2, label: 'Platform Analytics' },
    reports: { component: ReportsComplaints, icon: AlertCircle, label: 'Reports & Complaints' },
    marketing: { component: MarketingPromotions, icon: MessageSquare, label: 'Marketing & Promotions' }
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="text-2xl font-bold text-indigo-600 mb-8 px-4">Admin</div>
        <nav className="space-y-2">
          {Object.entries(pages).map(([key, { icon: Icon, label }]) => (
            <button
              key={key}
              onClick={() => setCurrentPage(key)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                currentPage === key
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="transition-all duration-300 ease-in-out">
          <CurrentPageComponent />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;



