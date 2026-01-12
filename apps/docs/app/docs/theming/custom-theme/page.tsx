'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function CustomThemingPage() {
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
                    Custom Theming
                </h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--x-mutedForeground)',
                    marginBottom: '40px',
                    lineHeight: 1.7,
                }}>
                    Create your own brand theme by customizing colors, typography, and component styles.
                </p>

                {/* CSS Variables Override */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Override CSS Variables
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        The easiest way to customize the theme is by overriding CSS custom properties in your global CSS.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`/* globals.css - Custom brand colors */
:root {
    /* Primary brand color */
    --x-primary: 234 88 12;      /* Orange: rgb(234, 88, 12) */
    --x-primaryHover: 249 115 22;
    
    /* Secondary accent */
    --x-secondary: 168 85 247;   /* Purple: rgb(168, 85, 247) */
    
    /* Custom gradient */
    --gradient-primary: linear-gradient(135deg, 
        rgb(234, 88, 12) 0%, 
        rgb(168, 85, 247) 100%
    );
}

/* Dark mode overrides */
.dark {
    --x-background: 10 10 20;
    --x-foreground: 248 250 252;
    
    /* Darker glass effect */
    --x-glass-bg: rgba(0, 0, 0, 0.3);
    --x-glass-border: rgba(255, 255, 255, 0.08);
}`}
                    />
                </section>

                {/* Complete Theme File */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Complete Theme Configuration
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        For full control, create a dedicated theme file with all customizations.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`/* theme.css - Full custom theme */
:root {
    /* ===== Color Palette ===== */
    
    /* Brand Colors (RGB values without rgb()) */
    --x-primary: 37 99 235;           /* Blue */
    --x-primaryHover: 29 78 216;
    --x-primaryLight: 59 130 246;
    
    --x-secondary: 139 92 246;        /* Violet */
    --x-secondaryHover: 124 58 237;
    
    /* Semantic Colors */
    --x-success: 34 197 94;           /* Green */
    --x-warning: 245 158 11;          /* Amber */
    --x-danger: 239 68 68;            /* Red */
    --x-info: 6 182 212;              /* Cyan */
    
    /* Neutral Scale */
    --x-background: 255 255 255;
    --x-foreground: 15 23 42;
    --x-muted: 241 245 249;
    --x-mutedForeground: 100 116 139;
    --x-border: 226 232 240;
    
    /* ===== Typography ===== */
    --x-font-sans: 'Inter', -apple-system, sans-serif;
    --x-font-mono: 'Fira Code', monospace;
    
    /* ===== Spacing ===== */
    --x-space-xs: 4px;
    --x-space-sm: 8px;
    --x-space-md: 16px;
    --x-space-lg: 24px;
    --x-space-xl: 32px;
    
    /* ===== Border Radius ===== */
    --x-radius-sm: 6px;
    --x-radius-md: 12px;
    --x-radius-lg: 16px;
    --x-radius-full: 9999px;
    
    /* ===== Shadows ===== */
    --x-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
    --x-shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --x-shadow-lg: 0 10px 25px rgba(0,0,0,0.15);
    
    /* ===== Glass Effects ===== */
    --x-glass-bg: rgba(255, 255, 255, 0.7);
    --x-glass-border: rgba(0, 0, 0, 0.1);
    --x-glass-blur: 12px;
    
    /* ===== Gradients ===== */
    --gradient-primary: linear-gradient(135deg, 
        rgb(var(--x-primary)) 0%, 
        rgb(var(--x-secondary)) 100%
    );
}

/* ===== Dark Mode ===== */
.dark {
    --x-background: 15 23 42;
    --x-foreground: 248 250 252;
    --x-muted: 30 41 59;
    --x-mutedForeground: 148 163 184;
    --x-border: 51 65 85;
    
    /* Dark glass effect */
    --x-glass-bg: rgba(0, 0, 0, 0.4);
    --x-glass-border: rgba(255, 255, 255, 0.1);
    
    /* Adjusted shadows for dark */
    --x-shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
    --x-shadow-md: 0 4px 6px rgba(0,0,0,0.4);
    --x-shadow-lg: 0 10px 25px rgba(0,0,0,0.5);
}`}
                    />
                </section>

                {/* Component-Level Theming */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Component-Level Styling
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Override specific component styles using the x-* class naming convention.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`/* Custom Button styles */
.x-button {
    /* Custom font */
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    letter-spacing: 0.02em;
    
    /* Custom border radius */
    border-radius: 9999px; /* Pill shape */
}

.x-button-solid {
    /* Custom gradient for solid variant */
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.x-button-glass {
    /* Enhanced glass effect */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Custom Card styles */
.x-card {
    border-radius: 20px;
    overflow: hidden;
}

.x-card-glass {
    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 100%
    );
}

/* Custom Input styles */
.x-input {
    border-radius: 12px;
    border-width: 2px;
}

.x-input:focus {
    border-color: rgb(var(--x-primary));
    box-shadow: 0 0 0 3px rgba(var(--x-primary), 0.2);
}`}
                    />
                </section>

                {/* Theming with Tailwind */}
                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Tailwind CSS Integration
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Extend Tailwind config to use X-UI theme tokens.
                    </p>
                    <CodeBlock
                        language="javascript"
                        code={`// tailwind.config.js
module.exports = {
    theme: {
        extend: {
            colors: {
                'x-primary': 'rgb(var(--x-primary) / <alpha-value>)',
                'x-secondary': 'rgb(var(--x-secondary) / <alpha-value>)',
                'x-background': 'rgb(var(--x-background) / <alpha-value>)',
                'x-foreground': 'rgb(var(--x-foreground) / <alpha-value>)',
                'x-muted': 'rgb(var(--x-muted) / <alpha-value>)',
                'x-border': 'rgb(var(--x-border) / <alpha-value>)',
            },
            borderRadius: {
                'x-sm': 'var(--x-radius-sm)',
                'x-md': 'var(--x-radius-md)',
                'x-lg': 'var(--x-radius-lg)',
            },
            boxShadow: {
                'x-sm': 'var(--x-shadow-sm)',
                'x-md': 'var(--x-shadow-md)',
                'x-lg': 'var(--x-shadow-lg)',
            },
        },
    },
};

// Usage in JSX
<div className="bg-x-primary text-x-foreground rounded-x-lg shadow-x-md">
    Custom themed component
</div>`}
                    />
                </section>

                {/* Creating Theme Presets */}
                <section>
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: 700,
                        marginBottom: '16px',
                        color: 'var(--x-foreground)',
                    }}>
                        Theme Presets
                    </h2>
                    <p style={{
                        fontSize: '15px',
                        color: 'var(--x-mutedForeground)',
                        marginBottom: '16px',
                        lineHeight: 1.7,
                    }}>
                        Create multiple theme presets using data attributes.
                    </p>
                    <CodeBlock
                        language="css"
                        code={`/* Theme presets */
[data-theme="ocean"] {
    --x-primary: 6 182 212;      /* Cyan */
    --x-secondary: 59 130 246;   /* Blue */
    --gradient-primary: linear-gradient(135deg, #0891b2 0%, #3b82f6 100%);
}

[data-theme="sunset"] {
    --x-primary: 249 115 22;     /* Orange */
    --x-secondary: 239 68 68;    /* Red */
    --gradient-primary: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
}

[data-theme="forest"] {
    --x-primary: 34 197 94;      /* Green */
    --x-secondary: 16 185 129;   /* Emerald */
    --gradient-primary: linear-gradient(135deg, #22c55e 0%, #10b981 100%);
}

/* Apply in JSX */
<div data-theme="ocean">
    <Button>Ocean Theme</Button>
</div>`}
                    />

                    <div style={{
                        marginTop: '24px',
                        padding: '16px',
                        background: 'rgba(var(--x-primary), 0.1)',
                        borderRadius: '12px',
                        border: '1px solid rgba(var(--x-primary), 0.2)',
                    }}>
                        <p style={{
                            fontSize: '14px',
                            color: 'var(--x-foreground)',
                            margin: 0,
                        }}>
                            <strong>💡 Pro Tip:</strong> Use CSS-in-JS libraries like styled-components or Emotion for
                            dynamic theming at runtime. X-UI CSS variables work seamlessly with any styling approach.
                        </p>
                    </div>
                </section>
            </div>
        </DocsLayout>
    );
}
