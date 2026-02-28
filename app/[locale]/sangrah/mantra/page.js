import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { mantras } from './data';
import styles from '../aarti/aarti.module.css';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        title: locale === 'hi'
            ? 'मंत्र संग्रह — 15+ शक्तिशाली हिंदू मंत्र अर्थ और लाभ सहित'
            : 'Mantra Collection — 15+ Powerful Hindu Mantras with Meanings and Benefits',
        description: locale === 'hi'
            ? 'शांति, समृद्धि और सुरक्षा के लिए हिंदू मंत्रों का संपूर्ण संग्रह। शिव, लक्ष्मी, गणेश, कृष्ण मंत्र और अधिक — पूर्ण बोल और हिंदी अर्थ सहित।'
            : 'Explore a comprehensive collection of Hindu mantras for peace, prosperity, and protection. Includes Shiva, Laxmi, Ganesha, Krishna mantras and more with full lyrics and Hindi meanings.',
        keywords: ['mantras', 'hindu mantras', 'shiva mantra', 'laxmi mantra', 'ganesh mantra', 'mantra meanings', 'benefits of chanting'],
    };
}

export default function MantraListingPage() {
    const locale = useLocale();

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{locale === 'hi' ? '🕉️ संग्रह — मंत्र संग्रह' : '🕉️ Sangrah — Mantra Collection'}</span>
                    <h1>{locale === 'hi' ? 'दिव्य मंत्र संग्रह' : 'Divine Mantra Collection'}</h1>
                    <p className={styles.heroDesc}>
                        {locale === 'hi'
                            ? 'प्रत्येक देवता के लिए शक्तिशाली हिंदू मंत्र — शांति, शक्ति और आशीर्वाद के लिए जाप करें।'
                            : 'Discover powerful Hindu mantras for every deity—chant for peace, strength, and blessings. Includes full lyrics, deep meanings, and spiritual benefits.'}
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {mantras.map((mantra) => {
                            const name = locale === 'hi' ? (mantra.nameHi || mantra.name) : mantra.name;
                            const deity = locale === 'hi' ? (mantra.deityHi || mantra.deity) : mantra.deity;

                            return (
                                <Link
                                    key={mantra.slug}
                                    href={`/sangrah/mantra/${mantra.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={mantra.deityImage}
                                            alt={name}
                                            width={400}
                                            height={250}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{deity} {locale === 'hi' ? 'मंत्र' : 'Mantra'}</span>
                                            {name}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {locale === 'hi' ? 'अद्यतन:' : 'Updated at'} {new Date(mantra.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
