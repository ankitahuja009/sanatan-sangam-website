import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { mantras, getMantraBySlug, getRecommendedMantras } from '../data';
import styles from '../../aarti/aarti.module.css';
import ShareButtons from './ShareButtons';

export async function generateStaticParams() {
    return mantras.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const mantra = getMantraBySlug(slug);
    if (!mantra) return {};
    return {
        title: `${mantra.name} — Full Text, Meaning & Benefits | ${mantra.deity} Mantra`,
        description: mantra.description.slice(0, 160),
        keywords: [mantra.name, `${mantra.deity} mantra`, 'mantra lyrics in hindi', 'mantra meaning'],
        openGraph: {
            title: `${mantra.name} — ${mantra.deity} Mantra`,
            description: mantra.description.slice(0, 160),
            url: `https://sanatan-sangam.com/sangrah/mantra/${mantra.slug}`,
            images: [{ url: mantra.deityImage }],
        },
    };
}

export default async function MantraDetailPage({ params }) {
    const { slug } = await params;
    const mantra = getMantraBySlug(slug);
    if (!mantra) notFound();

    const recommended = getRecommendedMantras(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/mantra/${mantra.slug}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${mantra.name} — ${mantra.deity} Mantra Text and Meaning`,
        description: mantra.description,
        dateModified: mantra.updatedAt,
        author: { '@type': 'Organization', name: 'Sanatan Sangam' },
        publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
        image: mantra.deityImage,
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
                    <Link href="/sangrah/mantra" className={styles.backLink}>← All Mantras</Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={mantra.deityImage}
                                alt={mantra.deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{mantra.name}</h1>
                            <p className={styles.detailDeity}>🕉️ {mantra.deity} Mantra</p>
                            <p className={styles.detailDate}>
                                Updated {new Date(mantra.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>Significance of {mantra.name}</h2>
                    <p>{mantra.description}</p>
                </div>

                {/* Mantra Text */}
                <div className={styles.lyricsBox}>
                    <h2>🕉️ {mantra.name} — Full Sanskrit/Hindi Wordings</h2>
                    <div className={`${styles.lyricsText} ${styles.mantraText}`}>{mantra.mantraText}</div>
                </div>

                {/* Meaning */}
                <div className={styles.lyricsBox} style={{ borderTop: 'none' }}>
                    <h2>📖 Meaning of the Mantra</h2>
                    <div className={styles.meaningText} style={{ whiteSpace: 'pre-line', fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
                        {mantra.meaning}
                    </div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>Benefits of Chanting {mantra.name}</h2>
                    <ul className={styles.benefitsList}>
                        {mantra.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* How to Chant */}
                <div className={styles.descBox} style={{ borderTop: 'none' }}>
                    <h2>🧘 How to Chant</h2>
                    <p>{mantra.howToChant}</p>
                </div>

                {/* Share Buttons */}
                <ShareButtons mantra={mantra} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>Recommended Mantras</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => (
                            <Link
                                key={rec.slug}
                                href={`/sangrah/mantra/${rec.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={rec.deityImage}
                                        alt={rec.name}
                                        width={300}
                                        height={188}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{rec.deity} Mantra</span>
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
