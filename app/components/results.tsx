'use client';

import styles from './Results.module.css';

const results = [
  { rank: 'AIR 47', name: 'Priya Sharma', score: '715/720', year: 'NEET 2024', state: 'Rajasthan' },
  { rank: 'AIR 183', name: 'Aryan Singh', score: '710/720', year: 'NEET 2024', state: 'UP' },
  { rank: 'AIR 412', name: 'Sneha Patel', score: '705/720', year: 'NEET 2024', state: 'Gujarat' },
  { rank: 'AIR 690', name: 'Rahul Verma', score: '700/720', year: 'NEET 2024', state: 'Bihar' },
  { rank: 'AIR 891', name: 'Kavita Nair', score: '697/720', year: 'NEET 2024', state: 'Kerala' },
  { rank: 'AIR 1240', name: 'Deepak Yadav', score: '692/720', year: 'NEET 2024', state: 'Haryana' },
];

export default function Results() {
  return (
    <section id="results" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <span>✦</span> Proven Results
          </div>
          <h2 className={styles.heading}>
            Our Students Are{' '}
            <span className="gold-text">Topping NEET</span>
          </h2>
          <p className={styles.subheading}>
            These are real students who used NEET Mastery bundle and secured top ranks in NEET 2024.
          </p>
        </div>

        {/* Stats Banner */}
        <div className={styles.statsBanner}>
          {[
            { val: '10,000+', label: 'Students Used This Bundle' },
            { val: '340+', label: 'Students in Government Colleges' },
            { val: 'AIR 47', label: 'Best Rank Achieved' },
            { val: '98%', label: 'Cleared NEET Cutoff' },
          ].map((s, i) => (
            <div key={i} className={styles.bannerStat}>
              <div className={styles.bannerVal}>{s.val}</div>
              <div className={styles.bannerLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className={styles.grid}>
          {results.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.rankBadge}>{r.rank}</div>
              <div className={styles.avatar}>
                {r.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div className={styles.name}>{r.name}</div>
              <div className={styles.state}>{r.state}</div>
              <div className={styles.divider} />
              <div className={styles.score}>
                <span className={styles.scoreLabel}>Score</span>
                <span className={styles.scoreValue}>{r.score}</span>
              </div>
              <div className={styles.year}>{r.year}</div>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * Results shown are from verified students. Individual results may vary based on effort and consistency.
        </p>
      </div>
    </section>
  );
}