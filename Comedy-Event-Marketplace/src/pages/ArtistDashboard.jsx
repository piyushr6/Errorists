import React, { useState, useEffect } from 'react';
import StatsCard from '../components/StatsCard';
import Sidebar from '../components/SideBar';
import EventCard from '../components/EventCard';
import {
  Calendar,
  DollarSign,
  Users,
  Star,
  Bell,
  Menu,
} from 'lucide-react';

function ArtistDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const events = [
    {
      date: '15 Mar',
      venue: 'The Comedy Club, Mumbai',
      time: '8:00 PM',
      location: 'Mumbai, Maharashtra',
      status: 'Confirmed',
      capacity: 200,
      payment: 5000,
      image: 'https://images.pexels.com/photos/3893788/pexels-photo-3893788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      date: '18 Mar',
      venue: 'Laugh Riot, Delhi',
      time: '9:30 PM',
      location: 'Delhi, Delhi',
      status: 'Pending',
      capacity: 150,
      payment: 4000,
      image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      date: '22 Mar',
      venue: 'Improv Club, Bangalore',
      time: '7:00 PM',
      location: 'Bangalore, Karnataka',
      status: 'Confirmed',
      capacity: 180,
      payment: 4500,
      image: 'https://images.pexels.com/photos/15105039/pexels-photo-15105039/free-photo-of-cityscape-at-clear-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      date: '25 Mar',
      venue: 'The Biere Club, Pune',
      time: '10:00 PM',
      location: 'Pune, Maharashtra',
      status: 'Confirmed',
      capacity: 250,
      payment: 6000,
      image: 'https://images.pexels.com/photos/1415764/pexels-photo-1415764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-lg bg-white shadow-md hover:bg-gray-50"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex!</h1>
                <p className="text-gray-500 mt-1">Here's what's happening with your events.</p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="relative p-2 rounded-xl hover:bg-gray-100">
                  <Bell size={24} className="text-gray-600" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {notifications}
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                icon={<Calendar size={24} />}
                label="Upcoming Shows"
                value="12"
                trend="8"
              />
              <StatsCard
                icon={<DollarSign size={24} />}
                label="Monthly Revenue"
                value="$3,240"
                trend="12"
              />
              <StatsCard
                icon={<Users size={24} />}
                label="Total Audience"
                value="1,234"
                trend="24"
              />
              <StatsCard
                icon={<Star size={24} />}
                label="Avg. Rating"
                value="4.8"
                trend="5"
              />
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Events</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-100 p-4 shadow">
                    {/* Image at the top */}
                    <img
                      src={event.image}
                      alt={event.venue}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    {/* Venue Name Below the Image */}
                    <h2 className="text-lg font-semibold text-gray-900">{event.venue}</h2>
                    {/* Date & Time */}
                    <p className="text-gray-500 text-sm">{event.date} • {event.time}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Reviews</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: "Rohan Sharma",
                      img: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?w=256&h=256&q=80",
                      review: "Absolutely hilarious performance! Can't wait to see you again."
                    },
                    {
                      name: "Priya Upadhyay",
                      img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1200",
                      review: "Brilliant show! Laughed non-stop. Looking forward to more!"
                    }
                  ].map((reviewer, index) => (
                    <div key={index} className="flex items-start space-x-4 pb-4 border-b border-gray-100 last:border-0">
                      <img
                        src={reviewer.img}
                        alt={reviewer.name}
                        className="w-10 h-10 rounded-xl"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-gray-900">{reviewer.name}</h3>
                          <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={14} fill="currentColor" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{reviewer.review}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Analytics</h2>
                <div className="space-y-4">
                  {['Ticket Sales', 'Audience Growth', 'Revenue'].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{metric}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-green-600">+12%</span>
                          <span className="text-gray-500">vs last month</span>
                        </div>
                      </div>
                      <div className="w-24 h-12 bg-gray-50 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div >
    </div >
  );
}


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Bell, Calendar, DollarSign, Users, Star, MessageSquare, Settings, TrendingUp, BarChart2, Mail, X, Check } from 'lucide-react';

// Reusable Components
const NotificationPopover = ({ notifications, setNotifications, type }) => {
  if (!notifications.length) return null;

  return (
    <div className="absolute top-12 right-0 w-80 bg-white rounded-lg shadow-lg p-4 z-50 border">
      <h3 className="font-bold mb-3">{type === 'email' ? 'Messages' : 'Notifications'}</h3>
      {notifications.map((notif, index) => (
        <div key={index} className="mb-2 pb-2 border-b last:border-b-0">
          <div className="flex justify-between items-start">
            <p className="text-sm">{notif.message}</p>
            <button
              onClick={() => setNotifications(prev => prev.filter((_, i) => i !== index))}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
        </div>
      ))}
    </div>
  );
};

