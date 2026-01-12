'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function ColorPickerPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    ColorPicker
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A color selection component with palette and input support.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { ColorPicker } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`const [color, setColor] = useState('#3b82f6');

<ColorPicker
  value={color}
  onChange={setColor}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Current color value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Color change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>format</code> - 'hex' | 'rgb' | 'hsl'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>presets</code> - Preset color palette</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
