'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Calendar } from '@xdev-asia/x-ui-react';

export default function CalendarPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Calendar
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A calendar component for date selection and display.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Calendar } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Calendar />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Selected date</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Date change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>minDate</code> - Minimum selectable date</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>maxDate</code> - Maximum selectable date</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
