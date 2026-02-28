'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import styles from './ayurveda.module.css';

const featuredRemedies = [
    {
        id: 'immunity',
        icon: '🛡️',
        emoji: '🌿',
        title: 'Immunity Boosters',
        titleHi: 'रोग प्रतिरोधक क्षमता बढ़ाएं',
        subtitle: 'Strengthen your body\'s natural defenses',
        subtitleHi: 'अपने शरीर की प्राकृतिक सुरक्षा को मजबूत करें',
        color: '#2E7D32',
        gradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #388E3C 100%)',
        image: '/ayurveda-immunity.png',
        tag: 'Immunity',
        tagHi: 'इम्युनिटी',
        remedies: [
            { name: '🥛 Haldi Doodh (Golden Milk)', nameHi: '🥛 हल्दी दूध (स्वर्ण दूध)', steps: 'Mix ½ tsp turmeric + pinch of black pepper + honey in warm milk. Drink nightly.', stepsHi: 'गर्म दूध में ½ चम्मच हल्दी + चुटकी भर काली मिर्च + शहद मिलाएं। रात को पिएं।', benefit: 'Anti-inflammatory, antioxidant powerhouse', benefitHi: 'एंटी-इंफ्लेमेटरी, एंटीऑक्सीडेंट पावरहाउस' },
            { name: '🌿 Tulsi-Ginger Kadha', nameHi: '🌿 तुलसी-अदरक काढ़ा', steps: 'Boil 6 tulsi leaves + 1 inch ginger + ½ tsp black pepper in 2 cups water. Strain, add honey.', stepsHi: '6 तुलसी के पत्ते + 1 इंच अदरक + ½ चम्मच काली मिर्च को 2 कप पानी में उबालें। छानें, शहद मिलाएं।', benefit: 'Natural antiviral & antibacterial shield', benefitHi: 'प्राकृतिक एंटीवायरल और एंटीबैक्टीरियल शील्ड' },
            { name: '🍋 Amla Juice Fast', nameHi: '🍋 आंवले का रस', steps: 'Drink 20ml fresh amla juice every morning on empty stomach.', stepsHi: 'हर सुबह खाली पेट 20 मिली ताजा आंवले का रस पिएं।', benefit: 'India\'s richest Vitamin C source, 20× more than orange', benefitHi: 'भारत का सबसे समृद्ध विटामिन सी स्रोत, संतरे से 20 गुना अधिक' },
            { name: '🌰 Chyawanprash Daily', nameHi: '🌰 दैनिक च्यवनप्राश', steps: 'Take 1 tbsp daily with warm milk in the morning.', stepsHi: 'सुबह गर्म दूध के साथ प्रतिदिन 1 बड़ा चम्मच लें।', benefit: '40+ herbs, centuries-old immunity formula', benefitHi: '40+ जड़ी-बूटियाँ, सदियों पुराना इम्युनिटी फॉर्मूला' },
        ],
    },
    {
        id: 'digestion',
        icon: '🫁',
        emoji: '🌶️',
        title: 'Digestive Health',
        titleHi: 'पाचन स्वास्थ्य',
        subtitle: 'Calm your gut with ancient spice wisdom',
        subtitleHi: 'प्राचीन मसालों के ज्ञान से अपनी आंत को शांत करें',
        color: '#E65100',
        gradient: 'linear-gradient(135deg, #BF360C 0%, #E64A19 50%, #FF5722 100%)',
        image: '/ayurveda-digestion.png',
        tag: 'Digestion',
        tagHi: 'पाचन',
        remedies: [
            { name: '💧 Jeera Water', nameHi: '💧 जीरा पानी', steps: 'Boil 1 tsp cumin seeds in 2 cups water for 5 min. Strain, drink warm after meals.', stepsHi: '2 कप पानी में 1 चम्मच जीरा 5 मिनट तक उबालें। छानकर भोजन के बाद गर्म पियें।', benefit: 'Relieves bloating, acidity, indigestion instantly', benefitHi: 'सूजन, एसिडिटी, अपच में तुरंत राहत देता है' },
            { name: '🧂 Ajwain & Black Salt', nameHi: '🧂 अजवाइन और काला नमक', steps: 'Chew ½ tsp ajwain (carom) with pinch of black salt after heavy meals.', stepsHi: 'भारी भोजन के बाद ½ चम्मच अजवाइन को चुटकी भर काले नमक के साथ चबाएं।', benefit: 'Fast relief from gas and stomach cramps', benefitHi: 'गैस और पेट की ऐंठन से त्वरित राहत' },
            { name: '🌱 Triphala Churna', nameHi: '🌱 त्रिफला चूर्ण', steps: 'Mix 1 tsp Triphala powder in warm water. Drink 30 min before bed.', stepsHi: 'गर्म पानी में 1 चम्मच त्रिफला चूर्ण मिलाएं। सोने से 30 मिनट पहले पियें।', benefit: 'Detoxifies intestines, regulates bowel movement', benefitHi: 'आंतों को डिटॉक्स करता है, मल त्याग को नियंत्रित करता है' },
            { name: '🍋 Ginger-Lemon Shot', nameHi: '🍋 अदरक-नींबू शॉट', steps: 'Mix 1 tsp fresh ginger juice + 1 tsp lemon juice + 1 tsp honey in warm water. Drink before meals.', stepsHi: 'गर्म पानी में 1 चम्मच ताजा अदरक का रस + 1 चम्मच नींबू का रस + 1 चम्मच शहद मिलाएं। खाने से पहले पिएं।', benefit: 'Stimulates digestive enzymes, reduces nausea', benefitHi: 'पाचक एंजाइमों को उत्तेजित करता है, मतली कम करता है' },
        ],
    },
    {
        id: 'cold-flu',
        icon: '🤧',
        emoji: '🫚',
        title: 'Cold, Cough & Fever',
        titleHi: 'सर्दी, खांसी और बुखार',
        subtitle: 'Grandma\'s time-tested remedies that actually work',
        subtitleHi: 'दादी माँ के समय की आजमाई हुई रेमेडीज जो सच में काम करती हैं',
        color: '#1565C0',
        gradient: 'linear-gradient(135deg, #0D47A1 0%, #1565C0 50%, #1976D2 100%)',
        image: '/ayurveda-cold.svg',
        tag: 'Seasonal',
        tagHi: 'मौसमी',
        remedies: [
            { name: '☕ Classic Indian Kadha', nameHi: '☕ क्लासिक भारतीय काढ़ा', steps: 'Boil tulsi, ginger, cloves, black pepper, cinnamon, cardamom in water for 10 min. Strain, add honey.', stepsHi: 'तुलसी, अदरक, लौंग, काली मिर्च, दालचीनी, इलायची को पानी में 10 मिनट तक उबालें। छानें, शहद मिलाएं।', benefit: 'Clears chest congestion, fights viral infections', benefitHi: 'सीने की जकड़न दूर करता है, वायरल इन्फेक्शन से लड़ता है' },
            { name: '🍯 Honey-Ginger Syrup', nameHi: '🍯 शहद-अदरक सिरप', steps: 'Mix equal parts fresh ginger juice and raw honey. Take 1 tsp three times a day.', stepsHi: 'समान मात्रा में ताजा अदरक का रस और कच्चा शहद मिलाएं। दिन में तीन बार 1 चम्मच लें।', benefit: 'Soothes throat, suppresses cough', benefitHi: 'गले को आराम देता है, खांसी को दबाता है' },
            { name: '💨 Eucalyptus Steam', nameHi: '💨 नीलगिरी (Eucalyptus) भाप', steps: 'Add 3-4 drops eucalyptus oil to steaming water. Cover head with towel, inhale for 5-10 min.', stepsHi: 'उबलते पानी में 3-4 बूंद नीलगिरी का तेल डालें। सिर को तौलिये से ढक लें, 5-10 मिनट तक भाप लें।', benefit: 'Clears nasal congestion, sinus relief', benefitHi: 'नाक की जकड़न दूर करता है, साइनस में राहत' },
            { name: '🌿 Giloy Decoction', nameHi: '🌿 गिलोय काढ़ा', steps: 'Boil 1 inch Giloy stem in 2 cups water until reduced to half. Drink once daily.', stepsHi: '2 कप पानी में 1 इंच गिलोय के तने को आधा होने तक उबाल लें। रोजाना एक बार पिएं।', benefit: 'Ancient "Amrita" — boosts immunity & fights fever', benefitHi: 'प्राचीन "अमृता" — इम्युनिटी बढ़ाता है और बुखार से लड़ता है' },
        ],
    },
    {
        id: 'pain',
        icon: '💪',
        emoji: '🦴',
        title: 'Pain & Joint Relief',
        titleHi: 'दर्द और जोड़ों में राहत',
        subtitle: 'Natural analgesics from Ayurvedic tradition',
        subtitleHi: 'आयुर्वेदिक परंपरा से प्राकृतिक दर्द निवारक',
        color: '#6A1B9A',
        gradient: 'linear-gradient(135deg, #4A148C 0%, #6A1B9A 50%, #7B1FA2 100%)',
        image: '/ayurveda-pain.svg',
        tag: 'Pain Relief',
        tagHi: 'दर्द निवारक',
        remedies: [
            { name: '🌿 Nirgundi Oil Massage', nameHi: '🌿 निर्गुंडी तेल की मालिश', steps: 'Warm Nirgundi (Vitex negundo) oil and massage into painful joints or muscles.', stepsHi: 'निर्गुंडी के तेल को हल्का गर्म करें और दर्द वाले जोड़ों या मांसपेशियों पर मालिश करें।', benefit: 'Reduces inflammation, relieves arthritis pain', benefitHi: 'सूजन कम करता है, गठिया के दर्द से राहत देता है' },
            { name: '🔥 Castor Oil Wrap', nameHi: '🔥 अरंडी का तेल (Castor Oil) रैप', steps: 'Massage warm castor oil on joint, wrap with cloth. Leave overnight.', stepsHi: 'जोड़ पर गर्म अरंडी के तेल की मालिश करें, कपड़े से लपेटें। रात भर छोड़ दें।', benefit: 'Deeply penetrates joints, reduces swelling & stiffness', benefitHi: 'जोड़ों में गहराई तक प्रवेश करता है, सूजन और अकड़न कम करता है' },
            { name: '🧪 Turmeric-Salt Gargle', nameHi: '🧪 हल्दी-नमक के गरारे', steps: 'Mix ½ tsp turmeric + ½ tsp salt in warm water. Gargle for throat & neck pain.', stepsHi: 'गर्म पानी में ½ चम्मच हल्दी + ½ चम्मच नमक मिलाएं। गले और गर्दन के दर्द के लिए गरारे करें।', benefit: 'Reduces throat inflammation naturally', benefitHi: 'प्राकृतिक रूप से गले की सूजन कम करता है' },
            { name: '💊 Shallaki (Boswellia)', nameHi: '💊 शल्लकी (Boswellia)', steps: 'Take Shallaki supplement (250-500mg) as directed, or apply Shallaki cream on affected joints.', stepsHi: 'निर्देशानुसार शल्लकी सप्लीमेंट (250-500mg) लें, या प्रभावित जोड़ों पर शल्लकी क्रीम लगाएं।', benefit: 'Clinically proven anti-arthritic herb, reduces joint pain', benefitHi: 'गठिया-रोधी प्रमाणित जड़ी बूटी, जोड़ों का दर्द कम करती है' },
        ],
    },
    {
        id: 'skincare',
        icon: '✨',
        emoji: '🌸',
        title: 'Skin Care & Glow',
        titleHi: 'त्वचा की देखभाल और निखार',
        subtitle: 'Ancient beauty secrets for radiant skin',
        subtitleHi: 'चमकती त्वचा के लिए प्राचीन सौंदर्य रहस्य',
        color: '#AD1457',
        gradient: 'linear-gradient(135deg, #880E4F 0%, #AD1457 50%, #C2185B 100%)',
        image: '/ayurveda-skin.png',
        tag: 'Beauty',
        tagHi: 'सौंदर्य',
        remedies: [
            { name: '💛 Turmeric-Besan Face Pack', nameHi: '💛 हल्दी-बेसन फेस पैक', steps: 'Mix 1 tsp turmeric + 2 tbsp besan + rose water into paste. Apply 15 min, wash with cold water.', stepsHi: '1 चम्मच हल्दी + 2 बड़े चम्मच बेसन + गुलाब जल को पेस्ट में मिलाएं। 15 मिनट लगाएं, ठंडे पानी से धो लें।', benefit: 'Glowing skin, reduced blemishes — ancient bridal ritual', benefitHi: 'चमकदार त्वचा, कम दाग-धब्बे — प्राचीन विवाह अनुष्ठान' },
            { name: '🌵 Aloe Vera Gel', nameHi: '🌵 एलो वेरा जेल', steps: 'Slice fresh aloe vera leaf, scoop gel, apply directly on skin. Leave 20 min.', stepsHi: 'ताजा एलोवेरा की पत्ती को काटें, जेल निकालें, सीधे त्वचा पर लगाएं। 20 मिनट के लिए छोड़ दें।', benefit: 'Heals sunburn, reduces acne scars, deep moisturizer', benefitHi: 'धूप की कालिमा को ठीक करता है, मुंहासे के निशान कम करता है, गहरा मॉइस्चराइज़र' },
            { name: '🌿 Neem Paste for Acne', nameHi: '🌿 मुँहासे के लिए नीम पेस्ट', steps: 'Grind 10-15 fresh neem leaves into paste with water. Apply on acne spots, leave 15 min.', stepsHi: '10-15 ताजी नीम की पत्तियों को पानी के साथ पीसकर पेस्ट बना लें। मुंहासों पर लगाएं, 15 मिनट छोड़ दें।', benefit: 'Natural antibacterial, kills acne bacteria at source', benefitHi: 'प्राकृतिक जीवाणुरोधी, स्रोत पर मुँहासे के बैक्टीरिया को मारता है' },
            { name: '🪵 Chandan (Sandalwood) Pack', nameHi: '🪵 चंदन का लेप', steps: 'Mix 2 tsp sandalwood powder + rose water. Apply 20 min. Rinse with cold water.', stepsHi: '2 चम्मच चंदन पाउडर + गुलाब जल मिलाएं। 20 मिनट के लिए लगाएं। ठंडे पानी से धो लें।', benefit: 'Cools skin, reduces pigmentation, evens skin tone', benefitHi: 'त्वचा को ठंडा करता है, पिग्मेंटेशन कम करता है, त्वचा की टोन को समान करता है' },
        ],
    },
    {
        id: 'haircare',
        icon: '💆',
        emoji: '🥥',
        title: 'Hair Care & Growth',
        titleHi: 'बालों की देखभाल और विकास',
        subtitle: 'Restore strength and shine from root to tip',
        subtitleHi: 'जड़ से सिरे तक मजबूती और चमक बहाल करें',
        color: '#00695C',
        gradient: 'linear-gradient(135deg, #004D40 0%, #00695C 50%, #00796B 100%)',
        image: '/ayurveda-hair.png',
        tag: 'Hair',
        tagHi: 'बाल',
        remedies: [
            { name: '🥥 Curry Leaf Coconut Oil', nameHi: '🥥 करी पत्ता और नारियल का तेल', steps: 'Heat coconut oil with curry leaves until they turn black. Cool, strain & massage into scalp.', stepsHi: 'नारियल तेल को करी पत्तों के साथ तब तक गर्म करें जब तक वे काले न हो जाएं। ठंडा करें, छान लें और स्कैल्प पर मालिश करें।', benefit: 'Prevents premature graying, promotes hair growth', benefitHi: 'असमय बालों का सफेद होना रोकता है, बालों के विकास को बढ़ावा देता है' },
            { name: '🌾 Methi (Fenugreek) Mask', nameHi: '🌾 मेथी का मास्क', steps: 'Soak 3 tbsp fenugreek seeds overnight. Grind into paste. Apply on scalp 30 min before wash.', stepsHi: '3 बड़े चम्मच मेथी दानों को रात भर के लिए भिगो दें। पीसकर पेस्ट बना लें। धोने से 30 मिनट पहले स्कैल्प पर लगाएं।', benefit: 'Reduces hair fall, tames dandruff, strengthens roots', benefitHi: 'बालों का झड़ना कम करता है, रूसी को नियंत्रित करता है, जड़ों को मजबूत करता है' },
            { name: '🌿 Bhringraj Oil Therapy', nameHi: '🌿 भृंगराज तेल की मालिश', steps: 'Warm Bhringraj oil, massage into scalp with fingertips for 10 min. Leave 1-2 hours before washing.', stepsHi: 'भृंगराज तेल को हल्का गर्म करें, 10 मिनट तक स्कैल्प पर मालिश करें। धोने से 1-2 घंटे पहले छोड़ दें।', benefit: '"King of Herbs" for hair — prevents baldness, aids growth', benefitHi: 'बालों के लिए "जड़ी बूटियों का राजा" — गंजापन रोकता है, विकास में सहायता करता है' },
            { name: '🌿 Amla-Shikakai Wash', nameHi: '🌿 आंवला-रीठा-शिकाकाई वॉश', steps: 'Soak equal parts amla, reetha, shikakai overnight. Boil, cool, strain and use as shampoo.', stepsHi: 'समान मात्रा में आंवला, रीठा और शिकाकाई रात भर के लिए भिगो दें। उबालें, ठंडा करें, छान लें और शैम्पू के रूप में उपयोग करें।', benefit: 'Chemical-free hair wash for shine, strength, and volume', benefitHi: 'चमक, मजबूती और घने बालों के लिए केमिकल मुक्त हेयर वॉश' },
        ],
    },
    {
        id: 'stress',
        icon: '🧘',
        emoji: '🌙',
        title: 'Stress Relief & Sleep',
        titleHi: 'तनाव से राहत और नींद',
        subtitle: 'Calm your mind with Ayurvedic nervines',
        subtitleHi: 'आयुर्वेदिक जड़ी-बूटियों से अपने मन को शांत करें',
        color: '#283593',
        gradient: 'linear-gradient(135deg, #1A237E 0%, #283593 50%, #303F9F 100%)',
        image: '/ayurveda-stress.svg',
        tag: 'Mind & Sleep',
        tagHi: 'दिमाग और नींद',
        remedies: [
            { name: '🥛 Ashwagandha Moon Milk', nameHi: '🥛 अश्वगंधा और दूध', steps: 'Mix 1 tsp Ashwagandha powder + ½ tsp cinnamon in warm milk. Add honey. Drink 30 min before bed.', stepsHi: 'गर्म दूध में 1 चम्मच अश्वगंधा पाउडर + ½ चम्मच दालचीनी मिलाएं। शहद डालें। सोने से 30 मिनट पहले पियें।', benefit: 'Lowers cortisol, reduces anxiety, improves sleep depth', benefitHi: 'कोर्टिसोल कम करता है, चिंता दूर करता है, नींद की गहराई में सुधार करता है' },
            { name: '🌿 Brahmi Tea', nameHi: '🌿 ब्राह्मी की चाय', steps: 'Steep 1 tsp dried Brahmi leaves in hot water for 5 min. Drink in morning.', stepsHi: 'गर्म पानी में 1 चम्मच सूखी ब्राह्मी की पत्तियों को 5 मिनट के लिए भिगोएँ। सुबह पियें।', benefit: 'Boosts memory, alleviates anxiety, sharpens focus', benefitHi: 'याददाश्त बढ़ाता है, चिंता को कम करता है, फोकस तेज करता है' },
            { name: '💆 Shirodhara Technique', nameHi: '💆 शिरोधारा तकनीक', steps: 'Place warm sesame oil on forehead center, gently massage in circular motion for 10 min.', stepsHi: 'माथे के केंद्र पर गर्म तिल का तेल रखें, 10 मिनट तक गोलाकार गति में धीरे मालिश करें।', benefit: 'Deeply calms nervous system, classic Ayurvedic sleep ritual', benefitHi: 'तंत्रिका तंत्र को गहराई से शांत करता है, क्लासिक आयुर्वेदिक नींद अनुष्ठान' },
            { name: '🌬️ Anulom-Vilom Pranayama', nameHi: '🌬️ अनुलोम-विलोम प्राणायाम', steps: 'Close right nostril with thumb, inhale left nostril. Switch, exhale right. 10 min daily, morning.', stepsHi: 'दाहिनी नथुने को अंगूठे से बंद करें, बाएँ नथुने से सांस लें। बदलें, दाएँ से साँस छोड़ें। रोजाना 10 मिनट, सुबह।', benefit: 'Clinically reduces cortisol levels, calms racing mind', benefitHi: 'विज्ञानी तौर पर कोर्टिसोल के स्तर को कम करता है, अशांत मन को शांत करता है' },
        ],
    },
    {
        id: 'diabetes',
        icon: '🩸',
        emoji: '🌰',
        title: 'Blood Sugar Balance',
        titleHi: 'रक्त शर्करा नियंत्रण',
        subtitle: 'Ayurvedic herbs for metabolic wellness',
        subtitleHi: 'मेटाबॉलिक स्वास्थ्य के लिए आयुर्वेदिक जड़ी बूटियाँ',
        color: '#D84315',
        gradient: 'linear-gradient(135deg, #BF360C 0%, #D84315 50%, #E64A19 100%)',
        image: '/ayurveda-diabetes.svg',
        tag: 'Diabetes',
        tagHi: 'मधुमेह',
        remedies: [
            { name: '💊 Karela (Bitter Gourd) Juice', nameHi: '💊 करेले का जूस', steps: 'Extract juice from 1-2 fresh bitter gourds (remove seeds). Drink 30ml on empty stomach daily.', stepsHi: '1-2 ताजे करेलों का रस निकालें (बीज हटा दें)। रोजाना सुबह खाली पेट 30 मि.ली. पियें।', benefit: 'Natural insulin-like compounds, lowers blood glucose', benefitHi: 'प्राकृतिक इंसुलिन-समान यौगिक, रक्त शर्करा को कम करता है' },
            { name: '🌿 Methi Seed Water', nameHi: '🌿 मेथी के बीजों का पानी', steps: 'Soak 2 tsp fenugreek seeds in 200ml water overnight. Drink water on empty stomach next morning.', stepsHi: '2 चम्मच मेथी के बीजों को 200 मिली पानी में रात भर भिगोएं। अगली सुबह खाली पेट पानी पिएं।', benefit: 'Slows glucose absorption, improves insulin sensitivity', benefitHi: 'ग्लूकोज अवशोषण धीमा करता है, इंसुलिन संवेदनशीलता में सुधार करता है' },
            { name: '🪵 Vijaysar Wood Cup', nameHi: '🪵 विजयसार की लकड़ी का कप', steps: 'Fill Vijaysar (Pterocarpus marsupium) wooden cup with water overnight. Drink in morning.', stepsHi: 'विजयसार के लकड़ी के कप में रात भर पानी भरकर रखें। सुबह पियें।', benefit: 'Purifies blood, regenerates pancreatic beta cells', benefitHi: 'रक्त शुद्ध करता है, अग्नाशयी बीटा कोशिकाओं को पुनर्जीवित करता है' },
            { name: '🌿 Gurmar Herb', nameHi: '🌿 गुड़मार (Gurmar) बूटी', steps: 'Take Gurmar (Gymnema sylvestre) tea or supplement as directed by Ayurvedic practitioner.', stepsHi: 'आयुर्वेदिक चिकित्सक द्वारा निर्देशित गुड़मार चाय या सप्लीमेंट लें।', benefit: 'Blocks sweet taste receptors, reduces sugar cravings', benefitHi: 'मीठे स्वाद रिसेप्टर्स को रोकता है, चीनी की लालसा कम करता है' },
        ],
    },
];

