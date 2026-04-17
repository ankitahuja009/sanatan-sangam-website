import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '../../../../i18n/routing';
import { getTempleById, getAllTemples } from '../../../../lib/templesData';

export async function generateMetadata({ params }) {
    const { id, locale } = await params;
    setRequestLocale(locale);
    const temple = getTempleById(id);
    if (!temple) return { title: 'Not Found' };

    const name = temple.name;
    const location = temple.location;

    return {
        title: `${name} Live Darshan - Watch Online | Sanatan Sangam`,
        description: temple.desc || `Watch the live stream of ${name} located in ${location}. ${temple.schedule || ''}`,
        openGraph: {
            title: `${name} Live Darshan`,
            description: temple.desc || `Watch the live stream of ${name} in ${location}.`,
            images: [{ url: `https://sanatansangam.com${temple.image}` }]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${name} Live Darshan`,
            description: temple.desc || `Watch the live stream of ${name} in ${location}.`,
        }
    };
}

export function generateStaticParams() {
    return getAllTemples().map((temple) => ({ id: temple.id }));
}

export default async function TempleDetailPage({ params }) {
    const { locale, id } = await params;
    setRequestLocale(locale);
    const temple = getTempleById(id);
    if (!temple) notFound();

    const t = await getTranslations({ locale, namespace: 'darshanPage' });

    const tabLabel = temple.category === 'katha' ? 'Katha' :
                     temple.category === 'satsang' ? 'Satsang' : 'Mandir';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': ['Place', 'LandmarksOrHistoricalBuildings'],
        name: temple.name,
        description: temple.desc || `Watch live darshan of ${temple.name}`,
        image: `https://sanatansangam.com${temple.image}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: temple.location,
            addressRegion: temple.state || '',
            addressCountry: 'IN'
        },
        ...(temple.religion && { additionalType: `https://schema.org/${temple.religion}` })
    };

    return (
        <div style={{ backgroundColor: '#0f0f14', color: '#fff', minHeight: '100vh', paddingBottom: '5rem' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Banner */}
            <div style={{ position: 'relative', width: '100%', height: '420px' }}>
                <Image
                    src={temple.image}
                    alt={`${temple.name} live darshan`}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, #0f0f14 15%, rgba(15,15,20,0.5) 55%, transparent 100%)'
                }} />
                <div style={{ position: 'absolute', top: '1.5rem', left: 0, right: 0, padding: '0 1.5rem' }}>
                    <div className="container">
                        <Link href="/darshan" style={{ color: '#fbbf24', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                            ← Back to Darshan
                        </Link>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, padding: '0 1.5rem' }}>
                    <div className="container">
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
                            <span style={{
                                background: temple.live ? '#dc2626' : '#4b5563',
                                padding: '0.3rem 0.85rem',
                                borderRadius: '9999px',
                                fontWeight: 700,
                                fontSize: '0.8rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                letterSpacing: '0.05em'
                            }}>
                                {temple.live && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', display: 'inline-block' }} />}
                                {temple.live ? t('liveLabel') : t('offlineLabel')}
                            </span>
                            <span style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid #fbbf24', color: '#fbbf24', padding: '0.3rem 0.85rem', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                                {tabLabel}
                            </span>
                            {temple.state && (
                                <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>
                                    {temple.state}
                                </span>
                            )}
                        </div>
                        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '0 0 0.4rem', lineHeight: 1.1, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                            {temple.name}
                        </h1>
                        <p style={{ color: '#d1d5db', fontSize: '1.1rem', margin: 0 }}>
                            📍 {temple.location}{temple.state ? `, ${temple.state}` : ''}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container" style={{ marginTop: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '3rem' }}>

                    {/* Left — Description + Timings */}
                    <div>
                        <h2 style={{ color: '#fbbf24', borderBottom: '1px solid #1f2937', paddingBottom: '0.75rem', marginTop: 0, marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                            About {temple.name}
                        </h2>
                        <p style={{ lineHeight: 1.9, fontSize: '1.05rem', color: '#d1d5db', marginTop: 0 }}>
                            {temple.desc || `${temple.name} streams live darshan for devotees worldwide through Sanatan Sangam. Located in ${temple.location}, it offers ${temple.schedule || 'regular darshan'}.`}
                        </p>

                        {/* Schedule Card */}
                        <div style={{ marginTop: '2.5rem', padding: '1.75rem', background: '#1a1a24', borderRadius: '1rem', border: '1px solid #1f2937' }}>
                            <h3 style={{ color: '#fbbf24', margin: '0 0 1rem', fontSize: '1.2rem' }}>
                                {t('darshanTimings')}
                            </h3>
                            <p style={{ margin: 0, fontSize: '1.1rem', color: '#e5e7eb', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.3rem' }}>⏰</span>
                                <span>{temple.schedule || 'Schedule subject to availability'}</span>
                            </p>
                        </div>
                    </div>

                    {/* Right — Timetable + CTA */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Timetable */}
                        <div style={{ background: '#1a1a24', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #1f2937' }}>
                            <h3 style={{ color: '#fff', margin: '0 0 1.25rem', fontSize: '1.1rem', borderBottom: '1px solid #1f2937', paddingBottom: '0.75rem' }}>
                                {t('todaySchedule')}
                            </h3>
                            {temple.timetable && temple.timetable.length > 0 ? (
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {temple.timetable.map((item, i) => (
                                        <li key={i} style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            padding: '0.75rem 0',
                                            borderBottom: i !== temple.timetable.length - 1 ? '1px solid #1f2937' : 'none',
                                            gap: '1rem'
                                        }}>
                                            <span style={{ color: '#d1d5db', fontSize: '0.925rem' }}>{item.n}</span>
                                            <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{item.t}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                                    Detailed timetable is available in the Sanatan Sangam app.
                                </p>
                            )}
                        </div>

                        {/* Download CTA */}
                        <div style={{
                            background: 'linear-gradient(135deg, #d97706, #b45309)',
                            padding: '1.75rem',
                            borderRadius: '1rem',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                            <h3 style={{ color: '#fff', margin: '0 0 0.5rem', fontSize: '1.1rem' }}>Watch Live on the App</h3>
                            <p style={{ color: '#fef3c7', marginBottom: '1.25rem', fontSize: '0.9rem', lineHeight: 1.5 }}>
                                Seamless ad-free darshan in 11 Indian languages
                            </p>
                            <Link href="/#download" style={{
                                display: 'block',
                                background: '#fff',
                                color: '#b45309',
                                padding: '0.85rem',
                                borderRadius: '0.5rem',
                                fontWeight: 700,
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.07em'
                            }}>
                                {t('downloadApp')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @media (max-width: 768px) {
                    div[style*="grid-template-columns"] {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                }
            ` }} />
        </div>
    );
}
