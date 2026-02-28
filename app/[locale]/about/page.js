import styles from './about.module.css';

export const metadata = {
    title: 'About Us',
    description:
        'Sanatan Sangam is dedicated to preserving and promoting the timeless wisdom of Sanatan Dharma through technology.',
};

const values = [
    { icon: '🕉️', title: 'Authenticity', desc: 'Preserving traditional practices with integrity and respect for ancient scriptures.' },
    { icon: '🌍', title: 'Accessibility', desc: 'Making spirituality available to every devotee, regardless of location, in 11 Indian languages.' },
    { icon: '🤝', title: 'Community', desc: 'Building meaningful connections among Sanatanis worldwide through shared devotion.' },
    { icon: '💡', title: 'Innovation', desc: 'Blending the wisdom of tradition with the power of modern digital technology.' },
];

const features = [
    { icon: '✨', title: 'Divya Chhavi', desc: 'Digital divine portraits with 30+ deities & gurus' },
    { icon: '🎶', title: 'Tunemate', desc: 'Compose personalized devotional bhajans digitally' },
    { icon: '🙏', title: 'Wishmate', desc: 'Personalized blessings for every occasion' },
    { icon: '🛕', title: 'Live Darshan', desc: '50+ temple live streams from across India' },
    { icon: '🎵', title: 'Devotional Music', desc: '200+ ad-free bhajans, aarti, mantras & chalisas' },
    { icon: '🔮', title: 'Astro & Panchang', desc: 'Daily horoscope, Panchang & Kundli reports' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🙏 About Us</span>
                    <h1>Sanatan Sangam</h1>
                    <p className={styles.tagline}>Where Sanatan Meets You</p>
                    <p className={styles.heroDesc}>
                        Connecting devotees with divine experiences through technology
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className={`section ${styles.mission}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">✦ Our Mission</span>
                        <h2>Preserving Sanatan Dharma for the Digital Age</h2>
                    </div>
                    <div className={styles.missionContent}>
                        <p>
                            Sanatan Sangam is dedicated to preserving and promoting the timeless wisdom
                            of Sanatan Dharma. We bridge the gap between ancient spiritual traditions and
                            modern technology, making divine experiences accessible to devotees worldwide.
                        </p>
                        <p>
                            From live temple darshan to digital spiritual art, from devotional music to
                            personalized blessings — we bring every aspect of spiritual life into a single,
                            beautifully crafted experience available in 11 Indian languages.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className={`section ${styles.featuresSection}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">✦ What We Offer</span>
                        <h2>A Complete Spiritual Companion</h2>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((f, i) => (
                            <div key={i} className={styles.featureCard}>
                                <span className={styles.featureIcon}>{f.icon}</span>
                                <h4>{f.title}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section className={`section ${styles.vision}`}>
                <div className="container">
                    <div className={styles.visionCard}>
                        <span className="section-label">✦ Our Vision</span>
                        <blockquote className={styles.visionQuote}>
                            &ldquo;To create a global spiritual community where ancient wisdom meets modern
                            convenience, enabling every soul to connect with the divine, regardless of
                            where they are.&rdquo;
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">✦ Core Values</span>
                        <h2>What Guides Us</h2>
                    </div>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <span className={styles.valueIcon}>{v.icon}</span>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className={`section ${styles.contact}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">✦ Connect With Us</span>
                        <h2>Get in Touch</h2>
                        <p>For queries, partnerships, or feedback</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <a href="mailto:hi@askyourguide.ai" className={styles.contactCard}>
                            <span>📧</span>
                            <strong>hi@askyourguide.ai</strong>
                        </a>
                        <a href="https://www.instagram.com/sanatansangam.official" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                            <span>📸</span>
                            <strong>@sanatansangam.official</strong>
                        </a>
                        <a href="https://www.youtube.com/@SanatanSangamMusic" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                            <span>▶️</span>
                            <strong>@SanatanSangamMusic</strong>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer Quote */}
            <section className={styles.footerQuote}>
                <div className="container">
                    <p className={styles.sanskrit}>&ldquo;वसुधैव कुटुम्बकम्&rdquo;</p>
                    <p className={styles.meaning}>The World is One Family</p>
                </div>
            </section>
        </>
    );
}
