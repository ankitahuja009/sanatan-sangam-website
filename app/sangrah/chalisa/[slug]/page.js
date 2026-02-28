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
    const { slug } = await params;
    const chalisa = getChalisaBySlug(slug);
    if (!chalisa) return {};
    return {
        title: `${chalisa.name} — Full Lyrics in Hindi | ${chalisa.deity} Chalisa`,
        description: chalisa.description.slice(0, 160),
        keywords: [chalisa.name, `${chalisa.deity} chalisa`, 'chalisa lyrics in hindi', 'hindu chalisa'],
        openGraph: {
            title: `${chalisa.name} — ${chalisa.deity} Chalisa`,
            description: chalisa.description.slice(0, 160),
            url: `https://sanatan-sangam.com/sangrah/chalisa/${chalisa.slug}`,
            images: [{ url: chalisa.deityImage }],
        },
    };
}

export default async function ChalisaDetailPage({ params }) {
    const { slug } = await params;
    const chalisa = getChalisaBySlug(slug);
    if (!chalisa) notFound();

    const recommended = getRecommendedChalisas(slug, 4);
    const pageUrl = `https://sanatan-sangam.com/sangrah/chalisa/${chalisa.slug}`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${chalisa.name} — ${chalisa.deity} Chalisa Lyrics`,
        description: chalisa.description,
        dateModified: chalisa.updatedAt,
        author: { '@type': 'Person', name: chalisa.author },
        publisher: { '@type': 'Organization', name: 'Sanatan Sangam' },
        image: chalisa.deityImage,
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
                    <Link href="/sangrah/chalisa" className={styles.backLink}>← All Chalisas</Link>
                    <div className={styles.detailHeroInner}>
                        <div className={styles.detailThumb}>
                            <Image
                                src={chalisa.deityImage}
                                alt={chalisa.deity}
                                width={120}
                                height={120}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.detailMeta}>
                            <h1>{chalisa.name}</h1>
                            <p className={styles.detailDeity}>📿 {chalisa.deity} Chalisa</p>
                            <p className={styles.detailDate}>
                                By {chalisa.author} • Updated {new Date(chalisa.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAIL CONTENT */}
            <div className={styles.detailContent}>
                {/* Description */}
                <div className={styles.descBox}>
                    <h2>About {chalisa.name}</h2>
                    <p>{chalisa.description}</p>
                </div>

                {/* Lyrics */}
                <div className={styles.lyricsBox}>
                    <h2>📿 {chalisa.name} — Lyrics in Hindi</h2>
                    <div className={styles.lyricsText}>{chalisa.lyrics}</div>
                </div>

                {/* Benefits */}
                <div className={styles.benefitsBox}>
                    <h2>Benefits of Reciting {chalisa.name}</h2>
                    <ul className={styles.benefitsList}>
                        {chalisa.benefits.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>
                </div>

                {/* Share Buttons */}
                <ShareButtons chalisa={chalisa} pageUrl={pageUrl} />

                {/* Recommended */}
                <div className={styles.recommendedSection}>
                    <h2>Recommended Chalisas</h2>
                    <div className={styles.recommendedGrid}>
                        {recommended.map((rec) => (
                            <Link
                                key={rec.slug}
                                href={`/sangrah/chalisa/${rec.slug}`}
                                className={styles.aartiCard}
                            >
                                <div className={styles.cardThumb}>
                                    <Image
                                        src={rec.deityImage}
                                        alt={`${rec.deity} Chalisa`}
                                        width={300}
                                        height={188}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div className={styles.cardLabel}>
                                        <span className={styles.cardLabelDeity}>{rec.deity} Chalisa</span>
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
