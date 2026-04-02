import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { aartis } from './data';
import styles from './aarti.module.css';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        title: locale === 'hi'
            ? 'आरती संग्रह — पूर्ण हिंदी बोल के साथ पवित्र हिंदू आरतियाँ'
            : 'Aarti Collection — Sacred Hindu Aartis with Full Lyrics in Hindi',
        description: locale === 'hi'
            ? 'पूर्ण हिंदी बोल के साथ हिंदू आरतियों का संपूर्ण संग्रह — ओम जय जगदीश हरे, ओम जय शिव ओंकारा, आरती कुंज बिहारी की, और अधिक।'
            : 'Complete collection of Hindu aartis with full lyrics in Hindi — Om Jai Jagdish Hare, Shiv Omkara, Kunj Bihari Aarti & more.',
        keywords: ['aarti', 'hindu aarti', 'aarti lyrics', 'om jai jagdish hare', 'om jai shiv omkara', 'ganesh aarti', 'hanuman aarti', 'durga aarti'],
    };
}

export default async function AartiListingPage({ params }) {
    const { locale } = await params;

    const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': locale === 'hi' ? 'होम' : 'Home',
                'item': locale === 'hi' ? 'https://www.sanatan-sangam.com/hi' : 'https://www.sanatan-sangam.com',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': locale === 'hi' ? 'संग्रह' : 'Sangrah',
                'item': locale === 'hi' ? 'https://www.sanatan-sangam.com/hi/sangrah' : 'https://www.sanatan-sangam.com/sangrah',
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': locale === 'hi' ? 'आरती' : 'Aarti',
                'item': locale === 'hi' ? 'https://www.sanatan-sangam.com/hi/sangrah/aarti' : 'https://www.sanatan-sangam.com/sangrah/aarti',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{locale === 'hi' ? '🪔 संग्रह — आरती संग्रह' : '🪔 Sangrah — Aarti Collection'}</span>
                    <h1>{locale === 'hi' ? 'पवित्र आरती संग्रह' : 'Sacred Aarti Collection'}</h1>
                    <p className={styles.heroDesc}>
                        {locale === 'hi'
                            ? `${aartis.length}+ हिन्दू आरतियों का संपूर्ण संग्रह, पूर्ण हिंदी बोल, अर्थ और आध्यात्मिक महत्व के साथ।`
                            : `Complete collection of ${aartis.length}+ Hindu aartis with full lyrics in Hindi, English translation, meaning, and spiritual significance.`}
                    </p>
                </div>
            </section>

            <section className={styles.listSection}>
                <div className="container">
                    <div className={styles.aartiGrid}>
                        {aartis.map((aarti) => {
                            const name = locale === 'hi' ? aarti.nameHi : aarti.name;
                            const deity = locale === 'hi' ? aarti.deityHi : aarti.deity;

                            return (
                                <Link
                                    key={aarti.slug}
                                    href={`/sangrah/aarti/${aarti.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={aarti.deityImage}
                                            alt={`${deity} Aarti`}
                                            width={400}
                                            height={250}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{deity} {locale === 'hi' ? 'आरती' : 'Aarti'}</span>
                                            {name}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {locale === 'hi' ? 'अद्यतन:' : 'Updated at'} {new Date(aarti.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
