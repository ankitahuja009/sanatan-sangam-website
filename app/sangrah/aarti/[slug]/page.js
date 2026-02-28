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
    const { slug } = await params;
    const aarti = getAartiBySlug(slug);
    if (!aarti) return {};
    return {
        title: `${aarti.name} — ${aarti.deity} Aarti Lyrics in Hindi`,
        description: aarti.description.slice(0, 160),
        keywords: [aarti.name, `${aarti.deity} aarti`, 'aarti lyrics in hindi', 'hindu aarti'],
        openGraph: {
            title: `${aarti.name} — ${aarti.deity} Aarti`,
            description: aarti.description.slice(0, 160),
            url: `https://sanatan-sangam.com/sangrah/aarti/${aarti.slug}`,
            images: [{ url: aarti.deityImage }],
        },
    };
}

export default async function AartiDetailPage({ params }) {
    const { slug } = await params;
    const aarti = getAartiBySlug(slug);
    if (!aarti) notFound();

    const recommended = getRecommendedAartis(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/aarti/${aarti.slug}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${aarti.name} — ${aarti.deity} Aarti Lyrics`,
        description: aarti.description,
        dateModified: aarti.updatedAt,
        author: { '@type': 'Organization', name: 'Sanatan Sangam' },
        publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
        image: aarti.deityImage,
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
                    <Link href="/sangrah/aarti" className={styles.backLink}>← All Aartis</Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={aarti.deityImage}
                                alt={aarti.deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{aarti.name}</h1>
                            <p className={styles.detailDeity}>🙏 {aarti.deity} Aarti</p>
                            <p className={styles.detailDate}>
                                Updated {new Date(aarti.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>About {aarti.name}</h2>
                    <p>{aarti.description}</p>
                </div>

                {/* Lyrics */}
                <div className={styles.lyricsBox}>
                    <h2>🪔 {aarti.name} — Lyrics in Hindi</h2>
                    <div className={styles.lyricsText}>{aarti.lyrics}</div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>Benefits of Reciting {aarti.name}</h2>
                    <ul className={styles.benefitsList}>
                        {aarti.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* Share Buttons */}
                <ShareButtons aarti={aarti} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>Recommended Aartis</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => (
                            <Link
                                key={rec.slug}
                                href={`/sangrah/aarti/${rec.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={rec.deityImage}
                                        alt={`${rec.deity} Aarti`}
                                        width={300}
                                        height={188}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{rec.deity} Aarti</span>
                                        {rec.name}
                                    </div>
                                </div>
                                <div className={styles.cardBody}>
                                    <span className={styles.cardDate}>
                                        Updated {new Date(rec.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
