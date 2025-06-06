import React from 'react';
import Head from 'next/head';
import styles from '../styles/splash.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Needle in a Haystack - Find Your Data Instantly</title>
        <meta name="description" content="Find your precise piece of data instantly, seamlessly, from your favourite messaging app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <header className={styles.header}>
            <h1 className={styles.mainHeading}>Do you need to find a needle in a haystack?</h1>
            <p className={styles.strapline}>
              Find your precise piece of data instantly, seamlessly, from your favourite messaging app.
            </p>
          </header>

          <main className={styles.main}>
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
          </main>

          <footer className={styles.footer}>
            <div className={styles.aboutSection}>
              <p className={styles.aboutText}>
                We are a team of passionate tech enthusiasts who believe that finding a precise piece of information 
                shouldn't be a treasure hunt. Our mission is to bridge the gap between your data repositories, images or individual docs 
                and the messaging apps you use every day, making information retrieval as simple as sending a message.
              </p>
            </div>
            
            <div className={styles.securityStatement}>
              <p>Secure, instant, precise and easy RETRIEVAL of that ONE singular urgent piece of data!</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}