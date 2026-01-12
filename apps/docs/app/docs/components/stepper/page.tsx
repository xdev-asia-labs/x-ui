'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function StepperPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Stepper
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A step-by-step progress indicator for multi-step processes.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Stepper, Step } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Stepper activeStep={1}>
  <Step title="Account" description="Create account" />
  <Step title="Profile" description="Setup profile" />
  <Step title="Confirm" description="Review & submit" />
</Stepper>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>activeStep</code> - Current active step</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>orientation</code> - 'horizontal' | 'vertical'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'default' | 'simple'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
