import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { chalisas } from './data';
import styles from '../aarti/aarti.module.css';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        title: locale === 'hi'
            ? 'चालीसा संग्रह — पूर्ण हिंदी बोल के साथ पवित्र हिंदू चालीसा'
            : 'Chalisa Collection — Sacred Hindu Chalisas in Hindi',
        description: locale === 'hi'
            ? 'पूर्ण हिंदी बोल के साथ हिंदू चालीसा का संपूर्ण संग्रह — हनुमान चालीसा, शिव चालीसा, दुर्गा चालीसा, लक्ष्मी चालीसा और अधिक।'
            : 'Complete collection of Hindu chalisas with full lyrics in Hindi — Hanuman Chalisa, Durga Chalisa & more.',
        keywords: ['chalisa', 'hindu chalisa', 'hanuman chalisa', 'shiv chalisa', 'durga chalisa', 'chalisa lyrics in hindi'],
    };
}

export default function ChalisaListingPage() {
    const locale = useLocale();

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{locale === 'hi' ? '📿 संग्रह — चालीसा संग्रह' : '📿 Sangrah — Chalisa Collection'}</span>
                    <h1>{locale === 'hi' ? 'पवित्र चालीसा संग्रह' : 'Sacred Chalisa Collection'}</h1>
                    <p className={styles.heroDesc}>
                        {locale === 'hi'
                            ? `${chalisas.length}+ हिन्दू चालीसा का संपूर्ण संग्रह, पूर्ण हिंदी बोल, अर्थ और आध्यात्मिक महत्व के साथ। ईश्वरीय आशीर्वाद के लिए प्रतिदिन पाठ करें।`
                            : `Complete collection of ${chalisas.length}+ Hindu chalisas with full lyrics in Hindi, meaning, and spiritual significance. Recite daily for divine blessings.`}
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {chalisas.map((chalisa) => {
                            const name = locale === 'hi' ? chalisa.nameHi : chalisa.name;
                            const deity = locale === 'hi' ? chalisa.deityHi : chalisa.deity;

                            return (
                                <Link
                                    key={chalisa.slug}
                                    href={`/sangrah/chalisa/${chalisa.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={chalisa.deityImage}
                                            alt={`${deity} Chalisa`}
                                            width={400}
                                            height={250}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{deity} {locale === 'hi' ? 'चालीसा' : 'Chalisa'}</span>
                                            {name}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {locale === 'hi' ? 'अद्यतन:' : 'Updated at'} {new Date(chalisa.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
