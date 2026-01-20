'use client';

import React, { forwardRef, HTMLAttributes, ReactNode, createContext, useContext } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

// ============================================
// Context
// ============================================
interface SidebarContextValue {
    collapsed: boolean;
}

const SidebarContext = createContext<SidebarContextValue>({ collapsed: false });

const useSidebar = () => useContext(SidebarContext);

// ============================================
// Sidebar
// ============================================
export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
    /** Collapsed state */
    collapsed?: boolean;
    /** Collapse toggle callback */
    onToggle?: () => void;
    /** Width when expanded (default: 256px) */
    width?: number | string;
    /** Width when collapsed (default: 80px) */
    collapsedWidth?: number | string;
    /** Variant style */
    variant?: 'default' | 'glass';
    children?: ReactNode;
}

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
    (
        {
            collapsed = false,
            onToggle,
            width = 256,
            collapsedWidth = 80,
            variant = 'default',
            className,
            children,
            ...props
        },
        ref
    ) => {
        const currentWidth = collapsed
            ? typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth
            : typeof width === 'number' ? `${width}px` : width;

        return (
            <SidebarContext.Provider value={{ collapsed }}>
                <aside
                    ref={ref}
                    className={cn(
                        'x-sidebar',
                        'h-full flex flex-col',
                        'transition-all duration-300 ease-out',
                        'border-r border-[var(--x-border)]',
                        variant === 'default' && 'bg-[var(--x-card)]',
                        variant === 'glass' &&
                        'bg-[var(--x-card)]/60 backdrop-blur-xl border-white/10',
                        className
                    )}
                    style={{ width: currentWidth, minWidth: currentWidth }}
                    {...props}
                >
                    {children}
                </aside>
            </SidebarContext.Provider>
        );
    }
);
Sidebar.displayName = 'Sidebar';

