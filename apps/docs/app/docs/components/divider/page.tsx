'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Divider } from '@xdev-asia/x-ui-react';

export default function DividerPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Divider
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A visual separator for dividing content sections.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Divider } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <div>
                        <p style={{ color: 'var(--x-mutedForeground)' }}>Content above</p>
                        <Divider />
                        <p style={{ color: 'var(--x-mutedForeground)' }}>Content below</p>
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>orientation</code> - 'horizontal' | 'vertical'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'solid' | 'dashed'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
