'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function DropdownPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Dropdown
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A menu that displays a list of actions or options.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Dropdown } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Dropdown trigger={<Button>Open Menu</Button>}>
  <DropdownItem onClick={() => {}}>Edit</DropdownItem>
  <DropdownItem onClick={() => {}}>Duplicate</DropdownItem>
  <DropdownDivider />
  <DropdownItem variant="danger">Delete</DropdownItem>
</Dropdown>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>trigger</code> - Element that triggers the dropdown</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placement</code> - Menu placement position</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>closeOnSelect</code> - Close on item select</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
