import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { aartis, getAartiBySlug, getRecommendedAartis } from '../data';
import styles from '../aarti.module.css';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
    return aartis.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
    const { slug, locale } = await params;
    const aarti = getAartiBySlug(slug);
    if (!aarti) return {};

    const name = locale === 'hi' ? aarti.nameHi : aarti.name;
    const deity = locale === 'hi' ? aarti.deityHi : aarti.deity;
    const desc = locale === 'hi' ? aarti.descriptionHi.slice(0, 160) : aarti.description.slice(0, 160);
    const path = `/sangrah/aarti/${aarti.slug}`;
    const url = locale === 'en' ? path : `/${locale}${path}`;
    const absoluteUrl = `https://sanatan-sangam.com${url}`;

    return {
        title: `${name} — ${deity} ${locale === 'hi' ? 'के आरती के बोल (हिंदी)' : 'Aarti Lyrics in Hindi'}`,
        description: desc,
        keywords: [name, `${deity} aarti`, 'aarti lyrics in hindi', 'hindu aarti'],
        alternates: {
            canonical: absoluteUrl,
            languages: {
                en: `https://sanatan-sangam.com${path}`,
                hi: `https://sanatan-sangam.com/hi${path}`,
                'x-default': `https://sanatan-sangam.com${path}`,
            },
        },
        openGraph: {
            title: `${name} — ${deity} Aarti`,
            description: desc,
            url: absoluteUrl,
            images: [{ url: aarti.deityImage }],
        },
    };
}

export default async function AartiDetailPage({ params }) {
    const { slug, locale } = await params;
    const aarti = getAartiBySlug(slug);
    if (!aarti) notFound();

    const recommended = getRecommendedAartis(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/aarti/${aarti.slug}`;

    const name = locale === 'hi' ? aarti.nameHi : aarti.name;
    const deity = locale === 'hi' ? aarti.deityHi : aarti.deity;
    const desc = locale === 'hi' ? aarti.descriptionHi : aarti.description;
    const benefits = locale === 'hi' ? aarti.benefitsHi : aarti.benefits;

    const breadcrumbData = {
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': locale === 'hi' ? 'होम' : 'Home',
                'item': locale === 'hi' ? 'https://sanatan-sangam.com/hi' : 'https://sanatan-sangam.com',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': locale === 'hi' ? 'संग्रह' : 'Sangrah',
                'item': locale === 'hi' ? 'https://sanatan-sangam.com/hi/sangrah' : 'https://sanatan-sangam.com/sangrah',
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': locale === 'hi' ? 'आरती' : 'Aarti',
                'item': locale === 'hi' ? 'https://sanatan-sangam.com/hi/sangrah/aarti' : 'https://sanatan-sangam.com/sangrah/aarti',
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': name,
                'item': pageUrl,
            },
        ],
    };

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            breadcrumbData,
            {
                '@type': 'Article',
                headline: `${name} — ${deity} Aarti Lyrics`,
                description: desc,
                dateModified: aarti.updatedAt,
                author: { '@type': 'Organization', name: 'Sanatan Sangam' },
                publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
                image: aarti.deityImage,
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: locale === 'hi' ? `${aarti.nameHi} के पाठ करने के क्या लाभ हैं?` : `What are the benefits of reciting ${aarti.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: locale === 'hi' ? (aarti.benefitsHi || []).join(' ') : (aarti.benefits || []).join(' ')
                        }
                    },
                    {
                        '@type': 'Question',
                        name: locale === 'hi' ? `${aarti.nameHi} के देवता कौन हैं?` : `Who is the deity of ${aarti.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: locale === 'hi' ? `${aarti.nameHi} ${aarti.deityHi} को समर्पित है।` : `${aarti.name} is dedicated to ${aarti.deity}.`
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
                    <Link href="/sangrah/aarti" className={styles.backLink}>← {locale === 'hi' ? 'सभी आरतियाँ' : 'All Aartis'}</Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={aarti.deityImage}
                                alt={deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{name}</h1>
                            <p className={styles.detailDeity}>🙏 {deity} {locale === 'hi' ? 'की आरती' : 'Aarti'}</p>
                            <p className={styles.detailDate}>
                                {locale === 'hi' ? 'अद्यतन:' : 'Updated at'} {new Date(aarti.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>{locale === 'hi' ? `बारे में` : 'About'} {name}</h2>
                    <p>{desc}</p>
                </div>

                {/* Lyrics */}
                <div className={styles.lyricsBox}>
                    <h2>🪔 {name} — {locale === 'hi' ? 'आरती के बोल' : 'Lyrics in Hindi'}</h2>
                    <div className={styles.lyricsText}>{aarti.lyrics}</div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>{locale === 'hi' ? 'आरती पाठ के लाभ' : 'Benefits of Reciting'} {name}</h2>
                    <ul className={styles.benefitsList}>
                        {benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* Share Buttons */}
                <ShareButtons aarti={aarti} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>{locale === 'hi' ? 'अनुशंसित आरतियाँ' : 'Recommended Aartis'}</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => {
                            const recName = locale === 'hi' ? rec.nameHi : rec.name;
                            const recDeity = locale === 'hi' ? rec.deityHi : rec.deity;

                            return (
                                <Link
                                    key={rec.slug}
                                    href={`/sangrah/aarti/${rec.slug}`}
                                    className={styles.aartiCard}
                                >
                                    <div className={styles.cardThumb}>
                                        <Image
                                            src={rec.deityImage}
                                            alt={`${recDeity} Aarti`}
                                            width={300}
                                            height={188}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div className={styles.cardLabel}>
                                            <span className={styles.cardLabelDeity}>{recDeity} {locale === 'hi' ? 'आरती' : 'Aarti'}</span>
                                            {recName}
                                        </div>
                                    </div>
                                    <div className={styles.cardBody}>
                                        <span className={styles.cardDate}>
                                            {locale === 'hi' ? 'अद्यतन:' : 'Updated'} {new Date(rec.updatedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
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
