import SunCalc from 'suncalc';

export const CITIES = [
    // Top 10 Major Cities
    { name: 'MUMBAI', lat: 19.0760, lon: 72.8777, timezone: 'Asia/Kolkata' },
    { name: 'NEW DELHI', lat: 28.6139, lon: 77.2090, timezone: 'Asia/Kolkata' },
    { name: 'KOLKATA', lat: 22.5726, lon: 88.3639, timezone: 'Asia/Kolkata' },
    { name: 'CHENNAI', lat: 13.0827, lon: 80.2707, timezone: 'Asia/Kolkata' },
    { name: 'BENGALURU', lat: 12.9716, lon: 77.5946, timezone: 'Asia/Kolkata' },
    { name: 'HYDERABAD', lat: 17.3850, lon: 78.4867, timezone: 'Asia/Kolkata' },
    { name: 'AHMEDABAD', lat: 23.0225, lon: 72.5714, timezone: 'Asia/Kolkata' },
    { name: 'HARIDWAR', lat: 29.9457, lon: 78.1642, timezone: 'Asia/Kolkata' },
    { name: 'PUNE', lat: 18.5204, lon: 73.8567, timezone: 'Asia/Kolkata' },
    { name: 'SURAT', lat: 21.1702, lon: 72.8311, timezone: 'Asia/Kolkata' },

    // Spiritual & Heritage Cities
    { name: 'VARANASI', lat: 25.3176, lon: 82.9739, timezone: 'Asia/Kolkata' },
    { name: 'AYODHYA', lat: 26.7922, lon: 82.1962, timezone: 'Asia/Kolkata' },
    { name: 'MATHURA', lat: 27.4924, lon: 77.6737, timezone: 'Asia/Kolkata' },
    { name: 'PRAYAGRAJ', lat: 25.4358, lon: 81.8463, timezone: 'Asia/Kolkata' },
    { name: 'UJJAIN', lat: 23.1765, lon: 75.7885, timezone: 'Asia/Kolkata' },
    { name: 'RISHIKESH', lat: 30.0869, lon: 78.2676, timezone: 'Asia/Kolkata' },
    { name: 'DWARKA', lat: 22.2442, lon: 68.9685, timezone: 'Asia/Kolkata' },
    { name: 'SOMNATH', lat: 20.8880, lon: 70.4012, timezone: 'Asia/Kolkata' },
    { name: 'NASHIK', lat: 20.0110, lon: 73.7903, timezone: 'Asia/Kolkata' },

    // Odia (Odisha)
    { name: 'PURI', lat: 19.8135, lon: 85.8312, timezone: 'Asia/Kolkata' },
    { name: 'BHUBANESWAR', lat: 20.2961, lon: 85.8245, timezone: 'Asia/Kolkata' },
    { name: 'CUTTACK', lat: 20.4625, lon: 85.8830, timezone: 'Asia/Kolkata' },
    { name: 'ROURKELA', lat: 22.2604, lon: 84.8536, timezone: 'Asia/Kolkata' },

    // Malayalam (Kerala)
    { name: 'THIRUVANANTHAPURAM', lat: 8.5241, lon: 76.9366, timezone: 'Asia/Kolkata' },
    { name: 'KOCHI', lat: 9.9312, lon: 76.2673, timezone: 'Asia/Kolkata' },
    { name: 'KOZHIKODE', lat: 11.2588, lon: 75.7804, timezone: 'Asia/Kolkata' },
    { name: 'THRISSUR', lat: 10.5276, lon: 76.2144, timezone: 'Asia/Kolkata' },
    { name: 'KANNUR', lat: 11.8745, lon: 75.3704, timezone: 'Asia/Kolkata' },

    // Tamil (Tamil Nadu)
    { name: 'MADURAI', lat: 9.9252, lon: 78.1198, timezone: 'Asia/Kolkata' },
    { name: 'RAMESWARAM', lat: 9.2876, lon: 79.3129, timezone: 'Asia/Kolkata' },
    { name: 'COIMBATORE', lat: 11.0168, lon: 76.9558, timezone: 'Asia/Kolkata' },
    { name: 'TIRUCHIRAPPALLI', lat: 10.7905, lon: 78.7047, timezone: 'Asia/Kolkata' },
    { name: 'SALEM', lat: 11.6643, lon: 78.1460, timezone: 'Asia/Kolkata' },
    { name: 'TIRUPPUR', lat: 11.1085, lon: 77.3411, timezone: 'Asia/Kolkata' },
    { name: 'ERODE', lat: 11.3410, lon: 77.7172, timezone: 'Asia/Kolkata' },
    { name: 'VELLORE', lat: 12.9165, lon: 79.1325, timezone: 'Asia/Kolkata' },

    // Telugu (Andhra Pradesh / Telangana)
    { name: 'TIRUPATI', lat: 13.6288, lon: 79.4192, timezone: 'Asia/Kolkata' },
    { name: 'VISAKHAPATNAM', lat: 17.6868, lon: 83.2185, timezone: 'Asia/Kolkata' },
    { name: 'VIJAYAWADA', lat: 16.5062, lon: 80.6480, timezone: 'Asia/Kolkata' },
    { name: 'GUNTUR', lat: 16.3067, lon: 80.4365, timezone: 'Asia/Kolkata' },
    { name: 'NELLORE', lat: 14.4426, lon: 79.9865, timezone: 'Asia/Kolkata' },
    { name: 'KURNOOL', lat: 15.8281, lon: 78.0373, timezone: 'Asia/Kolkata' },
    { name: 'RAJAHMUNDRY', lat: 17.0005, lon: 81.8040, timezone: 'Asia/Kolkata' },
    { name: 'WARANGAL', lat: 17.9689, lon: 79.5941, timezone: 'Asia/Kolkata' },

    // Kannada (Karnataka)
    { name: 'MYSURU', lat: 12.2958, lon: 76.6394, timezone: 'Asia/Kolkata' },
    { name: 'MANGALURU', lat: 12.8688, lon: 74.8436, timezone: 'Asia/Kolkata' },
    { name: 'HUBBALLI', lat: 15.3647, lon: 75.1240, timezone: 'Asia/Kolkata' },
    { name: 'BELAGAVI', lat: 15.8497, lon: 74.4977, timezone: 'Asia/Kolkata' },
    { name: 'KALABURAGI', lat: 17.3297, lon: 76.8343, timezone: 'Asia/Kolkata' },

    // Marathi (Maharashtra)
    { name: 'NAGPUR', lat: 21.1458, lon: 79.0882, timezone: 'Asia/Kolkata' },
    { name: 'AURANGABAD', lat: 19.8762, lon: 75.3433, timezone: 'Asia/Kolkata' },
    { name: 'SOLAPUR', lat: 17.6599, lon: 75.9064, timezone: 'Asia/Kolkata' },
    { name: 'KOLHAPUR', lat: 16.7050, lon: 74.2433, timezone: 'Asia/Kolkata' },
    { name: 'AMRAVATI', lat: 20.9320, lon: 77.7523, timezone: 'Asia/Kolkata' },

    // Gujarati (Gujarat)
    { name: 'VADODARA', lat: 22.3072, lon: 73.1812, timezone: 'Asia/Kolkata' },
    { name: 'RAJKOT', lat: 22.3039, lon: 70.8022, timezone: 'Asia/Kolkata' },
    { name: 'BHAVNAGAR', lat: 21.7645, lon: 72.1519, timezone: 'Asia/Kolkata' },
    { name: 'JAMNAGAR', lat: 22.4707, lon: 70.0577, timezone: 'Asia/Kolkata' },
    { name: 'GANDHINAGAR', lat: 23.2156, lon: 72.6369, timezone: 'Asia/Kolkata' },

    // Punjabi (Punjab / Chandigarh)
    { name: 'AMRITSAR', lat: 31.6340, lon: 74.8723, timezone: 'Asia/Kolkata' },
    { name: 'CHANDIGARH', lat: 30.7333, lon: 76.7794, timezone: 'Asia/Kolkata' },
    { name: 'LUDHIANA', lat: 30.9010, lon: 75.8573, timezone: 'Asia/Kolkata' },
    { name: 'JALANDHAR', lat: 31.3260, lon: 75.5762, timezone: 'Asia/Kolkata' },

    // Bengali (West Bengal)
    { name: 'ASANSOL', lat: 23.6739, lon: 86.9524, timezone: 'Asia/Kolkata' },
    { name: 'SILIGURI', lat: 26.7271, lon: 88.3953, timezone: 'Asia/Kolkata' },
    { name: 'DURGAPUR', lat: 23.5204, lon: 87.3119, timezone: 'Asia/Kolkata' },
    { name: 'HOWRAH', lat: 22.5958, lon: 88.3110, timezone: 'Asia/Kolkata' },

    // Major Hindi Belt / Commercial / Capital Centers
    { name: 'JAIPUR', lat: 26.9124, lon: 75.7873, timezone: 'Asia/Kolkata' },
    { name: 'LUCKNOW', lat: 26.8467, lon: 80.9462, timezone: 'Asia/Kolkata' },
    { name: 'KANPUR', lat: 26.4499, lon: 80.3319, timezone: 'Asia/Kolkata' },
    { name: 'INDORE', lat: 22.7196, lon: 75.8577, timezone: 'Asia/Kolkata' },
    { name: 'PATNA', lat: 25.5941, lon: 85.1376, timezone: 'Asia/Kolkata' },
    { name: 'AGRA', lat: 27.1767, lon: 78.0081, timezone: 'Asia/Kolkata' },
    { name: 'MEERUT', lat: 28.9845, lon: 77.7064, timezone: 'Asia/Kolkata' },
    { name: 'GHAZIABAD', lat: 28.6692, lon: 77.4538, timezone: 'Asia/Kolkata' },
    { name: 'NOIDA', lat: 28.5355, lon: 77.3910, timezone: 'Asia/Kolkata' },
    { name: 'BAREILLY', lat: 28.3670, lon: 79.4304, timezone: 'Asia/Kolkata' },
    { name: 'MORADABAD', lat: 28.8386, lon: 78.7733, timezone: 'Asia/Kolkata' },
    { name: 'ALIGARH', lat: 27.8974, lon: 78.0880, timezone: 'Asia/Kolkata' },
    { name: 'GORAKHPUR', lat: 26.7606, lon: 83.3732, timezone: 'Asia/Kolkata' },
    { name: 'BHOPAL', lat: 23.2599, lon: 77.4126, timezone: 'Asia/Kolkata' },
    { name: 'JABALPUR', lat: 23.1815, lon: 79.9864, timezone: 'Asia/Kolkata' },
    { name: 'GWALIOR', lat: 26.2183, lon: 78.1828, timezone: 'Asia/Kolkata' },
    { name: 'JODHPUR', lat: 26.2389, lon: 73.0243, timezone: 'Asia/Kolkata' },
    { name: 'KOTA', lat: 25.2138, lon: 75.8648, timezone: 'Asia/Kolkata' },
    { name: 'BIKANER', lat: 28.0229, lon: 73.3119, timezone: 'Asia/Kolkata' },
    { name: 'UDAIPUR', lat: 24.5854, lon: 73.7125, timezone: 'Asia/Kolkata' },
    { name: 'AJMER', lat: 26.4499, lon: 74.6399, timezone: 'Asia/Kolkata' },

    // Additional Regional Additions
    { name: 'FARIDABAD', lat: 28.4089, lon: 77.3178, timezone: 'Asia/Kolkata' },
    { name: 'GURUGRAM', lat: 28.4595, lon: 77.0266, timezone: 'Asia/Kolkata' },
    { name: 'PANIPAT', lat: 29.3909, lon: 76.9708, timezone: 'Asia/Kolkata' },
    { name: 'ROHTAK', lat: 28.8955, lon: 76.5897, timezone: 'Asia/Kolkata' },
    { name: 'SRINAGAR', lat: 34.0837, lon: 74.7973, timezone: 'Asia/Kolkata' },
    { name: 'JAMMU', lat: 32.7266, lon: 74.8570, timezone: 'Asia/Kolkata' },
    { name: 'DEHRADUN', lat: 30.3165, lon: 78.0322, timezone: 'Asia/Kolkata' },
    { name: 'RANCHI', lat: 23.3441, lon: 85.3096, timezone: 'Asia/Kolkata' },
    { name: 'JAMSHEDPUR', lat: 22.8046, lon: 86.2029, timezone: 'Asia/Kolkata' },
    { name: 'RAIPUR', lat: 21.2514, lon: 81.6296, timezone: 'Asia/Kolkata' },
    { name: 'BILASPUR', lat: 22.0797, lon: 82.1409, timezone: 'Asia/Kolkata' },
    { name: 'GUWAHATI', lat: 26.1445, lon: 91.7362, timezone: 'Asia/Kolkata' },
];

