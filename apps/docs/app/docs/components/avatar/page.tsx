'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Avatar } from '@xdev-asia/x-ui-react';

export default function AvatarPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Avatar
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Display user profile images or initials in a circular or rounded format.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Avatar } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Avatar fallback="JD" size="sm" />
                        <Avatar fallback="JS" size="md" />
                        <Avatar fallback="BW" size="lg" />
                        <Avatar src="https://i.pravatar.cc/150?img=1" size="lg" />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>src</code> - Image URL</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>fallback</code> - Initials fallback when image fails</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>status</code> - 'online' | 'offline' | 'away' | 'busy'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>rounded</code> - Make avatar rounded (default: true)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>bordered</code> - Show border</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
