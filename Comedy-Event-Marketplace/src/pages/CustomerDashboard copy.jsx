import React from 'react'
import { Calendar, Ticket, Users, Star, MapPin, Clock } from 'lucide-react'
import FeaturedEvent from '../components/FeaturedEvent'
import EventCard from '../components/EventCard'
import ComedianCard from '../components/ComedianCard'

export default function CustomerDashboard() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Comedy Night Extravaganza",
      comedian: "Sarah Johnson",
      date: "March 15, 2024",
      time: "8:00 PM",
      venue: "Laugh Factory NYC",
      price: "$25",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Stand-up Spectacular",
      comedian: "Mike Richards",
      date: "March 20, 2024",
      time: "9:00 PM",
      venue: "Comedy Cellar",
      price: "$30",
      image: "https://images.unsplash.com/photo-1525618275456-7f91b5c0d8c1?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Late Night Laughs",
      comedian: "David Chen",
      date: "March 25, 2024",
      time: "10:00 PM",
      venue: "The Comedy Store",
      price: "$20",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800"
    }
  ]

  const featuredComedians = [
    {
      id: 1,
      name: "Alex Thompson",
      specialty: "Observational Comedy",
      rating: 4.8,
      shows: 150,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Maria Garcia",
      specialty: "Improv Comedy",
      rating: 4.9,
      shows: 200,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "James Wilson",
      specialty: "Stand-up Comedy",
      rating: 4.7,
      shows: 120,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Ticket className="w-8 h-8" />
              <span className="text-2xl font-bold">ComedyHub</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#events" className="hover:text-purple-200">Events</a>
              <a href="#comedians" className="hover:text-purple-200">Comedians</a>
              <a href="#venues" className="hover:text-purple-200">Venues</a>
              <a href="#blog" className="hover:text-purple-200">Blog</a>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full font-semibold transition-colors">
              Book Tickets
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience the Best in Live Comedy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200">
              Discover upcoming shows, book tickets, and laugh out loud with the best comedians in town
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-bold hover:bg-purple-100 transition-colors">
                View Events
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-purple-900 transition-colors">
                Meet Artists
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <FeaturedEvent
            title="Comedy Fest 2024"
            date="April 1-3, 2024"
            description="Join us for three days of non-stop laughter featuring the biggest names in comedy!"
            image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200"
          />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Comedians */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Comedians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredComedians.map(comedian => (
              <ComedianCard key={comedian.id} comedian={comedian} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              <p className="text-gray-400">Your premier destination for live comedy entertainment.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Comedians</a></li>
                <li><a href="#" className="hover:text-white">Venues</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQs</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on events and special offers.</p>
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
    </div>
  )
}

