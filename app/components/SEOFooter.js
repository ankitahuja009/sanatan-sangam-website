'use client';
import { Link } from '@/i18n/routing';
import styles from './SEOFooter.module.css';

const MANTRA_LINKS = [
    { name: 'Radha Mantra', slug: 'radha-mantra' },
    { name: 'Narayan Mantra', slug: 'narayan-mantra' },
    { name: 'Kali Mantra', slug: 'kali-mantra-mantra' },
    { name: 'Agni Mantra', slug: 'shree-agani-mantra' },
    { name: 'Shakti Mantra', slug: 'shakti-mantra' },
    { name: 'Hanuman Mool Mantra', slug: 'hanuman-moola-mantra-and-benefits' },
];

const AARTI_LINKS = [
    { name: 'Om Jai Jagdish Aarti', slug: 'om-jai-jagdish-hare' },
    { name: 'Shiv Omkara Aarti', slug: 'om-jai-shiv-omkara' },
    { name: 'Kunj Bihari Aarti', slug: 'aarti-kunj-bihari-ki' },
    { name: 'Hanuman Aarti', slug: 'hanuman-aarti' },
    { name: 'Ganesh Aarti', slug: 'ganesh-aarti' },
    { name: 'Durga Aarti', slug: 'durga-aarti' },
    { name: 'Kaali Aarti', slug: 'kali-mata-aarti' },
    { name: 'Vishwakarma Aarti', slug: 'vishwakarma-aarti' },
];

const CHALISA_LINKS = [
    { name: 'Saraswati Chalisa', slug: 'saraswati-chalisa' },
    { name: 'Shiv Chalisa', slug: 'shiv-chalisa' },
    { name: 'Ram Chalisa', slug: 'ram-chalisa' },
    { name: 'Durga Chalisa', slug: 'durga-chalisa' },
    { name: 'Mahalakshmi Chalisa', slug: 'mahalakshmi-chalisa' },
    { name: 'Kaali Chalisa', slug: 'kali-chalisa' },
];

const CITIES = [
    'MUMBAI', 'NEW DELHI', 'KOLKATA', 'CHENNAI', 'BENGALURU',
    'HYDERABAD', 'AHMEDABAD', 'HARIDWAR', 'PUNE', 'SURAT'
];

export default function SEOFooter() {
    return (
        <section className={styles.seoFooter}>
            <div className="container">
                <div className={styles.categoryRow}>
                    <span className={styles.categoryTitle}>MANTRA:</span>
                    <div className={styles.links}>
                        {MANTRA_LINKS.map((link, i) => (
                            <span key={link.slug}>
                                <Link href={`/sangrah/mantra/${link.slug}`}>{link.name.toUpperCase()}</Link>
                                {i < MANTRA_LINKS.length - 1 && <span className={styles.separator}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.categoryRow}>
                    <span className={styles.categoryTitle}>AARTI:</span>
                    <div className={styles.links}>
                        {AARTI_LINKS.map((link, i) => (
                            <span key={link.slug}>
                                <Link href={`/sangrah/aarti/${link.slug}`}>{link.name.toUpperCase()}</Link>
                                {i < AARTI_LINKS.length - 1 && <span className={styles.separator}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.categoryRow}>
                    <span className={styles.categoryTitle}>CHALISA:</span>
                    <div className={styles.links}>
                        {CHALISA_LINKS.map((link, i) => (
                            <span key={link.slug}>
                                <Link href={`/sangrah/chalisa/${link.slug}`}>{link.name.toUpperCase()}</Link>
                                {i < CHALISA_LINKS.length - 1 && <span className={styles.separator}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.categoryRow}>
                    <span className={styles.categoryTitle}>SUN RISE AND SUN SET TIMINGS:</span>
                    <div className={styles.links}>
                        {CITIES.map((city, i) => (
                            <span key={city}>
                                <Link href={`/panchang/sunrise-sunset/${city.toLowerCase().replace(' ', '-')}`}>{city}</Link>
                                {i < CITIES.length - 1 && <span className={styles.separator}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                <div className={styles.categoryRow}>
                    <span className={styles.categoryTitle}>MOON RISE AND MOON SET TIMINGS:</span>
                    <div className={styles.links}>
                        {CITIES.map((city, i) => (
                            <span key={city}>
                                <Link href={`/panchang/moonrise-moonset/${city.toLowerCase().replace(' ', '-')}`}>{city}</Link>
                                {i < CITIES.length - 1 && <span className={styles.separator}>|</span>}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
