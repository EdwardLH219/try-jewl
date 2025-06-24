import React, { useState, useEffect } from 'react';

export default function HowItWorks() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Function to format time as HH:mm
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    };

    // Set initial time
    setCurrentTime(formatTime());

    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 text-center mb-8">
            Secure & Instant Retrieval of that<br className="block sm:hidden" /> 1 Precise Piece of Data.
          </p>
          <h2 className="gradient-text text-center mb-12">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Step 1: Connect Chat */}
            <div className="feature-card h-[250px] md:h-auto flex flex-col items-center">
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold">
                  1
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Connect Chat</h3>
              <p className="text-gray-600 text-sm text-center">
                Click "Connect WhatsApp"<br />or "Telegram"
              </p>
            </div>

            {/* Step 2: Upload a Document */}
            <div className="feature-card h-[250px] md:h-auto flex flex-col items-center">
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold">
                  2
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Upload Doc</h3>
              <p className="text-gray-600 text-sm mb-6 text-center">
                Drop a file, pdf or image in the chat.
              </p>
              <p className="text-gray-500 text-xs mt-auto text-center">
                🙏 accepted ⛔ error ✌ already uploaded<br className="block sm:hidden" /> 👌 processing 💎 done
              </p>
            </div>

            {/* Step 3: Get it! */}
            <div className="feature-card h-[250px] md:h-auto flex flex-col items-center">
              <div className="mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-xl font-bold">
                  3
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Get it!</h3>
              <p className="text-gray-600 text-sm text-center">
                Ask Jewl a question.<br />Retrieve instantly.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-600 text-center mb-12">
            Store and retrieve important info<span className="hidden sm:inline">,</span><br className="block sm:hidden" /> here some ideas…
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-white rounded-[18px] rounded-tl-sm p-6 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full shadow-sm">
                  <p className="text-lg text-gray-900">What is my passport expiry date</p>
                  <p className="text-xs text-gray-500 text-right absolute bottom-4 right-6">
                    {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-[18px] rounded-tl-sm p-6 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full shadow-sm">
                  <p className="text-lg text-gray-900">What is my company EIN number</p>
                  <p className="text-xs text-gray-500 text-right absolute bottom-4 right-6">
                    {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-[18px] rounded-tl-sm p-6 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full shadow-sm">
                  <p className="text-lg text-gray-900">Show the May pay receipt from Ben</p>
                  <p className="text-xs text-gray-500 text-right absolute bottom-4 right-6">
                    {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 