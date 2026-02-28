import Link from 'next/link';
import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Artmate — AI Sacred Art: Divya Chhavi & Teerth Yatra',
    description: 'Create stunning AI-powered spiritual portraits with your favorite deities and gurus using Divya Chhavi, or visit sacred temples virtually with Teerth Yatra.',
};

export default function ArtPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>✨ Artmate — AI Sacred Art</span>
                    <h1>See Yourself in the Divine Light</h1>
                    <p className={styles.heroDesc}>
                        Our AI-powered Artmate creates breathtaking spiritual portraits and virtual
                        pilgrimages. Choose from Divya Chhavi for sacred portraits or Teerth Yatra
                        for virtual temple visits.
                    </p>
                    <a href="#download" className="btn btn-primary">✨ Create Your Portrait</a>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🎨 Features</span>
                        <h2>Two Magical Experiences</h2>
                    </div>
                    <div className={styles.grid2}>
                        <div className={styles.card}>
                            <span className={styles.cardIcon}>✨</span>
                            <span className={styles.cardTitle}>Divya Chhavi</span>
                            <span className={styles.cardDesc}>
                                Generate stunning divine portraits of yourself with 30+ deities and gurus.
                                Choose Shiva, Krishna, Hanuman, Durga, or your beloved Guru — and see yourself
                                in their divine presence.
                            </span>
                            <ul className={styles.featureList}>
                                <li>🙏 30+ Deities & Gurus available</li>
                                <li>👔 Clothing options: Traditional, Casual, Festive</li>
                                <li>📸 Quality: HD, 2K, 4K</li>
                                <li>🖼️ Order premium frames from Uphar Store</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <span className={styles.cardIcon}>🛕</span>
                            <span className={styles.cardTitle}>Teerth Yatra</span>
                            <span className={styles.cardDesc}>
                                Visit India&apos;s most sacred destinations virtually. Generate
                                beautiful photos of yourself at temples, ghats, and pilgrimage sites
                                across the country.
                            </span>
                            <ul className={styles.featureList}>
                                <li>🏛️ Sacred temples & pilgrimage sites</li>
                                <li>🌅 Time of day: Day, Sunset, Night</li>
                                <li>📐 Multiple aspect ratios: Square, Portrait, Landscape</li>
                                <li>📤 Share on social media instantly</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Create Your Divine Portrait Today</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam and experience the magic of AI-powered sacred art.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