// ============================================
// SidebarHeader
// ============================================
export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Logo element */
    logo?: ReactNode;
    /** Brand title */
    title?: string;
    /** Brand subtitle */
    subtitle?: string;
    children?: ReactNode;
}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
    ({ logo, title, subtitle, className, children, ...props }, ref) => {
        const { collapsed } = useSidebar();

        return (
            <div
                ref={ref}
                className={cn(
                    'x-sidebar-header',
                    'h-16 px-4 flex items-center gap-3',
                    'border-b border-[var(--x-border)]',
                    collapsed && 'justify-center px-2',
                    className
                )}
                {...props}
            >
                {children ?? (
                    <>
                        {logo && (
                            <div className="shrink-0">
                                {logo}
                            </div>
                        )}
                        {!collapsed && (title || subtitle) && (
                            <div className="flex flex-col min-w-0">
                                {title && (
                                    <span className="font-bold text-lg text-[var(--x-foreground)] truncate">
                                        {title}
                                    </span>
                                )}
                                {subtitle && (
                                    <span className="text-[10px] text-[var(--x-mutedForeground)] uppercase tracking-wider">
                                        {subtitle}
                                    </span>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    }
);
SidebarHeader.displayName = 'SidebarHeader';

// ============================================
// SidebarNav
// ============================================
export interface SidebarNavProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
}

export const SidebarNav = forwardRef<HTMLElement, SidebarNavProps>(
    ({ className, children, ...props }, ref) => (
        <nav
            ref={ref}
            className={cn(
                'x-sidebar-nav',
                'flex-1 py-4 px-3 flex flex-col gap-1 overflow-y-auto',
                className
            )}
            {...props}
        >
            {children}
        </nav>
    )
);
SidebarNav.displayName = 'SidebarNav';

// ============================================
// SidebarNavItem
// ============================================
export interface SidebarNavItemProps extends HTMLAttributes<HTMLButtonElement> {
    /** Icon element */
    icon?: ReactNode;
    /** Label text */
    label: string;
    /** Active state */
    isActive?: boolean;
    /** Link href (renders as anchor if provided) */
    href?: string;
    /** Disabled state */
    isDisabled?: boolean;
}

export const SidebarNavItem = forwardRef<HTMLButtonElement, SidebarNavItemProps>(
    (
        {
            icon,
            label,
            isActive = false,
            href,
            isDisabled = false,
            className,
            onClick,
            ...props
        },
        ref
    ) => {
        const { collapsed } = useSidebar();

        const content = (
            <>
                {icon && (
                    <span className={cn(
                        'shrink-0 transition-transform duration-200',
                        isActive && 'scale-110'
                    )}>
                        {icon}
                    </span>
                )}
                {!collapsed && (
                    <span className="truncate font-medium text-sm">
                        {label}
                    </span>
                )}
                {isActive && !collapsed && (
                    <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                )}
            </>
        );

        const baseClassName = cn(
            'x-sidebar-nav-item',
            'relative flex items-center gap-3 w-full px-3 py-3 rounded-xl cursor-pointer',
            'transition-all duration-200',
            collapsed && 'justify-center',
            isActive
                ? 'bg-[var(--x-primary)] text-white shadow-lg shadow-[var(--x-primary)]/25'
                : 'text-[var(--x-mutedForeground)] hover:text-[var(--x-foreground)] hover:bg-[var(--x-muted)]/50',
            isDisabled && 'opacity-50 pointer-events-none',
            className
        );

        if (href && !isDisabled) {
            return (
                <a
                    href={href}
                    className={baseClassName}
                    onClick={onClick as any}
                >
                    {content}
                </a>
            );
        }

        return (
            <button
                ref={ref}
                type="button"
                className={baseClassName}
                onClick={onClick}
                disabled={isDisabled}
                {...props}
            >
                {content}
            </button>
        );
    }
);
SidebarNavItem.displayName = 'SidebarNavItem';

// ============================================
// SidebarSection
// ============================================
export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
    /** Section title */
    title?: string;
    children?: ReactNode;
}

export const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
    ({ title, className, children, ...props }, ref) => {
        const { collapsed } = useSidebar();

        return (
            <div
                ref={ref}
                className={cn('x-sidebar-section', 'py-2', className)}
                {...props}
            >
                {title && !collapsed && (
                    <div className="px-4 py-2 text-xs font-semibold text-[var(--x-mutedForeground)] uppercase tracking-wider">
                        {title}
                    </div>
                )}
                {children}
            </div>
        );
    }
);
SidebarSection.displayName = 'SidebarSection';

// ============================================
// SidebarFooter
// ============================================
export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'x-sidebar-footer',
                'p-3 border-t border-[var(--x-border)]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
SidebarFooter.displayName = 'SidebarFooter';

// ============================================
// SidebarToggle
// ============================================
export interface SidebarToggleProps extends HTMLAttributes<HTMLButtonElement> {
    /** Collapse callback */
    onToggle?: () => void;
    /** Collapsed state */
    collapsed?: boolean;
}

export const SidebarToggle = forwardRef<HTMLButtonElement, SidebarToggleProps>(
    ({ onToggle, collapsed: propCollapsed, className, ...props }, ref) => {
        const context = useSidebar();
        const isCollapsed = propCollapsed ?? context.collapsed;

        return (
            <button
                ref={ref}
                type="button"
                className={cn(
                    'x-sidebar-toggle',
                    'flex items-center justify-center w-full p-2 rounded-xl',
                    'text-[var(--x-mutedForeground)]',
                    'hover:text-[var(--x-foreground)]',
                    'hover:bg-[var(--x-muted)]/50',
                    'transition-all duration-200',
                    className
                )}
                onClick={onToggle}
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                {...props}
            >
                <svg
                    className={cn(
                        'w-5 h-5 transition-transform duration-200',
                        isCollapsed && 'rotate-180'
                    )}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                {!isCollapsed && (
                    <span className="ml-2 text-sm">Collapse</span>
                )}
            </button>
        );
    }
);
SidebarToggle.displayName = 'SidebarToggle';

// ============================================
// SidebarUser
// ============================================
export interface SidebarUserProps extends HTMLAttributes<HTMLDivElement> {
    /** Avatar URL */
    avatar?: string;
    /** User name */
    name?: string;
    /** User email */
    email?: string;
    /** Logout callback */
    onLogout?: () => void;
    children?: ReactNode;
}

export const SidebarUser = forwardRef<HTMLDivElement, SidebarUserProps>(
    ({ avatar, name, email, onLogout, className, children, ...props }, ref) => {
        const { collapsed } = useSidebar();

        return (
            <div
                ref={ref}
                className={cn(
                    'x-sidebar-user',
                    'p-3 border-t border-[var(--x-border)]',
                    className
                )}
                {...props}
            >
                {children ?? (
                    <button
                        className={cn(
                            'flex items-center gap-3 w-full p-2 rounded-xl',
                            'transition-colors hover:bg-[var(--x-muted)]/50 group',
                            collapsed && 'justify-center'
                        )}
                        onClick={onLogout}
                    >
                        {avatar && (
                            <img
                                src={avatar}
                                alt={name || 'User'}
                                className="w-8 h-8 rounded-full object-cover ring-2 ring-[var(--x-border)] group-hover:ring-[var(--x-primary)]/50 transition-all"
                            />
                        )}
                        {!collapsed && (
                            <>
                                <div className="flex-1 text-left min-w-0">
                                    {name && (
                                        <p className="text-sm font-medium text-[var(--x-foreground)] truncate">
                                            {name}
                                        </p>
                                    )}
                                    {email && (
                                        <p className="text-xs text-[var(--x-mutedForeground)] truncate">
                                            {email}
                                        </p>
                                    )}
                                </div>
                                <svg
                                    className="w-4 h-4 text-[var(--x-mutedForeground)] group-hover:text-[var(--x-foreground)] transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </>
                        )}
                    </button>
                )}
            </div>
        );
    }
);
SidebarUser.displayName = 'SidebarUser';
