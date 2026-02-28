'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from '../../../components/subpage.module.css';

const deities = [
    {
        icon: '🕉️', name: 'Lord Shiva (Mahadev)', nameHi: 'भगवान शिव (महादेव)', role: 'The Destroyer & Transformer', roleHi: 'विनाशक और संहारक',
        desc: 'Shiva is the supreme ascetic, the lord of meditation, the cosmic dancer (Nataraja), and the destroyer of evil. He resides on Mount Kailash with Parvati and is worshipped as the Lingam.',
        descHi: 'शिव परम तपस्वी, ध्यान के स्वामी, ब्रह्मांडीय नर्तक (नटराज) और बुराई के संहारक हैं। वे पार्वती के साथ कैलाश पर्वत पर निवास करते हैं और लिंग के रूप में उनकी पूजा की जाती है।',
        consort: 'Parvati (Shakti)', consortHi: 'पार्वती (शक्ति)', weapon: 'Trishul (Trident)', weaponHi: 'त्रिशूल', vehicle: 'Nandi (Bull)', vehicleHi: 'नंदी (बैल)',
        mantra: 'Om Namah Shivaya', mantraHi: 'ॐ नमः शिवाय', day: 'Monday', dayHi: 'सोमवार',
        temples: ['Kashi Vishwanath (Varanasi)', 'Somnath (Gujarat)', 'Kedarnath (Uttarakhand)', 'Mahakaleshwar (Ujjain)'],
        templesHi: ['काशी विश्वनाथ (वाराणसी)', 'सोमनाथ (गुजरात)', 'केदारनाथ (उत्तराखंड)', 'महाकालेश्वर (उज्जैन)'],
    },
    {
        icon: '💙', name: 'Lord Krishna', nameHi: 'भगवान कृष्ण', role: 'The Supreme Personality of Godhead', roleHi: 'परम पुरुषोत्तम भगवान',
        desc: 'Krishna is the eighth avatar of Vishnu, born in Mathura. He is the speaker of the Bhagavad Gita, the divine flute player, the butter thief of Vrindavan, and the charioteer of Arjuna.',
        descHi: 'कृष्ण विष्णु के आठवें अवतार हैं, जिनका जन्म मथुरा में हुआ था। वे भगवद गीता के वक्ता, दिव्य बांसुरी वादक, वृंदावन के माखन चोर और अर्जुन के सारथी हैं।',
        consort: 'Radha & Rukmini', consortHi: 'राधा और रुक्मिणी', weapon: 'Sudarshana Chakra', weaponHi: 'सुदर्शन चक्र', vehicle: 'Garuda', vehicleHi: 'गरुड़',
        mantra: 'Hare Krishna Hare Krishna, Krishna Krishna Hare Hare', mantraHi: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे', day: 'Wednesday', dayHi: 'बुधवार',
        temples: ['Banke Bihari (Vrindavan)', 'Dwarkadhish (Dwarka)', 'Jagannath (Puri)', 'Guruvayur (Kerala)'],
        templesHi: ['बांके बिहारी (वृंदावन)', 'द्वारकाधीश (द्वारका)', 'जगन्नाथ (पुरी)', 'गुरुवायुर (केरल)'],
    },
    {
        icon: '🐒', name: 'Lord Hanuman (Bajrang Bali)', nameHi: 'भगवान हनुमान (बजरंग बली)', role: 'The Devoted Servant of Ram', roleHi: 'राम के समर्पित सेवक',
        desc: 'Hanuman is the son of Vayu (Wind God), an incarnation of Lord Shiva, and the greatest devotee of Lord Rama. He embodies strength, devotion, courage, and selfless service.',
        descHi: 'हनुमान वायु (पवन देव) के पुत्र, भगवान शिव के अवतार और भगवान राम के सबसे बड़े भक्त हैं। वे शक्ति, भक्ति, साहस और निस्वार्थ सेवा के प्रतीक हैं।',
        consort: 'Brahmachari (Celibate)', consortHi: 'ब्रह्मचारी (अविवाहित)', weapon: 'Gada (Mace)', weaponHi: 'गदा', vehicle: 'Flies with own power', vehicleHi: 'स्वयं की शक्ति से उड़ते हैं',
        mantra: 'Jai Bajrang Bali', mantraHi: 'जय बजरंग बली', day: 'Tuesday & Saturday', dayHi: 'मंगलवार और शनिवार',
        temples: ['Hanuman Garhi (Ayodhya)', 'Mehandipur Balaji (Rajasthan)', 'Sankat Mochan (Varanasi)', 'Jakhu Temple (Shimla)'],
        templesHi: ['हनुमान गढ़ी (अयोध्या)', 'मेहंदीपुर बालाजी (राजस्थान)', 'संकट मोचन (वाराणसी)', 'जाखू मंदिर (शिमला)'],
    },
    {
        icon: '🔱', name: 'Goddess Durga (Shakti)', nameHi: 'देवी दुर्गा (शक्ति)', role: 'The Invincible Divine Mother', roleHi: 'अजेय जगदंबा',
        desc: 'Durga is the supreme goddess, created by the combined energies of all gods to destroy the demon Mahishasura. She has 9 forms (Navdurga) worshipped during Navratri.',
        descHi: 'दुर्गा सर्वोच्च देवी हैं, जिन्हें महिषासुर राक्षस को नष्ट करने के लिए सभी देवताओं की ऊर्जा से बनाया गया था। उनके 9 रूप (नवदुर्गा) हैं जिनकी नवरात्रि के दौरान पूजा की जाती है।',
        consort: 'Lord Shiva', consortHi: 'भगवान शिव', weapon: 'Multiple (given by all gods)', weaponHi: 'अनेक (सभी देवताओं ने दिए हैं)', vehicle: 'Lion / Tiger', vehicleHi: 'शेर / बाघ',
        mantra: 'Om Dum Durgaye Namaha', mantraHi: 'ॐ दुं दुर्गायै नमः', day: 'Tuesday & Friday', dayHi: 'मंगलवार और शुक्रवार',
        temples: ['Vaishno Devi (J&K)', 'Kamakhya (Assam)', 'Chamundeshwari (Mysore)', 'Naina Devi (Himachal)'],
        templesHi: ['वैष्णो देवी (जम्मू और कश्मीर)', 'कामाख्या (असम)', 'चामुंडेश्वरी (मैसूर)', 'नैना देवी (हिमाचल)'],
    },
    {
        icon: '🐘', name: 'Lord Ganesh (Ganapati)', nameHi: 'भगवान गणेश (गणपति)', role: 'Remover of Obstacles & God of Beginnings', roleHi: 'विघ्नहर्ता और आरंभ के देवता',
        desc: 'Ganesh is the elephant-headed son of Shiva and Parvati, worshipped before all auspicious occasions. He is the patron of arts, sciences, and wisdom.',
        descHi: 'गणेश शिव और पार्वती के हाथी-सिर वाले पुत्र हैं, जिनकी पूजा सभी शुभ अवसरों से पहले की जाती है। वे कला, विज्ञान और ज्ञान के संरक्षक हैं।',
        consort: 'Riddhi & Siddhi', consortHi: 'रिद्धि और सिद्धि', weapon: 'Parashu (Axe) & Pasha (Noose)', weaponHi: 'परशु (कुल्हाड़ी) और पाश (फंदा)', vehicle: 'Mushak (Mouse)', vehicleHi: 'मूषक (चूहा)',
        mantra: 'Om Gan Ganapataye Namah', mantraHi: 'ॐ गं गणपतये नमः', day: 'Wednesday', dayHi: 'बुधवार',
        temples: ['Siddhivinayak (Mumbai)', 'Ashtavinayak (Maharashtra)', 'Dagdusheth Ganpati (Pune)', 'Moti Dungri (Jaipur)'],
        templesHi: ['सिद्धिविनायक (मुंबई)', 'अष्टविनायक (महाराष्ट्र)', 'दगड़ूशेठ हलवाई गणपति (पुणे)', 'मोती डूंगरी (जयपुर)'],
    },
    {
        icon: '🪷', name: 'Goddess Lakshmi', nameHi: 'देवी लक्ष्मी', role: 'Goddess of Wealth, Fortune & Prosperity', roleHi: 'धन, भाग्य और समृद्धि की देवी',
        desc: 'Lakshmi is the consort of Lord Vishnu and the goddess of material and spiritual wealth. She emerged from the churning of the cosmic ocean (Samudra Manthan).',
        descHi: 'लक्ष्मी भगवान विष्णु की पत्नी और भौतिक तथा आध्यात्मिक संपदा की देवी हैं। वह समुद्र मंथन से प्रकट हुई थीं।',
        consort: 'Lord Vishnu', consortHi: 'भगवान विष्णु', weapon: 'Lotus', weaponHi: 'कमल', vehicle: 'Owl (Uluka)', vehicleHi: 'उल्लू',
        mantra: 'Om Shreem Mahalakshmiyei Namaha', mantraHi: 'ॐ श्रीं महालक्ष्म्यै नमः', day: 'Friday', dayHi: 'शुक्रवार',
        temples: ['Mahalakshmi Temple (Mumbai)', 'Padmanabhaswamy (Kerala)', 'Ashtalakshmi Temple (Chennai)', 'Lakshmi Narayan (Delhi)'],
        templesHi: ['महालक्ष्मी मंदिर (मुंबई)', 'पद्मनाभस्वामी (केरल)', 'अष्टलक्ष्मी मंदिर (चेन्नई)', 'लक्ष्मीनारायण (दिल्ली)'],
    },
    {
        icon: '🙏', name: 'Lord Rama', nameHi: 'भगवान राम', role: 'Maryada Purushottam — The Ideal Man', roleHi: 'मर्यादा पुरुषोत्तम — आदर्श पुरुष',
        desc: 'Rama is the seventh avatar of Vishnu, the prince of Ayodhya, and the hero of the Ramayana. He embodies dharma (righteousness), ideal kingship, and unconditional love.',
        descHi: 'राम विष्णु के सातवें अवतार, अयोध्या के राजकुमार और रामायण के नायक हैं। वे धर्म (सदाचार), आदर्श राजशाही और बिना शर्त प्रेम के प्रतीक हैं।',
        consort: 'Sita', consortHi: 'सीता', weapon: 'Bow (Kodanda)', weaponHi: 'धनुष (कोदंड)', vehicle: 'None (walked the earth)', vehicleHi: 'कोई नहीं (पैदल चलते थे)',
        mantra: 'Sri Ram Jai Ram Jai Jai Ram', mantraHi: 'श्री राम जय राम जय जय राम', day: 'Sunday', dayHi: 'रविवार',
        temples: ['Ram Mandir (Ayodhya)', 'Rameshwaram (Tamil Nadu)', 'Hanuman Garhi (Ayodhya)', 'Kodandarama (Hampi)'],
        templesHi: ['राम मंदिर (अयोध्या)', 'रामेश्वरम (तमिलनाडु)', 'हनुमान गढ़ी (अयोध्या)', 'कोदंडाराम (हम्पी)'],
    },
    {
        icon: '👁️', name: 'Lord Vishnu', nameHi: 'भगवान विष्णु', role: 'The Preserver of the Universe', roleHi: 'ब्रह्मांड के पालनकर्ता',
        desc: 'Vishnu sustains the universe and incarnates on earth (as avatars) whenever dharma is in decline. His 10 avatars include Rama, Krishna, Narasimha, and the yet-to-come Kalki.',
        descHi: 'विष्णु ब्रह्मांड का पोषण करते हैं और जब भी धर्म का पतन होता है तो पृथ्वी पर (अवतारों के रूप में) अवतरित होते हैं। उनके 10 अवतारों में राम, कृष्ण, नृसिंह और भविष्य के कल्कि अवतार शामिल हैं।',
        consort: 'Lakshmi', consortHi: 'लक्ष्मी', weapon: 'Sudarshana Chakra & Kaumodaki Mace', weaponHi: 'सुदर्शन चक्र और कौमोदकी गदा', vehicle: 'Garuda (Eagle)', vehicleHi: 'गरुड़',
        mantra: 'Om Namo Bhagavate Vasudevaya', mantraHi: 'ॐ नमो भगवते वासुदेवाय', day: 'Thursday', dayHi: 'गुरुवार',
        temples: ['Tirupati Balaji (Andhra Pradesh)', 'Badrinath (Uttarakhand)', 'Padmanabhaswamy (Kerala)', 'Jagannath (Puri)'],
        templesHi: ['तिरुपति बालाजी (आंध्र प्रदेश)', 'बद्रीनाथ (उत्तराखंड)', 'पद्मनाभस्वामी (केरल)', 'जगन्नाथ (पुरी)'],
    },
    {
        icon: '🌞', name: 'Lord Surya', nameHi: 'भगवान सूर्य', role: 'The Sun God — Source of Life', roleHi: 'सूर्य देव — जीवन का स्रोत',
        desc: 'Surya is the chief solar deity, the source of light and life. He rides a chariot pulled by seven horses representing the seven days and the seven colors of light.',
        descHi: 'सूर्य मुख्य सौर देवता हैं, प्रकाश और जीवन का स्रोत। वे सात घोड़ों द्वारा खींचे जाने वाले रथ पर सवार होते हैं जो सात दिनों और प्रकाश के सात रंगों का प्रतिनिधित्व करते हैं।',
        consort: 'Sanjna & Chhaya', consortHi: 'संज्ञा और छाया', weapon: 'Rays of Light', weaponHi: 'प्रकाश की किरणें', vehicle: 'Chariot with 7 horses', vehicleHi: '7 घोड़ों वाला रथ',
        mantra: 'Om Suryaya Namaha', mantraHi: 'ॐ सूर्याय नमः', day: 'Sunday', dayHi: 'रविवार',
        temples: ['Konark Sun Temple (Odisha)', 'Modhera Sun Temple (Gujarat)', 'Surya Pahar (Assam)', 'Arasavalli (Andhra Pradesh)'],
        templesHi: ['कोणार्क सूर्य मंदिर (ओडिशा)', 'मोढेरा सूर्य मंदिर (गुजरात)', 'सूर्य पहाड़ (असम)', 'अरसावल्ली (आंध्र प्रदेश)'],
    },
    {
        icon: '🎵', name: 'Goddess Saraswati', nameHi: 'देवी सरस्वती', role: 'Goddess of Knowledge, Music & Arts', roleHi: 'ज्ञान, संगीत और कला की देवी',
        desc: 'Saraswati is the goddess of learning, wisdom, music, and creative arts. She holds a veena (stringed instrument), a book of Vedas, and a rosary, seated on a white lotus.',
        descHi: 'सरस्वती विद्या, ज्ञान, संगीत और रचनात्मक कलाओं की देवी हैं। वे वीणा (तार वाद्य), वेदों की पुस्तक और एक माला धारण करती हैं, तथा सफेद कमल पर विराजमान हैं।',
        consort: 'Lord Brahma', consortHi: 'भगवान ब्रह्मा', weapon: 'Veena, Vedas, Rosary', weaponHi: 'वीणा, वेद, माला', vehicle: 'Swan (Hamsa)', vehicleHi: 'हंस',
        mantra: 'Om Aim Saraswatyai Namaha', mantraHi: 'ॐ ऐं सरस्वत्यै नमः', day: 'Thursday', dayHi: 'गुरुवार',
        temples: ['Saraswati Temple (Basar, Telangana)', 'Gnana Saraswati (Warangal)', 'Sharda Peeth (J&K)', 'Mookambika (Karnataka)'],
        templesHi: ['सरस्वती मंदिर (बसर, तेलंगाना)', 'ज्ञान सरस्वती (वारंगल)', 'शारदा पीठ (जम्मू-कश्मीर)', 'मूकम्बिका (कर्नाटक)'],
    },
];

