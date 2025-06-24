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

      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <header className={styles.header}>
            <h1 className={styles.mainHeading}>Looking for a needle<br className="block sm:hidden" /> in a haystack?</h1>
            <p className="text-xl text-gray-700">
              Get your exact info instantly using simple messaging apps
            </p>
          </header>

          <section className={styles.ctaSection}>
            <h2 className={styles.ctaHeading}>Start now!</h2>
            <div className={styles.buttonContainer} role="group">
              <a 
                href="https://wa.me/17863213799?text=Hello"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton} 
                aria-label="Connect WhatsApp"
              >
                <img src="/icons/wa.png" alt="WhatsApp" className={styles.buttonIcon} />
                Connect WhatsApp
              </a>
              <a 
                href="https://t.me/StarlogikJewlBot"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton} 
                aria-label="Connect Telegram"
              >
                <img src="/icons/T.webp" alt="Telegram" className={styles.buttonIcon} />
                Connect Telegram
              </a>
            </div>
          </section>
        </div>
      </div>

      <section className="w-full bg-black">
        <HowItWorks />
      </section>

      <section className="w-full bg-[#F5F5F5]">
        <div className="w-full bg-[#F5F5F5]">
          <section className="py-12 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[2rem] md:text-4xl font-bold text-center mb-6">About</h2>
              <div className="text-center space-y-6">
                <p className="text-xl text-gray-700">
                  We are a team of passionate tech enthusiasts who believe that finding your crown jewels should not be a treasure hunt.
                </p>
                <p className="text-xl text-gray-700">
                  Our mission is to bridge the gap between your data buried in repositories and the messaging apps you love and use every day, making info retrieval as simple as sending a message.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}