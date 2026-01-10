'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Radio, RadioGroup } from '@xdev-asia/x-ui-react';

export default function RadioPage() {
    const [selected, setSelected] = useState('option1');

    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Radio
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A control for selecting a single option from a list.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Radio, RadioGroup } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <RadioGroup name="options" value={selected} onChange={setSelected}>
                        <Radio value="option1" label="Option 1" />
                        <Radio value="option2" label="Option 2" />
                        <Radio value="option3" label="Option 3" />
                    </RadioGroup>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        RadioGroup
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2, marginBottom: '24px' }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>name</code> - Group name (required)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Selected value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Change handler</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>orientation</code> - 'horizontal' | 'vertical'</li>
                    </ul>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                        Radio
                    </h3>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Radio value (required)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>label</code> - Label text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isDisabled</code> - Disable the radio</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
