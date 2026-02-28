'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCelestialTimings, getMonthlyCelestialTimings, CITIES } from '@/lib/celestial';
import styles from './CelestialPage.module.css';

export default function CelestialPage({ params }) {
    const { type, city: cityParam } = use(params);
    const city = CITIES.find(c => c.name.toLowerCase() === cityParam.toLowerCase());

    if (!city) return notFound();

    const timings = getCelestialTimings(new Date(), city);
    const monthly = getMonthlyCelestialTimings(new Date(), city);

    const nextMonthDate = new Date();
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    const nextMonthly = getMonthlyCelestialTimings(nextMonthDate, city);

    const isSunPage = type === 'sunrise-sunset';
    const mainTitle = isSunPage ? `Sunrise & Sunset in ${city.name}` : `Moonrise & Moonset in ${city.name}`;

    // WhatsApp URL
    const shareUrl = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : "";
    const waText = `Check today's auspicious timings for ${city.name} on Sanatan Sangam: `;
    const whatsappLink = `https://api.whatsapp.com/send?text=${waText}${shareUrl}`;

    return (
        <div className={styles.page}>
            {/* Celestial Banner with a powerful sunrise gradient & temple silhouette */}
            <div className={isSunPage ? styles.bannerSun : styles.bannerMoon}>
                <div className={`container ${styles.bannerInner}`}>
                    <div className={styles.bannerContent}>
                        <span className={styles.badge}>{timings.date}</span>
                        <h1>{mainTitle}</h1>
                        <p>Detailed astronomical timings for spiritual success and daily rituals in {city.name}.</p>
                    </div>
                </div>
                {/* Decorative Sun/Moon */}
                <div className={styles.bannerGraphic}>
                    {isSunPage ? '☀️' : '🌙'}
                </div>
            </div>

            <div className="container">
                <div className={styles.mainLayout}>
                    {/* Left: Monthly Table (Redesigned matching screenshot) */}
                    <div className={styles.contentColumn}>

                        <div className={styles.monthlyListHeader}>
                            <div className={styles.monthHeader}>
                                <span className={styles.bar}></span>
                                <h2>{monthly.monthName}</h2>
                            </div>
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.waButton} title="Share on WhatsApp">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                            </a>
                        </div>

                        <div className={styles.dayTable}>
                            {monthly.days.map((day) => (
                                <div key={day.day} className={`${styles.dayCard} ${day.isToday ? styles.todayCard : ''}`}>
                                    <div className={styles.dayInfo}>
                                        <span className={styles.dayShortName}>{day.dayName}</span>
                                        <span className={styles.dayBigNumber}>{day.day}</span>
                                    </div>

                                    <div className={styles.timingItem}>
                                        <span className={styles.icon}>🌅</span>
                                        <div className={styles.tContent}>
                                            <span className={styles.label}>Sunrise</span>
                                            <span className={styles.value}>{day.sunrise.toLowerCase()}</span>
                                        </div>
                                    </div>

                                    <div className={styles.timingItem}>
                                        <span className={styles.icon}>🌇</span>
                                        <div className={styles.tContent}>
                                            <span className={styles.label}>Sunset</span>
                                            <span className={styles.value}>{day.sunset.toLowerCase()}</span>
                                        </div>
                                    </div>

                                    <div className={styles.timingItem}>
                                        <span className={styles.icon}>🌙</span>
                                        <div className={styles.tContent}>
                                            <span className={styles.label}>Moonrise</span>
                                            <span className={styles.value}>{day.moonrise.toLowerCase()}</span>
                                        </div>
                                    </div>

                                    <div className={styles.timingItem}>
                                        <span className={styles.icon}>🌚</span>
                                        <div className={styles.tContent}>
                                            <span className={styles.label}>Moonset</span>
                                            <span className={styles.value}>{day.moonset.toLowerCase()}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Upcoming Month Collapsed Section */}
                        <details className={styles.collapsibleSection}>
                            <summary className={styles.collapsibleSummary}>
                                Upcoming: {nextMonthly.monthName}
                            </summary>
                            <div className={styles.collapsibleContent}>
                                <div className={styles.dayTable}>
                                    {nextMonthly.days.map((day) => (
                                        <div key={day.day} className={`${styles.dayCard} ${day.isToday ? styles.todayCard : ''}`}>
                                            <div className={styles.dayInfo}>
                                                <span className={styles.dayShortName}>{day.dayName}</span>
                                                <span className={styles.dayBigNumber}>{day.day}</span>
                                            </div>

                                            <div className={styles.timingItem}>
                                                <span className={styles.icon}>🌅</span>
                                                <div className={styles.tContent}>
                                                    <span className={styles.label}>Sunrise</span>
                                                    <span className={styles.value}>{day.sunrise.toLowerCase()}</span>
                                                </div>
                                            </div>

                                            <div className={styles.timingItem}>
                                                <span className={styles.icon}>🌇</span>
                                                <div className={styles.tContent}>
                                                    <span className={styles.label}>Sunset</span>
                                                    <span className={styles.value}>{day.sunset.toLowerCase()}</span>
                                                </div>
                                            </div>

                                            <div className={styles.timingItem}>
                                                <span className={styles.icon}>🌙</span>
                                                <div className={styles.tContent}>
                                                    <span className={styles.label}>Moonrise</span>
                                                    <span className={styles.value}>{day.moonrise.toLowerCase()}</span>
                                                </div>
                                            </div>

                                            <div className={styles.timingItem}>
                                                <span className={styles.icon}>🌚</span>
                                                <div className={styles.tContent}>
                                                    <span className={styles.label}>Moonset</span>
                                                    <span className={styles.value}>{day.moonset.toLowerCase()}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* Right Column: Key Timings (Replacing legacy articles) */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3>Auspicious Muhurtas</h3>
                            <p className={styles.cityContext}>Today in {city.name}</p>

                            <div className={styles.muhurtaItem}>
                                <span className={styles.mLabel}>ABHIJEET MUHURTA</span>
                                <span className={styles.mValue}>{timings.muhurtas.abhijeet}</span>
                            </div>

                            <div className={styles.muhurtaItem}>
                                <span className={styles.mLabel}>GULIK KAAL</span>
                                <span className={styles.mValue}>{timings.muhurtas.gulikkaal}</span>
                            </div>

                            <div className={styles.muhurtaItem}>
                                <span className={`${styles.mLabel} ${styles.negative}`}>RAHU KAAL</span>
                                <span className={`${styles.mValue} ${styles.negative}`}>{timings.muhurtas.rahukal}</span>
                            </div>
                        </div>

                        <div className={styles.appPromo}>
                            <span>SANATAN SANGAM APP</span>
                            <h4>Your Spiritual Companion</h4>
                            <p>Daily Panchang, Live Darshan, Audio Bhajans & more.</p>
                            <Link href="/#download" className={styles.promoBtn}>Download Now</Link>
                        </div>
                    </aside>
                </div>

                <div className={styles.locationJump}>
                    <h3>Check timings for other cities</h3>
                    <div className={styles.cityGrid}>
                        {CITIES.map(c => (
                            <Link
                                key={c.name}
                                href={`/panchang/${type}/${c.name.toLowerCase()}`}
                                className={`${styles.cityLink} ${c.name === city.name ? styles.activeCity : ''}`}
                            >
                                {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
