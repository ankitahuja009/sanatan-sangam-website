import styles from '../../components/subpage.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';
  return {
    title: isHi ? 'गोपनीयता नीति | सनातन संगम' : 'Privacy Policy | Sanatan Sangam',
    description: isHi ? 'सनातन संगम ऐप और वेबसाइट के लिए गोपनीयता नीति।' : 'Privacy Policy for Sanatan Sangam app and website.',
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/privacy-policy' : 'https://sanatan-sangam.com/privacy-policy',
      languages: {
        'en': 'https://sanatan-sangam.com/privacy-policy',
        'hi': 'https://sanatan-sangam.com/hi/privacy-policy',
      },
    },
  };
}

export default function PrivacyPolicy() {
    return (
        <>
            <section className={styles.hero} style={{ padding: '48px 0 32px' }}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Privacy Policy</h1>
                    <p className={styles.heroDesc}>Last updated: February 2026</p>
                </div>
            </section>
            <section className="section" style={{ background: 'var(--cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', fontSize: '0.95rem', color: 'var(--brown-mid)' }}>
                        <div>
                            <h3>1. Information We Collect</h3>
                            <p>We collect information you provide directly, such as your name, phone number, date of birth, gender, city, and family relation details when you create a profile. We also collect usage data to improve your experience.</p>
                        </div>
                        <div>
                            <h3>2. How We Use Your Information</h3>
                            <p>We use your information to provide personalized spiritual experiences including horoscopes, blessings, and AI-generated content. Your data helps us improve app features and deliver relevant content in your preferred language.</p>
                        </div>
                        <div>
                            <h3>3. Data Security</h3>
                            <p>We implement industry-standard security measures to protect your personal data. Your information is stored securely using encrypted databases and secure authentication protocols.</p>
                        </div>
                        <div>
                            <h3>4. Third-Party Services</h3>
                            <p>We use third-party services for payment processing (Razorpay), analytics, and AI content generation. These services have their own privacy policies governing the use of your information.</p>
                        </div>
                        <div>
                            <h3>5. Contact Us</h3>
                            <p>For privacy-related questions, contact us at <a href="mailto:hi@askyourguide.ai" style={{ color: 'var(--saffron)' }}>hi@askyourguide.ai</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
