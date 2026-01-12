'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Accordion, AccordionItem } from '@xdev-asia/x-ui-react';

export default function AccordionPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Accordion
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A vertically stacked set of interactive headings that reveal content.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Accordion, AccordionItem } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <Accordion>
                        <AccordionItem value="1" title="What is X-UI?">
                            X-UI is a modern React component library with beautiful design.
                        </AccordionItem>
                        <AccordionItem value="2" title="How do I install it?">
                            Run: npm install @xdev-asia/x-ui-react
                        </AccordionItem>
                        <AccordionItem value="3" title="Is it free?">
                            Yes! X-UI is open source under MIT license.
                        </AccordionItem>
                    </Accordion>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>allowMultiple</code> - Allow multiple items open</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>defaultIndex</code> - Initially expanded item(s)</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'default' | 'bordered' | 'separated'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
