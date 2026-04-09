'use client';

import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className={`${styles.inner} container`}>
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          <span>✦</span> Last Chance
        </div>
        <h2 className={styles.heading}>
          Your NEET 2026 Rank Depends
          <br />
          on{' '}
          <span className={styles.headingAccent}>What You Do Today</span>
        </h2>
        <p className={styles.subtext}>
          Thousands of students are already studying with NEET Mastery. Every day you delay is a day they get ahead. Start your preparation now.
        </p>

        <div className={styles.priceRow}>
          <span className={styles.strike}>₹1,999</span>
          <span className={styles.price}>₹499</span>
          <span className={styles.badge}>Limited Offer</span>
        </div>

        <a
          href="https://superprofile.bio/vp/67a33f8eff3abc0013ea22c4"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Buy Now — Get Instant Access
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <div className={styles.trustRow}>
          {[
            'Instant Digital Delivery',
            'Secure Razorpay Payment',
            'Lifetime Access',
            '10,000+ Students Trust Us',
          ].map((item, i) => (
            <div key={i} className={styles.trustItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}