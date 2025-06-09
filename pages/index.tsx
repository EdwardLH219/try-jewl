import React from 'react';
import Head from 'next/head';
import styles from '../styles/splash.module.css';
import HowItWorks from '../components/HowItWorks';

export default function Home() {
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
            <h1 className={styles.mainHeading}>Find that needle in a haystack.</h1>
            <p className={styles.strapline}>
              Find your precise piece of data instantly, seamlessly, from your favourite messaging app.
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

          <section id="how-what" className={styles.howWhat}>
            <div className={styles.usesColumn}>
              <h2>Uses</h2>
              <ul>
                <li className={styles.regularCard}>
                  Save and retrieve important info
                </li>
                <li className={styles.regularCard}>
                  Search exact details in scanned files or drives
                </li>
                <li className={styles.regularCard}>
                  Get answers from reports, forms, or folders
                </li>
              </ul>
            </div>
            <div className={styles.examplesColumn}>
              <h2>Examples</h2>
              <ul>
                <li className={styles.regularCard}>
                  What is my child's passport expiry date?
                </li>
                <li className={styles.regularCard}>
                  Find the tax number from last year's return
                </li>
                <li className={styles.regularCard}>
                  Show me the May payment receipt from James
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <main className={styles.main}>
        <HowItWorks />

        <div className={styles.securityStatement}>
          <p>Secure, instant, precise and easy RETRIEVAL of that ONE singular urgent piece of data!</p>
        </div>
      </main>
    </>
  );
}