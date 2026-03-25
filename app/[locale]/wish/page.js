'use client';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import styles from '../../components/subpage.module.css';

export default function WishPage() {
    const t = useTranslations('wishPage');

    const occasions = [
        t('occasions.birthday'), t('occasions.anniversary'), t('occasions.wedding'),
        t('occasions.diwali'), t('occasions.holi'), t('occasions.raksha'),
        t('occasions.navratri'), t('occasions.newyear'), t('occasions.daily')
    ];

    const deities = [
        t('deities.shiva'), t('deities.krishna'), t('deities.hanuman'),
        t('deities.lakshmi'), t('deities.durga'), t('deities.ram'), t('deities.ganesh')
    ];

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{t('badge')}</span>
                    <h1>{t('heroTitle')}</h1>
                    <p className={styles.heroDesc}>{t('heroDesc')}</p>
                    <Link href="/#download" className="btn btn-primary">{t('ctaHero')}</Link>
                </div>
            </section>

            {/* Video showcase */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('videoLabel')}</span>
                        <h2>{t('videoTitle')}</h2>
                    </div>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <div className={styles.videoFrame}>
                            <iframe
                                src="https://www.youtube.com/embed/GFDaCbo0uDo"
                                title={t('videoTitle')}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('occasionsLabel')}</span>
                        <h2>{t('occasionsTitle')}</h2>
                    </div>
                    <div className={styles.chips}>
                        {occasions.map((o, i) => (
                            <span key={i} className={styles.chip}>{o}</span>
                        ))}
                    </div>
                    <div className={styles.chips}>
                        {deities.map((d, i) => (
                            <span key={i} className={styles.chipAccent}>{d}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>{t('ctaBottomTitle')}</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        {t('ctaBottomDesc')}
                    </p>
                    <Link href="/#download" className="btn btn-primary">{t('ctaBottomButton')}</Link>
                </div>
            </section>
        </>
    );
}