export default function DeitiesPage() {
    const locale = useLocale();
    const isHi = locale === 'hi';

    return (
        <>
            <section className={styles.hero}>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{isHi ? '🙏 संग्रह — देवता विश्वकोश' : '🙏 Sangrah — Deity Encyclopedia'}</span>
                    <h1>{isHi ? 'दिव्य देवमंडल' : 'The Divine Pantheon'}</h1>
                    <p className={styles.heroDesc}>
                        {isHi
                            ? `${deities.length}+ हिंदू देवी-देवताओं की कहानियों, मंत्रों, मंदिरों और प्रतीकों का अन्वेषण करें — उनकी ब्रह्मांडीय भूमिकाएँ, पवित्र प्रतीक और पूजा स्थल।`
                            : `Explore the stories, mantras, temples, and iconography of ${deities.length}+ Hindu deities — their cosmic roles, sacred symbols, and places of worship.`
                        }
                    </p>
                    <Link href="/sangrah" className="btn btn-secondary">← {isHi ? 'संग्रह पर वापस जाएं' : 'Back to Sangrah'}</Link>
                </div>
            </section>

            <section className={`section ${styles.content}`}>
                <div className="container">
                    {deities.map((d, i) => {
                        const name = isHi ? (d.nameHi || d.name) : d.name;
                        const role = isHi ? (d.roleHi || d.role) : d.role;
                        const desc = isHi ? (d.descHi || d.desc) : d.desc;
                        const consort = isHi ? (d.consortHi || d.consort) : d.consort;
                        const weapon = isHi ? (d.weaponHi || d.weapon) : d.weapon;
                        const vehicle = isHi ? (d.vehicleHi || d.vehicle) : d.vehicle;
                        const day = isHi ? (d.dayHi || d.day) : d.day;
                        const mantra = isHi ? (d.mantraHi || d.mantra) : d.mantra;
                        const temples = isHi && d.templesHi ? d.templesHi : d.temples;

                        return (
                            <article key={i} className={styles.card} style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                                    <span style={{ fontSize: '2.8rem' }}>{d.icon}</span>
                                    <div>
                                        <h3 className={styles.cardTitle} style={{ fontSize: '1.3rem' }}>{name}</h3>
                                        <span style={{ fontSize: '0.85rem', color: 'var(--saffron)', fontWeight: 600, fontStyle: 'italic' }}>
                                            {role}
                                        </span>
                                    </div>
                                </div>
                                <p className={styles.cardDesc} style={{ marginBottom: '12px' }}>{desc}</p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', fontSize: '0.85rem', color: 'var(--brown-mid)', marginBottom: '12px' }}>
                                    <div>🤝 <strong>{isHi ? 'साथी:' : 'Consort:'}</strong> {consort}</div>
                                    <div>⚔️ <strong>{isHi ? 'शास्त्र:' : 'Weapon:'}</strong> {weapon}</div>
                                    <div>🐾 <strong>{isHi ? 'वाहन:' : 'Vehicle:'}</strong> {vehicle}</div>
                                    <div>📅 <strong>{isHi ? 'पवित्र दिन:' : 'Sacred Day:'}</strong> {day}</div>
                                </div>
                                <div style={{
                                    padding: '10px 14px', background: 'rgba(255,107,53,0.06)', borderRadius: '8px',
                                    fontFamily: 'var(--font-sanskrit)', fontSize: '0.95rem', color: 'var(--maroon)', marginBottom: '8px'
                                }}>
                                    🕉️ <strong>{isHi ? 'मंत्र:' : 'Mantra:'}</strong> {mantra}
                                </div>
                                <div>
                                    <strong style={{ fontSize: '0.85rem', color: 'var(--brown-rich)' }}>🛕 {isHi ? 'प्रमुख मंदिर:' : 'Major Temples:'}</strong>
                                    <ul style={{ margin: '4px 0', paddingLeft: '16px' }}>
                                        {temples.map((t, j) => (
                                            <li key={j} style={{ fontSize: '0.82rem', color: 'var(--brown-light)', lineHeight: 1.6 }}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>{isHi ? 'ऐप में सभी 30+ देवी-देवताओं का अन्वेषण करें' : 'Explore All 30+ Deities in the App'}</h2>
                    <p style={{ color: 'var(--brown-light)', margin: '16px auto 24px', maxWidth: '500px' }}>
                        {isHi
                            ? 'चित्रों, कहानियों और दैनिक मंत्रों के साथ पूर्ण देवता विश्वकोश के लिए सनातन संगम डाउनलोड करें।'
                            : 'Download Sanatan Sangam for the full deity encyclopedia with images, stories, and daily mantras.'
                        }
                    </p>
                    <a href="#download" className="btn btn-primary">📱 {isHi ? 'ऐप डाउनलोड करें' : 'Download App'}</a>
                </div>
            </section>
        </>
    );
}
