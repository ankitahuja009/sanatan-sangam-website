'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
    const t = useTranslations('nav');
    const common = useTranslations('app');
    const footerT = useTranslations('footer');
    const downloadT = useTranslations('download');

    const quickLinks = [
        { label: t('home'), href: '/' },
        { label: t('darshan'), href: '/darshan' },
        { label: t('art'), href: '/art' },
        { label: t('wish'), href: '/wish' },
        { label: t('music'), href: '/music' },
        { label: t('uphar'), href: '/uphar' },
        { label: t('astro'), href: '/astro' },
        { label: footerT('explore'), href: '/about' },
    ];

    const contentLinks = [
        { label: 'Aarti Collection', href: '/sangrah/aarti' },
        { label: 'Chalisa Collection', href: '/sangrah/chalisa' },
        { label: 'Mantra Collection', href: '/sangrah/mantra' },
        { label: 'Festival Guide', href: '/sangrah/festivals' },
        { label: 'Deity Encyclopedia', href: '/sangrah/deities' },
        { label: 'Ayurvedic Remedies', href: '/sangrah/ayurveda' },
        { label: 'Blog', href: '/blog' },
    ];

    const legalLinks = [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms of Use', href: '/terms-of-use' },
        { label: 'Disclaimer', href: '/disclaimer' },
    ];

    return (
        <footer className={styles.footer}>
            {/* Decorative Top Border */}
            <div className={styles.topBorder}></div>

            <div className={`container ${styles.footerInner}`}>
                {/* Brand Column */}
                <div className={styles.brandCol}>
                    <div className={styles.logo}>
                        <img src="/logo.png" alt="Sanatan Sangam Logo" className={styles.footerLogoImg} />
                    </div>
                    <p className={styles.brandDesc}>
                        {footerT('brand')}
                    </p>

                    {/* Social Links */}
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.instagram.com/sanatansangam.official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Instagram"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/people/Sanatan-Sangam/61586013304596/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Facebook"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/@SanatanSangamMusic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="YouTube"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>{footerT('explore')}</h4>
                    <ul className={styles.linkList}>
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Links */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>{t('sangrah')}</h4>
                    <ul className={styles.linkList}>
                        {contentLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Download */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>{footerT('connect')}</h4>
                    <ul className={styles.linkList}>
                        {legalLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                    {/* App Store Badges */}
                    <div className={styles.storeBadges}>
                        <a href="#download" className={styles.storeBadgeWrap}>
                            <img src="/google-play-badge.svg" alt="Get it on Google Play" className={styles.storeBadgeImg} />
                        </a>
                        <a href="#download" className={styles.storeBadgeWrap}>
                            <img src="/app-store-badge.svg" alt="Download on the App Store" className={styles.storeBadgeImg} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={`container ${styles.bottomInner}`}>
                    <p className={styles.sanskrit}>
                        &#x201C;{footerT('sanskritQuote')}&#x201D; — {footerT('quoteTranslation')}
                    </p>
                    <p className={styles.copyright}>
                        {footerT('copyright', { year: new Date().getFullYear() })}
                    </p>
                </div>
            </div>
        </footer>
    );
}
