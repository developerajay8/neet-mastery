'use client';

import { useState, useEffect } from 'react';
import styles from './Pricing.module.css';

function useCountdown(initialHours = 6) {
  const [time, setTime] = useState({ h: initialHours, m: 23, s: 47 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 5; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

const included = [
  'Chapter-wise Notes — Physics, Chemistry, Biology',
  '35 Years Previous Year Questions (Solved)',
  '20 Full-Length Mock Tests with Analysis',
  'Topper Strategy & Time-Table PDFs',
  'Chapter Checklists & Revision Guides',
  'Exclusive Doubt Support Telegram Group',
  'Lifetime Access — No Expiry Ever',
  'Instant Download after Payment',
];

export default function Pricing() {
  const { h, m, s } = useCountdown(6);
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <span>✦</span> Limited Time Offer
          </div>
          <h2 className={styles.heading}>
            Get Everything for Just{' '}
            <span className="gold-text">₹499</span>
          </h2>
          <p className={styles.subheading}>
            This offer expires soon. Lock in your access before the price goes back to ₹1,999.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Pricing Card */}
          <div className={styles.card}>
            {/* Timer */}
            <div className={styles.timerWrap}>
              <span className={styles.timerLabel}>Offer Expires In</span>
              <div className={styles.timer}>
                {[pad(h), pad(m), pad(s)].map((val, i) => (
                  <span key={i} className={styles.timerGroup}>
                    <span className={styles.timerDigit}>{val}</span>
                    {i < 2 && <span className={styles.timerColon}>:</span>}
                  </span>
                ))}
              </div>
              <div className={styles.timerUnits}>
                <span>Hours</span><span>Minutes</span><span>Seconds</span>
              </div>
            </div>

            {/* Price */}
            <div className={styles.priceBlock}>
              <span className={styles.originalPrice}>₹1,999</span>
              <div className={styles.priceRow}>
                <span className={styles.price}>₹499</span>
                <span className={styles.discount}>75% OFF</span>
              </div>
              <span className={styles.priceNote}>One-time payment · Lifetime access</span>
            </div>

            {/* CTA Button */}
            <a
              href="https://superprofile.bio/vp/67a33f8eff3abc0013ea22c4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyBtn}
            >
              Buy Now — Secure Payment
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className={styles.secureNote}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Secured by Razorpay · UPI · Cards · Net Banking
            </div>

            {/* Divider */}
            <div className={styles.divider} />

            {/* Included List */}
            <div className={styles.includedTitle}>What's Included</div>
            <ul className={styles.included}>
              {included.map((item, i) => (
                <li key={i} className={styles.includedItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>Who Is This For?</div>
              <ul className={styles.infoList}>
                {[
                  'NEET 2026 aspirants (Class 11, 12, Droppers)',
                  'Students who want a clear, structured study plan',
                  'Those scoring below 500 and want to reach 650+',
                  'Aspirants who can\'t afford expensive coaching',
                  'Repeaters who want to crack it this time for sure',
                ].map((item, i) => (
                  <li key={i}>
                    <span className={styles.infoCheck}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoTitle}>This Bundle Replaces</div>
              {[
                ['Coaching Institute Notes', '₹5,000+'],
                ['PYQ Books from Market', '₹1,200'],
                ['Test Series Subscription', '₹3,000'],
                ['Strategy Consultation', '₹2,000'],
              ].map(([item, price], i) => (
                <div key={i} className={styles.replaceRow}>
                  <span>{item}</span>
                  <span className={styles.replacePrice}>{price}</span>
                </div>
              ))}
              <div className={styles.replaceDivider} />
              <div className={styles.replaceTotal}>
                <span>Total Value</span>
                <span>₹11,200+</span>
              </div>
              <div className={styles.replaceOffer}>
                You pay only <strong>₹499</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}