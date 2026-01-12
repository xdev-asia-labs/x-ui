'use client';

import React, { useState } from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';
import { TreeView, TreeNode } from '@xdev-asia/x-ui-react';

const sampleData: TreeNode[] = [
    {
        id: 'src',
        label: 'src',
        children: [
            {
                id: 'components',
                label: 'components',
                children: [
                    { id: 'Button.tsx', label: 'Button.tsx' },
                    { id: 'Card.tsx', label: 'Card.tsx' },
                ],
            },
            {
                id: 'hooks',
                label: 'hooks',
                children: [
                    { id: 'useTheme.ts', label: 'useTheme.ts' },
                ],
            },
            { id: 'index.ts', label: 'index.ts' },
        ],
    },
    { id: 'package.json', label: 'package.json' },
    { id: 'README.md', label: 'README.md' },
];

export default function TreeViewPage() {
    const [selected, setSelected] = useState<string[]>([]);

    return (
        <DocsLayout>
            <div style={{ maxWidth: '750px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    TreeView
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    Display hierarchical data with expandable/collapsible nodes and selection support.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { TreeView } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Example
                    </h2>
                    <TreeView
                        nodes={sampleData}
                        selectionMode="single"
                        selectedIds={selected}
                        onSelectChange={setSelected}
                        expandAll
                    />
                    {selected.length > 0 && (
                        <p style={{ marginTop: '16px', color: 'var(--x-mutedForeground)', fontSize: '14px' }}>
                            Selected: {selected.join(', ')}
                        </p>
                    )}
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Features
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li>✅ Expand/collapse nodes</li>
                        <li>✅ Single or multiple selection</li>
                        <li>✅ Checkbox mode</li>
                        <li>✅ Custom node icons</li>
                        <li>✅ Keyboard navigation</li>
                        <li>✅ Controlled expand/select state</li>
                    </ul>
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>nodes</code> - TreeNode[] data structure</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>selectionMode</code> - 'none' | 'single' | 'multiple'</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>showCheckbox</code> - Show selection checkboxes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>expandAll</code> - Expand all nodes initially</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>expandedIds</code> - Controlled expanded nodes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>selectedIds</code> - Controlled selected nodes</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>size</code> - 'sm' | 'md' | 'lg'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
