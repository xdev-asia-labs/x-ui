'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { Skeleton } from '@xdev-asia/x-ui-react';

export default function SkeletonPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Skeleton
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A placeholder for content loading states.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Skeleton } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <Skeleton height={20} width="60%" />
                        <Skeleton height={16} width="100%" />
                        <Skeleton height={16} width="80%" />
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>width</code> - Width of skeleton</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>height</code> - Height of skeleton</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'text' | 'circular' | 'rectangular'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>animation</code> - 'pulse' | 'wave' | 'none'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
