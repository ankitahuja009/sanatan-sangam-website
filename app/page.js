import styles from './page.module.css';
import Link from 'next/link';

const features = [
  {
    icon: '🛕',
    title: 'Live Darshan',
    desc: '50+ temple live streams from across India — darshan anytime, anywhere',
    href: '/darshan',
    accent: '#E34234',
  },
  {
    icon: '✨',
    title: 'Divya Chhavi',
    desc: 'AI-powered divine portraits with your favorite deities & gurus',
    href: '/art',
    accent: '#FFD700',
  },
  {
    icon: '🎵',
    title: 'Devotional Music',
    desc: '200+ ad-free bhajans, aarti, mantras & chalisas for every mood',
    href: '/music',
    accent: '#E8548C',
  },
  {
    icon: '🙏',
    title: 'Wishmate',
    desc: 'Personalized AI blessings for birthdays, festivals & special occasions',
    href: '/wish',
    accent: '#FF6B35',
  },
  {
    icon: '🔮',
    title: 'Astro & Panchang',
    desc: 'Daily horoscope, Panchang, Kundli & zodiac predictions',
    href: '/astro',
    accent: '#0A2E5C',
  },
  {
    icon: '🎶',
    title: 'Tunemate',
    desc: 'Compose your own devotional bhajans with AI — your voice, your bhajan!',
    href: '/art',
    accent: '#8B1A1A',
  },
];

const sangrahCards = [
  { icon: '🪔', title: 'Aarti', desc: 'Complete collection of sacred aartis with lyrics & audio', href: '/sangrah/aarti' },
  { icon: '📜', title: 'Chalisa', desc: 'Full text of all popular chalisas — Hanuman, Shiv, Durga & more', href: '/sangrah/chalisa' },
  { icon: '🕉️', title: 'Mantra', desc: 'Powerful mantras for peace, prosperity & spiritual growth', href: '/sangrah/mantra' },
  { icon: '🌿', title: 'Ayurvedic Remedies', desc: 'Ancient wisdom for modern wellness — home remedies that work', href: '/sangrah/ayurveda' },
  { icon: '🎆', title: 'Festival Guide', desc: 'Complete guide to Hindu festivals — dates, rituals & significance', href: '/sangrah/festivals' },
  { icon: '🙏', title: 'Deity Encyclopedia', desc: 'Explore the stories, mantras & temples of 30+ deities', href: '/sangrah/deities' },
];