const quickRemedies = [
    { icon: '🤕', title: 'Headache', titleHi: 'सिर दर्द', remedy: 'Apply peppermint oil on temples + a pinch of clove powder in honey. Works faster than most pills.', remedyHi: 'कनपटी पर पुदीने (peppermint) का तेल लगाएँ + शहद में चुटकी भर लौंग का पाउडर। अधिकांश गोलियों की तुलना में तेजी से काम करता है।' },
    { icon: '🦷', title: 'Tooth Pain', titleHi: 'दांत का दर्द', remedy: 'Place a clove or apply clove oil directly on the tooth. Eugenol is a natural anesthetic.', remedyHi: 'दांत पर सीधे लौंग रखें या लौंग का तेल लगाएं। यूजेनॉल एक प्राकृतिक एनेस्थेटिक है।' },
    { icon: '💩', title: 'Constipation', titleHi: 'कब्ज', remedy: 'Warm glass of water with 1 tsp ghee + juice of half lemon before bed. Works overnight.', remedyHi: 'सोने से पहले एक गिलास गर्म पानी में 1 चम्मच घी + आधा नींबू का रस मिलाएं। रात भर में काम करता है।' },
    { icon: '🚽', title: 'UTI Relief', titleHi: 'यूरिन इन्फेक्शन में राहत', remedy: 'Drink 500ml Coconut water + 2 cups barley water daily. Cranberry juice also works effectively.', remedyHi: 'रोजाना 500 मिली नारियल पानी + 2 कप जौ का पानी पिएं। क्रैनबेरी जूस भी प्रभावी काम करता है।' },
    { icon: '😴', title: 'Insomnia', titleHi: 'अनिद्रा', remedy: 'Warm milk + nutmeg (jaiphal) powder — 1/4 tsp. A natural sedative used for centuries.', remedyHi: 'गर्म दूध + जायफल का पाउडर - 1/4 चम्मच। सदियों से इस्तेमाल होने वाला एक प्राकृतिक शामक।' },
    { icon: '🩹', title: 'Minor Burns', titleHi: 'मामूली जलन', remedy: 'Apply fresh aloe vera gel immediately. Let air dry. Repeat every 2 hours for fast healing.', remedyHi: 'तुरंत ताजा एलोवेरा जेल लगाएं। हवा में सूखने दें। तेजी से उपचार के लिए हर 2 घंटे में दोहराएं।' },
    { icon: '🤢', title: 'Nausea', titleHi: 'मतली (Nausea)', remedy: 'Inhale fresh ginger aroma or chew a small piece with salt. Instant relief for motion sickness.', remedyHi: 'अदरक की महक अंदर लें या नमक के साथ एक छोटा टुकड़ा चबाएं। मोशन सिकनेस से तुरंत राहत।' },
    { icon: '👁️', title: 'Eye Strain', titleHi: 'आंखों पर जोर', remedy: 'Splash cold rose water in eyes or place cool cucumber slices for 10 min.', remedyHi: 'आंखों में ठंडा गुलाब जल छिड़कें या 10 मिनट के लिए ठंडे खीरे के टुकड़े रखें।' },
];

