'use client';

import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Riya Gupta',
    college: 'AIIMS Delhi',
    rank: 'AIR 183',
    text: 'The PYQs and mock tests were life-changing. I went from 580 in my first mock to 710 in the real exam. The strategy PDFs are pure gold — I followed the time table exactly and it worked!',
    rating: 5,
  },
  {
    name: 'Karan Mehta',
    college: 'Maulana Azad Medical College',
    rank: 'AIR 412',
    text: 'Notes are super crisp — no fluff. Every important NCERT line is highlighted. I revised Biology 5 times using these notes and scored 355/360 in Bio. Worth every rupee.',
    rating: 5,
  },
  {
    name: 'Ananya Joshi',
    college: 'Grant Medical College',
    rank: 'AIR 1240',
    text: 'I was worried before purchasing but the doubt support group is amazing. Mentors replied within hours. The bundle is extremely affordable for the quality it provides.',
    rating: 5,
  },
  {
    name: 'Vikram Soni',
    college: 'SMS Medical College, Jaipur',
    rank: 'AIR 2100',
    text: 'Chem notes are the best I\'ve seen anywhere. Organic reactions, inorganic facts — everything is in one place. Mock tests helped me manage exam time properly. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Pooja Rawat',
    college: 'KGMU Lucknow',
    rank: 'AIR 3450',
    text: 'I dropped a year and was skeptical. But this bundle helped me cover all gaps. The chapter checklists kept me on track. Cleared in my 2nd attempt with a great score!',
    rating: 5,
  },
  {
    name: 'Ajay Kumar',
    college: 'BHU Medical College',
    rank: 'AIR 5600',
    text: 'Physics notes and PYQs are excellent. Got 150+ in Physics — my weakest subject. Strategy PDF taught me which chapters to prioritize. This bundle is a must-have!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <span>✦</span> Student Reviews
          </div>
          <h2 className={styles.heading}>
            What Our Students{' '}
            <span className="gold-text">Say About Us</span>
          </h2>
          <p className={styles.subheading}>
            Over 10,000 students have used NEET Mastery bundle. Here's what they experienced.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {'★'.repeat(t.rating)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className={styles.info}>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.college}>{t.college}</div>
                </div>
                <div className={styles.rank}>{t.rank}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className={styles.proofBar}>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>4.9/5</span>
            <span className={styles.proofLabel}>Average Rating</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>10,000+</span>
            <span className={styles.proofLabel}>Happy Students</span>
          </div>
          <div className={styles.proofDivider} />
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>340+</span>
            <span className={styles.proofLabel}>Government Seats Secured</span>
          </div>
        </div>
      </div>
    </section>
  );
}