const stats = [
  { number: '50+', label: 'Temple Streams' },
  { number: '200+', label: 'Devotional Songs' },
  { number: '30+', label: 'Deities & Gurus' },
  { number: '11', label: 'Indian Languages' },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroMandala}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            Launching Soon on Play Store & App Store
          </div>
          <h1 className={styles.heroTitle}>
            Where <span className={styles.heroHighlight}>Sanatan</span> Meets You
          </h1>
          <p className={styles.heroSubtitle}>
            Experience divine darshan, devotional music, AI-powered spiritual art,
            personalized blessings & ancient wisdom — all in one sacred app.
          </p>
          <div className={styles.heroCtas}>
            <a href="#download" className="btn btn-primary">
              📱 Get the App
            </a>
            <a href="#features" className="btn btn-secondary">
              Explore Features ↓
            </a>
          </div>
          <div className={styles.heroLanguages}>
            Available in: Hindi • English • Tamil • Telugu • Kannada • Bengali • Malayalam • Marathi • Odia • Punjabi • Gujarati
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className={styles.heroDiya1}>🪔</div>
        <div className={styles.heroDiya2}>🪔</div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className={styles.statsBar}>
        <div className={`container ${styles.statsInner}`}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">✦ App Features</span>
            <h2>One App for Your Complete Spiritual Journey</h2>
            <p>From live temple darshan to AI-powered art — everything you need to deepen your connection with the divine.</p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <Link href={f.href} key={i} className={styles.featureCard}>
                <div className={styles.featureIconWrap} style={{ '--accent': f.accent }}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                </div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <span className={styles.featureArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SANGRAH (Content Library) ============ */}
      <section className={styles.sangrah}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">📚 Sangrah — Sacred Library</span>
            <h2>Timeless Wisdom at Your Fingertips</h2>
            <p>Explore our curated collection of aartis, chalisas, mantras, festival guides, and Ayurvedic wisdom.</p>
          </div>
          <div className={styles.sangrahGrid}>
            {sangrahCards.map((card, i) => (
              <Link href={card.href} key={i} className={styles.sangrahCard}>
                <span className={styles.sangrahIcon}>{card.icon}</span>
                <div>
                  <h4 className={styles.sangrahTitle}>{card.title}</h4>
                  <p className={styles.sangrahDesc}>{card.desc}</p>
                </div>
                <span className={styles.sangrahArrow}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIVYA CHHAVI SHOWCASE ============ */}
      <section className={styles.showcase}>
        <div className={`container ${styles.showcaseInner}`}>
          <div className={styles.showcaseText}>
            <span className="section-label">✨ Divya Chhavi — AI Sacred Art</span>
            <h2>See Yourself in the Divine Light</h2>
            <p>
              Our AI-powered Artmate creates stunning portraits of you with your beloved
              deities and gurus. Choose from Divya Chhavi for sacred portraits or
              Teerth Yatra for virtual visits to India&apos;s holiest destinations.
            </p>
            <ul className={styles.showcaseFeatures}>
              <li>🎨 Divya Chhavi — Portraits with 30+ Deities & Gurus</li>
              <li>🛕 Teerth Yatra — Visit sacred temples virtually</li>
              <li>📸 Multiple quality options — HD, 2K, 4K</li>
              <li>🖼️ Order premium frames from Uphar Store</li>
            </ul>
            <Link href="/art" className="btn btn-outline">
              Explore Artmate →
            </Link>
          </div>
          <div className={styles.showcaseVisual}>
            <div className={styles.showcaseGlow}></div>
            <div className={styles.showcaseMockup}>
              <div className={styles.mockupFrame}>
                <div className={styles.mockupContent}>
                  <span className={styles.mockupEmoji}>🕉️</span>
                  <p>Divya Chhavi</p>
                  <small>Your sacred portrait awaits</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WISHMATE SECTION ============ */}
      <section className={styles.wishSection}>
        <div className={`container ${styles.wishInner}`}>
          <div className={styles.wishVideo}>
            <div className={styles.wishVideoFrame}>
              <iframe
                src="https://www.youtube.com/embed/GFDaCbo0uDo"
                title="Wishmate - Personalized Blessings"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.wishIframe}
              ></iframe>
            </div>
          </div>
          <div className={styles.wishText}>
            <span className="section-label">🙏 Wishmate</span>
            <h2>Send Divine Blessings to Your Loved Ones</h2>
            <p>
              Create personalized blessing cards for birthdays, anniversaries, festivals,
              and every special occasion. Choose your deity, add a personal touch, and
              share divine wishes that truly move the heart.
            </p>
            <ul className={styles.showcaseFeatures}>
              <li>🎂 Birthday, Anniversary & Wedding blessings</li>
              <li>🪔 Festival-specific cards — Diwali, Holi, Navratri & more</li>
              <li>🙏 Personalized with names & deity of choice</li>
              <li>📱 Share instantly via WhatsApp, Instagram & more</li>
            </ul>
            <Link href="/wish" className="btn btn-outline">
              Explore Wishmate →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MUSIC PREVIEW ============ */}
      <section className={styles.musicSection}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">🎵 Devotional Music</span>
            <h2>200+ Sacred Tracks for Every Moment</h2>
            <p>Aarti, Bhajan, Mantra, Chalisa, Kirtan — stream ad-free in Hindi, English & regional languages.</p>
          </div>
          <div className={styles.musicCategories}>
            {['Aarti', 'Bhajan', 'Mantra', 'Chalisa', 'Kirtan', 'Stuti', 'Instrumental'].map((cat, i) => (
              <span key={i} className={styles.musicChip}>{cat}</span>
            ))}
          </div>
          <div className={styles.musicDeities}>
            {['🕉️ Shiva', '💙 Krishna', '🐒 Hanuman', '🪷 Lakshmi', '🔱 Durga', '🙏 Ram', '🐘 Ganesh', '🌅 Surya'].map((d, i) => (
              <span key={i} className={styles.deityChip}>{d}</span>
            ))}
          </div>
          <div className={styles.musicCta}>
            <Link href="/music" className="btn btn-primary">
              🎵 Browse Music Library
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CHATBOT SECTION ============ */}
      <section className={styles.chatbotSection}>
        <div className={`container ${styles.chatbotInner}`}>
          <div className={styles.chatbotText}>
            <span className="section-label">🤖 Sanatan Chatbot</span>
            <h2>Your AI Spiritual Guide</h2>
            <p>
              Ask questions about Sanatan Dharma, get interpretations of shlokas,
              learn about rituals, or simply have a meaningful spiritual conversation.
              Our AI chatbot is trained on authentic Vedic texts and scriptures.
            </p>
            <a
              href="#whatsapp-chatbot"
              className="btn btn-primary"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
          <div className={styles.chatbotVisual}>
            <div className={styles.chatBubble}>
              <div className={styles.chatQuestion}>
                <p>What is the significance of chanting Om Namah Shivaya?</p>
              </div>
              <div className={styles.chatAnswer}>
                <p>🕉️ Om Namah Shivaya is one of the most powerful mantras in Hinduism. It means &ldquo;I bow to Lord Shiva&rdquo; and is known as the Panchakshari Mantra...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SOCIAL SECTION ============ */}
      <section className={styles.socialSection}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">🌐 Join Our Community</span>
            <h2>Stay Connected with Sanatan Sangam</h2>
            <p>Follow us for daily spiritual content, updates, and bhajans.</p>
          </div>
          <div className={styles.socialGrid}>
            <a
              href="https://www.instagram.com/sanatansangam.official"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--social-color': '#E1306C' }}
            >
              <span className={styles.socialIcon}>📸</span>
              <h4>Instagram</h4>
              <p>@sanatansangam.official</p>
              <span className={styles.socialFollow}>Follow →</span>
            </a>
            <a
              href="https://www.facebook.com/people/Sanatan-Sangam/61586013304596/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--social-color': '#1877F2' }}
            >
              <span className={styles.socialIcon}>👍</span>
              <h4>Facebook</h4>
              <p>Sanatan Sangam</p>
              <span className={styles.socialFollow}>Follow →</span>
            </a>
            <a
              href="https://www.youtube.com/@SanatanSangamMusic"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{ '--social-color': '#FF0000' }}
            >
              <span className={styles.socialIcon}>▶️</span>
              <h4>YouTube</h4>
              <p>@SanatanSangamMusic</p>
              <span className={styles.socialFollow}>Subscribe →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ DOWNLOAD CTA ============ */}
      <section className={styles.downloadSection} id="download">
        <div className={`container ${styles.downloadInner}`}>
          <div className={styles.downloadContent}>
            <h2>Begin Your Sacred Journey Today</h2>
            <p className={styles.downloadSubtitle}>
              Join thousands of devotees experiencing the divine through Sanatan Sangam.
              Available in 11 Indian languages.
            </p>
            <div className={styles.downloadButtons}>
              <a href="#" className={styles.storeBtn}>
                <span className={styles.storeBtnIcon}>▶</span>
                <div>
                  <span className={styles.storeBtnSmall}>COMING SOON ON</span>
                  <span className={styles.storeBtnBig}>Google Play</span>
                </div>
              </a>
              <a href="#" className={styles.storeBtn}>
                <span className={styles.storeBtnIcon}>🍎</span>
                <div>
                  <span className={styles.storeBtnSmall}>COMING SOON ON</span>
                  <span className={styles.storeBtnBig}>App Store</span>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.downloadVisual}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <span className={styles.phoneEmoji}>🕉️</span>
                <p className={styles.phoneName}>Sanatan Sangam</p>
                <small className={styles.phoneTagline}>Where Sanatan Meets You</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
