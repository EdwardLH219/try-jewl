import React from 'react';

export default function HowItWorks() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How it works</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Step 1: Connect Chat */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold">
                1
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Connect Chat</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Click "Connect via WhatsApp" or "Telegram"
            </p>
          </div>

          {/* Step 2: Upload a Document */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full text-xl font-bold">
                2
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Upload Doc</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Drop a file, pdf or image in the chat.
            </p>
            <p className="text-zinc-400 text-xs text-center">
              🙏 accepted ⛔ error ✌ already uploaded 👌 processing 💎 done
            </p>
          </div>

          {/* Step 3: Get it! */}
          <div className="flex-1 bg-zinc-800 rounded-2xl border border-zinc-700 p-6 text-center">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full text-xl font-bold">
                3
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Get it!</h3>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Ask Jewl a question. Retrieve instantly.
            </p>
          </div>
        </div>
        <p className="text-white text-center text-xl">
          Secure & Instant, Retrieval of that 1 Precise Piece of Data.
        </p>
      </div>
    </div>
  );
} 