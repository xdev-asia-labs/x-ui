'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
    size?: number;
    className?: string;
}

export default function Logo({ size = 32, className }: LogoProps) {
    return (
        <Image
            src="/logo.png"
            alt="X-UI Logo"
            width={size}
            height={size}
            className={className}
            style={{
                borderRadius: size * 0.2,
            }}
        />
    );
}
