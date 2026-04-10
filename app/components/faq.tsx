'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'How will I receive the bundle after payment?',
    a: 'Immediately after payment, you will get access to all materials via instant download links. The Telegram doubt group invite will also be sent within 10 minutes. You get lifetime access — no expiry.',
  },
  {
    q: 'Is this bundle useful for Class 11 students?',
    a: 'Absolutely! This bundle is designed for Class 11, Class 12, and drop-year students. The notes cover full NEET syllabus and the strategy PDFs are tailored for different stages of preparation.',
  },
  {
    q: 'How is this different from free YouTube content?',
    a: 'YouTube gives scattered information. This bundle is structured, comprehensive, and exam-targeted. The PYQs are solved chapter-wise with concept explanations — something no free source provides this organized.',
  },
  {
    q: 'What subjects are covered in the notes?',
    a: 'All three NEET subjects are covered — Physics (Class 11 + 12), Chemistry (Physical, Organic, Inorganic), and Biology (Botany + Zoology). Every chapter from NCERT is covered in detail.',
  },
  {
    q: 'Is there any refund policy?',
    a: 'Since this is a digital product with instant access, we generally do not offer refunds. However, if you face any technical issue in accessing the material, our support team will resolve it within 24 hours.',
  },
  {
    q: 'Can I access this on my phone?',
    a: 'Yes! All materials are in PDF format which works perfectly on mobile, tablet, and PC. You can download and study offline anytime, anywhere.',
  },
  {
    q: 'Is the payment process secure?',
    a: 'Completely secure. We use https://superprofile — India\'s most trusted payment gateway — which supports UPI, Debit/Credit Cards, Net Banking, and Wallets. Your payment data is fully encrypted.',
  },
  {
    q: 'How many mock tests are included and how are they graded?',
    a: '20 full-length NEET-pattern mock tests are included. Each test has detailed answer keys with solutions. A performance analysis sheet helps you identify weak areas and track improvement over time.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-tag">
            <span>✦</span> FAQ
          </div>
          <h2 className={styles.heading}>
            Frequently Asked{' '}
            <span className="gold-text">Questions</span>
          </h2>
          <p className={styles.subheading}>
            Got doubts? We've answered the most common ones below.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{faq.q}</span>
                <div className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          Still have questions? Reach us on{' '}
          <a href="https://t.me/neetnexus" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
            Telegram
          </a>{' '}
          or{' '}
          <a href="mailto:support@neetnexus.in" className={styles.contactLink}>
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}