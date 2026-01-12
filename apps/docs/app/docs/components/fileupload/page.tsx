'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function FileUploadPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    FileUpload
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A file upload component with drag-and-drop support.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { FileUpload } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<FileUpload
  accept="image/*"
  maxSize={5 * 1024 * 1024} // 5MB
  onUpload={(files) => console.log(files)}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>accept</code> - Accepted file types</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>maxSize</code> - Maximum file size in bytes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>multiple</code> - Allow multiple files</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onUpload</code> - Upload callback</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
