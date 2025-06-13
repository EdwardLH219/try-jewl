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
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-white text-center text-xl mb-8">
          Secure & Instant, Retrieval of that<br className="block sm:hidden" /> 1 Precise Piece of Data.
        </p>
        <h2 className="text-[2rem] md:text-3xl font-bold text-white text-center mb-12">How it works</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Step 1: Connect Chat */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center h-[250px] md:h-auto flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold">
                1
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Connect Chat</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Click "Connect WhatsApp"<br />or "Telegram"
            </p>
          </div>

          {/* Step 2: Upload a Document */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center h-[250px] md:h-auto flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold">
                2
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Upload Doc</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Drop a file, pdf or image in the chat.
            </p>
            <p className="text-zinc-400 text-xs text-center mt-auto">
              🙏 accepted ⛔ error ✌ already uploaded<br className="block sm:hidden" /> 👌 processing 💎 done
            </p>
          </div>

          {/* Step 3: Get it! */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center h-[250px] md:h-auto flex flex-col">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-xl font-bold">
                3
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Get it!</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Ask Jewl a question.<br />Retrieve instantly.
            </p>
          </div>
        </div>
        <p className="text-white text-center text-xl mb-12">
          Store and retrieve important info<span className="hidden sm:inline">,</span><br className="block sm:hidden" /> here some ideas…
        </p>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="bg-[#F8F8F8] rounded-[18px] rounded-tl-sm p-4 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full">
                <p className="text-lg">What is my passport expiry date</p>
                <p className="text-xs text-gray-500 text-right absolute bottom-3 right-4">
                  {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#F8F8F8] rounded-[18px] rounded-tl-sm p-4 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full">
                <p className="text-lg">What is my company EIN number</p>
                <p className="text-xs text-gray-500 text-right absolute bottom-3 right-4">
                  {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[#F8F8F8] rounded-[18px] rounded-tl-sm p-4 relative min-h-[80px] flex flex-col justify-center max-w-[500px] w-full">
                <p className="text-lg">Show the May pay receipt from Ben</p>
                <p className="text-xs text-gray-500 text-right absolute bottom-3 right-4">
                  {currentTime} <img src="/icons/blueTicks.png" alt="Read" className="inline-block h-3.5 ml-0.5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 