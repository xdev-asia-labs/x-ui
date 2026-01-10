'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Tag } from '@xdev-asia/x-ui-react';

export default function TagPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Tag
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Labels for categorization and filtering with optional close button.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Tag } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Tag>React</Tag>
                        <Tag colorScheme="success">TypeScript</Tag>
                        <Tag colorScheme="warning">JavaScript</Tag>
                        <Tag variant="outline">CSS</Tag>
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'solid' | 'subtle' | 'outline'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>colorScheme</code> - Color theme</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onClose</code> - Callback when close button clicked</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
