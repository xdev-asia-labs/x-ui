'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Stack, Button } from '@xdev-asia/x-ui-react';

export default function StackPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Stack
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A layout component for arranging children with consistent spacing.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Stack } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Stack spacing={4}>
                        <Button>Button 1</Button>
                        <Button>Button 2</Button>
                        <Button>Button 3</Button>
                    </Stack>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>direction</code> - 'row' | 'column'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>gap</code> - Spacing between items</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>align</code> - Align items</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>justify</code> - Justify content</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