const PageHeader = ({ title, subtitle }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [notifications, setNotifications] = useState([
    { message: "New booking request from Jazz Club", time: "5 min ago" },
    { message: "Payment received for last performance", time: "1 hour ago" },
    { message: "Review posted by John D.", time: "2 hours ago" }
  ]);
  const [messages, setMessages] = useState([
    { message: "Details for upcoming show", time: "10 min ago" },
    { message: "Contract for review", time: "30 min ago" }
  ]);

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
            onClick={() => {
              setShowMessages(!showMessages);
              setShowNotifications(false);
            }}
          >
            <Mail className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center">
              {messages.length}
            </span>
          </motion.button>
          {showMessages && (
            <NotificationPopover
              notifications={messages}
              setNotifications={setMessages}
              type="email"
            />
          )}
        </div>
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowMessages(false);
            }}
          >
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              {notifications.length}
            </span>
          </motion.button>
          {showNotifications && (
            <NotificationPopover
              notifications={notifications}
              setNotifications={setNotifications}
              type="notification"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, trend, trendValue }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    className="bg-white p-6 rounded-xl shadow-sm cursor-pointer"
  >
    <h3 className="text-gray-600 mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
    <div className={`flex items-center mt-2 ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
      <TrendingUp className="w-4 h-4 mr-1" />
      <span>{`${trend >= 0 ? '+' : ''}${trendValue}`}</span>
    </div>
  </motion.div>
);


const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    { name: 'John D.', rating: 5, comment: "Incredible performance! The energy was amazing.", date: '2024-02-20', replied: false },
    { name: 'Sarah M.', rating: 4, comment: "Great musical selection and atmosphere.", date: '2024-02-18', replied: false },
    { name: 'Mike R.', rating: 5, comment: "One of the best shows I've seen this year!", date: '2024-02-15', replied: true }
  ]);

  const [replyText, setReplyText] = useState('');
  const [activeReply, setActiveReply] = useState(null);

  const handleReply = (index) => {
    if (activeReply === index) {
      setReviews(prev => prev.map((review, i) =>
        i === index ? { ...review, replied: true } : review
      ));
      setActiveReply(null);
      setReplyText('');
    } else {
      setActiveReply(index);
    }
  };

  return (
    <div className="p-8">
      <PageHeader title="Performance Reviews" subtitle="See what your audience is saying" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Average Rating" value="4.8" trend={1} trendValue="5% this month" />
        <StatCard title="Total Reviews" value={reviews.length} trend={1} trendValue="15 new" />
        <StatCard title="Response Rate" value="92%" trend={1} trendValue="3% this month" />
      </div>
      <div className="mt-8 space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <h3 className="font-bold mr-2">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-gray-600">{review.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleReply(index)}
                className={`px-4 py-2 rounded-lg transition-colors ${review.replied
                    ? 'bg-green-100 text-green-800'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  }`}
              >
                {review.replied ? 'Replied' : 'Reply'}
              </button>
              <button
                onClick={() => setReviews(prev => prev.filter((_, i) => i !== index))}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {activeReply === index && (
              <div className="mt-4">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder="Write your reply..."
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setActiveReply(null);
                      setReplyText('');
                    }}
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleReply(index)}
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// const MessagesPage = () => {
//   const [messages, setMessages] = useState([
//     { sender: 'Blue Note Jazz Club', subject: 'Upcoming Performance Details', date: '2024-02-22', unread: true },
//     { sender: 'Booking Agent', subject: 'New Opportunity', date: '2024-02-21', unread: true },
//     { sender: 'Fan Mail', subject: 'Great Show Last Night!', date: '2024-02-20', unread: false }
//   ]);

//   const handleMarkRead = (index) => {
//     setMessages(prev => prev.map((msg, i) =>
//       i === index ? { ...msg, unread: false } : msg
//     ));
//   };

//   return (
//     <div className="p-8">
//       <PageHeader title="Messages" subtitle="Manage your communications" />
//       <div className="bg-white rounded-xl shadow-sm">
//         {messages.map((message, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`p-4 border-b last:border-b-0 flex items-center justify-between ${message.unread ? 'bg-indigo-50' : ''
//               }`}
//           >
//             <div>
//               <p className={`font-bold ${message.unread ? 'text-indigo-600' : ''}`}>{message.sender}</p>
//               <p className="text-gray-600">{message.subject}</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="text-right">
//                 <p className="text-gray-600">{message.date}</p>
//                 {message.unread && (
//                   <button
//                     onClick={() => handleMarkRead(index)}
//                     className="inline-block px-2 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200"
//                   >
//                     Mark as Read
//                   </button>
//                 )}
//               </div>
//               <button
//                 onClick={() => setMessages(prev => prev.filter((_, i) => i !== index))}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//           </motion.div>
//         ))}
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{
//             scale:



export default ArtistDashboard;