/**
 * Get celestial timings (Sun, Moon, and Muhurtas) for a specific date and city.
 * @param {Date} date - The date for which timings are required.
 * @param {Object} city - City object from CITIES list.
 */
export function getCelestialTimings(date = new Date(), city = CITIES[0]) {
    const sunTimes = SunCalc.getTimes(date, city.lat, city.lon);
    const moonTimes = SunCalc.getMoonTimes(date, city.lat, city.lon);

    const sunrise = sunTimes.sunrise;
    const sunset = sunTimes.sunset;
    const solarNoon = sunTimes.solarNoon;

    // Day duration in milliseconds
    const dayDuration = sunset - sunrise;
    const partDuration = dayDuration / 8;

    const dayOfWeek = date.getDay(); // 0(Sun) to 6(Sat)

    // Muhurta Tables (Parts 1-8)
    const RahukalTable = [8, 2, 7, 5, 6, 4, 3]; // Sun=8, Mon=2, Tue=7, Wed=5, Thu=6, Fri=4, Sat=3
    const GulikKaalTable = [7, 6, 5, 4, 3, 2, 1]; // Sun=7, Mon=6, Tue=5, Wed=4, Thu=3, Fri=2, Sat=1
    const YamghantKaalTable = [5, 4, 3, 2, 1, 7, 6]; // Sun=5, Mon=4, Tue=3, Wed=2, Thu=1, Fri=7, Sat=6

    const getPartTiming = (partIndex) => {
        const start = new Date(sunrise.getTime() + (partIndex - 1) * partDuration);
        const end = new Date(sunrise.getTime() + partIndex * partDuration);
        return { start, end };
    };

    const rahukal = getPartTiming(RahukalTable[dayOfWeek]);
    const gulikkaal = getPartTiming(GulikKaalTable[dayOfWeek]);
    const yamghantkaal = getPartTiming(YamghantKaalTable[dayOfWeek]);

    // Abhijeet Muhurta (Solar noon +/- 24 mins)
    const abhijeetStart = new Date(solarNoon.getTime() - 24 * 60 * 1000);
    const abhijeetEnd = new Date(solarNoon.getTime() + 24 * 60 * 1000);

    const formatTime = (d) => {
        if (!d || isNaN(d.getTime())) return "N/A";
        return d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
    };

    return {
        city: city.name,
        date: date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        sun: {
            sunrise: formatTime(sunTimes.sunrise),
            sunset: formatTime(sunTimes.sunset),
        },
        moon: {
            moonrise: formatTime(moonTimes.rise),
            moonset: formatTime(moonTimes.set),
        },
        muhurtas: {
            abhijeet: `${formatTime(abhijeetStart)} - ${formatTime(abhijeetEnd)}`,
            rahukal: `${formatTime(rahukal.start)} - ${formatTime(rahukal.end)}`,
            gulikkaal: `${formatTime(gulikkaal.start)} - ${formatTime(gulikkaal.end)}`,
            yamghantkaal: `${formatTime(yamghantkaal.start)} - ${formatTime(yamghantkaal.end)}`,
        }
    };
}

/**
 * Get celestial timings for the entire current month for a specific city.
 * @param {Date} date - Any date within the month to calculate for.
 * @param {Object} city - City object.
 */
export function getMonthlyCelestialTimings(date = new Date(), city = CITIES[0]) {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    const numDays = new Date(year, month + 1, 0).getDate();
    const monthData = [];

    for (let day = 1; day <= numDays; day++) {
        const d = new Date(year, month, day);
        const sun = SunCalc.getTimes(d, city.lat, city.lon);
        const moon = SunCalc.getMoonTimes(d, city.lat, city.lon);

        const format = (t) => {
            if (!t || isNaN(t.getTime())) return "N/A";
            return t.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', hour12: true });
        };

        monthData.push({
            day,
            dayName: d.toLocaleDateString('en-IN', { weekday: 'short' }),
            date: d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
            sunrise: format(sun.sunrise),
            sunset: format(sun.sunset),
            moonrise: format(moon.rise),
            moonset: format(moon.set),
            isToday: d.toDateString() === new Date().toDateString()
        });
    }

    return {
        monthName: date.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' }),
        city: city.name,
        days: monthData
    };
}
