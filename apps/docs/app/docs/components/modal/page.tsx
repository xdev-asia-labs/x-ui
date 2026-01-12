'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Modal, Button } from '@xdev-asia/x-ui-react';

export default function ModalPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Modal
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A dialog component for displaying content that requires user attention or interaction.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Modal } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal Title">
                        <p style={{ color: 'var(--x-mutedForeground)' }}>
                            This is the modal content. You can put any content here.
                        </p>
                    </Modal>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isOpen</code> - Controls modal visibility</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onClose</code> - Callback when modal closes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>title</code> - Modal header title</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg' | 'xl' | 'full'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>closeOnOverlay</code> - Close when clicking overlay</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
