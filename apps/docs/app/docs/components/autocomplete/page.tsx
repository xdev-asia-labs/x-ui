'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function AutocompletePage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Autocomplete
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    An input with suggestion dropdown for search and selection.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Autocomplete } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Autocomplete
  options={['React', 'Vue', 'Angular', 'Svelte']}
  placeholder="Search frameworks..."
  onSelect={(value) => console.log(value)}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>options</code> - Array of suggestions</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onSelect</code> - Selection callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>filterFn</code> - Custom filter function</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>freeSolo</code> - Allow free text input</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
