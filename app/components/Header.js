'use client';
import { useState, useEffect } from 'react';
import { Link, usePathname } from '../../i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
    const t = useTranslations('nav');
    const common = useTranslations('app');
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: t('home'), href: '/' },
        { label: t('darshan'), href: '/darshan' },
        { label: t('art'), href: '/art' },
        { label: t('wish'), href: '/wish' },
        { label: t('music'), href: '/music' },
        { label: t('uphar'), href: '/uphar' },
        { label: t('astro'), href: '/astro' },
        { label: t('sangrah'), href: '/sangrah' },
    ];

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

    const isHomePage = pathname === '/' || pathname === '';

    return (
        <header className={`${styles.header} ${(scrolled || !isHomePage) ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                    <img src="/logo.png" alt="Sanatan Sangam Logo" className={styles.logoImg} />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${pathname === link.href ? styles.activeLink : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA + Language + Hamburger */}
                <div className={styles.actions}>
                    <LanguageSwitcher />
                    <a
                        href="#download"
                        className={`btn btn-primary btn-sm ${styles.downloadBtn}`}
                    >
                        📱 {common('downloadApp')}
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
                    <div className={styles.mobileActions} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem', alignItems: 'center' }}>
                        <LanguageSwitcher />
                        <a
                            href="#download"
                            className={`btn btn-primary ${styles.mobileDownloadBtn}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            📱 {common('downloadApp')}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
