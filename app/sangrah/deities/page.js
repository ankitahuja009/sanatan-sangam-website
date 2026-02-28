import Link from 'next/link';
import styles from '../../components/subpage.module.css';

export const metadata = {
    title: 'Deity Encyclopedia — Stories, Mantras & Temples of 30+ Hindu Deities',
    description:
        'Explore the stories, mantras, temples, iconography, and significance of 30+ Hindu deities and spiritual gurus — Lord Shiva, Krishna, Hanuman, Durga, Ganesh, Lakshmi & more.',
    keywords: ['hindu gods', 'hindu deities', 'lord shiva', 'lord krishna', 'lord hanuman', 'goddess durga', 'lord ganesh', 'hindu mythology'],
};

const deities = [
    {
        icon: '🕉️', name: 'Lord Shiva (Mahadev)', role: 'The Destroyer & Transformer',
        desc: 'Shiva is the supreme ascetic, the lord of meditation, the cosmic dancer (Nataraja), and the destroyer of evil. He resides on Mount Kailash with Parvati and is worshipped as the Lingam.',
        consort: 'Parvati (Shakti)', weapon: 'Trishul (Trident)', vehicle: 'Nandi (Bull)',
        mantra: 'Om Namah Shivaya', day: 'Monday',
        temples: ['Kashi Vishwanath (Varanasi)', 'Somnath (Gujarat)', 'Kedarnath (Uttarakhand)', 'Mahakaleshwar (Ujjain)'],
    },
    {
        icon: '💙', name: 'Lord Krishna', role: 'The Supreme Personality of Godhead',
        desc: 'Krishna is the eighth avatar of Vishnu, born in Mathura. He is the speaker of the Bhagavad Gita, the divine flute player, the butter thief of Vrindavan, and the charioteer of Arjuna.',
        consort: 'Radha & Rukmini', weapon: 'Sudarshana Chakra', vehicle: 'Garuda',
        mantra: 'Hare Krishna Hare Krishna, Krishna Krishna Hare Hare', day: 'Wednesday',
        temples: ['Banke Bihari (Vrindavan)', 'Dwarkadhish (Dwarka)', 'Jagannath (Puri)', 'Guruvayur (Kerala)'],
    },
    {
        icon: '🐒', name: 'Lord Hanuman (Bajrang Bali)', role: 'The Devoted Servant of Ram',
        desc: 'Hanuman is the son of Vayu (Wind God), an incarnation of Lord Shiva, and the greatest devotee of Lord Rama. He embodies strength, devotion, courage, and selfless service.',
        consort: 'Brahmachari (Celibate)', weapon: 'Gada (Mace)', vehicle: 'Flies with own power',
        mantra: 'Jai Bajrang Bali', day: 'Tuesday & Saturday',
        temples: ['Hanuman Garhi (Ayodhya)', 'Mehandipur Balaji (Rajasthan)', 'Sankat Mochan (Varanasi)', 'Jakhu Temple (Shimla)'],
    },
    {
        icon: '🔱', name: 'Goddess Durga (Shakti)', role: 'The Invincible Divine Mother',
        desc: 'Durga is the supreme goddess, created by the combined energies of all gods to destroy the demon Mahishasura. She has 9 forms (Navdurga) worshipped during Navratri.',
        consort: 'Lord Shiva', weapon: 'Multiple (given by all gods)', vehicle: 'Lion / Tiger',
        mantra: 'Om Dum Durgaye Namaha', day: 'Tuesday & Friday',
        temples: ['Vaishno Devi (J&K)', 'Kamakhya (Assam)', 'Chamundeshwari (Mysore)', 'Naina Devi (Himachal)'],
    },
    {
        icon: '🐘', name: 'Lord Ganesh (Ganapati)', role: 'Remover of Obstacles & God of Beginnings',
        desc: 'Ganesh is the elephant-headed son of Shiva and Parvati, worshipped before all auspicious occasions. He is the patron of arts, sciences, and wisdom.',
        consort: 'Riddhi & Siddhi', weapon: 'Parashu (Axe) & Pasha (Noose)', vehicle: 'Mushak (Mouse)',
        mantra: 'Om Gan Ganapataye Namah', day: 'Wednesday',
        temples: ['Siddhivinayak (Mumbai)', 'Ashtavinayak (Maharashtra)', 'Dagdusheth Ganpati (Pune)', 'Moti Dungri (Jaipur)'],
    },
    {
        icon: '🪷', name: 'Goddess Lakshmi', role: 'Goddess of Wealth, Fortune & Prosperity',
        desc: 'Lakshmi is the consort of Lord Vishnu and the goddess of material and spiritual wealth. She emerged from the churning of the cosmic ocean (Samudra Manthan).',
        consort: 'Lord Vishnu', weapon: 'Lotus', vehicle: 'Owl (Uluka)',
        mantra: 'Om Shreem Mahalakshmiyei Namaha', day: 'Friday',
        temples: ['Mahalakshmi Temple (Mumbai)', 'Padmanabhaswamy (Kerala)', 'Ashtalakshmi Temple (Chennai)', 'Lakshmi Narayan (Delhi)'],
    },
    {
        icon: '🙏', name: 'Lord Rama', role: 'Maryada Purushottam — The Ideal Man',
        desc: 'Rama is the seventh avatar of Vishnu, the prince of Ayodhya, and the hero of the Ramayana. He embodies dharma (righteousness), ideal kingship, and unconditional love.',
        consort: 'Sita', weapon: 'Bow (Kodanda)', vehicle: 'None (walked the earth)',
        mantra: 'Sri Ram Jai Ram Jai Jai Ram', day: 'Sunday',
        temples: ['Ram Mandir (Ayodhya)', 'Rameshwaram (Tamil Nadu)', 'Hanuman Garhi (Ayodhya)', 'Kodandarama (Hampi)'],
    },
    {
        icon: '👁️', name: 'Lord Vishnu', role: 'The Preserver of the Universe',
        desc: 'Vishnu sustains the universe and incarnates on earth (as avatars) whenever dharma is in decline. His 10 avatars include Rama, Krishna, Narasimha, and the yet-to-come Kalki.',
        consort: 'Lakshmi', weapon: 'Sudarshana Chakra & Kaumodaki Mace', vehicle: 'Garuda (Eagle)',
        mantra: 'Om Namo Bhagavate Vasudevaya', day: 'Thursday',
        temples: ['Tirupati Balaji (Andhra Pradesh)', 'Badrinath (Uttarakhand)', 'Padmanabhaswamy (Kerala)', 'Jagannath (Puri)'],
    },
    {
        icon: '🌞', name: 'Lord Surya', role: 'The Sun God — Source of Life',
        desc: 'Surya is the chief solar deity, the source of light and life. He rides a chariot pulled by seven horses representing the seven days and the seven colors of light.',
        consort: 'Sanjna & Chhaya', weapon: 'Rays of Light', vehicle: 'Chariot with 7 horses',
        mantra: 'Om Suryaya Namaha', day: 'Sunday',
        temples: ['Konark Sun Temple (Odisha)', 'Modhera Sun Temple (Gujarat)', 'Surya Pahar (Assam)', 'Arasavalli (Andhra Pradesh)'],
    },
    {
        icon: '🎵', name: 'Goddess Saraswati', role: 'Goddess of Knowledge, Music & Arts',
        desc: 'Saraswati is the goddess of learning, wisdom, music, and creative arts. She holds a veena (stringed instrument), a book of Vedas, and a rosary, seated on a white lotus.',
        consort: 'Lord Brahma', weapon: 'Veena, Vedas, Rosary', vehicle: 'Swan (Hamsa)',
        mantra: 'Om Aim Saraswatyai Namaha', day: 'Thursday',
        temples: ['Saraswati Temple (Basar, Telangana)', 'Gnana Saraswati (Warangal)', 'Sharda Peeth (J&K)', 'Mookambika (Karnataka)'],
    },
];

