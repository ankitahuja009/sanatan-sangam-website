'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/routing';
import styles from './darshan.module.css';
import { temples } from '../../../lib/templesData';

const TABS = [
    { key: 'mandir', label: '🛕 Mandir' },
    { key: 'katha', label: '📖 Katha' },
    { key: 'satsang', label: '🙌 Satsang' },
];

export default function DarshanPage() {
    const t = useTranslations('darshanPage');
    const [activeTab, setActiveTab] = useState('mandir');

    const filtered = temples.filter(temple => {
        if (activeTab === 'katha') return temple.category === 'katha';
        if (activeTab === 'satsang') return temple.category === 'satsang';
        return temple.category !== 'katha' && temple.category !== 'satsang';
    });

    const liveCount = temples.filter(t => t.live).length;

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.liveIndicator}>{t('liveNow')}</span>
                    <h1>{t('heroTitle')}</h1>
                    <p>{t('heroDesc', { count: temples.length })}</p>
                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}><span>{liveCount}</span><span>{t('statLive')}</span></div>
                        <div className={styles.heroStat}><span>{temples.length}+</span><span>{t('statTemples')}</span></div>
                        <div className={styles.heroStat}><span>24×7</span><span>{t('statStreaming')}</span></div>
                    </div>
                </div>
            </section>

            {/* Mandir / Katha / Satsang Tabs */}
            <nav className={styles.filterNav}>
                <div className="container">
                    <div className={styles.filterScroll} style={{ justifyContent: 'center', gap: '0' }}>
                        {TABS.map(tab => (
                            <button
                                key={tab.key}
                                className={`${styles.filterBtn} ${activeTab === tab.key ? styles.filterActive : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                                style={{ padding: '0.85rem 2.5rem', fontSize: '1.05rem', fontWeight: 600 }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Stream Grid */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.countRow}>
                        <span className={styles.count}>
                            {t('showing')} <strong>{filtered.length}</strong>{' '}
                            {activeTab === 'katha' ? 'Katha' : activeTab === 'satsang' ? 'Satsang' : 'Mandir'} Streams
                        </span>
                    </div>
                    <div className={styles.grid}>
                        {filtered.map((temple) => (
                            <Link
                                href={`/darshan/${temple.id}`}
                                key={temple.id}
                                className={styles.card}
                                prefetch={false}
                                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                            >
                                <article tabIndex={-1} style={{ cursor: 'pointer', height: '100%' }}>
                                    <div className={styles.cardImg}>
                                        <Image
                                            src={temple.image}
                                            alt={temple.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardImgOverlay} />
                                        <span className={`${styles.liveBadge} ${temple.live ? styles.liveBadgeOn : styles.liveBadgeOff}`}>
                                            {temple.live ? t('liveLabel') : t('offlineLabel')}
                                        </span>
                                        <span className={styles.categoryTag}>
                                            {activeTab === 'katha' ? 'Katha' : activeTab === 'satsang' ? 'Satsang' : temple.category.replace('_', ' ')}
                                        </span>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <h3 className={styles.cardTitle}>{temple.name}</h3>
                                        <p className={styles.cardLocation}>📍 {temple.location}</p>
                                        <p className={styles.cardSchedule}>⏰ {temple.schedule || 'Live schedule available'}</p>
                                        <div className={styles.detailsBtn}>{t('viewDetails')}</div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <h2>{t('ctaTitle')}</h2>
                    <p>{t('ctaDesc')}</p>
                    <Link href="/#download" className="btn btn-primary">{t('downloadApp')}</Link>
                </div>
            </section>
        </>
    );
}
