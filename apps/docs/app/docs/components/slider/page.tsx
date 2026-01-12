'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function SliderPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Slider
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A range slider input for selecting numeric values.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Slider } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
  step={1}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Current value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Value change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>min</code> - Minimum value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>max</code> - Maximum value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>step</code> - Step increment</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
