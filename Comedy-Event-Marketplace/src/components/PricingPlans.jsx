import React from 'react';

export default function PricingPlans({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="w-4/5 h-4/5 bg-white rounded-lg shadow-lg relative overflow-auto p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">It’s easy to get started</h2>
          <p className="text-gray-600">Choose the best plan to enjoy the best movies and series</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Free Trial */}
          <div className="pricing border rounded-lg p-6 text-center bg-gray-200">
            <h3 className="text-xl font-semibold mb-2">Free Trial</h3>
            <p className="text-3xl font-bold">$0<span className="text-lg">/Month</span></p>
            <ul className="text-left space-y-2 my-6">
              <li>✅ Streaming in high quality</li>
              <li>✅ Best audio quality</li>
              <li className="text-gray-400">🚫 Stream on multiple devices</li>
              <li className="text-gray-400">🚫 Ad-free experience</li>
              <li className="text-gray-400">🚫 Download to watch later</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg">Get Started</button>
          </div>

          {/* Monthly Subscription */}
          <div className="pricing pricing-2 border-4 rounded-lg p-6 text-center text-white bg-gradient-to-r from-purple-500 to-purple-800">
          <h3 className="text-xl font-semibold mb-2">Monthly Subscription</h3>
          <p className="text-3xl font-bold">$4.99<span className="text-lg">/Month</span></p>
          <ul className="text-left space-y-2 my-6">
            <li>✅ Streaming in high quality</li>
            <li>✅ Best audio quality</li>
            <li>✅ Stream on multiple devices</li>
            <li>✅ Ad-free experience</li>
            <li>✅ Download to watch later</li>
          </ul>
          <button className="w-full bg-white text-purple-700 py-2 rounded-lg font-semibold">Get Started</button>
        </div>


          {/* Yearly Subscription */}
          <div className="pricing border rounded-lg p-6 text-center bg-gray-200">
            <h3 className="text-xl font-semibold mb-2">Yearly Subscription</h3>
            <p className="text-3xl font-bold">$49.99<span className="text-lg">/Year</span></p>
            <ul className="text-left space-y-2 my-6">
              <li>✅ Streaming in high quality</li>
              <li>✅ Best audio quality</li>
              <li>✅ Stream on multiple devices</li>
              <li>✅ Ad-free experience</li>
              <li>✅ Download to watch later</li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