const sacredHerbs = [
    { herb: 'Ashwagandha', herbHi: 'अश्वगंधा', emoji: '🌿', sanskrit: 'अश्वगन्धा', benefit: 'Stress & Vitality', benefitHi: 'तनाव और जीवन शक्ति', desc: 'The Indian ginseng — adaptogen that combats stress, boosts strength and stamina.', descHi: 'भारतीय जिनसेंग — तनाव से लड़ता है, शक्ति और सहनशक्ति बढ़ाता है।' },
    { herb: 'Tulsi', herbHi: 'तुलसी', emoji: '🌱', sanskrit: 'तुलसी', benefit: 'Immunity & Lungs', benefitHi: 'इम्युनिटी और फेफड़े', desc: 'Sacred holy basil — antiviral, antibacterial, opens airways, purifies blood.', descHi: 'पवित्र तुलसी — एंटीवायरल, एंटीबैक्टीरियल, वायुमार्ग खोलती है, रक्त शुद्ध करती है।' },
    { herb: 'Neem', herbHi: 'नीम', emoji: '🍃', sanskrit: 'निम्ब', benefit: 'Skin & Blood', benefitHi: 'त्वचा और रक्त', desc: 'Nature\'s pharmacy — detoxifies blood, heals skin, naturally antifungal.', descHi: 'प्रकृति की फार्मेसी — रक्त को डिटॉक्सिफाई करता है, त्वचा को ठीक करता है, प्राकृतिक एंटिफंगल।' },
    { herb: 'Giloy', herbHi: 'गिलोय', emoji: '🌿', sanskrit: 'गुडूची', benefit: 'Fever & Immunity', benefitHi: 'बुखार और इम्युनिटी', desc: '"Amrita" (immortal nectar) — the ultimate immunity herb, fights chronic fever.', descHi: '"अमृता" (अमर अमृत) — उत्तम इम्युनिटी बूस्टर, पुराने बुखार से लड़ता है।' },
    { herb: 'Brahmi', herbHi: 'ब्राह्मी', emoji: '🌾', sanskrit: 'ब्राह्मी', benefit: 'Brain & Memory', benefitHi: 'मस्तिष्क और स्मृति', desc: 'The brain herb — reduces anxiety, boosts memory, calms the nervous system.', descHi: 'मस्तिष्क की जड़ी बूटी — चिंता कम करती है, याददाश्त बढ़ाती है, तंत्रिका तंत्र को शांत करती है।' },
    { herb: 'Triphala', herbHi: 'त्रिफला', emoji: '🌰', sanskrit: 'त्रिफला', benefit: 'Digestion & Detox', benefitHi: 'पाचन और डिटॉक्स', desc: 'Three-fruit formula — the complete gut cleanser and Ayurvedic multivitamin.', descHi: 'तीन फलों का फार्मूला — संपूर्ण गट क्लींजर और आयुर्वेदिक मल्टीविटामिन।' },
    { herb: 'Shatavari', herbHi: 'शतावरी', emoji: '🌸', sanskrit: 'शतावरी', benefit: 'Reproductive Health', benefitHi: 'प्रजनन स्वास्थ्य', desc: '"100 spouses" herb — premier women\'s tonic for hormonal balance and vitality.', descHi: 'महिलाओं के लिए प्रमुख टॉनिक — हार्मोनल संतुलन और जीवन शक्ति के लिए।' },
    { herb: 'Amla', herbHi: 'आंवला', emoji: '🍋', sanskrit: 'आमलकी', benefit: 'Vitamin C & Rejuv.', benefitHi: 'विटामिन सी और यौवन', desc: 'Richest natural Vitamin C source — anti-aging, hair strengthener, immunity booster.', descHi: 'विटामिन सी का सबसे समृद्ध प्राकृतिक स्रोत — एंटी-एजिंग, बालों को मजबूत करने वाला, इम्युनिटी बूस्टर।' },
];

