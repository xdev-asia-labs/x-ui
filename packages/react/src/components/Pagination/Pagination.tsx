'use client';

import React from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface PaginationProps {
    /** Current page (1-indexed) */
    page: number;
    /** Total pages */
    totalPages: number;
    /** On page change */
    onPageChange: (page: number) => void;
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Show first/last buttons */
    showFirstLast?: boolean;
    /** Max visible pages */
    maxVisible?: number;
}

const sizeStyles = {
    sm: 'h-8 min-w-[32px] text-xs',
    md: 'h-10 min-w-[40px] text-sm',
    lg: 'h-12 min-w-[48px] text-base',
};

export function Pagination({
    page,
    totalPages,
    onPageChange,
    size = 'md',
    showFirstLast = true,
    maxVisible = 5,
}: PaginationProps) {
    const getPageNumbers = () => {
        const pages: (number | 'ellipsis')[] = [];
        const halfVisible = Math.floor(maxVisible / 2);

        let start = Math.max(1, page - halfVisible);
        let end = Math.min(totalPages, page + halfVisible);

        // Adjust if at edges
        if (page <= halfVisible) {
            end = Math.min(totalPages, maxVisible);
        }
        if (page > totalPages - halfVisible) {
            start = Math.max(1, totalPages - maxVisible + 1);
        }

        // Add first page and ellipsis
        if (start > 1) {
            pages.push(1);
            if (start > 2) pages.push('ellipsis');
        }

        // Add visible pages
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // Add ellipsis and last page
        if (end < totalPages) {
            if (end < totalPages - 1) pages.push('ellipsis');
            pages.push(totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    const buttonClass = cn(
        'inline-flex items-center justify-center rounded-lg font-medium',
        'transition-all duration-200',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        sizeStyles[size]
    );

    return (
        <nav className="flex items-center gap-1" aria-label="Pagination">
            {/* First */}
            {showFirstLast && (
                <button
                    onClick={() => onPageChange(1)}
                    disabled={page === 1}
                    className={cn(buttonClass, 'text-[var(--x-mutedForeground)] hover:bg-white/[0.08]')}
                    aria-label="First page"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                </button>
            )}

            {/* Previous */}
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 1}
                className={cn(buttonClass, 'text-[var(--x-mutedForeground)] hover:bg-white/[0.08]')}
                aria-label="Previous page"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Page numbers */}
            {pages.map((p, i) =>
                p === 'ellipsis' ? (
                    <span key={`ellipsis-${i}`} className="px-2 text-[var(--x-mutedForeground)]">
                        ...
                    </span>
                ) : (
                    <button
                        key={p}
                        onClick={() => onPageChange(p)}
                        className={cn(
                            buttonClass,
                            p === page
                                ? 'bg-[var(--x-primary)] text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]'
                                : 'text-[var(--x-mutedForeground)] hover:bg-white/[0.08]'
                        )}
                        aria-current={p === page ? 'page' : undefined}
                    >
                        {p}
                    </button>
                )
            )}

            {/* Next */}
            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages}
                className={cn(buttonClass, 'text-[var(--x-mutedForeground)] hover:bg-white/[0.08]')}
                aria-label="Next page"
            >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Last */}
            {showFirstLast && (
                <button
                    onClick={() => onPageChange(totalPages)}
                    disabled={page === totalPages}
                    className={cn(buttonClass, 'text-[var(--x-mutedForeground)] hover:bg-white/[0.08]')}
                    aria-label="Last page"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </nav>
    );
}

export default Pagination;
