'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from '../../components/subpage.module.css';

const sectionKeys = [
    { key: 'aarti', image: '/images/sangrah/aarti.png', color: '#FFF8E1', href: '/sangrah/aarti', items: ['Om Jai Jagdish Hare', 'Aarti Kunj Bihari Ki', 'Om Jai Shiv Omkara', 'Jai Ambe Gauri', 'Aarti Shri Ganesh Ji'] },
    { key: 'chalisa', image: '/images/sangrah/chalisa.png', color: '#EFEBE9', href: '/sangrah/chalisa', items: ['Hanuman Chalisa', 'Shiv Chalisa', 'Durga Chalisa', 'Ganesh Chalisa', 'Lakshmi Chalisa'] },
    { key: 'mantra', image: '/images/sangrah/mantra.png', color: '#E3F2FD', href: '/sangrah/mantra', items: ['Gayatri Mantra', 'Maha Mrityunjaya Mantra', 'Om Namah Shivaya', 'Hare Krishna Mahamantra', 'Shanti Mantra'] },
    { key: 'ayurveda', image: '/images/sangrah/ayurveda.png', color: '#F1F8E9', href: '/sangrah/ayurveda', items: ['Immunity Boosters', 'Digestive Health', 'Skin Care', 'Hair Care', 'Stress Relief'] },
    { key: 'festivals', image: '/images/sangrah/festivals.png', color: '#FCE4EC', href: '/sangrah/festivals', items: ['Diwali', 'Holi', 'Navratri', 'Ganesh Chaturthi', 'Maha Shivaratri'] },
    { key: 'deities', image: '/images/sangrah/deities.png', color: '#F3E5F5', href: '/sangrah/deities', items: ['Lord Shiva', 'Lord Krishna', 'Lord Hanuman', 'Goddess Durga', 'Lord Ganesh'] },
];

export default function SangrahPage() {
    const t = useTranslations('sangrahPage');

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{t('badge')}</span>
                    <h1>{t('title')}</h1>
                    <p className={styles.heroDesc}>{t('desc')}</p>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className={styles.grid2}>
                        {sectionKeys.map((s, i) => (
                            <Link href={s.href} key={i} className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
                                <div style={{ backgroundColor: s.color, width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={s.image} alt={s.key} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: 'var(--space-lg)' }}>
                                    <span className={styles.cardTitle} style={{ display: 'block', marginBottom: '8px' }}>{t(`${s.key}.title`)}</span>
                                    <span className={styles.cardDesc} style={{ display: 'block' }}>{t(`${s.key}.desc`)}</span>
                                    <div className={styles.chips} style={{ justifyContent: 'flex-start', margin: '16px 0 0' }}>
                                        {s.items.map((item, j) => (
                                            <span key={j} className={styles.chipAccent} style={{ fontSize: '0.75rem', padding: '4px 12px' }}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <span className={styles.cardArrow} style={{ display: 'inline-block', marginTop: '16px' }}>{t('explore')}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
