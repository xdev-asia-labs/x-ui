'use client';

import React, { useEffect, useRef } from 'react';

/**
 * 3D Floating Component Cards with CSS 3D transforms
 * Creates a professional animated display of UI components
 */
export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            const cards = container.querySelectorAll('.floating-card');
            cards.forEach((card, index) => {
                const depth = (index % 3) * 0.5 + 1;
                const el = card as HTMLElement;
                el.style.transform = `
                    translateZ(${50 + index * 20}px)
                    rotateY(${x * 10 * depth}deg)
                    rotateX(${-y * 10 * depth}deg)
                    translateX(${x * 30 * depth}px)
                    translateY(${y * 20 * depth}px)
                `;
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="hero-3d-container"
            style={{
                position: 'absolute',
                right: '-5%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '600px',
                height: '500px',
                perspective: '1500px',
                perspectiveOrigin: 'center center',
                zIndex: 0,
            }}
        >
            {/* 3D Scene Container */}
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    animation: 'sceneRotate 20s ease-in-out infinite',
                }}
            >
                {/* Button Card */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '10%',
                        width: '200px',
                        padding: '24px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float1 6s ease-in-out infinite',
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '44px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        borderRadius: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '14px',
                        boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                    }}>
                        Button
                    </div>
                    <div style={{ marginTop: '12px', fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>
                        Components / Button
                    </div>
                </div>

                {/* Card Component */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        top: '20%',
                        right: '5%',
                        width: '180px',
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float2 7s ease-in-out infinite',
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '80px',
                        background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                    }} />
                    <div style={{ padding: '16px' }}>
                        <div style={{ height: '10px', width: '70%', background: 'rgba(255,255,255,0.3)', borderRadius: '5px', marginBottom: '8px' }} />
                        <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.15)', borderRadius: '4px' }} />
                        <div style={{ height: '8px', width: '60%', background: 'rgba(255,255,255,0.15)', borderRadius: '4px', marginTop: '4px' }} />
                    </div>
                </div>

                {/* Toggle/Switch Card */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        bottom: '25%',
                        left: '20%',
                        padding: '20px 28px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float3 8s ease-in-out infinite',
                    }}
                >
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>Dark Mode</span>
                    <div style={{
                        width: '48px',
                        height: '28px',
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        borderRadius: '14px',
                        position: 'relative',
                        boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
                    }}>
                        <div style={{
                            position: 'absolute',
                            right: '4px',
                            top: '4px',
                            width: '20px',
                            height: '20px',
                            background: 'white',
                            borderRadius: '50%',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }} />
                    </div>
                </div>

                {/* Input Card */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        right: '15%',
                        width: '220px',
                        padding: '20px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float4 6.5s ease-in-out infinite',
                    }}
                >
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Email</div>
                    <div style={{
                        width: '100%',
                        height: '44px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 16px',
                        color: 'rgba(255,255,255,0.3)',
                        fontSize: '13px',
                    }}>
                        user@example.com
                    </div>
                </div>

                {/* Badge Group */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0%',
                        display: 'flex',
                        gap: '8px',
                        padding: '16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '16px',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float5 7.5s ease-in-out infinite',
                    }}
                >
                    {['Success', 'Warning', 'Error'].map((label, i) => (
                        <div
                            key={label}
                            style={{
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '11px',
                                fontWeight: 600,
                                background: i === 0 ? 'rgba(16, 185, 129, 0.2)' : i === 1 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                                color: i === 0 ? '#10b981' : i === 1 ? '#f59e0b' : '#ef4444',
                            }}
                        >
                            {label}
                        </div>
                    ))}
                </div>

                {/* Avatar Group */}
                <div
                    className="floating-card"
                    style={{
                        position: 'absolute',
                        top: '5%',
                        right: '35%',
                        display: 'flex',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(30px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '40px',
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.15s ease-out',
                        animation: 'float6 8.5s ease-in-out infinite',
                    }}
                >
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, hsl(${220 + i * 30}, 70%, 60%) 0%, hsl(${240 + i * 30}, 70%, 50%) 100%)`,
                                border: '2px solid rgba(10, 10, 15, 0.8)',
                                marginLeft: i === 0 ? 0 : '-10px',
                            }}
                        />
                    ))}
                    <div style={{
                        marginLeft: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '12px',
                        color: 'rgba(255,255,255,0.7)',
                    }}>
                        +12
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes sceneRotate {
                    0%, 100% { transform: rotateY(-5deg) rotateX(5deg); }
                    50% { transform: rotateY(5deg) rotateX(-5deg); }
                }
                @keyframes float1 {
                    0%, 100% { transform: translateY(0) translateZ(80px); }
                    50% { transform: translateY(-15px) translateZ(100px); }
                }
                @keyframes float2 {
                    0%, 100% { transform: translateY(0) translateZ(60px); }
                    50% { transform: translateY(-20px) translateZ(80px); }
                }
                @keyframes float3 {
                    0%, 100% { transform: translateY(0) translateZ(100px); }
                    50% { transform: translateY(-12px) translateZ(120px); }
                }
                @keyframes float4 {
                    0%, 100% { transform: translateY(0) translateZ(70px); }
                    50% { transform: translateY(-18px) translateZ(90px); }
                }
                @keyframes float5 {
                    0%, 100% { transform: translateY(0) translateZ(50px); }
                    50% { transform: translateY(-10px) translateZ(70px); }
                }
                @keyframes float6 {
                    0%, 100% { transform: translateY(0) translateZ(90px); }
                    50% { transform: translateY(-14px) translateZ(110px); }
                }
                
                @media (max-width: 1024px) {
                    .hero-3d-container {
                        display: none !important;
                    }
                }
            `}</style>
        </div>
    );
}
