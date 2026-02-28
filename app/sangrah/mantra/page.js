import Link from 'next/link';
import Image from 'next/image';
import { mantras } from './data';
import styles from '../aarti/aarti.module.css';

export const metadata = {
    title: 'Mantra Collection — 15+ Powerful Hindu Mantras with Meanings and Benefits',
    description:
        'Explore a comprehensive collection of Hindu mantras for peace, prosperity, and protection. Includes Shiva, Laxmi, Ganesha, Krishna mantras and more with full lyrics and Hindi meanings.',
    keywords: ['mantras', 'hindu mantras', 'shiva mantra', 'laxmi mantra', 'ganesh mantra', 'mantra meanings', 'benefits of chanting'],
};

export default function MantraListingPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>🕉️ Sangrah — Mantra Collection</span>
                    <h1>Divine Mantra Collection</h1>
                    <p className={styles.heroDesc}>
                        Discover powerful Hindu mantras for every deity—chant for peace, strength, and blessings.
                        Includes full lyrics, deep meanings, and spiritual benefits.
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {mantras.map((mantra) => (
                            <Link
                                key={mantra.slug}
                                href={`/sangrah/mantra/${mantra.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={mantra.deityImage}
                                        alt={mantra.name}
                                        width={400}
                                        height={250}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{mantra.deity} Mantra</span>
                                        {mantra.name}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.cardDate}>
                                        Updated at {new Date(mantra.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
