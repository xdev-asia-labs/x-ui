'use client';

import React, { useState } from 'react';
import CodeBlock from './CodeBlock';

interface ComponentPreviewProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    code: string;
}

export default function ComponentPreview({ title, description, children, code }: ComponentPreviewProps) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--x-glass-border, rgba(255,255,255,0.08))',
            background: 'var(--x-glass-bg, rgba(30, 41, 59, 0.3))',
            marginBottom: '24px',
        }}>
            {/* Header */}
            <div style={{
                padding: '16px 20px',
                borderBottom: '1px solid var(--x-glass-border, rgba(255,255,255,0.05))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div>
                    <h3 style={{
                        margin: 0,
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'rgb(var(--x-foreground))',
                    }}>
                        {title}
                    </h3>
                    {description && (
                        <p style={{
                            margin: '4px 0 0',
                            fontSize: '13px',
                            color: 'rgb(var(--x-mutedForeground))',
                        }}>
                            {description}
                        </p>
                    )}
                </div>
                <button
                    onClick={() => setShowCode(!showCode)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--x-glass-border, rgba(255,255,255,0.1))',
                        background: showCode ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        color: showCode ? 'rgb(59, 130, 246)' : 'rgb(var(--x-mutedForeground))',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                    </svg>
                    {showCode ? 'Hide Code' : 'Show Code'}
                </button>
            </div>

            {/* Preview */}
            <div style={{
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%)',
            }}>
                {children}
            </div>

            {/* Code */}
            {showCode && (
                <div style={{ borderTop: '1px solid var(--x-glass-border, rgba(255,255,255,0.05))' }}>
                    <CodeBlock code={code} />
                </div>
            )}
        </div>
    );
}
