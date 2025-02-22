import React, { useState } from 'react';


export default function PricingPlans({ onClose }) {
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('PayPal');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleGetStarted = () => {
    setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleSubscribe = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSubscribed(true);
    }, 2000); // Simulate payment processing
  };

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
        {!showPayment && !isSubscribed && (
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">It’s easy to get started</h2>
            <p className="text-gray-600">Choose the best plan to enjoy the best movies and series</p>
          </div>
        )}

        {/* Pricing Cards */}
        {!showPayment && !isSubscribed ? (
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
              <button onClick={handleGetStarted} className="w-full bg-purple-600 text-white py-2 rounded-lg">Get Started</button>
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
              <button onClick={handleGetStarted} className="w-full bg-white text-purple-700 py-2 rounded-lg font-semibold">Get Started</button>
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
              <button onClick={handleGetStarted} className="w-full bg-purple-600 text-white py-2 rounded-lg">Get Started</button>
            </div>
          </div>
        ) : isProcessing ? (
          <div className="flex flex-col items-center justify-center h-full">
            <img src='src/assets/images/paymentSuccess.png' alt="Processing Payment" width={150} height={150} className="animate-pulse" />
            <p className="mt-4 text-lg font-semibold text-purple-600">Processing your payment...</p>
          </div>
        ) : isSubscribed ? (
          <div className="flex flex-col items-center justify-center h-full">
            <img src='src/assets/images/paymentSuccess.png' alt="Payment Successful" width={150} height={150} />
            <p className="mt-4 text-2xl font-bold text-green-600">Subscription Successful!</p>
            <button onClick={onClose} className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg">Close</button>
          </div>
        ) : (
          // Payment Modal as JSX
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-3/4 p-8 relative">
              <button
                onClick={handleClosePayment}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-6 text-center">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Payment Options */}
                <div>
                  <div className={`border p-4 rounded-lg flex items-center cursor-pointer mb-4 ${selectedPayment === 'PayPal' ? 'border-purple-600' : ''}`} onClick={() => setSelectedPayment('PayPal')}>
                    <input type="radio" name="payment" value="PayPal" className="mr-2" checked={selectedPayment === 'PayPal'} onChange={handlePaymentChange} />
                    <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal" className="h-6 mr-2" />
                    <span className="font-semibold">PayPal</span>
                  </div>
                  <div className={`border p-4 rounded-lg flex items-center cursor-pointer mb-4 ${selectedPayment === 'Apple Pay' ? 'border-purple-600' : ''}`} onClick={() => setSelectedPayment('Apple Pay')}>
                    <input type="radio" name="payment" value="Apple Pay" className="mr-2" checked={selectedPayment === 'Apple Pay'} onChange={handlePaymentChange} />
                    <img src="src/assets/images/apple.png" alt="Apple Pay" className="h-6 mr-2" />
                    <span className="font-semibold">Apple Pay</span>
                  </div>
                  <p className="text-gray-600 my-4">Or checkout using a credit card</p>
                  <input type="text" placeholder="Cardholder Name" className="w-full p-2 border rounded mb-2" />
                  <input type="text" placeholder="Card Number" className="w-full p-2 border rounded mb-2" />
                  <div className="flex gap-2 mb-2">
                    <input type="text" placeholder="MM/YY" className="w-1/2 p-2 border rounded" />
                    <input type="text" placeholder="CVV" className="w-1/2 p-2 border rounded" />
                  </div>
                  <input type="text" placeholder="Postal or ZIP Code" className="w-full p-2 border rounded mb-4" />
                </div>

                {/* Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>$4.99</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Plan type</span>
                    <span>Monthly</span>
                  </div>
                  <div className="flex justify-between mb-2 text-green-600">
                    <span>Monthly plan discount</span>
                    <span>-$5</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Billed Now</span>
                    <span className="text-purple-600">$35</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4">You will be charged $5 every year thereafter while the subscription is active. Cancel anytime.</p>
                  <button onClick={handleSubscribe} className="w-full bg-purple-600 text-white py-2 rounded-lg">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}