'use client';

import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} >
      {/* Background grid */}
      {/* <div className={styles.bgGrid} aria-hidden="true" /> */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          NEET NEXUS — Smart Modules for 2027/2028
        </div>

        {/* Heading */}
        <h1 className={styles.heading}>
          NEET NEXUS{' '}
          <span className={styles.headingAccent}>for 2027 & 2028</span>
          <br />
          Smart Study, Real Results
        </h1>

        {/* Subheading */}
        <p className={styles.subheading}>
          Complete NEET bundle for Physics · Chemistry · Biology — built for speed,
          clarity, and higher scores.
        </p>

        <div className='rounded-2xl'>
            <img src="/image copy 5.png" className='rounded-2xl' alt="" />
        </div>

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
           <a
              href="https://superprofile.bio/nexusneet/vrCCQFYRiP"
              target="_blank"
              rel="noopener noreferrer" className={styles.ctaPrimary}>
            Get Bundle — ₹399
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <button onClick={() => scrollTo('bundle')} className={styles.ctaSecondary}>
            See What's Inside
          </button>
        </div>

        {/* Trust Strip */}
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Instant Access
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Lifetime Access
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            100% Secure Payment
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
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