'use client';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import styles from '../../components/subpage.module.css';

export default function MusicPage() {
    const t = useTranslations('musicPage');

    const categories = [
        t('categories.aarti'), t('categories.bhajan'), t('categories.mantra'),
        t('categories.chalisa'), t('categories.kirtan'), t('categories.stuti'),
        t('categories.instrumental')
    ];

    const deities = [
        '🕉️ Shiva', '💙 Krishna', '🐒 Hanuman', '🪷 Lakshmi',
        '🔱 Durga', '🙏 Ram', '🐘 Ganesh', '🌅 Surya', '🙏 Sai Baba', '👁️ Vishnu'
    ];

    const playlists = [
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/playlist_hari_amrit.png', name: t('playlists.p1'), tracks: 15 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/playlist_shiva.png', name: t('playlists.p2'), tracks: 20 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/playlist_radha_madhav.png', name: t('playlists.p3'), tracks: 18 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/playlist_hanuman.png', name: t('playlists.p4'), tracks: 12 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/bansuri_devotional.png', name: t('playlists.p5'), tracks: 16 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/sitar_devotional.png', name: t('playlists.p6'), tracks: 14 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/playlist_lakshmi.png', name: t('playlists.p7'), tracks: 10 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/santoor_devotional.png', name: t('playlists.p8'), tracks: 12 },
        { image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/bhajan_clubbing.png', name: t('playlists.p9'), tracks: 13 },
    ];

    const regionalPlaylists = [
        { title: 'Marathi (Bhakti Dhun)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/marathi_devotional.png' },
        { title: 'Gujarati (Bhakti Sangeet)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/gujarati_devotional.png' },
        { title: 'Punjabi (Bhagti Rang)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/punjabi_devotional.png' },
        { title: 'Bengali (Bhakti Sur)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/bengali_devotional.png' },
        { title: 'Odia (Bhakti Sur)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/odia_devotional.png' },
        { title: 'Tamil (Bhakti Isai)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/tamil_devotional.png' },
        { title: 'Telugu (Bhakti Ragalu)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/telugu_devotional.png' },
        { title: 'Malayalam (Bhakti Ganam)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/malayalam_devotional.png' },
        { title: 'Kannada (Bhakti Geethe)', image: 'https://pub-7e4aa481455b4be5b9c0dcab4cdd73bd.r2.dev/thumbnails/kannada_devotional.png' }
    ];

    const instruments = [
        t('instruments.harmonium'), t('instruments.tabla'), t('instruments.dholak'),
        t('instruments.manjira'), t('instruments.tanpura'), t('instruments.flute'),
        t('instruments.sitar'), t('instruments.veena')
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

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('categoryLabel')}</span>
                        <h2>{t('categoryTitle')}</h2>
                    </div>
                    <div className={styles.chips}>
                        {categories.map((c, i) => <span key={i} className={styles.chip}>{c}</span>)}
                    </div>
                    <div className={styles.chips} style={{ marginTop: '8px' }}>
                        {deities.map((d, i) => <span key={i} className={styles.chipAccent}>{d}</span>)}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.altBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('playlistLabel')}</span>
                        <h2>{t('playlistTitle')}</h2>
                    </div>
                    <div className={styles.regionalGrid}>
                        {playlists.map((p, i) => (
                            <div key={i} className={styles.regionalCardSquare}>
                                <img src={p.image} alt={p.name} className={styles.regionalImgSquare} />
                                <div className={styles.regionalOverlay}>
                                    <h4 className={styles.regionalNameOverlay}>{p.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'var(--space-4xl)', textAlign: 'center' }}>
                        <h3 className={styles.regionalTitle} style={{ marginBottom: 'var(--space-xl)' }}>✨ Experience Devotion in 9 Regional Languages</h3>
                        <div className={styles.regionalGrid}>
                            {regionalPlaylists.map((pl, i) => (
                                <div key={i} className={styles.regionalCardSquare}>
                                    <img src={pl.image} alt={pl.title} className={styles.regionalImgSquare} />
                                    <div className={styles.regionalOverlay}>
                                        <h4 className={styles.regionalNameOverlay}>{pl.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tunemate Section */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">{t('tunemateLabel')}</span>
                        <h2>{t('tunemateTitle')}</h2>
                        <p>{t('tunemateDesc')}</p>
                    </div>
                    <div className={styles.chips}>
                        {instruments.map((inst, i) => (
                            <span key={i} className={styles.chipAccent}>{inst}</span>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <Link href="/#download" className="btn btn-primary">{t('ctaBottomButton')}</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
