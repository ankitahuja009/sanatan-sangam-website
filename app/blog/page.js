import Link from 'next/link';
import styles from './blog.module.css';

export const metadata = {
    title: 'Blog — Sanatan Dharma Articles, Insights & Spiritual Wisdom',
    description:
        'Read articles on Sanatan Dharma, Hindu philosophy, temple histories, festival guides, yoga & meditation, Ayurveda tips, and spiritual living.',
    keywords: ['sanatan dharma blog', 'hindu articles', 'spiritual wisdom', 'yoga blog', 'ayurveda articles', 'hindu philosophy'],
};

const articles = [
    {
        slug: 'significance-of-om',
        title: 'The Significance of Om (ॐ) — The Primordial Sound',
        excerpt: 'Om is not just a symbol — it is the very fabric of the universe. Discover the deep vedic science behind the most sacred syllable in Hinduism.',
        category: 'Philosophy',
        readTime: '5 min',
        date: '2026-02-15',
    },
    {
        slug: 'benefits-of-hanuman-chalisa',
        title: '7 Powerful Benefits of Reciting Hanuman Chalisa Daily',
        excerpt: 'From removing fear to building courage — learn why millions recite the Hanuman Chalisa every day and the spiritual science behind its 40 verses.',
        category: 'Practice',
        readTime: '6 min',
        date: '2026-02-10',
    },
    {
        slug: 'panchang-explained',
        title: 'Hindu Panchang Explained — Understanding Tithi, Nakshatra & Yoga',
        excerpt: 'A complete guide to the Hindu Panchang calendar system — learn how Tithi, Nakshatra, Vaar, Yoga, and Karana influence daily life.',
        category: 'Knowledge',
        readTime: '8 min',
        date: '2026-02-05',
    },
    {
        slug: 'morning-rituals-sanatan-dharma',
        title: 'The Sacred Morning Routine — Dincharya in Sanatan Dharma',
        excerpt: 'From Brahma Muhurta to Surya Namaskar — an ancient morning routine that can transform your physical, mental, and spiritual health.',
        category: 'Lifestyle',
        readTime: '7 min',
        date: '2026-01-28',
    },
    {
        slug: 'temples-of-12-jyotirlingas',
        title: 'The 12 Jyotirlingas — Complete Guide to India\'s Most Sacred Shiva Temples',
        excerpt: 'Explore the divine significance, location, and mythology behind the 12 Jyotirlingas — the holiest Shiva temples in India.',
        category: 'Temples',
        readTime: '10 min',
        date: '2026-01-20',
    },
    {
        slug: 'bhagavad-gita-key-lessons',
        title: '10 Life-Changing Lessons from the Bhagavad Gita for Modern Life',
        excerpt: 'Timeless wisdom from Lord Krishna to Arjuna — practical lessons on duty, detachment, action, and finding inner peace in everyday life.',
        category: 'Philosophy',
        readTime: '9 min',
        date: '2026-01-15',
    },
    {
        slug: 'tulsi-plant-benefits',
        title: 'Why Every Hindu Home Has a Tulsi Plant — Spiritual & Health Benefits',
        excerpt: 'Tulsi (Holy Basil) is worshipped in Hinduism and revered in Ayurveda. Discover its spiritual significance and scientifically proven health benefits.',
        category: 'Ayurveda',
        readTime: '5 min',
        date: '2026-01-10',
    },
    {
        slug: 'meditation-for-beginners',
        title: 'Dhyana: A Beginner\'s Guide to Hindu Meditation Techniques',
        excerpt: 'From mantra meditation to Trataka — explore ancient Hindu meditation techniques that calm the mind, reduce stress, and awaken spiritual consciousness.',
        category: 'Practice',
        readTime: '7 min',
        date: '2026-01-05',
    },
    {
        slug: 'significance-of-fasting-vrat',
        title: 'The Science Behind Hindu Fasting (Vrat) — Monday, Thursday & Ekadashi',
        excerpt: 'Hindu fasting isn\'t just spiritual — it has deep health benefits. Learn why millions observe Vrat on specific days and the Ayurvedic wisdom behind it.',
        category: 'Knowledge',
        readTime: '6 min',
        date: '2025-12-28',
    },
];

const categories = ['All', 'Philosophy', 'Practice', 'Knowledge', 'Temples', 'Lifestyle', 'Ayurveda'];

export default function BlogPage() {
    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>📝 Sanatan Sangam Blog</span>
                    <h1>Spiritual Wisdom & Insights</h1>
                    <p className={styles.heroDesc}>
                        Articles on Sanatan Dharma, Hindu philosophy, temple histories, festival guides,
                        yoga, meditation, Ayurveda, and spiritual living.
                    </p>
                </div>
            </section>

            <section className={styles.blogContent}>
                <div className="container">
                    <div className={styles.categories}>
                        {categories.map((c, i) => (
                            <span key={i} className={`${styles.categoryChip} ${i === 0 ? styles.active : ''}`}>{c}</span>
                        ))}
                    </div>

                    <div className={styles.articleGrid}>
                        {articles.map((a, i) => (
                            <article key={i} className={styles.articleCard}>
                                <div className={styles.articleMeta}>
                                    <span className={styles.articleCategory}>{a.category}</span>
                                    <span className={styles.articleTime}>{a.readTime} read</span>
                                </div>
                                <h3 className={styles.articleTitle}>{a.title}</h3>
                                <p className={styles.articleExcerpt}>{a.excerpt}</p>
                                <div className={styles.articleFooter}>
                                    <span className={styles.articleDate}>{new Date(a.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                    <span className={styles.articleArrow}>Read →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
