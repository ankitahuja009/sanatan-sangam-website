'use client';
import SEOFooter from '../components/SEOFooter';
import ArtmateCarousel from '../components/ArtmateCarousel';
import styles from './page.module.css';
import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();
  const heroT = useTranslations('hero');
  const featuresT = useTranslations('features');
  const sangrahT = useTranslations('sangrah');
  const statsT = useTranslations('stats');
  const downloadT = useTranslations('download');
  const socialT = useTranslations('social');
  const appT = useTranslations('app');

  const features = [
    {
      image: '/images/features/darshan.png',
      title: featuresT('darshan.title'),
      desc: featuresT('darshan.desc'),
      href: '/darshan',
      accent: '#E34234',
    },
    {
      image: '/images/features/art.png',
      title: featuresT('divyaChhavi.title'),
      desc: featuresT('divyaChhavi.desc'),
      href: '/art',
      accent: '#FFD700',
    },
    {
      image: '/images/features/music.png',
      title: featuresT('music.title'),
      desc: featuresT('music.desc'),
      href: '/music',
      accent: '#E8548C',
    },
    {
      image: '/images/features/wishmate.png',
      title: featuresT('wishmate.title'),
      desc: featuresT('wishmate.desc'),
      href: '/wish',
      accent: '#FF6B35',
    },
    {
      image: '/images/features/astro.png',
      title: featuresT('astro.title'),
      desc: featuresT('astro.desc'),
      href: '/astro',
      accent: '#0A2E5C',
    },
    {
      image: '/images/features/tunemate.png',
      title: featuresT('tunemate.title'),
      desc: featuresT('tunemate.desc'),
      href: '/art',
      accent: '#8B1A1A',
    },
  ];

  const sangrahCards = [
    { image: '/images/sangrah/aarti.png', title: 'Aarti', desc: 'Complete collection of sacred aartis with lyrics & audio', href: '/sangrah/aarti', color: '#FFF8E1' },
    { image: '/images/sangrah/chalisa.png', title: 'Chalisa', desc: 'Full text of all popular chalisas — Hanuman, Shiv, Durga & more', href: '/sangrah/chalisa', color: '#EFEBE9' },
    { image: '/images/sangrah/mantra.png', title: 'Mantra', desc: 'Powerful mantras for peace, prosperity & spiritual growth', href: '/sangrah/mantra', color: '#E3F2FD' },
    { image: '/images/sangrah/ayurveda.png', title: 'Ayurvedic Remedies', desc: 'Ancient wisdom for modern wellness — home remedies that work', href: '/sangrah/ayurveda', color: '#F1F8E9' },
    { image: '/images/sangrah/festivals.png', title: 'Festival Guide', desc: 'Complete guide to Hindu festivals — dates, rituals & significance', href: '/sangrah/festivals', color: '#FCE4EC' },
    { image: '/images/sangrah/deities.png', title: 'Deity Encyclopedia', desc: 'Explore the stories, mantras & temples of 30+ deities', href: '/sangrah/deities', color: '#F3E5F5' },
  ];

  const stats = [
    { number: '50+', label: statsT('templeStreams') },
    { number: '200+', label: statsT('devotionalSongs') },
    { number: '30+', label: statsT('deitiesGurus') },
    { number: '11', label: statsT('indianLanguages') },
  ];

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroMandala}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot}></span>
            {appT('launchBadge')}
          </div>
          <h1 className={styles.heroTitle}>
            {(() => {
              const parts = heroT('title', { highlight: '|||' }).split('|||');
              return (<>{parts[0]}<span className={styles.heroHighlight}>{heroT('highlight')}</span>{parts[1]}</>);
            })()}
          </h1>
          <p className={styles.heroSubtitle}>
            {heroT('subtitle')}
          </p>
          <div className={styles.heroCtas}>
            <a href="#download" className="btn btn-primary">
              📱 {appT('getApp')}
            </a>
            <a href="#features" className="btn btn-secondary">
              {appT('exploreFeatures')} ↓
            </a>
          </div>
          <div className={styles.heroLanguages}>
            {heroT('languages')}
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
            <span className="section-label">✦ {featuresT('sectionLabel')}</span>
            <h2>{featuresT('title')}</h2>
            <p>{featuresT('subtitle')}</p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <Link href={f.href} key={i} className={styles.featureCard}>
                <div className={styles.featureImageWrap} style={{ '--accent': f.accent }}>
                  <img src={f.image} alt={f.title} className={styles.featureImage} />
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  <span className={styles.featureArrow}>EXPLORE →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SANGRAH (Content Library) ============ */}
      <section className={styles.sangrah}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">📚 {sangrahT('sectionLabel')}</span>
            <h2>{sangrahT('title')}</h2>
            <p>{sangrahT('subtitle')}</p>
          </div>
          <div className={styles.sangrahGrid}>
            {sangrahCards.map((card, i) => (
              <Link href={card.href} key={i} className={styles.sangrahCard}>
                <div className={styles.sangrahImageWrap} style={{ backgroundColor: card.color }}>
                  <img src={card.image} alt={card.title} className={styles.sangrahImage} />
                </div>
                <div className={styles.sangrahContent}>
                  <h4 className={styles.sangrahTitle}>{card.title}</h4>
                  <p className={styles.sangrahDesc}>{card.desc}</p>
                  <span className={styles.readMore}>Read All →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DIVYA CHHAVI SHOWCASE ============ */}
      <section className={styles.showcase}>
        <div className={`container ${styles.showcaseInner}`}>
          <div className={styles.showcaseText}>
            <span className="section-label">✨ Divya Chhavi — Digital Sacred Art</span>
            <h2>See Yourself in the Divine Light</h2>
            <p>
              Our Digital Artmate creates stunning portraits of you with your beloved
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
                <ArtmateCarousel />
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
            <span className="section-label">🎵 {featuresT('music.title')}</span>
            <h2>{featuresT('music.title')}</h2>
            <p>{featuresT('music.desc')}</p>
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
              <span className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span>
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
              <span className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </span>
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
              <span className={styles.socialIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </span>
              <h4>YouTube</h4>
              <p>@SanatanSangamMusic</p>
              <span className={styles.socialFollow}>Subscribe →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ QUICK LINKS (SEO) ============ */}
      <SEOFooter />

      {/* ============ DOWNLOAD CTA ============ */}
      <section className={styles.downloadSection} id="download">
        <div className={`container ${styles.downloadInner}`}>
          <div className={styles.downloadContent}>
            <h2>{downloadT('title')}</h2>
            <p className={styles.downloadSubtitle}>
              {downloadT('subtitle')}
            </p>
            <div className={styles.downloadButtons}>
              <a href="https://play.google.com/store/apps/details?id=com.sanatansangam" target="_blank" rel="noopener noreferrer" className={styles.storeBtnWrap}>
                <img src="/google-play-badge.svg" alt="Get it on Google Play" className={styles.storeBadgeImg} />
              </a>
              <a href="https://apps.apple.com/us/app/sanatan-sangam/id6760002994" target="_blank" rel="noopener noreferrer" className={styles.storeBtnWrap}>
                <img src="/app-store-badge.svg" alt="Download on the App Store" className={styles.storeBadgeImg} />
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
