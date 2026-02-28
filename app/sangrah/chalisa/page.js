import Link from 'next/link';
import Image from 'next/image';
import { chalisas } from './data';
import styles from '../aarti/aarti.module.css';

export const metadata = {
    title: 'Chalisa Collection — 15+ Sacred Hindu Chalisas with Full Lyrics in Hindi',
    description:
        'Complete collection of Hindu chalisas with full lyrics in Hindi — Hanuman Chalisa, Shiv Chalisa, Durga Chalisa, Lakshmi Chalisa, Ram Chalisa, Ganesh Chalisa, Saraswati Chalisa & more.',
    keywords: ['chalisa', 'hindu chalisa', 'hanuman chalisa', 'shiv chalisa', 'durga chalisa', 'chalisa lyrics in hindi'],
};

export default function ChalisaListingPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>📿 Sangrah — Chalisa Collection</span>
                    <h1>Sacred Chalisa Collection</h1>
                    <p className={styles.heroDesc}>
                        Complete collection of {chalisas.length}+ Hindu chalisas with full lyrics in Hindi,
                        meaning, and spiritual significance. Recite daily for divine blessings.
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {chalisas.map((chalisa) => (
                            <Link
                                key={chalisa.slug}
                                href={`/sangrah/chalisa/${chalisa.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={chalisa.deityImage}
                                        alt={`${chalisa.deity} Chalisa`}
                                        width={400}
                                        height={250}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{chalisa.deity} Chalisa</span>
                                        {chalisa.name}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.cardDate}>
                                        Updated at {new Date(chalisa.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
