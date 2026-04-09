'use client';

import styles from './Bundle.module.css';

const bundleItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Complete Notes',
    description: 'Chapter-wise handwritten + typed notes for Physics, Chemistry & Biology. NCERT-aligned with extra important topics.',
    tag: '3 Subjects Covered',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Previous Year Questions',
    description: '35 years of NEET PYQs with detailed solutions. Topicwise sorted, difficulty tagged, and concept-linked for revision.',
    tag: '35 Years PYQs',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Full Mock Tests',
    description: '20 full-length NEET-pattern mock tests with OMR sheets. Detailed performance analysis with rank prediction.',
    tag: '20 Mock Tests',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Topper Strategy PDFs',
    description: 'Time-table templates, revision schedules, and study plans used by AIR Top 100 rankers. Follow the exact blueprint.',
    tag: 'Proven Blueprint',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="1.5" rx="2"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Chapter Checklists',
    description: 'Topic-by-topic checklist to track your preparation. Know exactly what to study and what to skip.',
    tag: 'Smart Revision',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Doubt Support',
    description: 'Access to an exclusive Telegram group for doubt resolution. Expert mentors answer within 24 hours.',
    tag: '24/7 Support',
  },
];

export default function Bundle() {
  return (
    <section id="bundle" className={styles.bundle}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <span>✦</span> Complete Bundle
          </div>
          <h2 className={styles.heading}>
            Everything You Need to{' '}
            <span className="gold-text">Score 700+</span>
          </h2>
          <p className={styles.subheading}>
            One bundle. Six powerful resources. Everything a serious NEET aspirant needs — from day one to exam day.
          </p>
        </div>

        <div className={styles.grid}>
          {bundleItems.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{item.icon}</div>
                <span className={styles.cardTag}>{item.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.bottomText}>
            All of this for just{' '}
            <span className={styles.strikePrice}>₹1,999</span>{' '}
            <span className={styles.offerPrice}>₹499</span>
          </p>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Claim Your Bundle
          </button>
        </div>
      </div>
    </section>
  );
}