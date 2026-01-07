'use client';

import React from 'react';

interface LogoProps {
    size?: number;
    className?: string;
}

export default function Logo({ size = 32, className }: LogoProps) {
    return (
        <div
            className={className}
            style={{
                width: size,
                height: size,
                borderRadius: size * 0.28, // Proportional rounding
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: size * 0.5,
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
        >
            X
        </div>
    );
}
