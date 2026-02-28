import Link from 'next/link';
import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Devotional Music — 200+ Bhajans, Aarti, Mantra & Chalisa',
    description: 'Stream 200+ ad-free devotional songs: Aarti, Bhajan, Mantra, Chalisa, Kirtan & Instrumental. Filter by deity, mood, or genre in Hindi, English & regional languages.',
};

const categories = ['Aarti', 'Bhajan', 'Mantra', 'Chalisa', 'Kirtan', 'Stuti', 'Instrumental'];
const deities = ['🕉️ Shiva', '💙 Krishna', '🐒 Hanuman', '🪷 Lakshmi', '🔱 Durga', '🙏 Ram', '🐘 Ganesh', '🌅 Surya', '🙏 Sai Baba', '👁️ Vishnu'];
const playlists = [
    { icon: '🌅', name: 'Morning Aarti', tracks: 15 },
    { icon: '🕉️', name: 'Shiv Aradhana', tracks: 20 },
    { icon: '💙', name: 'Krishna Playlist', tracks: 18 },
    { icon: '🐒', name: 'Bajrang Vandana', tracks: 12 },
    { icon: '🧘', name: 'Meditation & Mantras', tracks: 16 },
    { icon: '🌙', name: 'Evening Bhajans', tracks: 14 },
    { icon: '🪷', name: 'Dhan Lakshmi Aradhana', tracks: 10 },
    { icon: '🔊', name: 'Peaceful Instrumentals', tracks: 12 },
    { icon: '🎧', name: 'Bhajan Clubbing', tracks: 13 },
];

export default function MusicPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🎵 Devotional Music</span>
                    <h1>200+ Sacred Tracks for Every Moment</h1>
                    <p className={styles.heroDesc}>
                        Immerse yourself in divine melodies. Stream ad-free bhajans, aarti, mantras,
                        chalisas & more in Hindi, English and regional Indian languages.
                    </p>
                    <a href="#download" className="btn btn-primary">🎵 Listen in App</a>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🎶 Browse by Category</span>
                        <h2>Every Genre of Devotional Music</h2>
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
                        <span className="section-label">📋 Curated Playlists</span>
                        <h2>Handpicked Playlists for You</h2>
                    </div>
                    <div className={styles.grid3}>
                        {playlists.map((p, i) => (
                            <div key={i} className={styles.card}>
                                <span className={styles.cardIcon}>{p.icon}</span>
                                <span className={styles.cardTitle}>{p.name}</span>
                                <span className={styles.cardDesc}>{p.tracks} tracks</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tunemate Section */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🎶 Tunemate — AI Bhajan Composer</span>
                        <h2>Your Voice, Your Bhajan</h2>
                        <p>Compose personalized devotional bhajans with AI. Choose your deity, occasion, language, tempo, vocals & instruments.</p>
                    </div>
                    <div className={styles.chips}>
                        {['🎹 Harmonium', '🥁 Tabla', '🪘 Dholak', '🔔 Manjira', '🎶 Tanpura', '🎵 Flute', '🎸 Sitar', '🎻 Veena'].map((inst, i) => (
                            <span key={i} className={styles.chipAccent}>{inst}</span>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '24px' }}>
                        <a href="#download" className="btn btn-primary">🎶 Create a Bhajan</a>
                    </div>
                </div>
            </section>
        </>
    );
}
