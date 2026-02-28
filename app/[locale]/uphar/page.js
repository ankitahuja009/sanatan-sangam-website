'use client';
import { useTranslations } from 'next-intl';
import styles from '../../components/subpage.module.css';

export default function UpharPage() {
    const t = useTranslations('upharPage');

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
                        <span className="section-label">{t('howItWorksLabel')}</span>
                        <h2>{t('howItWorksTitle')}</h2>
                    </div>
                    <div className={styles.grid3}>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>✨</span>
                            <span className={styles.cardTitle}>{t('step1Title')}</span>
                            <span className={styles.cardDesc}>{t('step1Desc')}</span>
                        </div>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>🖼️</span>
                            <span className={styles.cardTitle}>{t('step2Title')}</span>
                            <span className={styles.cardDesc}>{t('step2Desc')}</span>
                        </div>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>📦</span>
                            <span className={styles.cardTitle}>{t('step3Title')}</span>
                            <span className={styles.cardDesc}>{t('step3Desc')}</span>
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
