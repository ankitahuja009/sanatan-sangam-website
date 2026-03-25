'use client';
import { useTranslations } from 'next-intl';
import styles from '../../components/subpage.module.css';

export default function AstroPage() {
    const t = useTranslations('astroPage');

    const zodiacSigns = [
        { icon: '♈', name: t('zodiac.aries') }, { icon: '♉', name: t('zodiac.taurus') },
        { icon: '♊', name: t('zodiac.gemini') }, { icon: '♋', name: t('zodiac.cancer') },
        { icon: '♌', name: t('zodiac.leo') }, { icon: '♍', name: t('zodiac.virgo') },
        { icon: '♎', name: t('zodiac.libra') }, { icon: '♏', name: t('zodiac.scorpio') },
        { icon: '♐', name: t('zodiac.sagittarius') }, { icon: '♑', name: t('zodiac.capricorn') },
        { icon: '♒', name: t('zodiac.aquarius') }, { icon: '♓', name: t('zodiac.pisces') },
    ];

    const panchangLabels = [
        { label: t('panchang.tithi'), icon: '🌙' },
        { label: t('panchang.nakshatra'), icon: '⭐' },
        { label: t('panchang.vaar'), icon: '📅' },
        { label: t('panchang.yoga'), icon: '🧘' },
        { label: t('panchang.sunrise'), icon: '🌅' },
        { label: t('panchang.sunset'), icon: '🌇' },
    ];

    const kundliFeatures = [
        t('kundli.planets'), t('kundli.manglik'), t('kundli.sun'),
        t('kundli.moon'), t('kundli.ayanamsha')
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{t('badge')}</span>
                    <h1>{t('heroTitle')}</h1>
                    <p className={styles.heroDesc}>{t('heroDesc')}</p>

                </div>
            </section>

            {/* Horoscope */}
            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('horoscopeLabel')}</span>
                        <h2>{t('horoscopeTitle')}</h2>
                        <p>{t('horoscopeDesc')}</p>
                    </div>
                    <div className={styles.grid3} style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {zodiacSigns.map((z, i) => (
                            <div key={i} className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                                <span style={{ fontSize: '2rem' }}>{z.icon}</span>
                                <span className={styles.cardTitle}>{z.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panchang */}
            <section className={`section ${styles.altBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('panchangLabel')}</span>
                        <h2>{t('panchangTitle')}</h2>
                        <p>{t('panchangDesc')}</p>
                    </div>
                    <div className={styles.grid3} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {panchangLabels.map((p, i) => (
                            <div key={i} className={styles.card} style={{ textAlign: 'center', padding: '16px' }}>
                                <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                                <span className={styles.cardTitle} style={{ fontSize: '0.9rem' }}>{p.label}</span>
                                <span className={styles.cardDesc}>{t('panchangStatus')}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kundli */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('kundliLabel')}</span>
                        <h2>{t('kundliTitle')}</h2>
                        <p>{t('kundliDesc')}</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div className={styles.chips}>
                            {kundliFeatures.map((k, i) => (
                                <span key={i} className={styles.chipAccent}>{k}</span>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
