'use client';
import styles from './BundleSection.module.css';

export default function BundleSection() {
  return (
    <section className={styles.section}>
      <div className="container">

        {/* Heading */}
        <h2 className={styles.heading}>
          Why This <span>NEET Bundle</span> Works
        </h2>

        {/* EASY ACCESS */}
        <div className={styles.easyAccess}>
          <div className={styles.left}>
            <h3>🔐 Easy & Instant Access</h3>
            <ul>
              <li>✅ Secure payment</li>
              <li>📩 Instant digital access after purchase</li>
              <li>💻 Works on mobile, tablet & laptop</li>
            </ul>
          </div>

          <div className={styles.right}>
            <img src="/image copy 6.png" alt="devices" />
          </div>
        </div>

        {/* BEFORE vs AFTER */}
        <div className="">

          {/* BEFORE */}
          {/* <div className={styles.card}> */}
            {/* <h3 className={styles.beforeTitle}>❌ Before Buying</h3>
            <ul>
              <li>😓 Studying from multiple books</li>
              <li>😵 Confusion & no clear strategy</li>
              <li>📉 Low confidence in mock tests</li>
              <li>⏳ Wasting time making notes</li>
              <li>😣 Stress before exams</li>
            </ul> */}
            {/* <img src="/image copy.png" alt="" /> */}
          {/* </div> */}

          {/* AFTER */}
          <div className={styles.card}>
            {/* <h3 className={styles.afterTitle}>✅ After Buying</h3>
            <ul>
              <li>📚 All notes in one place</li>
              <li>⚡ Faster revision & clarity</li>
              <li>🎯 NEET-level practice</li>
              <li>🚀 Better accuracy & speed</li>
              <li>😎 High confidence in exams</li>
            </ul> */}
            <img src="/image copy 7.png" className='w-full' alt="" />
          </div>

        </div>

      </div>
    </section>
  );
}