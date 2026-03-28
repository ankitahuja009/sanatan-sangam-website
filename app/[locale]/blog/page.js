import Link from 'next/link';
import styles from './blog.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'ब्लॉग — सनातन धर्म लेख, अंतर्दृष्टि और आध्यात्मिक ज्ञान' : 'Blog — Sanatan Dharma Articles, Insights & Spiritual Wisdom',
    description: isHi
      ? 'सनातन धर्म, हनुमान चालीसा के लाभ, 12 ज्योतिर्लिंग, भगवद गीता के पाठ, हिंदू उपवास, तुलसी के पौधे, सुबह के अनुष्ठान और वैदिक ज्ञान पर विशेषज्ञ लेख पढ़ें।'
      : 'Read expert articles on Sanatan Dharma, Hanuman Chalisa benefits, 12 Jyotirlingas, Bhagavad Gita lessons, Hindu fasting, Tulsi plant, morning rituals & Vedic wisdom.',
    keywords: [
      'sanatan dharma blog', 'Hindu articles', 'spiritual wisdom', 'Hanuman Chalisa benefits',
      '12 Jyotirlingas guide', 'Bhagavad Gita lessons', 'Hindu fasting benefits', 'ayurveda articles',
      'Panchang explained', 'Hindu meditation', 'Sanatan Sangam blog'
    ],
    openGraph: {
      title: isHi ? 'सनातन संगम ब्लॉग — आध्यात्मिक ज्ञान और सनातन धर्म अंतर्दृष्टि' : 'Sanatan Sangam Blog — Spiritual Wisdom & Sanatan Dharma Insights',
      description: isHi
        ? 'हनुमान चालीसा, 12 ज्योतिर्लिंग, भगवद गीता, हिंदू अनुष्ठान, पंचांग, वैदिक ज्योतिष और आयुर्वेद पर विशेषज्ञ लेख। सनातन संगम पर पढ़ें।'
        : 'Expert articles on Hanuman Chalisa, 12 Jyotirlingas, Bhagavad Gita, Hindu rituals, Panchang, Vedic astrology & Ayurveda. Read on Sanatan Sangam.',
      url: isHi ? 'https://sanatan-sangam.com/hi/blog' : 'https://sanatan-sangam.com/blog',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    twitter: {
      title: isHi ? 'आध्यात्मिक ज्ञान ब्लॉग | सनातन संगम' : 'Spiritual Wisdom Blog | Sanatan Sangam',
      description: isHi
        ? 'सनातन धर्म, हनुमान चालीसा, ज्योतिर्लिंग, भगवद गीता और हिंदू जीवन शैली प्रथाओं पर गहन लेख पढ़ें।'
        : 'Read in-depth articles on Sanatan Dharma, Hanuman Chalisa, Jyotirlingas, Bhagavad Gita & Hindu lifestyle practices.',
    },
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/blog' : 'https://sanatan-sangam.com/blog',
      languages: {
        'en': 'https://sanatan-sangam.com/blog',
        'hi': 'https://sanatan-sangam.com/hi/blog',
        'x-default': 'https://sanatan-sangam.com/blog',
      },
    },
  };
}

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
                            <Link key={i} href={`/blog/${a.slug}`} className={styles.articleCard} style={{ textDecoration: 'none', display: 'block' }}>
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
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
