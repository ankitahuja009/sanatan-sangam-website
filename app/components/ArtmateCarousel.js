'use client';
import { useState, useEffect } from 'react';

const images = [
    '/images/samples/ishwar_kripa_1.webp',
    '/images/samples/ishwar_kripa_2.webp',
    '/images/samples/teerth_yatra_2.webp',
    '/images/samples/teerth_yatra_3.webp'
];

export default function ArtmateCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', borderRadius: 'calc(var(--radius-xl) - 4px)' }}>
            {images.map((img, i) => (
                <img
                    key={img}
                    src={img}
                    alt={`Sanatan Sangam AI Artmate Sample ${i + 1}`}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: i === current ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                    }}
                />
            ))}
        </div>
    );
}
