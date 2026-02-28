import Link from 'next/link';
import Image from 'next/image';
import { aartis } from './data';
import styles from './aarti.module.css';

export const metadata = {
    title: 'Aarti Collection — 12+ Sacred Hindu Aartis with Full Lyrics in Hindi',
    description:
        'Complete collection of Hindu aartis with full lyrics in Hindi — Om Jai Jagdish Hare, Om Jai Shiv Omkara, Aarti Kunj Bihari Ki, Hanuman Aarti, Ganesh Aarti, Durga Aarti, Lakshmi Aarti & more.',
    keywords: ['aarti', 'hindu aarti', 'aarti lyrics', 'om jai jagdish hare', 'om jai shiv omkara', 'ganesh aarti', 'hanuman aarti', 'durga aarti'],
};

export default function AartiListingPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🪔 Sangrah — Aarti Collection</span>
                    <h1>Sacred Aarti Collection</h1>
                    <p className={styles.heroDesc}>
                        Complete collection of {aartis.length}+ Hindu aartis with full lyrics in Hindi,
                        English translation, meaning, and spiritual significance.
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {aartis.map((aarti) => (
                            <Link
                                key={aarti.slug}
                                href={`/sangrah/aarti/${aarti.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={aarti.deityImage}
                                        alt={`${aarti.deity} Aarti`}
                                        width={400}
                                        height={250}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{aarti.deity} Aarti</span>
                                        {aarti.name}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.cardDate}>
                                        Updated at {new Date(aarti.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