export default function AyurvedaPage() {
    const locale = useLocale();
    const isHi = locale === 'hi';

    return (
        <>
            {/* ── HERO ── */}
            <section className={styles.hero}>
                <div className={styles.heroPattern}></div>
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.badge}>{isHi ? '🌿 संग्रह — प्राचीन स्वास्थ्य' : '🌿 Sangrah — Ancient Wellness'}</span>
                    <h1 className={styles.heroTitle}>
                        {isHi ? 'आयुर्वेदिक और घरेलू' : 'Ayurvedic & Home'} <span className={styles.heroHighlight}>{isHi ? 'उपचार' : 'Remedies'}</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        {isHi ? 'हज़ारो वर्षों का प्राचीन ज्ञान, सरल घरेलू नुस्खों में। पीढ़ियों से भरोसेमंद, परंपरा से प्रमाणित — प्रकृति की फार्मेसी आपकी उंगलियों पर।' : 'Thousands of years of healing wisdom, distilled into simple home remedies. Trusted by generations, validated by tradition — nature\'s pharmacy at your fingertips.'}
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.statPill}><span>5,000+</span> {isHi ? 'वर्षों का ज्ञान' : 'Years of Wisdom'}</div>
                        <div className={styles.statPill}><span>8</span> {isHi ? 'उपचार श्रेणियां' : 'Remedy Categories'}</div>
                        <div className={styles.statPill}><span>40+</span> {isHi ? 'घरेलू नुस्खे' : 'Home Remedies'}</div>
                    </div>
                    <Link href="/sangrah" className={styles.backBtn}>← {isHi ? 'संग्रह पर वापस जाएं' : 'Back to Sangrah'}</Link>
                </div>
                <div className={styles.heroLeaves}>🌿</div>
            </section>

            {/* ── DISCLAIMER ── */}
            <div className={styles.disclaimer}>
                <div className="container">
                    ⚠️ <strong>{isHi ? 'ध्यान दें:' : 'Note:'}</strong> {isHi ? 'ये सूचनात्मक उद्देश्यों के लिए पारंपरिक आयुर्वेदिक उपचार हैं। उपयोग करने से पहले हमेशा किसी योग्य आयुर्वेदिक चिकित्सक या डॉक्टर से सलाह जरूर लें।' : 'These are traditional Ayurvedic remedies for informational purposes only. Always consult a qualified Ayurvedic practitioner or doctor before use.'}
                </div>
            </div>

            {/* ── FEATURED REMEDY CATEGORIES ── */}
            <section className={styles.categories}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>🌿 {isHi ? 'प्राचीन भारतीय चिकित्सा' : 'Ancient Indian Healing'}</span>
                        <h2>{isHi ? 'उपचार श्रेणियां' : 'Remedy Categories'}</h2>
                        <p>{isHi ? 'इम्युनिटी और पाचन से लेकर त्वचा, बाल और मानसिक स्वास्थ्य तक — आयुर्वेद में हर बीमारी का इलाज है।' : 'From immunity and digestion to skin, hair, and mental wellness — Ayurveda has a remedy for everything.'}</p>
                    </div>

                    <div className={styles.categoryGrid}>
                        {featuredRemedies.map((cat) => (
                            <article key={cat.id} className={styles.categoryCard}>
                                {/* Card Header */}
                                <div
                                    className={styles.cardHeader}
                                    style={{
                                        background: cat.image
                                            ? `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.15) 100%), url(${cat.image}) center/cover no-repeat`
                                            : cat.gradient,
                                    }}
                                >
                                    <div className={styles.cardHeaderOverlay}>
                                        <span className={styles.cardTag}>{isHi ? (cat.tagHi || cat.tag) : cat.tag}</span>
                                        <div className={styles.cardIcon}>{cat.icon}</div>
                                        <h3 className={styles.cardTitle}>{isHi ? (cat.titleHi || cat.title) : cat.title}</h3>
                                        <p className={styles.cardSubtitle}>{isHi ? (cat.subtitleHi || cat.subtitle) : cat.subtitle}</p>
                                    </div>
                                </div>

                                {/* Remedies List */}
                                <div className={styles.remediesList}>
                                    {cat.remedies.map((r, j) => (
                                        <div key={j} className={styles.remedyItem}>
                                            <div className={styles.remedyName}>{isHi ? (r.nameHi || r.name) : r.name}</div>
                                            <p className={styles.remedySteps}>{isHi ? (r.stepsHi || r.steps) : r.steps}</p>
                                            <div className={styles.remedyBenefit}>
                                                <span className={styles.benefitIcon}>✓</span>
                                                {isHi ? (r.benefitHi || r.benefit) : r.benefit}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── QUICK REMEDIES GRID ── */}
            <section className={styles.quickSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>⚡ {isHi ? 'त्वरित राहत' : 'Quick Relief'}</span>
                        <h2>{isHi ? 'तुरंत घरेलू उपचार' : 'Instant Home Remedies'}</h2>
                        <p>{isHi ? 'रोजमर्रा की बीमारियों को अपनी रसोई के सामग्री से मिनटों में सुलझाएं।' : 'Everyday ailments solved in minutes with ingredients from your own kitchen.'}</p>
                    </div>
                    <div className={styles.quickGrid}>
                        {quickRemedies.map((r, i) => (
                            <div key={i} className={styles.quickCard}>
                                <span className={styles.quickIcon}>{r.icon}</span>
                                <h4 className={styles.quickTitle}>{isHi ? (r.titleHi || r.title) : r.title}</h4>
                                <p className={styles.quickText}>{isHi ? (r.remedyHi || r.remedy) : r.remedy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KEY AYURVEDIC HERBS ── */}
            <section className={styles.herbsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionLabel}>🌱 {isHi ? 'दिव्य जड़ी बूटियां' : 'Divine Herbs'}</span>
                        <h2>{isHi ? 'आयुर्वेद की पवित्र जड़ी-बूटियां' : 'Sacred Herbs of Ayurveda'}</h2>
                        <p>{isHi ? 'आयुर्वेदिक परंपरा में सबसे शक्तिशाली उपचारात्मक पौधे और उनके प्रमुख लाभ।' : 'The most powerful healing plants in Ayurvedic tradition and their key benefits.'}</p>
                    </div>
                    <div className={styles.herbsGrid}>
                        {sacredHerbs.map((h, i) => (
                            <div key={i} className={styles.herbCard}>
                                <div className={styles.herbEmoji}>{h.emoji}</div>
                                <div className={styles.herbSanskrit}>{h.sanskrit}</div>
                                <h4 className={styles.herbName}>{isHi ? (h.herbHi || h.herb) : h.herb}</h4>
                                <span className={styles.herbBenefit}>{isHi ? (h.benefitHi || h.benefit) : h.benefit}</span>
                                <p className={styles.herbDesc}>{isHi ? (h.descHi || h.desc) : h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaInner}>
                        <span className={styles.ctaEmoji}>🌿</span>
                        <h2>{isHi ? 'ऐप में 500+ घरेलू उपाय' : '500+ Remedies in the App'}</h2>
                        <p>{isHi ? 'संपूर्ण आयुर्वेदिक पुस्तकालय, मौसमी उपचार, जड़ी-बूटी एनसाइक्लोपीडिया, और व्यक्तिगत स्वास्थ्य सुझावों के लिए सनातन संगम ऐप डाउनलोड करें।' : 'Download Sanatan Sangam for the complete Ayurvedic library — seasonal remedies, herb encyclopedia, wellness calendar, and personalized health tips.'}</p>
                        <a href="#download" className="btn btn-primary">📱 {isHi ? 'ऐप डाउनलोड करें' : 'Download the App'}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
