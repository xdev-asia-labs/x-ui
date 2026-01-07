'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
    code: string;
    language?: string;
    showLineNumbers?: boolean;
}

export default function CodeBlock({ code, language = 'tsx', showLineNumbers = false }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const lines = code.split('\n');

    return (
        <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(255,255,255,0.08)',
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(0,0,0,0.2)',
            }}>
                <span style={{
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'rgba(148, 163, 184, 0.8)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                }}>
                    {language}
                </span>
                <button
                    onClick={handleCopy}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: copied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255,255,255,0.05)',
                        color: copied ? 'rgb(34, 197, 94)' : 'rgba(148, 163, 184, 0.8)',
                        fontSize: '12px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                >
                    {copied ? (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Copied!
                        </>
                    ) : (
                        <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                            Copy
                        </>
                    )}
                </button>
            </div>

            {/* Code */}
            <pre style={{
                margin: 0,
                padding: '16px',
                overflow: 'auto',
                fontSize: '13px',
                lineHeight: 1.7,
                fontFamily: '"JetBrains Mono", "Fira Code", Consolas, monospace',
            }}>
                <code style={{ color: '#e2e8f0' }}>
                    {showLineNumbers ? (
                        lines.map((line, i) => (
                            <div key={i} style={{ display: 'flex' }}>
                                <span style={{
                                    width: '40px',
                                    flexShrink: 0,
                                    color: 'rgba(148, 163, 184, 0.4)',
                                    textAlign: 'right',
                                    paddingRight: '16px',
                                    userSelect: 'none',
                                }}>
                                    {i + 1}
                                </span>
                                <span>{line}</span>
                            </div>
                        ))
                    ) : (
                        code
                    )}
                </code>
            </pre>
        </div>
    );
}
