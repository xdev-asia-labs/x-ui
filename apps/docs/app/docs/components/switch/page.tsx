'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Switch } from '@xdev-asia/x-ui-react';

export default function SwitchPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Switch
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A toggle control for binary on/off states.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Switch } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Examples
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Switch label="Enable notifications" />
                        <Switch label="Dark mode" defaultChecked />
                        <Switch label="Disabled switch" isDisabled />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>label</code> - Label text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>labelPosition</code> - 'left' | 'right'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>colorScheme</code> - 'primary' | 'secondary' | 'success' | 'warning' | 'error'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isDisabled</code> - Disable the switch</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
