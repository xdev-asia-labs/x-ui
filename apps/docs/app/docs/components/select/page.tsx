'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Select } from '@xdev-asia/x-ui-react';

const frameworks = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
];

export default function SelectPage() {
    const [value, setValue] = useState('');
    const [values, setValues] = useState<string[]>([]);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Select
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A dropdown control for selecting from a list of options with search, multi-select, and tagging support.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Select } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Basic
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
                        <Select
                            placeholder="Select a framework"
                            options={frameworks}
                            value={value}
                            onChange={setValue}
                        />
                    </div>
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Searchable
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Enable search/filter with <code style={{ color: 'rgb(59, 130, 246)' }}>searchable</code> prop.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
                        <Select
                            placeholder="Search frameworks..."
                            options={frameworks}
                            searchable
                            searchPlaceholder="Type to search..."
                            clearable
                        />
                    </div>
                    <CodeBlock language="tsx" code={`<Select
  options={frameworks}
  searchable
  searchPlaceholder="Type to search..."
  clearable
/>`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Multi-Select
                    </h2>
                    <p style={{ color: 'var(--x-mutedForeground)', marginBottom: '16px' }}>
                        Allow selecting multiple options with <code style={{ color: 'rgb(59, 130, 246)' }}>multiple</code> prop.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
                        <Select
                            placeholder="Select frameworks..."
                            options={frameworks}
                            multiple
                            searchable
                            values={values}
                            onValuesChange={setValues}
                            clearable
                        />
                    </div>
                    <CodeBlock language="tsx" code={`<Select
  options={frameworks}
  multiple
  searchable
  values={values}
  onValuesChange={setValues}
  clearable
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>options</code> - Array of options</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placeholder</code> - Placeholder text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value / onChange</code> - Controlled value (single)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>values / onValuesChange</code> - Controlled values (multiple)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>searchable</code> - Enable search/filter</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>searchPlaceholder</code> - Search input placeholder</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>multiple</code> - Enable multi-select</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>clearable</code> - Show clear button</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>tagging</code> - Allow creating new options</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - "outline" | "filled" | "glass"</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - "sm" | "md" | "lg"</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
