'use client';

import styles from './WhyUs.module.css';

const reasons = [
  {
    number: '01',
    title: 'Save Months of Wasted Time',
    description: 'Stop searching scattered resources. Everything is consolidated — notes, PYQs, tests, strategy — in one place. Start studying smarter from day one.',
  },
  {
    number: '02',
    title: 'Toppers\' Exact Blueprint',
    description: 'These aren\'t generic study tips. This is the exact strategy that helped our students achieve AIR under 500 — time tables, revision cycles, chapter priority.',
  },
  {
    number: '03',
    title: 'NCERT-First Approach',
    description: 'NEET is 80% NCERT. Our notes are deeply NCERT-aligned, highlighting every line that has ever appeared in NEET — so you never miss a question.',
  },
  {
    number: '04',
    title: 'Practice That Actually Works',
    description: '35 years of PYQs tells you the pattern. Our mock tests simulate the real exam. You enter the exam hall already having seen every type of question.',
  },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={`${styles.inner} container`}>
        {/* Left */}
        <div className={styles.left}>
          <div className="section-tag">
            <span>✦</span> Why NEET NEXUS
          </div>
          <h2 className={styles.heading}>
            The Smarter Way to{' '}
            <span className="gold-text">Crack NEET</span>
          </h2>
          <p className={styles.subtext}>
            Most students fail not because they don't study enough — but because they study the wrong things in the wrong order. We fix that.
          </p>

          <div className={styles.highlightBox}>
            <div className={styles.highlightNumber}>720+</div>
            <div className={styles.highlightLabel}>
              Average score improvement after using this bundle (in mock tests)
            </div>
          </div>

         <a
              href="https://superprofile.bio/nexusneet/vrCCQFYRiP"
              target="_blank"
              rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '8px', alignSelf: 'flex-start' }}
          >
            Start Today — ₹399
          </a>
        </div>

        {/* Right */}
        <div className={styles.right}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.reasonCard}>
              <div className={styles.reasonNumber}>{r.number}</div>
              <div className={styles.reasonContent}>
                <h3 className={styles.reasonTitle}>{r.title}</h3>
                <p className={styles.reasonDesc}>{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}