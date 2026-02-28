'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Darshan', href: '/darshan' },
    { label: 'Art', href: '/art' },
    { label: 'Wish', href: '/wish' },
    { label: 'Music', href: '/music' },
    { label: 'Uphar', href: '/uphar' },
    { label: 'Astro', href: '/astro' },
    { label: 'Sangrah', href: '/sangrah' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                    <span className={styles.logoIcon}>🕉️</span>
                    <div className={styles.logoText}>
                        <span className={styles.logoTitle}>Sanatan Sangam</span>
                        <span className={styles.logoTagline}>Where Sanatan Meets You</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Hamburger */}
                <div className={styles.actions}>
                    <a
                        href="#download"
                        className={`btn btn-primary btn-sm ${styles.downloadBtn}`}
                    >
                        📱 Download App
                    </a>
                    <button
                        className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`${styles.mobileNav} ${mobileOpen ? styles.mobileOpen : ''}`}>
                <nav className={styles.mobileNavLinks}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.mobileNavLink}
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="#download"
                        className={`btn btn-primary ${styles.mobileDownloadBtn}`}
                        onClick={() => setMobileOpen(false)}
                    >
                        📱 Download App
                    </a>
                </nav>
            </div>
        </header>
    );
}
