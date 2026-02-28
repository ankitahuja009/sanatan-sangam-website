'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../../i18n/routing';
import { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';

const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'bn', name: 'Bengali', native: 'বাংলা' },
    { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' },
    { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
    { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

    const handleLanguageChange = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={styles.langSwitcher} ref={dropdownRef}>
            <button
                className={styles.langButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <span className={styles.langIcon}>🌐</span>
                <span className={styles.langLabel}>{currentLanguage.native}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronUp : ''}`}>▾</span>
            </button>

            {isOpen && (
                <div className={styles.langDropdown}>
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`${styles.langOption} ${locale === lang.code ? styles.activeLang : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            <span className={styles.langNative}>{lang.native}</span>
                            <span className={styles.langName}>{lang.name}</span>
                            {locale === lang.code && <span className={styles.checkMark}>✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
