'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          NEET 2026 — Complete Preparation Bundle
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          Crack NEET 2026{' '}
          <span className={styles.headingAccent}>with Smart Strategy</span>
          <br />
          Not Just Hard Work
        </h1>

        {/* Subheading */}
        <p className={styles.subheading}>
          Complete Bundle for Physics · Chemistry · Biology — curated by top rankers,
          designed for maximum score in minimum time.
        </p>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {[
            { number: '10,000+', label: 'Students Enrolled' },
            { number: '720+', label: 'Questions Solved Daily' },
            { number: '98%', label: 'Student Satisfaction' },
            { number: 'AIR 47', label: 'Highest Rank Achieved' },
          ].map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={styles.ctaRow}>
          <button onClick={() => scrollTo('pricing')} className={styles.ctaPrimary}>
            Get Bundle — ₹499
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => scrollTo('bundle')} className={styles.ctaSecondary}>
            See What's Inside
          </button>
        </div>

        {/* Trust Strip */}
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
            </svg>
            Instant Access
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
            </svg>
            Lifetime Access
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
            </svg>
            100% Secure Payment
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="#c9a84c" strokeWidth="1.5"/>
            </svg>
            Expert-Curated Content
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}