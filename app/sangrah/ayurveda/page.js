import Link from 'next/link';
import styles from '../../components/subpage.module.css';

export const metadata = {
    title: 'Ayurvedic Home Remedies — Ancient Wellness Wisdom',
    description:
        'Discover Ayurvedic home remedies for immunity, digestion, skin care, hair care, stress relief, and seasonal health. Ancient Indian wellness wisdom backed by tradition.',
    keywords: ['ayurvedic remedies', 'home remedies', 'ayurveda tips', 'natural health', 'immunity boosters', 'indian home remedies', 'wellness tips'],
};

const categories = [
    {
        icon: '🛡️', title: 'Immunity Boosters', color: '#2E7D32',
        remedies: [
            { name: 'Turmeric Golden Milk (Haldi Doodh)', desc: 'Mix ½ tsp turmeric, a pinch of black pepper, and honey in warm milk. Drink before bed for powerful anti-inflammatory and immunity-boosting benefits.' },
            { name: 'Chyawanprash', desc: 'Take 1 tablespoon of Chyawanprash daily. Made from Amla and 40+ herbs, it has been used for centuries to strengthen immunity.' },
            { name: 'Tulsi Tea', desc: '5-6 fresh Tulsi (holy basil) leaves boiled in water with ginger and honey. A natural antiviral and antibacterial remedy.' },
            { name: 'Amla Juice', desc: 'Drink 20ml fresh Amla juice every morning on an empty stomach. It is the richest natural source of Vitamin C.' },
        ],
    },
    {
        icon: '🫄', title: 'Digestive Health', color: '#E65100',
        remedies: [
            { name: 'Jeera Water', desc: 'Boil one teaspoon of cumin seeds in a glass of water. Strain and drink warm to relieve bloating, acidity, and indigestion.' },
            { name: 'Ajwain & Black Salt', desc: 'Mix ½ tsp ajwain (carom seeds) with a pinch of black salt. Chew after meals for quick relief from gas and indigestion.' },
            { name: 'Triphala Churna', desc: 'Take 1 tsp Triphala powder with warm water before bed. This ancient Ayurvedic formula regulates digestion and detoxifies the body.' },
            { name: 'Ginger-Lemon-Honey', desc: 'Mix fresh ginger juice, lemon juice, and honey in warm water. Drink before meals to stimulate digestion and reduce nausea.' },
        ],
    },
    {
        icon: '✨', title: 'Skin Care', color: '#6A1B9A',
        remedies: [
            { name: 'Turmeric Face Pack', desc: 'Mix turmeric, besan (gram flour), and rose water into a paste. Apply for 15 minutes for glowing, clear skin — an ancient bridal remedy.' },
            { name: 'Aloe Vera Gel', desc: 'Apply fresh Aloe Vera gel directly on skin for moisturizing, healing sunburn, and reducing acne scars.' },
            { name: 'Neem Paste', desc: 'Grind fresh neem leaves into a paste and apply on acne-prone areas. Neem is a powerful natural antibacterial and antifungal.' },
            { name: 'Sandalwood (Chandan) Pack', desc: 'Mix sandalwood powder with rose water. Apply for 20 minutes to cool the skin, reduce blemishes, and even out skin tone.' },
        ],
    },
    {
        icon: '💆', title: 'Hair Care', color: '#1565C0',
        remedies: [
            { name: 'Coconut Oil & Curry Leaves', desc: 'Heat coconut oil with curry leaves until they turn black. Cool and massage into scalp. Prevents premature graying and promotes growth.' },
            { name: 'Amla-Reetha-Shikakai', desc: 'Soak equal parts of amla, reetha, and shikakai overnight. Strain and use as a natural shampoo for strong, shiny hair.' },
            { name: 'Fenugreek Hair Mask', desc: 'Soak methi (fenugreek) seeds overnight, grind into paste, and apply on scalp. Reduces hair fall and dandruff naturally.' },
            { name: 'Bhringraj Oil Massage', desc: 'Warm Bhringraj oil and massage into scalp. Known as the "King of Herbs" for hair, it promotes growth and prevents baldness.' },
        ],
    },
    {
        icon: '🧘', title: 'Stress Relief & Sleep', color: '#00695C',
        remedies: [
            { name: 'Ashwagandha Milk', desc: 'Mix 1 tsp Ashwagandha powder in warm milk with honey. Drink before bed to reduce stress, anxiety, and improve sleep quality.' },
            { name: 'Brahmi Tea', desc: 'Brew Brahmi leaves in hot water. This Ayurvedic brain tonic enhances memory, reduces anxiety, and improves focus.' },
            { name: 'Jatamansi (Spikenard)', desc: 'Take Jatamansi root powder with warm water before bed. It calms the nervous system and promotes deep, restful sleep.' },
            { name: 'Pranayama – Anulom Vilom', desc: 'Practice 10 minutes of alternate nostril breathing daily. Scientifically proven to reduce cortisol levels and calm the mind.' },
        ],
    },
    {
        icon: '🌡️', title: 'Seasonal Health', color: '#D84315',
        remedies: [
            { name: 'Kadha (Herbal Decoction)', desc: 'Boil tulsi, ginger, cloves, black pepper, and cinnamon. Strain, add honey. The classic Indian remedy for cold, cough, and flu.' },
            { name: 'Honey-Ginger for Cough', desc: 'Mix equal parts fresh ginger juice and honey. Take 1 tsp thrice daily for natural cough relief.' },
            { name: 'Steam with Eucalyptus', desc: 'Add a few drops of eucalyptus oil to boiling water. Inhale the steam to clear nasal congestion and sinus problems.' },
            { name: 'Giloy Juice', desc: 'Boil Giloy stem in water and drink the decoction. Known as "Amrita" (nectar of life), it boosts immunity and fights fever.' },
        ],
    },
];

export default function AyurvedaPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🌿 Sangrah — Ayurvedic Remedies</span>
                    <h1>Ancient Wellness Wisdom</h1>
                    <p className={styles.heroDesc}>
                        Discover time-tested Ayurvedic home remedies for immunity, digestion, skin care,
                        hair care, stress relief, and seasonal health — backed by centuries of tradition.
                    </p>
                    <Link href="/sangrah" className="btn btn-secondary">← Back to Sangrah</Link>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    {categories.map((cat, i) => (
                        <div key={i} style={{ marginBottom: '48px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                                <span style={{ fontSize: '2rem' }}>{cat.icon}</span>
                                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>{cat.title}</h2>
                            </div>
                            <div className={styles.grid2}>
                                {cat.remedies.map((r, j) => (
                                    <article key={j} className={styles.card}>
                                        <h4 className={styles.cardTitle}>{r.name}</h4>
                                        <p className={styles.cardDesc}>{r.desc}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <p style={{ fontStyle: 'italic', color: 'var(--brown-light)', fontSize: '0.85rem', marginBottom: '16px' }}>
                        ⚠️ Disclaimer: These are traditional Ayurvedic remedies shared for informational purposes.
                        Always consult a healthcare professional before trying new remedies.
                    </p>
                    <h2>Explore More Remedies in the App</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        Download Sanatan Sangam for the full Ayurvedic remedies library with seasonal tips and wellness guides.
                    </p>
                    <a href="#download" className="btn btn-primary">📱 Download App</a>
                </div>
            </section>
        </>
    );
}
