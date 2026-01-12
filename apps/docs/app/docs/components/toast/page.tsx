'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function ToastPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Toast
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Notification messages that appear temporarily.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { ToastProvider, useToast } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`// Wrap app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Use hook in component
const { toast } = useToast();

toast({
  title: 'Success!',
  description: 'Your changes have been saved.',
  variant: 'success',
});`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Toast Options
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>title</code> - Toast title</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>description</code> - Toast description</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'default' | 'success' | 'error' | 'warning'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>duration</code> - Display duration in ms</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
