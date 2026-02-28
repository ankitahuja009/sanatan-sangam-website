'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './darshan.module.css';

const temples = [
    // Jyotirlingas
    { id: 'somnath', name: 'Somnath Temple', location: 'Prabhas Patan, Gujarat', state: 'Gujarat', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '6:00 AM – 9:00 PM', image: '/temples/somnath.webp', desc: 'The first of the 12 sacred Jyotirlingas, Somnath stands where the moon god Chandra built a golden temple to honor Lord Shiva. Situated on the shores of the Arabian Sea, it has been rebuilt seven times after invasions and stands as an eternal symbol of faith.', timetable: [{ n: 'Pratah Aarti', t: '7:00 AM' }, { n: 'Madhyan Aarti', t: '12:00 PM' }, { n: 'Sayam Aarti', t: '7:00 PM' }, { n: 'Light & Sound Show', t: '8:00 PM' }] },
    { id: 'mahakaleshwar', name: 'Mahakaleshwar Temple', location: 'Ujjain, MP', state: 'Madhya Pradesh', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '4:00 AM – 11:00 PM', image: '/temples/mahakaleshwar.webp', desc: 'The only south-facing (Dakshinamukhi) Jyotirlinga, Mahakaleshwar is the presiding deity of Ujjain. Famous for the unique Bhasm Aarti performed with sacred ash at 4 AM, this temple holds immense significance in Shaiva tradition and is considered the lord of time itself.', timetable: [{ n: 'Bhasm Aarti', t: '4:00 AM' }, { n: 'Bhog Aarti', t: '10:00 AM' }, { n: 'Sandhya Aarti', t: '5:00 PM' }, { n: 'Shayan Aarti', t: '10:30 PM' }] },
    { id: 'kashi-vishwanath', name: 'Kashi Vishwanath', location: 'Varanasi, UP', state: 'Uttar Pradesh', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '3:00 AM – 11:00 PM', image: '/temples/kashi_vishwanath.webp', desc: 'One of the most sacred temples dedicated to Lord Shiva, situated on the western bank of the Ganges in the city of Moksha — Varanasi. The temple corridor built by Rani Ahilyabai Holkar gleams with gold donated by Maharaja Ranjit Singh. Moksha is believed to be attained by dying here.', timetable: [{ n: 'Mangala Aarti', t: '3:00 AM' }, { n: 'Bhog Aarti', t: '11:15 AM' }, { n: 'Sandhya Aarti', t: '7:00 PM' }, { n: 'Shayan Aarti', t: '10:30 PM' }] },
    { id: 'kedarnath', name: 'Kedarnath Temple', location: 'Kedarnath, Uttarakhand', state: 'Uttarakhand', category: 'jyotirlinga', religion: 'hindu', live: false, schedule: 'May – November only', image: '/temples/kedarnath.webp', desc: 'Nestled at 3,583 m in the snow-clad Himalayas, Kedarnath is one of the Char Dhams and a Jyotirlinga dedicated to Lord Shiva as the hump of a bull. The ancient stone temple is believed to be built by the Pandavas. The temple remains closed in winter and reopens on Akshaya Tritiya.', timetable: [{ n: 'Morning Darshan Opens', t: '4:00 AM' }, { n: 'Morning Darshan Closes', t: '3:00 PM' }, { n: 'Evening Darshan', t: '5:00 PM – 9:00 PM' }] },
    { id: 'rameshwaram', name: 'Ramanathaswamy Temple', location: 'Rameshwaram, Tamil Nadu', state: 'Tamil Nadu', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:00 AM – 9:00 PM', image: '/temples/rameshwaram.webp', desc: 'Lord Ram consecrated this Shiva Linga before crossing to Lanka to rescue Sita. Located on Pamban Island, it has the longest temple corridor in India — 1,212 meters with 1,000 pillars. A visit here on a Char Dham pilgrimage is considered immensely meritorious.', timetable: [{ n: 'Palliyarai Deepa', t: '5:00 AM' }, { n: 'Kalasanthi Pooja', t: '10:00 AM' }, { n: 'Sayaratchai Pooja', t: '6:00 PM' }, { n: 'Palliyarai Pooja', t: '8:45 PM' }] },
    { id: 'omkareshwar', name: 'Omkareshwar Temple', location: 'Omkareshwar, MP', state: 'Madhya Pradesh', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:00 AM – 10:00 PM', image: '/temples/omkareshwar.webp', desc: 'Situated on an island shaped like the sacred Hindu symbol Om in the Narmada River, Omkareshwar houses two of the 12 Jyotirlingas — Omkareshwar and Amaleshwar. The 4-km parikrama of the island is performed by millions of devotees each year.', timetable: [{ n: 'Mangala Aarti', t: '5:00 AM' }, { n: 'Madhyahn Aarti', t: '12:30 PM' }, { n: 'Sandhya Aarti', t: '7:00 PM' }, { n: 'Shayan Aarti', t: '10:00 PM' }] },
    { id: 'mallikarjuna', name: 'Mallikarjuna Temple', location: 'Srisailam, AP', state: 'Andhra Pradesh', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:30 AM – 9:30 PM', image: '/temples/mallikarjuna.webp', desc: 'Perched on the Nallamala Hills on the banks of the Krishna River, Srisailam houses the Mallikarjuna Jyotirlinga — the only place where both a Jyotirlinga and a Shakti Peetha (Bhramaramba Devi) coexist. Lord Kartikeya is believed to have resided here.', timetable: [{ n: 'Suprabhatam Seva', t: '5:30 AM' }, { n: 'Maha Pooja', t: '9:00 AM' }, { n: 'Pankti Pooja', t: '12:00 PM' }, { n: 'Sahasra Deepalanka', t: '6:00 PM' }] },
    { id: 'bhimashankar', name: 'Bhimashankar Temple', location: 'Pune, Maharashtra', state: 'Maharashtra', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:00 AM – 9:30 PM', image: '/temples/bhimashankar.webp', desc: 'Located in the Sahyadri Hills within the Bhimashankar Wildlife Sanctuary, this Jyotirlinga is believed to be where Shiva destroyed the demon Tripurasura. The temple blends Nagara and Hemadpanthi architectural styles amidst lush green forests.', timetable: [{ n: 'Morning Aarti', t: '5:00 AM' }, { n: 'Noon Aarti', t: '12:00 PM' }, { n: 'Evening Aarti', t: '7:00 PM' }, { n: 'Shayan Aarti', t: '9:00 PM' }] },
    { id: 'trimbakeshwar', name: 'Trimbakeshwar Temple', location: 'Nashik, Maharashtra', state: 'Maharashtra', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:30 AM – 9:00 PM', image: '/temples/trimbakeshwar.webp', desc: 'At the source of the sacred Godavari River, Trimbakeshwar has a unique Jyotirlinga with three mukhas representing Brahma, Vishnu, and Shiva. Located at the base of the Brahmagiri Hill, the Kumbh Mela is held here every 12 years at Nashik-Trimbak.', timetable: [{ n: 'Morning Aarti', t: '5:30 AM' }, { n: 'Madhyan Aarti', t: '12:00 PM' }, { n: 'Evening Aarti', t: '7:00 PM' }, { n: 'Shayan Aarti', t: '9:00 PM' }] },
    { id: 'nageshvara', name: 'Nageshvara Temple', location: 'Dwarka, Gujarat', state: 'Gujarat', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '6:00 AM – 9:00 PM', image: '/temples/nageshvara.webp', desc: 'The Nageshvara Jyotirlinga near Dwarka is where Shiva saved the devotee Supriya from the demon Daruka. A massive 25-metre statue of Lord Shiva stands in front of the temple. The word Nageshvara means "Lord of Serpents" — a reference to Shiva adorned with serpents.', timetable: [{ n: 'Pratah Aarti', t: '6:00 AM' }, { n: 'Abhishek', t: '7:00 AM' }, { n: 'Madhyan Aarti', t: '12:00 PM' }, { n: 'Sandhya Aarti', t: '7:00 PM' }] },
    { id: 'grishneshwar', name: 'Grishneshwar Temple', location: 'Aurangabad, Maharashtra', state: 'Maharashtra', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '5:30 AM – 9:30 PM', image: '/temples/grishneshwar.webp', desc: 'The last of the 12 Jyotirlingas, Grishneshwar is a red stone temple built by Rani Ahilyabai Holkar. Located near the UNESCO World Heritage Site of Ellora Caves, devotees believe that prayers here free one from the cycle of birth and death.', timetable: [{ n: 'Morning Aarti', t: '5:30 AM' }, { n: 'Rajbhog', t: '10:30 AM' }, { n: 'Sandhya Aarti', t: '6:30 PM' }, { n: 'Shayan Aarti', t: '9:00 PM' }] },
    { id: 'vaidyanath', name: 'Vaidyanath Temple', location: 'Deoghar, Jharkhand', state: 'Jharkhand', category: 'jyotirlinga', religion: 'hindu', live: true, schedule: '4:00 AM – 9:00 PM', image: '/temples/vaidyanath.webp', desc: 'Also known as Baba Baidyanath Dham, this is one of the most revered Jyotirlinga temples. Ravana offered his ten heads here to please Shiva. During Shravan month, millions of devotees carry holy water (kanwars) on foot from Sultanganj 105 km away to offer it here.', timetable: [{ n: 'Pratah Aarti', t: '4:00 AM' }, { n: 'Shringar', t: '7:00 AM' }, { n: 'Madhyan Aarti', t: '11:30 AM' }, { n: 'Sandhya Aarti', t: '6:00 PM' }] },
    // Char Dham
    { id: 'badrinath', name: 'Badrinath Temple', location: 'Badrinath, Uttarakhand', state: 'Uttarakhand', category: 'char_dham', religion: 'hindu', live: false, schedule: 'Apr/May – November', image: '/temples/badrinath.webp', desc: 'Dedicated to Lord Vishnu, Badrinath is the most visited Char Dham site at 3,133 m altitude in the Himalayas. Between November and April, the deity is worshipped in Joshimath and Lord Vishnu keeps Yoganidra (divine slumber). The Alaknanda River flows nearby.', timetable: [{ n: 'Abhishek', t: '4:30 AM' }, { n: 'Shringar Darshan', t: '8:00 AM' }, { n: 'Rajbhog', t: '12:00 PM' }, { n: 'Shayan Aarti', t: '8:30 PM' }] },
    { id: 'jagannath-puri', name: 'Jagannath Temple', location: 'Puri, Odisha', state: 'Odisha', category: 'char_dham', religion: 'hindu', live: true, schedule: '5:00 AM – 11:00 PM', image: '/temples/puri_jagannath.webp', desc: 'One of the four Char Dhams, Lord Jagannath (a form of Vishnu) holds sway here for all eternity. The famous Rath Yatra each year draws millions across the world. The temple kitchen feeds up to 10,000 people per day — the largest kitchen in the world. Prasad made here never falls short.', timetable: [{ n: 'Mangala Alati', t: '5:30 AM' }, { n: 'Sakala Dhupa', t: '10:00 AM' }, { n: 'Sandhya Alati', t: '6:00 PM' }, { n: 'Badasinghara Besha', t: '9:00 PM' }] },
    { id: 'dwarkadhish', name: 'Dwarkadhish Temple', location: 'Dwarka, Gujarat', state: 'Gujarat', category: 'char_dham', religion: 'hindu', live: true, schedule: '6:00 AM – 9:30 PM', image: '/temples/dwarka.webp', desc: 'The original city of Dwarka was built by Lord Krishna and later submerged. The Dwarkadhish Temple (Jagat Mandir) was built over 2,500 years ago. A 43 m tall tower with a five-storey mandapa is a marvel of ancient architecture. The flag here changes three times a day.', timetable: [{ n: 'Mangala Aarti', t: '6:30 AM' }, { n: 'Shringar Aarti', t: '10:30 AM' }, { n: 'Sandhya Aarti', t: '7:30 PM' }, { n: 'Shayan Aarti', t: '8:30 PM' }] },
    // Shakti Peeths
    { id: 'vaishno-devi', name: 'Vaishno Devi', location: 'Katra, J&K', state: 'Jammu & Kashmir', category: 'shakti_peeth', religion: 'hindu', live: true, schedule: '6:20 AM & 6:20 PM Aarti', image: '/temples/vaishno_devi.webp', desc: 'Nestled in the Trikuta Mountains at 5,200 ft above sea level, Vaishno Devi Bhawan is one of the holiest Hindu shrines. The cave shrine houses three natural rock formations called Pindis representing the three forms of Goddess Durga. Over 8 million pilgrims visit each year.', timetable: [{ n: 'Morning Aarti', t: '6:20 AM' }, { n: 'Evening Aarti', t: '6:20 PM' }] },
    { id: 'kamakhya', name: 'Kamakhya Temple', location: 'Guwahati, Assam', state: 'Assam', category: 'shakti_peeth', religion: 'hindu', live: true, schedule: '8:00 AM – 5:30 PM', image: '/temples/kamakhya.webp', desc: 'The Kamakhya Temple in Guwahati is one of the 51 Shakti Peethas and the seat of tantric worship. The temple has no idol — only a natural rocky cleft represents the yoni of the goddess. During the Ambubachi Mela in June, the goddess is believed to menstruate; the Brahmaputra runs red, and thousands of tantric worshippers gather.', timetable: [{ n: 'Morning Darshan', t: '8:00 AM' }, { n: 'Noon Bhog', t: '12:00 PM' }, { n: 'Evening Darshan', t: '2:30 PM – 5:30 PM' }] },
    { id: 'kalighat', name: 'Kalighat Kali Temple', location: 'Kolkata, West Bengal', state: 'West Bengal', category: 'shakti_peeth', religion: 'hindu', live: true, schedule: '5:00 AM – 10:30 PM', image: '/temples/kalighat_kali.webp', desc: 'One of the 51 Shakti Peethas where the toes of Sati fell, Kalighat is dedicated to Kali — the fierce form of energy. Located at the bank of the Adi Ganga in Kolkata, it is one of the most important pilgrimage sites for Shakta worshippers. Ramakrishna Paramhansa worshipped Kali here.', timetable: [{ n: 'Pratah Aarti', t: '5:00 AM' }, { n: 'Bhog', t: '12:00 PM' }, { n: 'Sandhya Aarti', t: '7:00 PM' }, { n: 'Shayan Aarti', t: '10:30 PM' }] },
    { id: 'ambaji', name: 'Ambaji Temple', location: 'Ambaji, Gujarat', state: 'Gujarat', category: 'shakti_peeth', religion: 'hindu', live: true, schedule: '7:00 AM – 9:00 PM', image: '/temples/kamakhya.webp', desc: 'Ambaji is one of the 51 Shakti Peethas where the heart of Goddess Sati is believed to have fallen. The temple has no idol — only a sacred Shree Yantra (geometric symbol) is worshipped. Located in the Aravalli hills on the Gujarat-Rajasthan border, it attracts millions during Navratri.', timetable: [{ n: 'Mangala Aarti', t: '6:00 AM' }, { n: 'Rajbhog Aarti', t: '12:00 PM' }, { n: 'Sandhya Aarti', t: '7:00 PM' }, { n: 'Shayana Aarti', t: '9:00 PM' }] },
    { id: 'mahalaxmi-kolhapur', name: 'Mahalaxmi Temple', location: 'Kolhapur, Maharashtra', state: 'Maharashtra', category: 'shakti_peeth', religion: 'hindu', live: true, schedule: '5:00 AM – 10:00 PM', image: '/temples/kalighat_kali.webp', desc: 'Kolhapur Mahalaxmi is one of the most revered Shakti Peethas and the presiding deity of the city. Unlike most Lakshmi temples associated with wealth alone, the Kolhapur Mahalaxmi holds special tantric powers. The Kiranotti Darshan phenomenon occurs in January & November when sunrays fall directly on the goddess.', timetable: [{ n: 'Kakad Aarti', t: '4:30 AM' }, { n: 'Mahapuja', t: '8:30 AM' }, { n: 'Dhup Aarti', t: '7:30 PM' }, { n: 'Shej Aarti', t: '10:00 PM' }] },
    // Major Temples
    { id: 'ram-mandir', name: 'Ram Mandir Ayodhya', location: 'Ayodhya, UP', state: 'Uttar Pradesh', category: 'major_temple', religion: 'hindu', live: true, schedule: '6:30 AM Aarti & Events', image: '/temples/ayodhya.webp', desc: 'Consecrated on 22 January 2024 after a 500-year long struggle and legal battle, the Ram Mandir (Shri Ram Janmabhoomi Mandir) stands at the birthplace of Lord Rama in Ayodhya. The stunning Nagara-style temple complex is spread over 70 acres and is expected to become the world\'s largest Hindu temple complex.', timetable: [{ n: 'Sringaar Aarti', t: '6:30 AM' }, { n: 'Bhog Aarti', t: '12:00 PM' }, { n: 'Sandhya Aarti', t: '7:30 PM' }] },
    { id: 'tirupati-balaji', name: 'Tirupati Balaji', location: 'Tirupati, AP', state: 'Andhra Pradesh', category: 'major_temple', religion: 'hindu', live: true, schedule: '3:00 AM – 10:00 PM', image: '/temples/tirupati_balaji.webp', desc: 'Tirumala Venkateswara Temple is the world\'s richest and most-visited religious temple with over 30 million pilgrims annually. Lord Venkateswara — a form of Vishnu — is believed to have taken a loan to fund his wedding and devotees donate to repay this cosmic debt. The temple collects thousands of kg of gold every year.', timetable: [{ n: 'Suprabhatam', t: '3:00 AM' }, { n: 'Kalyanotsavam', t: '12:00 PM' }, { n: 'Sahasra Deepalankara', t: '5:30 PM' }] },
    { id: 'shirdi-sai-baba', name: 'Shirdi Sai Baba', location: 'Shirdi, Maharashtra', state: 'Maharashtra', category: 'major_temple', religion: 'hindu', live: true, schedule: '4:00 AM – 11:15 PM', image: '/temples/shirdi_sai_baba.webp', desc: 'Sai Baba of Shirdi was a spiritual master revered by both Hindus and Muslims. He lived in a mosque called Dwarkamai for over 60 years, preaching "Sabka Malik Ek" (One God for all). The shrine at Shirdi draws millions annually and is among the top 5 most visited shrines in India.', timetable: [{ n: 'Kakad Aarti', t: '4:30 AM' }, { n: 'Madhyan Aarti', t: '12:00 PM' }, { n: 'Dhoop Aarti', t: 'Sunset' }, { n: 'Shej Aarti', t: '10:30 PM' }] },
    { id: 'siddhivinayak', name: 'Siddhivinayak Temple', location: 'Mumbai, Maharashtra', state: 'Maharashtra', category: 'major_temple', religion: 'hindu', live: true, schedule: '5:30 AM – 10:00 PM', image: '/temples/kamakhya.webp', desc: 'Mumbai\'s most iconic religious site, Siddhivinayak Temple houses a rare left-trunkced Ganesha idol — believed to be extremely powerful and wish-fulfilling (Siddhi means accomplishment). Built in 1801, it is visited by Bollywood stars, politicians, and millions of everyday devotees.', timetable: [{ n: 'Kakad Aarti', t: '5:30 AM' }, { n: 'Shree Darshan', t: '6:00 AM' }, { n: 'Shej Aarti', t: '9:50 PM' }] },
    { id: 'meenakshi', name: 'Meenakshi Amman Temple', location: 'Madurai, Tamil Nadu', state: 'Tamil Nadu', category: 'major_temple', religion: 'hindu', live: true, schedule: '5:00 AM – 10:00 PM', image: '/temples/meenakshi_temple.webp', desc: 'The Meenakshi Amman Temple is a masterpiece of Dravidian architecture with 14 monumental gopurams (gateway towers) covered in thousands of multicolored mythological figures. Dedicated to Goddess Meenakshi (Parvati) and Sundareshvara (Shiva), it is one of the finest temple complexes in India.', timetable: [{ n: 'Vila Pooja', t: '6:30 AM' }, { n: 'Uchikkala Pooja', t: '10:30 AM' }, { n: 'Maalai Pooja', t: '4:30 PM' }, { n: 'Ardhajama Pooja', t: '7:30 PM' }] },
    { id: 'padmanabhaswamy', name: 'Padmanabhaswamy Temple', location: 'Thiruvananthapuram, Kerala', state: 'Kerala', category: 'major_temple', religion: 'hindu', live: true, schedule: '3:30 AM – 7:30 PM', image: '/temples/padmanabhaswamy.webp', desc: 'The Padmanabhaswamy Temple houses the world\'s largest known treasure — estimated at over ₹1 lakh crore found in six secret vaults below the temple. Lord Vishnu rests on the cosmic serpent Anantha in eternal sleep (Ananthasayana). The Travancore royal family is the traditional manager here.', timetable: [{ n: 'Nirmalya Darshan', t: '3:15 AM' }, { n: 'Ucha Pooja', t: '11:30 AM' }, { n: 'Deeparadhana', t: '6:45 PM' }] },
    { id: 'guruvayur', name: 'Guruvayur Krishna Temple', location: 'Guruvayur, Kerala', state: 'Kerala', category: 'major_temple', religion: 'hindu', live: true, schedule: '3:00 AM – 10:00 PM', image: '/temples/vrindavan_krishna_temple.webp', desc: 'Known as the Dwarka of South India and the "Bhooloka Vaikuntham", the Guruvayur Temple is dedicated to Lord Guruvayurappan (Krishna). It has the second largest number of daily devotees in Kerala. Famous for Guruvayur Ekadasi, the temple also has the largest elephant sanctuary in Kerala at Punnathur Kotta.', timetable: [{ n: 'Nirmalyam', t: '3:00 AM' }, { n: 'Seeveli', t: '7:15 AM' }, { n: 'Deeparadhana', t: '6:00 PM' }, { n: 'Temple Closes', t: '9:15 PM' }] },
    { id: 'nathdwara', name: 'Shrinathji Temple (Nathdwara)', location: 'Nathdwara, Rajasthan', state: 'Rajasthan', category: 'major_temple', religion: 'hindu', live: true, schedule: '7 Darshans per day', image: '/temples/nathdwara_shrinathji.webp', desc: 'The Nathdwara Temple enshrines Shrinathji — a form of Lord Krishna as a 7-year-old boy lifting Mount Govardhan. The temple follows Pushtimarga philosophy of Vallabhacharya. Eight times of daily ritual worship (Darshan) are offered in beautiful devotional settings called Swaroop.', timetable: [{ n: 'Mangala Darshan', t: '7:15 AM' }, { n: 'Rajbhog', t: '11:30 AM' }, { n: 'Utthapan', t: '3:45 PM' }, { n: 'Shayan', t: '8:30 PM' }] },
    { id: 'salasar-balaji', name: 'Salasar Balaji', location: 'Churu, Rajasthan', state: 'Rajasthan', category: 'major_temple', religion: 'hindu', live: true, schedule: '5:00 AM – 10:00 PM', image: '/temples/salasar_balaji.webp', desc: 'The bearded and mustached Hanuman idol at Salasar is unique among all temples. Established in 1754 CE by a devotee named Mohandas, this temple draws millions of devotees from Rajasthan and beyond who come for wish fulfillment. A large fair is held twice a year on Chaitra Purnima and Ashwin Purnima.', timetable: [{ n: 'Mangla Aarti', t: '5:00 AM' }, { n: 'Rajbhog Aarti', t: '10:00 AM' }, { n: 'Sandhya Aarti', t: '7:30 PM' }, { n: 'Shayan Aarti', t: '10:00 PM' }] },
    { id: 'khatu-shyam', name: 'Khatu Shyam Ji Temple', location: 'Sikar, Rajasthan', state: 'Rajasthan', category: 'major_temple', religion: 'hindu', live: true, schedule: '4:30 AM – 10:00 PM', image: '/temples/khatu_shyam.webp', desc: 'Khatu Shyam Ji is a form of Lord Krishna who gave his blessing to the Pandava hero Barbarika (Shyam) — grandson of Bhima. He is called "Haare ka Sahara" (support for the downtrodden) and millions visit, especially on Ekadashi and during the annual Phalguna Mela. The head of Barbarika is enshrined here.', timetable: [{ n: 'Mangala Aarti', t: '4:30 AM' }, { n: 'Shringar Aarti', t: '7:00 AM' }, { n: 'Bhog Aarti', t: '12:30 PM' }, { n: 'Shayan Aarti', t: '10:00 PM' }] },
    { id: 'udupi-krishna', name: 'Udupi Krishna Temple', location: 'Udupi, Karnataka', state: 'Karnataka', category: 'major_temple', religion: 'hindu', live: true, schedule: '5:30 AM – 8:30 PM', image: '/temples/udupi_krishna.webp', desc: 'Established by philosopher-saint Madhvacharya in the 13th century, the Udupi Krishna Temple enshrines Lord Bala Krishna — an image Madhva obtained from a ball of clay. The famous tradition of Kanakana Kindi (the window of Kanaka Dasa) commemorates how Lord Krishna turned to face his blind devotee Kanaka Dasa.', timetable: [{ n: 'Morning Puja', t: '5:30 AM' }, { n: 'Ucha Puja', t: '11:30 AM' }, { n: 'Evening Puja', t: '5:00 PM' }, { n: 'Night Puja', t: '8:00 PM' }] },
    { id: 'srirangam', name: 'Sri Ranganathaswamy Temple', location: 'Srirangam, Tamil Nadu', state: 'Tamil Nadu', category: 'major_temple', religion: 'hindu', live: true, schedule: '6:00 AM – 9:00 PM', image: '/temples/srirangam.webp', desc: 'Srirangam is the largest functioning Hindu temple in the world — spread over 156 acres with 21 gopurams. Lord Ranganatha (reclining Vishnu) on Adi Shesha (cosmic serpent) is enshrined here. First among the 108 Divya Desams, saints like Ramanuja lived and worshipped here.', timetable: [{ n: 'Thiruvanandal Pooja', t: '6:00 AM' }, { n: 'Kalasanthi', t: '9:00 AM' }, { n: 'Maalai Pooja', t: '5:30 PM' }, { n: 'Ardhajama', t: '9:00 PM' }] },
    { id: 'prem-mandir', name: 'Prem Mandir Vrindavan', location: 'Vrindavan, UP', state: 'Uttar Pradesh', category: 'major_temple', religion: 'hindu', live: true, schedule: '5:30 AM – 8:30 PM', image: '/temples/vrindavan.webp', desc: 'Built by Jagadguru Shri Kripalu Ji Maharaj, Prem Mandir is a breathtaking white marble temple dedicated to Radha-Krishna and Sita-Ram. At night, the temple is lit up with thousands of LED lights that create a magical glow. The famous Fountain Show happens every evening with colored water dancing to devotional songs.', timetable: [{ n: 'Morning Darshan', t: '5:30 AM' }, { n: 'Bhog', t: '11:30 AM' }, { n: 'Evening Aarti', t: '4:30 PM' }, { n: 'Fountain Show', t: '7:30 PM' }] },
    // ISKCON
    { id: 'iskcon-vrindavan', name: 'ISKCON Vrindavan', location: 'Vrindavan, UP', state: 'Uttar Pradesh', category: 'iskcon', religion: 'hindu', live: true, schedule: '4:10 AM – 8:30 PM', image: '/temples/vrindavan_krishna_temple.webp', desc: 'The ISKCON Krishnabalarama Mandir in Vrindavan was established by Srila Prabhupada in 1975. The temple is the international headquarters of ISKCON devotion to Radha-Shyamasundar and Gaur-Nitai. It is one of the busiest ISKCON temples in the world with thousands of pilgrims daily.', timetable: [{ n: 'Mangala Aarti', t: '4:30 AM' }, { n: 'Shringar/Dhoop Aarti', t: '8:30 AM' }, { n: 'Raj Bhoga Aarti', t: '12:00 PM' }, { n: 'Shayan Aarti', t: '8:00 PM' }] },
    { id: 'iskcon-mayapur', name: 'ISKCON Mayapur', location: 'Mayapur, West Bengal', state: 'West Bengal', category: 'iskcon', religion: 'hindu', live: true, schedule: '4:00 AM – 9:00 PM', image: '/temples/vrindavan_krishna_temple.webp', desc: 'ISKCON Mayapur is located at the birthplace of Chaitanya Mahaprabhu in the holy land of Nabadwip. The jaw-dropping Temple of the Vedic Planetarium (TOVP) stands 113 meters tall — one of the largest religious monuments in the world. A 9-day Gaura Purnima festival attracts devotees from 100+ countries.', timetable: [{ n: 'Mangala Aarti', t: '4:30 AM' }, { n: 'Darshan Aarti', t: '7:00 AM' }, { n: 'Rajabhoga Aarti', t: '11:45 AM' }, { n: 'Shayan Aarti', t: '8:15 PM' }] },
    // Gurudwaras
    { id: 'golden-temple', name: 'Golden Temple', location: 'Amritsar, Punjab', state: 'Punjab', category: 'gurudwara', religion: 'sikh', live: true, schedule: '24×7 Continuous', image: '/temples/golden_temple.webp', desc: 'Sri Harmandir Sahib — the Golden Temple — is the holiest Gurdwara of Sikhism. Built in the 16th century by Guru Arjan Dev, it sits in the middle of a sacred lake called Amrit Sarovar (Pool of Nectar). 100,000 visitors per day receive free langar (community meal). The golden dome and its reflection in the lake are iconic worldwide.', timetable: [{ n: 'Kiwad Opening', t: '2:00 AM' }, { n: 'Palki Sahib Ceremony', t: '4:00 AM' }, { n: 'First Hukamnama', t: '5:00 AM' }, { n: 'Sukhasan Ceremony', t: '10:00 PM' }] },
    { id: 'hazur-sahib', name: 'Takht Hazur Sahib', location: 'Nanded, Maharashtra', state: 'Maharashtra', category: 'gurudwara', religion: 'sikh', live: true, schedule: '4:00 AM – 10:00 PM', image: '/temples/golden_temple.webp', desc: 'Takht Hazur Sahib is one of the five Takhts (seats of temporal authority) of Sikhism, located at Nanded where Guru Gobind Singh Ji passed away in 1708. The present building was built by Maharaja Ranjit Singh. The Ardas rooms and several other chambers hold sacred relics of the Guru.', timetable: [{ n: 'Prakash', t: '3:15 AM' }, { n: 'Asa Ki War', t: '3:45 AM' }, { n: 'Sodar Chowky', t: '5:00 PM' }, { n: 'Kirtan Sohela', t: '8:45 PM' }] },
    // Buddhist
    { id: 'mahabodhi', name: 'Mahabodhi Temple', location: 'Bodh Gaya, Bihar', state: 'Bihar', category: 'buddhist_site', religion: 'buddhist', live: true, schedule: '5:00 AM – 9:00 PM', image: '/temples/bodh_gaya.webp', desc: 'The Mahabodhi Temple at Bodh Gaya marks the very spot where Siddhartha Gautama attained enlightenment under the Bodhi Tree over 2,500 years ago. A UNESCO World Heritage Site, the sacred Bodhi tree descendant still stands here. Pilgrims from Japan, Sri Lanka, Thailand, and Tibet come to meditate here.', timetable: [{ n: 'Temple Opening', t: '5:00 AM' }, { n: 'Morning Chanting', t: '5:30 AM' }, { n: 'Evening Chanting', t: '6:00 PM' }, { n: 'Temple Closing', t: '9:00 PM' }] },
    // Jain
    { id: 'palitana', name: 'Palitana Temples', location: 'Palitana, Gujarat', state: 'Gujarat', category: 'jain_tirth', religion: 'jain', live: true, schedule: '6:00 AM – Before Sunset', image: '/temples/konark_sun_temple.webp', desc: 'Palitana is the world\'s only city declared fully vegetarian in 2014, and for good reason — it houses over 900 marble Jain temples on the Shatrunjaya Hill. Considered the most sacred pilgrimage site in Jainism, devotees climb 3,800 steps to reach the summit. The temples took over 900 years to build.', timetable: [{ n: 'Hill Opens', t: '6:00 AM' }, { n: 'Must Descend By', t: 'Sunset (Strict)' }] },
];

const CATEGORIES = [
    { key: 'all', tKey: 'filterAll' },
    { key: 'jyotirlinga', tKey: 'filterJyotirlinga' },
    { key: 'char_dham', tKey: 'filterCharDham' },
    { key: 'shakti_peeth', tKey: 'filterShaktiPeeth' },
    { key: 'major_temple', tKey: 'filterMajor' },
    { key: 'iskcon', tKey: 'filterIskcon' },
    { key: 'gurudwara', tKey: 'filterGurudwara' },
    { key: 'buddhist_site', tKey: 'filterBuddhist' },
    { key: 'jain_tirth', tKey: 'filterJain' },
];

export default function DarshanPage() {
    const t = useTranslations('darshanPage');
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedTemple, setSelectedTemple] = useState(null);

    const filtered = activeCategory === 'all'
        ? temples
        : temples.filter(t => t.category === activeCategory);

    const liveCount = temples.filter(t => t.live).length;

    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={`container ${styles.heroContent}`}>
                    <span className={styles.liveIndicator}>{t('liveNow')}</span>
                    <h1>{t('heroTitle')}</h1>
                    <p>{t('heroDesc', { count: temples.length })}</p>
                    <div className={styles.heroStats}>
                        <div className={styles.heroStat}><span>{liveCount}</span><span>{t('statLive')}</span></div>
                        <div className={styles.heroStat}><span>{temples.length}+</span><span>{t('statTemples')}</span></div>
                        <div className={styles.heroStat}><span>24×7</span><span>{t('statStreaming')}</span></div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <nav className={styles.filterNav}>
                <div className="container">
                    <div className={styles.filterScroll}>
                        {CATEGORIES.map(c => (
                            <button
                                key={c.key}
                                className={`${styles.filterBtn} ${activeCategory === c.key ? styles.filterActive : ''}`}
                                onClick={() => setActiveCategory(c.key)}
                            >
                                {t(c.tKey)}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Temple Grid */}
            <section className={styles.section}>
                <div className="container">
                    <div className={styles.countRow}>
                        <span className={styles.count}>
                            {t('showing')} <strong>{filtered.length}</strong> {activeCategory === 'all' ? t('temples') : t(CATEGORIES.find(c => c.key === activeCategory)?.tKey).split(' ').slice(1).join(' ')}
                        </span>
                    </div>
                    <div className={styles.grid}>
                        {filtered.map((temple) => (
                            <article
                                key={temple.id}
                                className={styles.card}
                                onClick={() => setSelectedTemple(temple)}
                                tabIndex={0}
                                onKeyDown={e => e.key === 'Enter' && setSelectedTemple(temple)}
                            >
                                <div className={styles.cardImg}>
                                    <Image
                                        src={temple.image}
                                        alt={temple.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                        onError={(e) => { e.target.src = '/temples/somnath.webp'; }}
                                    />
                                    <div className={styles.cardImgOverlay} />
                                    <span className={`${styles.liveBadge} ${temple.live ? styles.liveBadgeOn : styles.liveBadgeOff}`}>
                                        {temple.live ? t('liveLabel') : t('offlineLabel')}
                                    </span>
                                    <span className={styles.categoryTag}>
                                        {t(CATEGORIES.find(c => c.key === temple.category)?.tKey).split(' ').slice(1).join(' ')}
                                    </span>
                                </div>
                                <div className={styles.cardBody}>
                                    <h3 className={styles.cardTitle}>{t(`temples.${temple.id}.name`)}</h3>
                                    <p className={styles.cardLocation}>📍 {t(`temples.${temple.id}.location`)}</p>
                                    <p className={styles.cardSchedule}>⏰ {temple.schedule}</p>
                                    <button className={styles.detailsBtn}>{t('viewDetails')}</button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popup Modal */}
            {selectedTemple && (
                <div className={styles.modalOverlay} onClick={() => setSelectedTemple(null)}>
                    <div className={styles.modal} onClick={e => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={() => setSelectedTemple(null)}>✕</button>
                        <div className={styles.modalImg}>
                            <Image
                                src={selectedTemple.image}
                                alt={selectedTemple.name}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles.modalImgOverlay} />
                            <div className={styles.modalImgContent}>
                                <span className={`${styles.liveBadge} ${selectedTemple.live ? styles.liveBadgeOn : styles.liveBadgeOff}`}>
                                    {selectedTemple.live ? t('modalLive') : t('modalOffline')}
                                </span>
                                <h2>{t(`temples.${selectedTemple.id}.name`)}</h2>
                                <p>📍 {t(`temples.${selectedTemple.id}.location`)}</p>
                            </div>
                        </div>
                        <div className={styles.modalBody}>
                            <p className={styles.modalDesc}>{selectedTemple.desc}</p>
                            <div className={styles.modalSchedule}>
                                <h4>{t('darshanTimings')}</h4>
                                <p className={styles.scheduleText}>{selectedTemple.schedule}</p>
                            </div>
                            {selectedTemple.timetable && (
                                <div className={styles.timetable}>
                                    <h4>{t('todaySchedule')}</h4>
                                    <div className={styles.timetableGrid}>
                                        {selectedTemple.timetable.map((item, i) => (
                                            <div key={i} className={styles.timetableRow}>
                                                <span className={styles.timetableName}>{item.n}</span>
                                                <span className={styles.timetableTime}>{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            <a href="#download" className={styles.watchBtn} onClick={() => setSelectedTemple(null)}>
                                {t('watchLive')}
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <h2>{t('ctaTitle')}</h2>
                    <p>{t('ctaDesc')}</p>
                    <a href="#download" className="btn btn-primary">{t('downloadApp')}</a>
                </div>
            </section>
        </>
    );
}

