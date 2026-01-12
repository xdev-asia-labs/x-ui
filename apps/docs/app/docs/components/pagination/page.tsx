'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function PaginationPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Pagination
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Navigation component for paginated content.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Pagination } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`const [page, setPage] = useState(1);

<Pagination
  page={page}
  total={10}
  onChange={setPage}
/>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>page</code> - Current active page</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>total</code> - Total number of pages</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Page change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>siblings</code> - Pages to show on each side</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
