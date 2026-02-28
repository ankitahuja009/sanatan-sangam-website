import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Uphar Store — Sacred Photo Frames',
    description: 'Order premium divine photo frames for your Artmate creations. Classic Black & Walnut Brown frames with live preview, online payment & cash on delivery.',
};

export default function UpharPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🎁 Uphar Store</span>
                    <h1>Frame Your Divine Moments</h1>
                    <p className={styles.heroDesc}>
                        Turn your Artmate creations into stunning wall art. Order premium photo frames
                        in Classic Black or Walnut Brown — delivered to your doorstep.
                    </p>
                    <a href="#download" className="btn btn-primary">🛍️ Shop in App</a>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🖼️ How It Works</span>
                        <h2>Three Simple Steps</h2>
                    </div>
                    <div className={styles.grid3}>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>✨</span>
                            <span className={styles.cardTitle}>1. Create with Artmate</span>
                            <span className={styles.cardDesc}>
                                Generate divine portraits using Divya Chhavi or Teerth Yatra in the Art tab.
                            </span>
                        </div>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>🖼️</span>
                            <span className={styles.cardTitle}>2. Choose Your Frame</span>
                            <span className={styles.cardDesc}>
                                Pick Classic Black or Walnut Brown frame with live preview of your artwork.
                            </span>
                        </div>
                        <div className={styles.card} style={{ textAlign: 'center' }}>
                            <span className={styles.cardIcon}>📦</span>
                            <span className={styles.cardTitle}>3. Get it Delivered</span>
                            <span className={styles.cardDesc}>
                                Pay online or COD. We ship across India & internationally (USD supported).
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Shop the Uphar Store</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam, create your divine art, and order beautiful frames.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
