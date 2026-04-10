'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.inner} container`}>
          {/* Logo */}
          <div className={styles.logo}>
            {/* <div className={styles.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="8" width="24" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 12 Q14 8 26 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <line x1="14" y1="4" x2="14" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="11" y1="5" x2="17" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 18 L10 16 L12 20 L16 14 L18 18 L21 18" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={styles.logoText}>
              <span className={styles.logoNeet}>NEET</span>
              <span className={styles.logoMastery}>Mastery</span>
            </span> */}
            <img src="/image copy 4.png" className='w-[120]' alt="" />
          </div>

          {/* Desktop Nav Links */}
          <ul className={styles.navLinks}>
            {[
              { label: 'What You Get', id: 'bundle' },
              { label: 'Results', id: 'results' },
              { label: 'Reviews', id: 'testimonials' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)} className={styles.navLink}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
              href="https://superprofile.bio/nexusneet/vrCCQFYRiP"
              target="_blank"
              rel="noopener noreferrer"
            className={styles.navCta}
          >
            Buy Now — ₹399
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            {[
              { label: 'What You Get', id: 'bundle' },
              { label: 'Results', id: 'results' },
              { label: 'Reviews', id: 'testimonials' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <li key={item.id}>
                <button onClick={() => scrollTo(item.id)}>{item.label}</button>
              </li>
            ))}
          </ul>
           <a
              href="https://superprofile.bio/nexusneet/vrCCQFYRiP"
              target="_blank"
              rel="noopener noreferrer" className={styles.mobileCta}>
            Buy Now — ₹399
          </a>
        </div>
      )}
    </>
  );
}