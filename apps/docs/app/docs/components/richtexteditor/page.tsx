'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { RichTextEditor } from '@xdev-asia/x-ui-react';

export default function RichTextEditorPage() {
    const [content, setContent] = useState('<p>Hello <strong>World!</strong></p>');

    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    RichTextEditor
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A WYSIWYG text editor with formatting toolbar for rich content creation.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { RichTextEditor } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <RichTextEditor
                        value={content}
                        onChange={setContent}
                        placeholder="Start typing..."
                    />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Features
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li>✅ Bold, italic, underline, strikethrough</li>
                        <li>✅ Headings (H1, H2, H3)</li>
                        <li>✅ Ordered and unordered lists</li>
                        <li>✅ Code blocks and inline code</li>
                        <li>✅ Block quotes</li>
                        <li>✅ Link insertion</li>
                        <li>✅ Customizable toolbar</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Controlled HTML content</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>defaultValue</code> - Initial HTML content</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Content change handler</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>placeholder</code> - Placeholder text</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>toolbar</code> - Array of toolbar items</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>hideToolbar</code> - Hide the toolbar</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>minHeight</code> - Minimum editor height</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>maxHeight</code> - Maximum editor height</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>disabled</code> - Disable editing</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>readOnly</code> - Read-only mode</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
