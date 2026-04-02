import styles from '../../components/subpage.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';
  return {
    title: isHi ? 'उपयोग की शर्तें | सनातन संगम' : 'Terms of Use | Sanatan Sangam',
    description: isHi ? 'सनातन संगम ऐप और वेबसाइट के लिए उपयोग की शर्तें।' : 'Terms of Use for Sanatan Sangam app and website.',
    alternates: {
      canonical: isHi ? 'https://www.sanatan-sangam.com/hi/terms-of-use' : 'https://www.sanatan-sangam.com/terms-of-use',
      languages: {
        'en': 'https://www.sanatan-sangam.com/terms-of-use',
        'hi': 'https://www.sanatan-sangam.com/hi/terms-of-use',
      },
    },
  };
}

export default function TermsOfUse() {
    return (
        <>
            <section className={styles.hero} style={{ padding: '48px 0 32px' }}>
                <div className={`container ${styles.heroContent}`}>
                    <h1 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)' }}>Terms of Use</h1>
                    <p className={styles.heroDesc}>Last updated: February 2026</p>
                </div>
            </section>
            <section className="section" style={{ background: 'var(--cream)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8', fontSize: '0.95rem', color: 'var(--brown-mid)' }}>
                        <div>
                            <h3>1. Acceptance of Terms</h3>
                            <p>By using Sanatan Sangam, you agree to be bound by these Terms of Use. If you do not agree, please do not use our services.</p>
                        </div>
                        <div>
                            <h3>2. Service Description</h3>
                            <p>Sanatan Sangam provides devotional content, AI-generated spiritual art, music streaming, horoscopes, and e-commerce services. Features may require coins or subscription.</p>
                        </div>
                        <div>
                            <h3>3. User Conduct</h3>
                            <p>You agree to use the app respectfully and not misuse any AI features to generate inappropriate content. All generated content is for personal, non-commercial use.</p>
                        </div>
                        <div>
                            <h3>4. Virtual Currency (Coins)</h3>
                            <p>Coins are virtual currency used within the app. They have no real-world monetary value and are non-refundable once purchased.</p>
                        </div>
                        <div>
                            <h3>5. Intellectual Property</h3>
                            <p>All content, designs, and features of Sanatan Sangam are protected by intellectual property laws. AI-generated content is provided for personal use only.</p>
                        </div>
                        <div>
                            <h3>6. Contact</h3>
                            <p>For inquiries, contact us at <a href="mailto:hi@askyourguide.ai" style={{ color: 'var(--saffron)' }}>hi@askyourguide.ai</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
