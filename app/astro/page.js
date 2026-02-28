import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Astro — Daily Horoscope, Panchang & Kundli',
    description: 'Get daily horoscope for all 12 zodiac signs, today\'s Panchang with Tithi & Nakshatra, and generate your complete Kundli birth chart with planet positions.',
};

const zodiacSigns = [
    { icon: '♈', name: 'Aries' }, { icon: '♉', name: 'Taurus' },
    { icon: '♊', name: 'Gemini' }, { icon: '♋', name: 'Cancer' },
    { icon: '♌', name: 'Leo' }, { icon: '♍', name: 'Virgo' },
    { icon: '♎', name: 'Libra' }, { icon: '♏', name: 'Scorpio' },
    { icon: '♐', name: 'Sagittarius' }, { icon: '♑', name: 'Capricorn' },
    { icon: '♒', name: 'Aquarius' }, { icon: '♓', name: 'Pisces' },
];

export default function AstroPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🔮 Astro</span>
                    <h1>Daily Horoscope, Panchang & Kundli</h1>
                    <p className={styles.heroDesc}>
                        Get personalized daily horoscopes, today&apos;s Panchang with Tithi & Nakshatra details,
                        and generate your complete Kundli birth chart.
                    </p>
                    <a href="#download" className="btn btn-primary">🔮 Check Your Horoscope</a>
                </div>
            </section>

            {/* Horoscope */}
            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">⭐ Daily Horoscope</span>
                        <h2>What the Stars Say Today</h2>
                        <p>Tap your zodiac sign for daily predictions on Love, Career & Health</p>
                    </div>
                    <div className={styles.grid3} style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {zodiacSigns.map((z, i) => (
                            <div key={i} className={styles.card} style={{ textAlign: 'center', padding: '20px' }}>
                                <span style={{ fontSize: '2rem' }}>{z.icon}</span>
                                <span className={styles.cardTitle}>{z.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Panchang */}
            <section className={`section ${styles.altBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">📅 Panchang</span>
                        <h2>Today&apos;s Panchang</h2>
                        <p>Tithi, Nakshatra, Vaar, Yoga, Sunrise & Sunset — updated daily</p>
                    </div>
                    <div className={styles.grid3} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        {[
                            { label: 'Tithi', icon: '🌙' },
                            { label: 'Nakshatra', icon: '⭐' },
                            { label: 'Vaar', icon: '📅' },
                            { label: 'Yoga', icon: '🧘' },
                            { label: 'Sunrise', icon: '🌅' },
                            { label: 'Sunset', icon: '🌇' },
                        ].map((p, i) => (
                            <div key={i} className={styles.card} style={{ textAlign: 'center', padding: '16px' }}>
                                <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
                                <span className={styles.cardTitle} style={{ fontSize: '0.9rem' }}>{p.label}</span>
                                <span className={styles.cardDesc}>Available in App</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kundli */}
            <section className={`section ${styles.whiteBg}`}>
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">🪐 Kundli</span>
                        <h2>Generate Your Birth Chart</h2>
                        <p>Get your complete Kundli with planet positions, Manglik Dosh analysis, Sun Sign & Moon Sign.</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div className={styles.chips}>
                            {['🪐 Planet Positions', '🔴 Manglik Dosh', '☀️ Sun Sign', '🌙 Moon Sign', '📊 Ayanamsha'].map((k, i) => (
                                <span key={i} className={styles.chipAccent}>{k}</span>
                            ))}
                        </div>
                        <a href="#download" className="btn btn-primary" style={{ marginTop: '24px' }}>📱 Generate Kundli in App</a>
                    </div>
                </div>
            </section>
        </>
    );
}
