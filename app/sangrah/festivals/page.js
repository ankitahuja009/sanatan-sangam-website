import Link from 'next/link';
import styles from '../../components/subpage.module.css';

export const metadata = {
    title: 'Hindu Festival Guide — Dates, Rituals & Significance',
    description:
        'Complete guide to major Hindu festivals: Diwali, Holi, Navratri, Ganesh Chaturthi, Maha Shivaratri, Chhath Puja & more — with dates, rituals, puja vidhi, and significance.',
    keywords: ['hindu festivals', 'diwali', 'holi', 'navratri', 'ganesh chaturthi', 'maha shivaratri', 'festival dates 2026', 'puja vidhi'],
};

const festivals = [
    {
        icon: '🪔', name: 'Diwali', timing: 'October / November (Kartik Amavasya)',
        desc: 'The Festival of Lights, celebrating the return of Lord Rama to Ayodhya after 14 years of exile and the victory of light over darkness.',
        rituals: ['Lakshmi-Ganesh Puja at night', 'Lighting diyas and candles', 'Rangoli decoration', 'Exchanging sweets and gifts', 'Fireworks and celebrations'],
        significance: 'Diwali symbolizes the triumph of good over evil, knowledge over ignorance, and light over darkness. It spans 5 days: Dhanteras, Narak Chaturdashi, Diwali, Govardhan Puja, and Bhai Dooj.',
    },
    {
        icon: '🎨', name: 'Holi', timing: 'March (Phalgun Purnima)',
        desc: 'The Festival of Colors, celebrating the eternal love of Radha-Krishna and the burning of demoness Holika.',
        rituals: ['Holika Dahan bonfire on eve', 'Playing with colors (gulaal)', 'Drinking thandai and bhang', 'Community celebrations and dancing', 'Exchanging sweets'],
        significance: 'Holi celebrates the victory of devotion (Prahlad) over evil (Hiranyakashipu). It also marks the arrival of spring and the end of winter.',
    },
    {
        icon: '🔱', name: 'Navratri', timing: 'March-April (Chaitra) & September-October (Sharad)',
        desc: 'Nine nights dedicated to Goddess Durga in her nine forms (Navdurga), celebrating her victory over Mahishasura.',
        rituals: ['Worshipping 9 forms of Goddess Durga', 'Dandiya and Garba nights', 'Fasting for 9 days', 'Kanya Puja on Ashtami/Navami', 'Durga Visarjan on Dashami'],
        significance: 'Navratri celebrates feminine divine power (Shakti). Each night honors a different form of Durga: Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kaalratri, Mahagauri, and Siddhidatri.',
    },
    {
        icon: '🐘', name: 'Ganesh Chaturthi', timing: 'August / September (Bhadrapada)',
        desc: 'A 10-day festival celebrating the birth of Lord Ganesha, the remover of obstacles.',
        rituals: ['Installation of Ganesh idols', 'Daily puja and aarti', 'Modak offering (Ganesh\'s favorite)', 'Cultural programs and processions', 'Ganesh Visarjan on 10th day'],
        significance: 'Celebrated with immense fervor in Maharashtra, this festival marks the birthday of Ganesha. The final day features grand processions with chants of "Ganpati Bappa Morya!"',
    },
    {
        icon: '🌙', name: 'Maha Shivaratri', timing: 'February / March (Phalguna)',
        desc: 'The Great Night of Lord Shiva. Celebrated with all-night prayer (jagaran) and worship.',
        rituals: ['All-night vigil and meditation', 'Abhishekam of Shiva Linga', 'Fasting for the day', 'Chanting Om Namah Shivaya', 'Offering Bel Patra and milk'],
        significance: 'Maha Shivaratri celebrates the cosmic dance of Shiva (Tandava) and his marriage to Parvati. Devotees stay awake all night in meditation and worship.',
    },
    {
        icon: '🌅', name: 'Chhath Puja', timing: 'October / November (Kartik Shukla Shashthi)',
        desc: 'Ancient Vedic festival dedicated to the Sun God (Surya) and Chhathi Maiya, observed mainly in Bihar, Jharkhand, and Eastern UP.',
        rituals: ['36-hour waterless fast (Nirjala)', 'Offering Arghya to rising and setting Sun', 'Preparing traditional prasad (Thekua)', 'Standing in water during Arghya', 'Community celebration at riverbanks'],
        significance: 'Chhath is one of the most rigorous of Hindu festivals. Devotees offer prayers to the Sun for sustaining life on earth, and to Chhathi Maiya for the wellbeing of children and family.',
    },
    {
        icon: '🙏', name: 'Ram Navami', timing: 'March / April (Chaitra Shukla Navami)',
        desc: 'Celebration of the birth of Lord Rama, the seventh avatar of Lord Vishnu and the ideal king.',
        rituals: ['Recitation of Ramayana', 'Ram Lalla idol worship and Aarti', 'Processions with Ram-Sita tableaux', 'Fasting and feasting', 'Distribution of Panakam (jaggery drink)'],
        significance: 'Ram Navami celebrates the birth of Lord Rama in Ayodhya. It falls on the ninth day of Chaitra Navratri and marks the conclusion of the spring Navratri festival.',
    },
    {
        icon: '🪷', name: 'Janmashtami', timing: 'August (Krishna Paksha Ashtami)',
        desc: 'Celebration of the birth of Lord Krishna at midnight in Mathura.',
        rituals: ['Midnight celebration and Aarti', 'Dahi Handi (pot-breaking)', 'Fasting until midnight', 'Jhankis (tableau displays)', 'Raas Leela performances'],
        significance: 'Janmashtami marks the birth of Krishna, the eighth avatar of Vishnu. Born at midnight to Devaki and Vasudeva in a prison cell, Krishna embodies divine love, wisdom, and playfulness.',
    },
    {
        icon: '🧵', name: 'Raksha Bandhan', timing: 'August (Shravan Purnima)',
        desc: 'Festival celebrating the sacred bond between brothers and sisters.',
        rituals: ['Sister ties rakhi on brother\'s wrist', 'Brother pledges protection', 'Exchange of gifts and sweets', 'Family gathering and feast', 'Prayers for sibling wellbeing'],
        significance: 'Raksha Bandhan celebrates the protective bond between siblings. The thread (rakhi) symbolizes the sister\'s love and the brother\'s lifelong promise of protection.',
    },
    {
        icon: '🪁', name: 'Makar Sankranti / Pongal', timing: 'January 14 (Fixed date)',
        desc: 'Harvest festival marking the Sun\'s transition into Capricorn (Makar Rashi).',
        rituals: ['Flying kites', 'Eating til-gur (sesame-jaggery)', 'Holy dip in rivers', 'Cooking Pongal rice (South India)', 'Lohri bonfire (Punjab)'],
        significance: 'One of the few Hindu festivals based on the solar calendar. It is celebrated across India with different names: Sankranti, Pongal (Tamil Nadu), Lohri (Punjab), Bihu (Assam), and Uttarayan (Gujarat).',
    },
];

