import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Wishmate — Personalized Divine Blessings',
    description: 'Send personalized AI blessings for birthdays, anniversaries, Diwali, Holi, Raksha Bandhan & every special occasion. Choose your deity and create divine blessing cards.',
};

export default function WishPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🙏 Wishmate</span>
                    <h1>Send Divine Blessings to Your Loved Ones</h1>
                    <p className={styles.heroDesc}>
                        Create personalized blessing cards for every special occasion.
                        Choose your deity, add a personal touch, and share divine wishes
                        that truly move the heart.
                    </p>
                    <a href="#download" className="btn btn-primary">🙏 Send a Blessing</a>
                </div>
            </section>

            {/* Video showcase */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">▶️ See Wishmate in Action</span>
                        <h2>Watch How Blessings Come to Life</h2>
                    </div>
                    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                        <div className={styles.videoFrame}>
                            <iframe
                                src="https://www.youtube.com/embed/GFDaCbo0uDo"
                                title="Wishmate — Personalized Divine Blessings"
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
                        <span className="section-label">🎉 Occasions</span>
                        <h2>Blessings for Every Moment</h2>
                    </div>
                    <div className={styles.chips}>
                        {['🎂 Birthday', '💍 Anniversary', '💒 Wedding', '🪔 Diwali', '🎆 Holi', '🧵 Raksha Bandhan', '🪷 Navratri', '🎊 New Year', '🙏 Daily Blessing'].map((o, i) => (
                            <span key={i} className={styles.chip}>{o}</span>
                        ))}
                    </div>
                    <div className={styles.chips}>
                        {['🕉️ Shiva', '💙 Krishna', '🐒 Hanuman', '🪷 Lakshmi', '🔱 Durga', '🙏 Ram', '🐘 Ganesh'].map((d, i) => (
                            <span key={i} className={styles.chipAccent}>{d}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Share Your First Blessing</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam and create beautiful, personalized blessing cards for your loved ones.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
