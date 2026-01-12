'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { BottomSheet, Button } from '@xdev-asia/x-ui-react';

export default function BottomSheetPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    BottomSheet
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A panel that slides up from the bottom of the screen, commonly used on mobile.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { BottomSheet } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Button onClick={() => setIsOpen(true)}>Open Bottom Sheet</Button>
                    <BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ marginBottom: '12px' }}>Bottom Sheet Content</h3>
                            <p style={{ color: 'var(--x-mutedForeground)' }}>
                                This is a bottom sheet. Great for mobile action menus.
                            </p>
                        </div>
                    </BottomSheet>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isOpen</code> - Controls visibility</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onClose</code> - Close callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>snapPoints</code> - Height snap points</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>showHandle</code> - Show drag handle</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
