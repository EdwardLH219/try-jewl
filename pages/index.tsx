import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/splash.module.css';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
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
    <>
      <Head>
        <title>JEWL - Find Your Data Instantly</title>
        <meta name="description" content="Find your precise piece of data instantly, seamlessly, from your favourite messaging app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconV2.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://try-jewl.netlify.app/" />
        <meta property="og:title" content="JEWL - Find Your Data Instantly" />
        <meta property="og:description" content="Find your precise piece of data instantly, seamlessly, from your favourite messaging app." />
        <meta property="og:image" content="https://try-jewl.netlify.app/jewl-diamond-socialV2.png" />
        <meta property="og:image:width" content="832" />
        <meta property="og:image:height" content="832" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="JEWL" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://try-jewl.netlify.app/" />
        <meta name="twitter:title" content="JEWL - Find Your Data Instantly" />
        <meta name="twitter:description" content="Find your precise piece of data instantly, seamlessly, from your favourite messaging app." />
        <meta name="twitter:image" content="https://try-jewl.netlify.app/jewl-diamond-socialV2.png" />
        <meta name="twitter:image:alt" content="JEWL - Colorful diamond logo representing instant data discovery" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JEWL Team" />
        <link rel="canonical" href="https://try-jewl.netlify.app/" />
      </Head>

      <div className="section-light min-h-[800px] flex items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="gradient-text mb-8">
              Looking for a needle<br className="block sm:hidden" /> in a haystack?
            </h1>
            <p className="text-xl text-gray-600 mb-16">
              Get your exact info instantly<br className="block sm:hidden" /> using simple messaging apps
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/17863213799?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black hover:bg-gray-100 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors border border-black" 
                aria-label="Connect WhatsApp"
              >
                <img src="/icons/wa.png" alt="WhatsApp" className="w-6 h-6" />
                Connect WhatsApp
              </a>
              <a 
                href="https://t.me/StarlogikJewlBot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2" 
                aria-label="Connect Telegram"
              >
                <img src="/icons/T.webp" alt="Telegram" className="w-6 h-6" />
                Connect Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section-muted">
        <HowItWorks />
      </section>

      <section className="section-light section-padding">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="bg-black text-white rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-white text-4xl font-semibold mb-8">About</h2>
                  <div className="space-y-6">
                    <p className="text-xl opacity-80">
                      We are a team of passionate tech enthusiasts who believe that finding your crown jewels should not be a treasure hunt.
                    </p>
                    <p className="text-xl opacity-80">
                      Our mission is to bridge the gap between your data buried in repositories and the messaging apps you love and use every day, making info retrieval as simple as sending a message.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 md:ml-8">
                  <a 
                    href="https://wa.me/17863213799?text=Hello"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-64 hover:bg-gray-100 transition-colors" 
                    aria-label="Connect WhatsApp"
                  >
                    <img src="/icons/wa.png" alt="WhatsApp" className="w-6 h-6" />
                    Connect WhatsApp
                  </a>
                  <a 
                    href="https://t.me/StarlogikJewlBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 w-64 hover:bg-gray-100 transition-colors" 
                    aria-label="Connect Telegram"
                  >
                    <img src="/icons/T.webp" alt="Telegram" className="w-6 h-6" />
                    Connect Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}