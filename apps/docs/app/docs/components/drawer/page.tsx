'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Drawer, Button } from '@xdev-asia/x-ui-react';

export default function DrawerPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Drawer
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A panel that slides in from the edge of the screen.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Drawer } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
                    <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Drawer Title">
                        <p style={{ color: 'var(--x-mutedForeground)' }}>
                            This is the drawer content. Great for navigation menus or settings panels.
                        </p>
                    </Drawer>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isOpen</code> - Controls drawer visibility</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onClose</code> - Callback when drawer closes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placement</code> - 'left' | 'right' | 'top' | 'bottom'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg' | 'full'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
