'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function PopoverPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Popover
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A floating container for displaying rich content relative to a trigger.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Popover } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Popover trigger={<Button>Show Popover</Button>}>
  <div style={{ padding: '12px' }}>
    <h4>Popover Title</h4>
    <p>This is the popover content.</p>
  </div>
</Popover>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>trigger</code> - Element that triggers popover</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placement</code> - Positioning relative to trigger</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>triggerMode</code> - 'click' | 'hover'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
