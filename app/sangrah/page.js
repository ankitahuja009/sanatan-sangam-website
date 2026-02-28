import Link from 'next/link';
import styles from '../components/subpage.module.css';

export const metadata = {
    title: 'Sangrah — Sacred Library: Aarti, Chalisa, Mantra, Ayurveda & More',
    description: 'Explore our curated collection of Aarti lyrics, Chalisa texts, powerful Mantras, Ayurvedic remedies, Hindu festival guides, and Deity encyclopedia — in 11 Indian languages.',
};

const sections = [
    {
        icon: '🪔', title: 'Aarti Collection', desc: 'Complete collection of sacred aartis with full lyrics, audio, meaning, and significance. Om Jai Jagdish Hare, Aarti Kunj Bihari Ki, and many more.',
        href: '/sangrah/aarti',
        items: ['Om Jai Jagdish Hare', 'Aarti Kunj Bihari Ki', 'Om Jai Shiv Omkara', 'Jai Ambe Gauri', 'Aarti Shri Ganesh Ji']
    },
    {
        icon: '📜', title: 'Chalisa Collection', desc: 'Full text of all popular chalisas with audio, translation, and spiritual significance.',
        href: '/sangrah/chalisa',
        items: ['Hanuman Chalisa', 'Shiv Chalisa', 'Durga Chalisa', 'Ganesh Chalisa', 'Lakshmi Chalisa']
    },
    {
        icon: '🕉️', title: 'Mantra Collection', desc: 'Powerful mantras for peace, prosperity, protection and spiritual growth with pronunciation guide.',
        href: '/sangrah/mantra',
        items: ['Gayatri Mantra', 'Maha Mrityunjaya Mantra', 'Om Namah Shivaya', 'Hare Krishna Mahamantra', 'Shanti Mantra']
    },
    {
        icon: '🌿', title: 'Ayurvedic & Home Remedies', desc: 'Ancient Ayurvedic wisdom for modern wellness. Natural remedies, seasonal health tips, and lifestyle guides.',
        href: '/sangrah/ayurveda',
        items: ['Immunity Boosters', 'Digestive Health', 'Skin Care', 'Hair Care', 'Stress Relief']
    },
    {
        icon: '🎆', title: 'Festival Guide', desc: 'Complete guide to Hindu festivals — dates, rituals, significance, puja vidhi, and traditions.',
        href: '/sangrah/festivals',
        items: ['Diwali', 'Holi', 'Navratri', 'Ganesh Chaturthi', 'Maha Shivaratri']
    },
    {
        icon: '🙏', title: 'Deity Encyclopedia', desc: 'Explore the stories, mantras, temples, and iconography of 30+ deities and spiritual gurus.',
        href: '/sangrah/deities',
        items: ['Lord Shiva', 'Lord Krishna', 'Lord Hanuman', 'Goddess Durga', 'Lord Ganesh']
    },
];

export default function SangrahPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>📚 Sangrah — Sacred Library</span>
                    <h1>Timeless Wisdom at Your Fingertips</h1>
                    <p className={styles.heroDesc}>
                        Dive into our curated collection of aartis, chalisas, mantras, festival guides,
                        Ayurvedic remedies, and deity knowledge — all available in 11 Indian languages.
                    </p>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    <div className={styles.grid2}>
                        {sections.map((s, i) => (
                            <Link href={s.href} key={i} className={styles.card}>
                                <span className={styles.cardIcon}>{s.icon}</span>
                                <span className={styles.cardTitle}>{s.title}</span>
                                <span className={styles.cardDesc}>{s.desc}</span>
                                <div className={styles.chips} style={{ justifyContent: 'flex-start', margin: '8px 0 0' }}>
                                    {s.items.map((item, j) => (
                                        <span key={j} className={styles.chipAccent} style={{ fontSize: '0.75rem', padding: '4px 12px' }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <span className={styles.cardArrow}>Explore →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
