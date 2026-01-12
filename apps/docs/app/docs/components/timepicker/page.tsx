'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function TimePickerPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    TimePicker
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A time selection component for picking hours and minutes.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { TimePicker } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`const [time, setTime] = useState('09:00');

<TimePicker
  value={time}
  onChange={setTime}
  format="HH:mm"
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Current time value</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Time change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>format</code> - '12h' | '24h'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>minuteStep</code> - Minute interval</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
