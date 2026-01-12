'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function AlertDialogPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    AlertDialog
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A modal dialog for confirming destructive actions or important decisions.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { AlertDialog } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<AlertDialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Item"
  description="Are you sure? This cannot be undone."
  onConfirm={handleDelete}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>isOpen</code> - Controls visibility</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>title</code> - Dialog title</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>description</code> - Dialog description</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onConfirm</code> - Confirm action callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onClose</code> - Cancel/close callback</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
