'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { TextArea } from '@xdev-asia/x-ui-react';

export default function TextAreaPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    TextArea
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A multi-line text input for longer content.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { TextArea } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <TextArea placeholder="Write your message..." />
                        <TextArea label="Description" placeholder="Enter description" rows={4} />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>rows</code> - Number of visible rows</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>resize</code> - 'none' | 'vertical' | 'horizontal' | 'both'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>label</code> - Label text</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
