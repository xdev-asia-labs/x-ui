'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Badge } from '@xdev-asia/x-ui-react';

export default function BadgePage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Badge
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Small status indicators for counts, labels, or notifications.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Badge } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <Badge>Default</Badge>
                        <Badge colorScheme="success">Success</Badge>
                        <Badge colorScheme="warning">Warning</Badge>
                        <Badge colorScheme="error">Error</Badge>
                        <Badge variant="outline">Outline</Badge>
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'solid' | 'subtle' | 'outline'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>colorScheme</code> - 'primary' | 'success' | 'warning' | 'error'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
