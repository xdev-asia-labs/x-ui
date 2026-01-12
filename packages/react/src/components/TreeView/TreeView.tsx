'use client';

import React, { useState, useCallback, ReactNode } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface TreeNode {
    /** Unique node ID */
    id: string;
    /** Node label */
    label: string;
    /** Child nodes */
    children?: TreeNode[];
    /** Custom icon */
    icon?: ReactNode;
    /** Is node disabled */
    disabled?: boolean;
    /** Custom data */
    data?: unknown;
}

export interface TreeViewProps {
    /** Tree data */
    nodes: TreeNode[];
    /** Expanded node IDs (controlled) */
    expandedIds?: string[];
    /** Default expanded node IDs */
    defaultExpandedIds?: string[];
    /** Expand change handler */
    onExpandChange?: (ids: string[]) => void;
    /** Selected node IDs */
    selectedIds?: string[];
    /** Default selected node IDs */
    defaultSelectedIds?: string[];
    /** Selection change handler */
    onSelectChange?: (ids: string[]) => void;
    /** Selection mode */
    selectionMode?: 'none' | 'single' | 'multiple';
    /** Show checkboxes */
    showCheckbox?: boolean;
    /** Node click handler */
    onNodeClick?: (node: TreeNode) => void;
    /** Expand all on initial render */
    expandAll?: boolean;
    /** Custom node renderer */
    renderNode?: (node: TreeNode, isExpanded: boolean, isSelected: boolean) => ReactNode;
    /** Custom class name */
    className?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
    sm: { text: 'text-xs', padding: 'py-1 px-2', icon: 'w-3 h-3' },
    md: { text: 'text-sm', padding: 'py-1.5 px-3', icon: 'w-4 h-4' },
    lg: { text: 'text-base', padding: 'py-2 px-4', icon: 'w-5 h-5' },
};

// Helper to get all node IDs
function getAllNodeIds(nodes: TreeNode[]): string[] {
    const ids: string[] = [];
    const traverse = (nodeList: TreeNode[]) => {
        nodeList.forEach((node) => {
            ids.push(node.id);
            if (node.children) {
                traverse(node.children);
            }
        });
    };
    traverse(nodes);
    return ids;
}

export function TreeView({
    nodes,
    expandedIds: controlledExpanded,
    defaultExpandedIds = [],
    onExpandChange,
    selectedIds: controlledSelected,
    defaultSelectedIds = [],
    onSelectChange,
    selectionMode = 'single',
    showCheckbox = false,
    onNodeClick,
    expandAll = false,
    renderNode,
    className,
    size = 'md',
}: TreeViewProps) {
    const [internalExpanded, setInternalExpanded] = useState<string[]>(
        expandAll ? getAllNodeIds(nodes) : defaultExpandedIds
    );
    const [internalSelected, setInternalSelected] = useState<string[]>(defaultSelectedIds);

    const expandedIds = controlledExpanded ?? internalExpanded;
    const selectedIds = controlledSelected ?? internalSelected;

    const handleExpand = useCallback((nodeId: string) => {
        const newExpanded = expandedIds.includes(nodeId)
            ? expandedIds.filter((id) => id !== nodeId)
            : [...expandedIds, nodeId];

        if (onExpandChange) {
            onExpandChange(newExpanded);
        } else {
            setInternalExpanded(newExpanded);
        }
    }, [expandedIds, onExpandChange]);

    const handleSelect = useCallback((node: TreeNode) => {
        if (node.disabled || selectionMode === 'none') return;

        let newSelected: string[];

        if (selectionMode === 'single') {
            newSelected = selectedIds.includes(node.id) ? [] : [node.id];
        } else {
            newSelected = selectedIds.includes(node.id)
                ? selectedIds.filter((id) => id !== node.id)
                : [...selectedIds, node.id];
        }

        if (onSelectChange) {
            onSelectChange(newSelected);
        } else {
            setInternalSelected(newSelected);
        }

        onNodeClick?.(node);
    }, [selectedIds, selectionMode, onSelectChange, onNodeClick]);

    const renderTreeNode = (node: TreeNode, level: number = 0) => {
        const isExpanded = expandedIds.includes(node.id);
        const isSelected = selectedIds.includes(node.id);
        const hasChildren = node.children && node.children.length > 0;

        return (
            <div key={node.id} className="x-treeview-node">
                <div
                    className={cn(
                        'x-treeview-item',
                        'flex items-center gap-2',
                        'rounded-md transition-colors duration-150',
                        'hover:bg-white/[0.06]',
                        isSelected && 'bg-[var(--x-primary)]/15 text-[var(--x-primary)]',
                        node.disabled && 'opacity-50 cursor-not-allowed',
                        !node.disabled && selectionMode !== 'none' && 'cursor-pointer',
                        sizeStyles[size].padding,
                        sizeStyles[size].text,
                    )}
                    style={{ paddingLeft: `${level * 20 + 8}px` }}
                    onClick={() => !node.disabled && handleSelect(node)}
                >
                    {/* Expand/Collapse button */}
                    <button
                        type="button"
                        className={cn(
                            'x-treeview-expand',
                            'flex items-center justify-center',
                            'w-5 h-5 rounded',
                            'hover:bg-white/[0.1]',
                            'transition-transform duration-200',
                            !hasChildren && 'invisible',
                        )}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (hasChildren) handleExpand(node.id);
                        }}
                    >
                        <svg
                            className={cn(
                                sizeStyles[size].icon,
                                'transition-transform duration-200',
                                isExpanded && 'rotate-90',
                            )}
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path d="M6 4l4 4-4 4V4z" />
                        </svg>
                    </button>

                    {/* Checkbox */}
                    {showCheckbox && selectionMode !== 'none' && (
                        <input
                            type={selectionMode === 'single' ? 'radio' : 'checkbox'}
                            checked={isSelected}
                            onChange={() => { }}
                            disabled={node.disabled}
                            className="x-treeview-checkbox rounded border-white/20 bg-white/5"
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}

                    {/* Icon */}
                    {node.icon && (
                        <span className={cn('x-treeview-icon', sizeStyles[size].icon)}>
                            {node.icon}
                        </span>
                    )}

                    {/* Custom render or default label */}
                    {renderNode ? (
                        renderNode(node, isExpanded, isSelected)
                    ) : (
                        <span className="x-treeview-label text-[var(--x-foreground)]">
                            {node.label}
                        </span>
                    )}
                </div>

                {/* Children */}
                {hasChildren && isExpanded && (
                    <div className="x-treeview-children">
                        {node.children!.map((child) => renderTreeNode(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            className={cn(
                'x-treeview',
                'rounded-lg',
                'border border-white/[0.1]',
                'bg-white/[0.02]',
                'p-2',
                className,
            )}
            role="tree"
        >
            {nodes.map((node) => renderTreeNode(node, 0))}
        </div>
    );
}

export default TreeView;
