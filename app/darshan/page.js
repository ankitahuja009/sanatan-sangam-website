import Link from 'next/link';
import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Live Darshan — 50+ Temple Live Streams',
    description: 'Watch live darshan from 50+ sacred temples across India. Experience divine blessings from Kashi Vishwanath, Tirupati, Somnath, Golden Temple and more — anytime, anywhere.',
};

const temples = [
    { icon: '🛕', name: 'Kashi Vishwanath', location: 'Varanasi, UP', live: true },
    { icon: '🛕', name: 'Shri Jagannath', location: 'Puri, Odisha', live: true },
    { icon: '🛕', name: 'Tirupati Balaji', location: 'Tirupati, AP', live: true },
    { icon: '🛕', name: 'Somnath Temple', location: 'Somnath, Gujarat', live: true },
    { icon: '🛕', name: 'Kedarnath', location: 'Uttarakhand', live: false },
    { icon: '🛕', name: 'Mahakaleshwar', location: 'Ujjain, MP', live: true },
    { icon: '🛕', name: 'Shirdi Sai Baba', location: 'Shirdi, Maharashtra', live: true },
    { icon: '🛕', name: 'Siddhivinayak', location: 'Mumbai, Maharashtra', live: true },
    { icon: '🕌', name: 'Golden Temple', location: 'Amritsar, Punjab', live: true },
    { icon: '🛕', name: 'Vaishno Devi', location: 'Jammu & Kashmir', live: true },
    { icon: '🛕', name: 'Rameshwaram', location: 'Tamil Nadu', live: true },
    { icon: '🛕', name: 'Dwarkadheesh', location: 'Dwarka, Gujarat', live: true },
];

export default function DarshanPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🛕 Live Darshan</span>
                    <h1>Divine Darshan from Sacred Temples</h1>
                    <p className={styles.heroDesc}>
                        Experience live darshan from 50+ temples across India. Watch aarti ceremonies,
                        temple rituals, and sacred events — all from the comfort of your home.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Watch Live in App</a>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🕉️ Featured Temples</span>
                        <h2>Temples Available for Live Darshan</h2>
                        <p>Explore our growing collection of temple live streams from across India</p>
                    </div>
                    <div className={styles.grid3}>
                        {temples.map((t, i) => (
                            <div key={i} className={styles.card}>
                                <span className={styles.cardIcon}>{t.icon}</span>
                                <span className={styles.cardTitle}>{t.name}</span>
                                <span className={styles.cardDesc}>{t.location}</span>
                                <span style={{
                                    fontSize: '0.75rem', fontWeight: 600,
                                    color: t.live ? '#00C853' : 'var(--gray-400)',
                                }}>
                                    {t.live ? '🟢 Live Now' : '⏸ Offline'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Watch Live Darshan in the App</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam to watch live streams with full-screen viewing,
                        notifications for aarti timings, and more.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
