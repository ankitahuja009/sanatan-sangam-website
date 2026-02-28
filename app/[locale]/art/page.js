'use client';
import { useTranslations } from 'next-intl';
import styles from '../../components/subpage.module.css';
import SquareCarousel from '../../components/SquareCarousel';

export default function ArtPage() {
    const t = useTranslations('artPage');

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{t('badge')}</span>
                    <h1>{t('heroTitle')}</h1>
                    <p className={styles.heroDesc}>{t('heroDesc')}</p>
                    <a href="#download" className="btn btn-primary">{t('ctaHero')}</a>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('featuresLabel')}</span>
                        <h2>{t('featuresTitle')}</h2>
                    </div>
                    <div className={styles.grid2}>
                        <div className={styles.card}>
                            <SquareCarousel images={['/images/samples/ishwar_kripa_1.webp', '/images/samples/ishwar_kripa_2.webp']} />
                            <span className={styles.cardIcon}>✨</span>
                            <span className={styles.cardTitle}>{t('card1Title')}</span>
                            <span className={styles.cardDesc}>{t('card1Desc')}</span>
                            <ul className={styles.featureList}>
                                <li>{t('feature1_1')}</li>
                                <li>{t('feature1_2')}</li>
                                <li>{t('feature1_3')}</li>
                                <li>{t('feature1_4')}</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <SquareCarousel images={['/images/samples/teerth_yatra_2.webp', '/images/samples/teerth_yatra_3.webp']} />
                            <span className={styles.cardIcon}>🛕</span>
                            <span className={styles.cardTitle}>{t('card2Title')}</span>
                            <span className={styles.cardDesc}>{t('card2Desc')}</span>
                            <ul className={styles.featureList}>
                                <li>{t('feature2_1')}</li>
                                <li>{t('feature2_2')}</li>
                                <li>{t('feature2_3')}</li>
                                <li>{t('feature2_4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>{t('ctaBottomTitle')}</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        {t('ctaBottomDesc')}
                    </p>
                    <a href="#download" className="btn btn-primary">{t('ctaBottomButton')}</a>
                </div>
            </section>
        </>
    );
}
