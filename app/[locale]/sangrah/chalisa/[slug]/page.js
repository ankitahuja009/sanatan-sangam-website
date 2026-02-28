import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { chalisas, getChalisaBySlug, getRecommendedChalisas } from '../data';
import styles from '../../aarti/aarti.module.css';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
    return chalisas.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
    const { slug, locale } = await params;
    const chalisa = getChalisaBySlug(slug);
    if (!chalisa) return {};

    const name = locale === 'hi' ? (chalisa.nameHi || chalisa.name) : chalisa.name;
    const deity = locale === 'hi' ? (chalisa.deityHi || chalisa.deity) : chalisa.deity;
    const desc = locale === 'hi' ? (chalisa.descriptionHi || chalisa.description).slice(0, 160) : chalisa.description.slice(0, 160);
    const path = `/sangrah/chalisa/${chalisa.slug}`;
    const url = locale === 'en' ? path : `/${locale}${path}`;
    const absoluteUrl = `https://sanatan-sangam.com${url}`;

    return {
        title: locale === 'hi' ? `${name} — पूर्ण हिंदी बोल | ${deity} चालीसा` : `${name} — Full Lyrics in Hindi | ${deity} Chalisa`,
        description: desc,
        keywords: [name, `${chalisa.deity} chalisa`, 'chalisa lyrics in hindi', 'hindu chalisa'],
        alternates: {
            canonical: absoluteUrl,
            languages: {
                en: `https://sanatan-sangam.com${path}`,
                hi: `https://sanatan-sangam.com/hi${path}`,
            },
        },
        openGraph: {
            title: `${name} — ${deity} Chalisa`,
            description: desc,
            url: absoluteUrl,
            images: [{ url: chalisa.deityImage }],
        },
    };
}

export default async function ChalisaDetailPage({ params }) {
    const { slug, locale } = await params;
    const chalisa = getChalisaBySlug(slug);
    if (!chalisa) notFound();

    const recommended = getRecommendedChalisas(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/chalisa/${chalisa.slug}`;

    const name = locale === 'hi' ? (chalisa.nameHi || chalisa.name) : chalisa.name;
    const deity = locale === 'hi' ? (chalisa.deityHi || chalisa.deity) : chalisa.deity;
    const desc = locale === 'hi' ? (chalisa.descriptionHi || chalisa.description) : chalisa.description;
    const benefits = locale === 'hi' ? (chalisa.benefitsHi || chalisa.benefits) : chalisa.benefits;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                headline: `${name} — ${deity} Chalisa Lyrics`,
                description: desc,
                dateModified: chalisa.updatedAt,
                author: { '@type': 'Person', name: chalisa.author },
                publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
                image: chalisa.deityImage,
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: `What are the benefits of reciting ${chalisa.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: typeof chalisa.benefits === 'string' ? chalisa.benefits : (chalisa.benefits || []).join(' ')
                        }
                    },
                    {
                        '@type': 'Question',
                        name: `Who wrote the ${chalisa.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: `The ${chalisa.name} was written by ${chalisa.author}.`
                        }
                    },
                    {
                        '@type': 'Question',
                        name: `What is the significance of ${chalisa.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: typeof chalisa.description === 'string' ? chalisa.description : (typeof desc === 'string' ? desc : '')
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
                    <Link href="/sangrah/chalisa" className={styles.backLink}>← {locale === 'hi' ? 'सभी चालीसा' : 'All Chalisas'}</Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={chalisa.deityImage}
                                alt={deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{name}</h1>
                            <p className={styles.detailDeity}>📿 {deity} {locale === 'hi' ? 'चालीसा' : 'Chalisa'}</p>
                            <p className={styles.detailDate}>
                                {locale === 'hi' ? 'द्वारा' : 'By'} {chalisa.author} • {locale === 'hi' ? 'अद्यतन' : 'Updated'} {new Date(chalisa.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>{locale === 'hi' ? 'बारे में' : 'About'} {name}</h2>
                    <p>{desc}</p>
                </div>

                {/* Lyrics */}
                <div className={styles.lyricsBox}>
                    <h2>📿 {name} — {locale === 'hi' ? 'चालीसा के बोल' : 'Lyrics in Hindi'}</h2>
                    <div className={styles.lyricsText}>{chalisa.lyrics}</div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>{locale === 'hi' ? 'चालीसा पाठ के लाभ' : 'Benefits of Reciting'} {name}</h2>
                    <ul className={styles.benefitsList}>
                        {benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* Share Buttons */}
                <ShareButtons chalisa={chalisa} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>{locale === 'hi' ? 'अनुशंसित चालीसा' : 'Recommended Chalisas'}</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => {
                            const recName = locale === 'hi' ? (rec.nameHi || rec.name) : rec.name;
                            const recDeity = locale === 'hi' ? (rec.deityHi || rec.deity) : rec.deity;

                            return (
                                <Link
                                    key={rec.slug}
                                    href={`/sangrah/chalisa/${rec.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={rec.deityImage}
                                            alt={`${recDeity} Chalisa`}
                                            width={300}
                                            height={188}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{recDeity} {locale === 'hi' ? 'चालीसा' : 'Chalisa'}</span>
                                            {recName}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {locale === 'hi' ? 'अद्यतन' : 'Updated'} {new Date(rec.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
