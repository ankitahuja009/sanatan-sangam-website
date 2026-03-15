'use client';
import { useState, useEffect } from 'react';

export default function SquareCarousel({ images }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', overflow: 'hidden', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-md)' }}>
            {images.map((img, i) => (
                <img
                    key={img}
                    src={img}
                    alt={`Sanatan Sangam Gallery Image ${i + 1}`}
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