export default function DeitiesPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🙏 Sangrah — Deity Encyclopedia</span>
                    <h1>The Divine Pantheon</h1>
                    <p className={styles.heroDesc}>
                        Explore the stories, mantras, temples, and iconography of {deities.length}+
                        Hindu deities — their cosmic roles, sacred symbols, and places of worship.
                    </p>
                    <Link href="/sangrah" className="btn btn-secondary">← Back to Sangrah</Link>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    {deities.map((d, i) => (
                        <article key={i} className={styles.card} style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                                <span style={{ fontSize: '2.8rem' }}>{d.icon}</span>
                                <div>
                                    <h3 className={styles.cardTitle} style={{ fontSize: '1.3rem' }}>{d.name}</h3>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--saffron)', fontWeight: 600, fontStyle: 'italic' }}>
                                        {d.role}
                                    </span>
                                </div>
                            </div>
                            <p className={styles.cardDesc} style={{ marginBottom: '12px' }}>{d.desc}</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', fontSize: '0.85rem', color: 'var(--brown-mid)', marginBottom: '12px' }}>
                                <div>🤝 <strong>Consort:</strong> {d.consort}</div>
                                <div>⚔️ <strong>Weapon:</strong> {d.weapon}</div>
                                <div>🐾 <strong>Vehicle:</strong> {d.vehicle}</div>
                                <div>📅 <strong>Sacred Day:</strong> {d.day}</div>
                            </div>
                            <div style={{
                                padding: '10px 14px', background: 'rgba(255,107,53,0.06)', borderRadius: '8px',
                                fontFamily: 'var(--font-sanskrit)', fontSize: '0.95rem', color: 'var(--maroon)', marginBottom: '8px'
                            }}>
                                🕉️ <strong>Mantra:</strong> {d.mantra}
                            </div>
                            <div>
                                <strong style={{ fontSize: '0.85rem', color: 'var(--brown-rich)' }}>🛕 Major Temples:</strong>
                                <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
                                    {d.temples.map((t, j) => (
                                        <li key={j} style={{ fontSize: '0.82rem', color: 'var(--brown-light)', lineHeight: 1.6 }}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Explore All 30+ Deities in the App</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam for the full deity encyclopedia with images, stories, and daily mantras.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
