'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Tooltip, Button } from '@xdev-asia/x-ui-react';

export default function TooltipPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Tooltip
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A popup that displays information on hover.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Tooltip } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Tooltip content="This is a tooltip">
                        <Button>Hover me</Button>
                    </Tooltip>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>content</code> - Tooltip text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placement</code> - 'top' | 'bottom' | 'left' | 'right'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>delay</code> - Show delay in ms</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
