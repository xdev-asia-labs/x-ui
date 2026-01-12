import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TreeView, TreeNode } from '@xdev-asia/x-ui-react';

const fileSystemData: TreeNode[] = [
    {
        id: 'src',
        label: 'src',
        icon: <span>📁</span>,
        children: [
            {
                id: 'components',
                label: 'components',
                icon: <span>📁</span>,
                children: [
                    { id: 'Button.tsx', label: 'Button.tsx', icon: <span>📄</span> },
                    { id: 'Card.tsx', label: 'Card.tsx', icon: <span>📄</span> },
                    { id: 'Input.tsx', label: 'Input.tsx', icon: <span>📄</span> },
                ],
            },
            {
                id: 'hooks',
                label: 'hooks',
                icon: <span>📁</span>,
                children: [
                    { id: 'useTheme.ts', label: 'useTheme.ts', icon: <span>📄</span> },
                    { id: 'useState.ts', label: 'useState.ts', icon: <span>📄</span> },
                ],
            },
            { id: 'index.ts', label: 'index.ts', icon: <span>📄</span> },
        ],
    },
    {
        id: 'public',
        label: 'public',
        icon: <span>📁</span>,
        children: [
            { id: 'favicon.ico', label: 'favicon.ico', icon: <span>🖼️</span> },
            { id: 'logo.svg', label: 'logo.svg', icon: <span>🖼️</span> },
        ],
    },
    { id: 'package.json', label: 'package.json', icon: <span>📄</span> },
    { id: 'tsconfig.json', label: 'tsconfig.json', icon: <span>⚙️</span> },
    { id: 'README.md', label: 'README.md', icon: <span>📝</span> },
];

const meta: Meta<typeof TreeView> = {
    title: 'Data Display/TreeView',
    component: TreeView,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
    render: () => <TreeView nodes={fileSystemData} />,
};

export const WithSelection: Story = {
    render: () => {
        const [selected, setSelected] = useState<string[]>([]);
        return (
            <div>
                <p className="mb-4 text-sm text-gray-400">
                    Selected: {selected.join(', ') || 'None'}
                </p>
                <TreeView
                    nodes={fileSystemData}
                    selectionMode="single"
                    selectedIds={selected}
                    onSelectChange={setSelected}
                />
            </div>
        );
    },
};

export const WithCheckboxes: Story = {
    render: () => {
        const [selected, setSelected] = useState<string[]>([]);
        return (
            <div>
                <p className="mb-4 text-sm text-gray-400">
                    Selected: {selected.length} items
                </p>
                <TreeView
                    nodes={fileSystemData}
                    selectionMode="multiple"
                    showCheckbox
                    selectedIds={selected}
                    onSelectChange={setSelected}
                />
            </div>
        );
    },
};

export const ExpandAll: Story = {
    render: () => <TreeView nodes={fileSystemData} expandAll />,
};

export const SmallSize: Story = {
    render: () => <TreeView nodes={fileSystemData} size="sm" expandAll />,
};

export const LargeSize: Story = {
    render: () => <TreeView nodes={fileSystemData} size="lg" expandAll />,
};

export const Controlled: Story = {
    render: () => {
        const [expanded, setExpanded] = useState<string[]>(['src']);
        return (
            <div>
                <div className="mb-4 flex gap-2">
                    <button
                        className="px-3 py-1 bg-white/10 rounded text-sm"
                        onClick={() => setExpanded(['src', 'components', 'hooks', 'public'])}
                    >
                        Expand All
                    </button>
                    <button
                        className="px-3 py-1 bg-white/10 rounded text-sm"
                        onClick={() => setExpanded([])}
                    >
                        Collapse All
                    </button>
                </div>
                <TreeView
                    nodes={fileSystemData}
                    expandedIds={expanded}
                    onExpandChange={setExpanded}
                />
            </div>
        );
    },
};
