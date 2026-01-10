'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function ThemingPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '700px' }}>
                <h1 style={{
                    fontSize: '36px',
                    fontWeight: 800,
                    marginBottom: '16px',
                    color: 'var(--x-foreground)',
                    letterSpacing: '-0.5px',
                }}>
                    Theming
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--x-mutedForeground)',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    X-UI provides a powerful theming system with dark/light mode support and CSS variables.
                </p>

                {/* ThemeProvider */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        ThemeProvider
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Wrap your app with ThemeProvider to enable theming. It handles theme persistence automatically.
                    </p>
                    <CodeBlock
                        code={`import { ThemeProvider } from '@xdev-asia/x-ui-react';

function App() {
    return (
        <ThemeProvider 
            defaultTheme="dark"
            storageKey="my-app-theme"
        >
            <YourApp />
        </ThemeProvider>
    );
}`}
                    />

                    {/* Props table */}
                    <div style={{ marginTop: '24px' }}>
                        <h4 style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            marginBottom: '12px',
                            color: 'var(--x-foreground)',
                        }}>
                            Props
                        </h4>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            fontSize: '14px',
                        }}>
                            <thead>
                                <tr style={{
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Prop</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Type</th>
                                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'var(--x-foreground)' }}>Default</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { prop: 'defaultTheme', type: "'light' | 'dark'", def: "'light'" },
                                    { prop: 'storageKey', type: 'string', def: "'x-ui-theme'" },
                                    { prop: 'children', type: 'ReactNode', def: '-' },
                                ].map((row, i) => (
                                    <tr key={i} style={{
                                        borderBottom: '1px solid rgba(255,255,255,0.05)'
                                    }}>
                                        <td style={{ padding: '12px 16px' }}>
                                            <code style={{ color: 'rgb(59, 130, 246)' }}>{row.prop}</code>
                                        </td>
                                        <td style={{ padding: '12px 16px', color: 'var(--x-mutedForeground)' }}>{row.type}</td>
                                        <td style={{ padding: '12px 16px', color: 'var(--x-mutedForeground)' }}>{row.def}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* useXTheme Hook */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        useXTheme Hook
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Access and control the current theme using the useXTheme hook.
                    </p>
                    <CodeBlock
                        code={`import { useXTheme } from '@xdev-asia/x-ui-react';

function ThemeToggle() {
    const { mode, toggleMode, setMode } = useXTheme();

    return (
        <div>
            <p>Current: {mode}</p>
            
            {/* Toggle between light/dark */}
            <button onClick={toggleMode}>
                Toggle Theme
            </button>
            
            {/* Set specific mode */}
            <button onClick={() => setMode('dark')}>
                Dark Mode
            </button>
        </div>
    );
}`}
                    />

                    {/* Returns */}
                    <div style={{ marginTop: '24px' }}>
                        <h4 style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            marginBottom: '12px',
                            color: 'var(--x-foreground)',
                        }}>
                            Returns
                        </h4>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0,
                        }}>
                            {[
                                { name: 'theme', desc: 'ThemeConfig object with colors and glass tokens' },
                                { name: 'mode', desc: "Current theme mode ('light' | 'dark')" },
                                { name: 'setMode', desc: 'Function to set specific theme mode' },
                                { name: 'toggleMode', desc: 'Function to toggle between light/dark' },
                            ].map((item, i) => (
                                <li key={i} style={{
                                    padding: '12px 16px',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    gap: '12px',
                                }}>
                                    <code style={{
                                        color: 'rgb(59, 130, 246)',
                                        fontWeight: 500,
                                        minWidth: '120px',
                                    }}>
                                        {item.name}
                                    </code>
                                    <span style={{ color: 'var(--x-mutedForeground)', fontSize: '14px' }}>
                                        {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* CSS Variables */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        CSS Variables
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        X-UI uses CSS custom properties for theming. You can use these in your own styles.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`.my-component {
    /* Colors */
    background: rgb(var(--x-background));
    color: rgb(var(--x-foreground));
    border-color: rgb(var(--x-border));

    /* Primary color */
    accent-color: rgb(var(--x-primary));

    /* Glassmorphism */
    background: var(--x-glass-bg);
    border: 1px solid var(--x-glass-border);
    backdrop-filter: blur(16px);
}`}
                    />
                </section>

                {/* Dark Mode Classes */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Mode-Specific Styles
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Target specific theme modes using CSS class selectors.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`/* Light mode specific */
.light .my-element {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Dark mode specific */
.dark .my-element {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
}`}
                    />
                </section>
            </div>
        </DocsLayout>
    );
}
