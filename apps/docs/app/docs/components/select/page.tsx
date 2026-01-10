'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Select } from '@xdev-asia/x-ui-react';

export default function SelectPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Select
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A dropdown control for selecting from a list of options.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Select } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
                        <Select
                            placeholder="Select a framework"
                            options={[
                                { value: 'react', label: 'React' },
                                { value: 'vue', label: 'Vue' },
                                { value: 'angular', label: 'Angular' },
                            ]}
                        />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>options</code> - Array of options</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placeholder</code> - Placeholder text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Controlled value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Change handler</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
