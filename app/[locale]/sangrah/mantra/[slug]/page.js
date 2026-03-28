import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
// import { useLocale } from 'next-intl';
import { mantras, getMantraBySlug, getRecommendedMantras } from '../data';
import styles from '../../aarti/aarti.module.css';
import ShareButtons from './ShareButtons';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { slug, locale } = await params;
    const mantra = getMantraBySlug(slug);
    if (!mantra) return {};
    const isHi = locale === 'hi';
    const name = isHi ? (mantra.nameHi || mantra.name) : mantra.name;
    const deity = isHi ? (mantra.deityHi || mantra.deity) : mantra.deity;
    const desc = isHi ? (mantra.descriptionHi || mantra.description) : mantra.description;
    const path = `/sangrah/mantra/${mantra.slug}`;
    const url = locale === 'en' ? path : `/${locale}${path}`;
    const absoluteUrl = `https://sanatan-sangam.com${url}`;

    return {
        title: `${name} — ${deity} ${isHi ? 'मंत्र' : 'Mantra'}`,
        description: desc.slice(0, 160),
        keywords: [mantra.name, `${mantra.deity} mantra`, 'mantra lyrics in hindi', 'mantra meaning'],
        alternates: {
            canonical: absoluteUrl,
            languages: {
                en: `https://sanatan-sangam.com${path}`,
                hi: `https://sanatan-sangam.com/hi${path}`,
                'x-default': `https://sanatan-sangam.com${path}`,
            },
        },
        openGraph: {
            title: `${name} — ${deity} ${isHi ? 'मंत्र' : 'Mantra'}`,
            description: desc.slice(0, 160),
            url: absoluteUrl,
            images: [{ url: mantra.deityImage }],
        },
    };
}

export default async function MantraDetailPage({ params }) {
    const { slug, locale } = await params;
    const mantra = getMantraBySlug(slug);
    if (!mantra) notFound();

    const recommended = getRecommendedMantras(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/mantra/${mantra.slug}`;

    const isHi = locale === 'hi';
    const name = isHi ? (mantra.nameHi || mantra.name) : mantra.name;
    const deity = isHi ? (mantra.deityHi || mantra.deity) : mantra.deity;
    const description = isHi ? (mantra.descriptionHi || mantra.description) : mantra.description;
    const meaning = isHi ? (mantra.meaningHi || mantra.meaning) : mantra.meaning;
    const benefits = isHi ? (mantra.benefitsHi || mantra.benefits) : mantra.benefits;
    const howToChant = isHi ? (mantra.howToChantHi || mantra.howToChant) : mantra.howToChant;

    const absoluteUrl = `https://sanatan-sangam.com${locale === 'en' ? '' : `/${locale}`}/sangrah/mantra/${mantra.slug}`;

    const breadcrumbData = {
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': isHi ? 'होम' : 'Home',
                'item': isHi ? 'https://sanatan-sangam.com/hi' : 'https://sanatan-sangam.com',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': isHi ? 'संग्रह' : 'Sangrah',
                'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah' : 'https://sanatan-sangam.com/sangrah',
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': isHi ? 'मंत्र' : 'Mantra',
                'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah/mantra' : 'https://sanatan-sangam.com/sangrah/mantra',
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': name,
                'item': absoluteUrl,
            },
        ],
    };

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            breadcrumbData,
            {
                '@type': 'Article',
                headline: `${name} — ${deity} Mantra Text and Meaning`,
                description: description,
                dateModified: mantra.updatedAt,
                author: { '@type': 'Organization', name: 'Sanatan Sangam' },
                publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
                image: mantra.deityImage,
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: isHi ? `${name} जाप के क्या लाभ हैं?` : `What are the benefits of chanting ${name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: isHi ? (mantra.benefitsHi || []).join(' ') : (mantra.benefits || []).join(' ')
                        }
                    },
                    {
                        '@type': 'Question',
                        name: isHi ? `${name} का जाप कैसे करें?` : `How should one chant the ${name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: howToChant
                        }
                    },
                    {
                        '@type': 'Question',
                        name: isHi ? `${name} का अर्थ क्या है?` : `What is the meaning of ${name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: meaning
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO */}
            <section className={styles.detailHero}>
                <div className="container">
                    <Link href="/sangrah/mantra" className={styles.backLink}>
                        {isHi ? '← सभी मंत्र' : '← All Mantras'}
                    </Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={mantra.deityImage}
                                alt={deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{name}</h1>
                            <p className={styles.detailDeity}>🕉️ {deity} {isHi ? 'मंत्र' : 'Mantra'}</p>
                            <p className={styles.detailDate}>
                                {isHi ? 'अद्यतन' : 'Updated'} {new Date(mantra.updatedAt).toLocaleDateString(isHi ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>{isHi ? `${name} का महत्व` : `Significance of ${name}`}</h2>
                    <p>{description}</p>
                </div>

                {/* Mantra Text */}
                <div className={styles.lyricsBox}>
                    <h2>🕉️ {name} — {isHi ? 'पूर्ण संस्कृत/हिंदी पाठ' : 'Full Sanskrit/Hindi Wordings'}</h2>
                    <div className={`${styles.lyricsText} ${styles.mantraText}`}>{mantra.mantraText}</div>
                </div>

                {/* Meaning */}
                <div className={styles.lyricsBox} style={{ borderTop: 'none' }}>
                    <h2>📖 {isHi ? 'मंत्र का अर्थ' : 'Meaning of the Mantra'}</h2>
                    <div className={styles.meaningText} style={{ whiteSpace: 'pre-line', fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
                        {meaning}
                    </div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>{isHi ? `${name} जाप के लाभ` : `Benefits of Chanting ${name}`}</h2>
                    <ul className={styles.benefitsList}>
                        {benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* How to Chant */}
                <div className={styles.descBox} style={{ borderTop: 'none' }}>
                    <h2>🧘 {isHi ? 'जाप कैसे करें' : 'How to Chant'}</h2>
                    <p>{howToChant}</p>
                </div>

                {/* Share Buttons */}
                <ShareButtons mantra={mantra} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>{isHi ? 'अनुशंसित मंत्र' : 'Recommended Mantras'}</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => {
                            const recName = isHi ? (rec.nameHi || rec.name) : rec.name;
                            const recDeity = isHi ? (rec.deityHi || rec.deity) : rec.deity;
                            return (
                                <Link
                                    key={rec.slug}
                                    href={`/sangrah/mantra/${rec.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={rec.deityImage}
                                            alt={recName}
                                            width={300}
                                            height={188}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{recDeity} {isHi ? 'मंत्र' : 'Mantra'}</span>
                                            {recName}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {isHi ? 'अद्यतन' : 'Updated'} {new Date(rec.updatedAt).toLocaleDateString(isHi ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
