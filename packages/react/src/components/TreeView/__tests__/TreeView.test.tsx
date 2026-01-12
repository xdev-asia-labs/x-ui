import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TreeView, TreeNode } from '../TreeView';

const testNodes: TreeNode[] = [
    {
        id: 'root',
        label: 'Root',
        children: [
            { id: 'child1', label: 'Child 1' },
            {
                id: 'child2', label: 'Child 2', children: [
                    { id: 'grandchild', label: 'Grandchild' }
                ]
            },
        ],
    },
    { id: 'item', label: 'Single Item' },
];

describe('TreeView', () => {
    it('renders nodes correctly', () => {
        render(<TreeView nodes={testNodes} />);

        expect(screen.getByText('Root')).toBeInTheDocument();
        expect(screen.getByText('Single Item')).toBeInTheDocument();
    });

    it('has correct ARIA role for tree', () => {
        render(<TreeView nodes={testNodes} />);

        expect(screen.getByRole('tree')).toBeInTheDocument();
    });

    it('expands node when expand button is clicked', () => {
        render(<TreeView nodes={testNodes} />);

        // Initially children are not visible
        expect(screen.queryByText('Child 1')).not.toBeInTheDocument();

        // Click expand button on Root
        const expandButtons = screen.getAllByRole('button');
        fireEvent.click(expandButtons[0]);

        // Now children should be visible
        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
    });

    it('expands all nodes when expandAll is true', () => {
        render(<TreeView nodes={testNodes} expandAll />);

        expect(screen.getByText('Child 1')).toBeInTheDocument();
        expect(screen.getByText('Child 2')).toBeInTheDocument();
        expect(screen.getByText('Grandchild')).toBeInTheDocument();
    });

    it('calls onNodeClick when node is clicked', () => {
        const onNodeClick = vi.fn();
        render(<TreeView nodes={testNodes} onNodeClick={onNodeClick} />);

        fireEvent.click(screen.getByText('Single Item'));
        expect(onNodeClick).toHaveBeenCalledWith(testNodes[1]);
    });

    it('handles selection correctly', () => {
        const onSelectChange = vi.fn();
        render(
            <TreeView
                nodes={testNodes}
                selectionMode="single"
                selectedIds={[]}
                onSelectChange={onSelectChange}
            />
        );

        fireEvent.click(screen.getByText('Single Item'));
        expect(onSelectChange).toHaveBeenCalledWith(['item']);
    });

    it('renders tree items with correct aria-expanded', () => {
        render(<TreeView nodes={testNodes} defaultExpandedIds={['root']} />);

        const treeItems = screen.getAllByRole('treeitem');
        const rootItem = treeItems.find(item => item.textContent?.includes('Root'));
        expect(rootItem).toHaveAttribute('aria-expanded', 'true');
    });
});
