'use client';

import React from 'react';
import { Avatar, Card, Badge } from '@xdev-asia/x-ui-react';

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'Senior Frontend Dev',
        company: 'TechFlow',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        content: 'X-UI has completely transformed how we build internal tools. The components are not just beautiful but incredibly flexible.',
        tag: 'Productivity'
    },
    {
        name: 'Alex Morgan',
        role: 'Product Designer',
        company: 'CreativeBox',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        content: 'The "Liquid Glass" aesthetic is stunning. It gives our apps a premium feel that clients love immediately.',
        tag: 'Design'
    },
    {
        name: 'David Kim',
        role: 'CTO',
        company: 'StartUp Inc',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024e',
        content: 'We shipped our MVP in half the time thanks to the comprehensive component library. The TypeScript support is top-notch.',
        tag: 'Speed'
    },
    {
        name: 'Emily Davis',
        role: 'Full Stack Engineer',
        company: 'DevCorp',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026025d',
        content: 'The accessibility features out of the box saved us weeks of audit work. Truly professional grade library.',
        tag: 'A11y'
    },
    {
        name: 'Michael Wilson',
        role: 'Lead Developer',
        company: 'Appify',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026026d',
        content: 'Documentation is excellent. The copy-paste examples and Storybook make integration a breeze.',
        tag: 'DX'
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-16">
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        marginBottom: '16px',
                        letterSpacing: '-0.02em',
                        background: 'linear-gradient(135deg, var(--x-foreground) 0%, var(--x-mutedForeground) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Loved by Developers
                    </h2>
                    <p style={{
                        color: 'var(--x-mutedForeground)',
                        fontSize: '1.25rem',
                        maxWidth: '500px',
                        margin: '0 auto',
                        lineHeight: 1.6,
                    }}>
                        Join thousands of developers building the future of the web with X-UI.
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden mask-gradient-x">
                    <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                className="w-[400px] flex-shrink-0"
                            >
                                <div className="liquid-glass p-8 h-full transform transition-transform hover:-translate-y-2 duration-300">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <Avatar src={t.avatar} fallback={t.name.charAt(0)} size="lg" className="border-2 border-white/10" />
                                            <div>
                                                <div className="font-bold text-[var(--x-foreground)]">{t.name}</div>
                                                <div className="text-sm text-[var(--x-mutedForeground)]">{t.role} @ {t.company}</div>
                                            </div>
                                        </div>
                                        <Badge variant="outline" colorScheme="primary" className="bg-primary/10 border-primary/20 backdrop-blur-md">
                                            {t.tag}
                                        </Badge>
                                    </div>
                                    <p className="text-[var(--x-mutedForeground)] leading-relaxed italic">
                                        "{t.content}"
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-0" />
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-0" />

            <style jsx global>{`
                .mask-gradient-x {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </section>
    );
}