export default function FestivalsPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🎆 Sangrah — Festival Guide</span>
                    <h1>Hindu Festival Guide</h1>
                    <p className={styles.heroDesc}>
                        Complete guide to {festivals.length}+ major Hindu festivals — dates, rituals,
                        puja vidhi, significance, and traditions.
                    </p>
                    <Link href="/sangrah" className="btn btn-secondary">← Back to Sangrah</Link>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    {festivals.map((f, i) => (
                        <article key={i} className={styles.card} style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                <span style={{ fontSize: '2.5rem' }}>{f.icon}</span>
                                <div>
                                    <h3 className={styles.cardTitle} style={{ fontSize: '1.3rem' }}>{f.name}</h3>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--saffron)', fontWeight: 600 }}>
                                        📅 {f.timing}
                                    </span>
                                </div>
                            </div>
                            <p className={styles.cardDesc} style={{ marginBottom: '8px' }}>{f.desc}</p>
                            <p style={{ fontSize: '0.88rem', color: 'var(--brown-mid)', lineHeight: 1.7, marginBottom: '8px' }}>
                                <strong>Significance:</strong> {f.significance}
                            </p>
                            <div>
                                <strong style={{ fontSize: '0.85rem', color: 'var(--brown-rich)' }}>Key Rituals:</strong>
                                <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
                                    {f.rituals.map((r, j) => (
                                        <li key={j} style={{ fontSize: '0.82rem', color: 'var(--brown-light)', lineHeight: 1.6 }}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Get Festival Reminders & Puja Guides</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam for daily Panchang, festival notifications, puja vidhi, and more.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
