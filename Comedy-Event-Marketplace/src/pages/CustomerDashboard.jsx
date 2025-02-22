import React, { useState } from "react";
import PricingPlans from "../components/PricingPlans";
import {
  Calendar,
  Ticket,
  Users,
  Star,
  MapPin,
  Menu,
  X,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import FeaturedEvent from "../components/FeaturedEvent";
import EventCard from "../components/EventCard";
import ComedianCard from "../components/ComedianCard";
import ProfileSettings from "../components/ProfileSettings";

export default function CustomerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comedianIndex, setComedianIndex] = useState(0);
  const [showSettings, setShowSettings] = useState(false); 

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, upcomingEvents.length - 3)
    );
  };

  const handleComedianPrev = () => {
    setComedianIndex((prevIndex) =>
      prevIndex === 0 ? featuredComedians.length - 3 : prevIndex - 1
    );
  };
  
  const handleComedianNext = () => {
    setComedianIndex((prevIndex) =>
      prevIndex === featuredComedians.length - 3 ? 0 : prevIndex + 1
    );
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Hasi Ka Tadka Night",
      comedian: "Rohan Joshi",
      date: "March 15, 2024",
      time: "8:00 PM",
      venue: "The Comedy Club, Mumbai",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Desi Stand-up Dhamaka",
      comedian: "Anubhav Singh Bassi",
      date: "March 20, 2024",
      time: "9:00 PM",
      venue: "Laugh Riot, Delhi",
      price: "₹750",
      image:
        "https://img.freepik.com/free-photo/process-creating-stand-up-comedy_23-2151053521.jpg?ga=GA1.1.1703137665.1739865512&semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Bangalore Comedy Special",
      comedian: "Sumukhi Suresh",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Biere Club, Bangalore",
      price: "₹600",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 9,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 9,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const featuredComedians = [
    {
      id: 1,
      name: "Kenny Sebastian",
      specialty: "Musical Comedy",
      rating: 4.8,
      shows: 150,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      name: "Neeti Palta",
      specialty: "Observational Comedy",
      rating: 4.9,
      shows: 200,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      name: "Zakir Khan",
      specialty: "Storytelling Comedy",
      rating: 4.7,
      shows: 120,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Alex Thompson",
      specialty: "Observational Comedy",
      rating: 4.8,
      shows: 150,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Maria Garcia",
      specialty: "Improv Comedy",
      rating: 4.9,
      shows: 200,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "James Wilson",
      specialty: "Stand-up Comedy",
      rating: 4.7,
      shows: 120,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      name: "Alex Thompson",
      specialty: "Observational Comedy",
      rating: 4.8,
      shows: 150,
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Maria Garcia",
      specialty: "Improv Comedy",
      rating: 4.9,
      shows: 200,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      name: "James Wilson",
      specialty: "Stand-up Comedy",
      rating: 4.7,
      shows: 120,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-purple-800 to-indigo-900 text-white w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 z-50 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <Ticket className="w-8 h-8" />
            <span className="text-2xl font-bold">ComedyHub</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 mt-6 space-y-4">
          <a href="#events" className="block text-lg hover:text-purple-300">
            Events
          </a>
          <a href="#comedians" className="block text-lg hover:text-purple-300">
            Comedians
          </a>
          <a href="#venues" className="block text-lg hover:text-purple-300">
            Venues
          </a>
          <a href="#blog" className="block text-lg hover:text-purple-300 5">
            Blog
          </a>

          {/* Buy Premium Button */}
          <button
            onClick={() => setIsPricingOpen(true)}
            className=" w-full border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full font-semibold relative
              hover:text-orange-500 transition duration-300
              before:content-[''] before:absolute before:inset-0 before:rounded-full
              before:border-2 before:border-yellow-400 before:blur-md before:animate-pulse"
          >
            Buy Premium
          </button>
        </nav>

        {/* Profile & Settings at Bottom */}
        <div className="mt-auto px-6 py-4 space-y-4">
          <button className="flex items-center w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold text-white">
            <User className="w-5 h-5 mr-2" />
            Profile
          </button>
          <button 
          onClick={()=>setShowSettings(true)}
          className="flex items-center w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold text-white">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64">
        {/* Top Bar for Mobile */}
        <div className="bg-white shadow-md md:hidden flex items-center justify-between px-4 py-3">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <span className="text-xl font-bold">ComedyHub</span>
        </div>

        {/*Pricing  Modal */}
        {isPricingOpen && (
          <PricingPlans onClose={() => setIsPricingOpen(false)} />
        )}
        {/* Settings Modal */}
        {showSettings && <ProfileSettings onClose={() => setShowSettings(false)} />}

        {/* Content */}
        <main className="p-6">
          {/* Featured Event */}
          <section className="py-8">
            <FeaturedEvent
              title="Comedy Fest 2024"
              date="April 1-3, 2024"
              description="Join us for three days of non-stop laughter featuring the biggest names in comedy!"
              image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200"
            />
          </section>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none shadow-sm text-gray-700"
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.1-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="relative w-full">
            {/* Carousel Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full z-10"
            >
              <ChevronLeft />
            </button>

            {/* Events Wrapper */}
            <div className="flex overflow-hidden justify-center space-x-4 px-12">
              {upcomingEvents
                .slice(currentIndex, currentIndex + 3)
                .map((event) => (
                  <div key={event.id} className="event-card w-1/3 flex-shrink-0">
                    <EventCard event={event} />
                  </div>
                ))}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full z-10"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Featured Comedians */}
          <section className="py-8 relative">
  <h2 className="text-3xl font-bold mb-6">Featured Comedians</h2>
  
  <div className="relative overflow-hidden">
    <div
      className="flex transition-transform duration-500"
      style={{ transform: `translateX(-${comedianIndex * 33.33}%)` }}
    >
      {featuredComedians.map((comedian) => (
        <div key={comedian.id} className="w-1/3 flex-shrink-0 p-2">
          <ComedianCard comedian={comedian} />
        </div>
      ))}
    </div>

    {/* Carousel Buttons */}
    <button
      onClick={handleComedianPrev}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition z-10"
    >
      <ChevronLeft />
    </button>

    <button
      onClick={handleComedianNext}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition z-10"
    >
      <ChevronRight />
    </button>
  </div>
</section>

          <section className="py-16 bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <Calendar className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">200+</h3>
                  <p className="text-purple-200">Shows Monthly</p>
                </div>
                <div>
                  <Users className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">50k+</h3>
                  <p className="text-purple-200">Happy Customers</p>
                </div>
                <div>
                  <Star className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">100+</h3>
                  <p className="text-purple-200">Top Comedians</p>
                </div>
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-4xl font-bold mb-2">20+</h3>
                  <p className="text-purple-200">Venues</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Ticket className="w-6 h-6" />
                    <span className="text-xl font-bold">ComedyHub</span>
                  </div>
                  <p className="text-gray-400">
                    Your premier destination for live comedy entertainment.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white">
                        Events
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Comedians
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Venues
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="#" className="hover:text-white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                  <p className="text-gray-400 mb-4">
                    Subscribe to get updates on events and special offers.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <button className="bg-purple-600 px-4 py-2 rounded-r-lg hover:bg-purple-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}