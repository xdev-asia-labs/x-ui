'use client';

import React, { useRef, useCallback, useState } from 'react';
import { cn } from '@xdev-asia/x-ui-core';

export interface RichTextEditorProps {
    /** Current HTML value */
    value?: string;
    /** Default value */
    defaultValue?: string;
    /** Change handler */
    onChange?: (html: string) => void;
    /** Placeholder text */
    placeholder?: string;
    /** Minimum height */
    minHeight?: number;
    /** Maximum height */
    maxHeight?: number;
    /** Is disabled */
    disabled?: boolean;
    /** Is readonly */
    readOnly?: boolean;
    /** Hide toolbar */
    hideToolbar?: boolean;
    /** Custom class name */
    className?: string;
    /** Toolbar items to show */
    toolbar?: ToolbarItem[];
}

export type ToolbarItem =
    | 'bold'
    | 'italic'
    | 'underline'
    | 'strikethrough'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'bulletList'
    | 'orderedList'
    | 'link'
    | 'image'
    | 'code'
    | 'codeBlock'
    | 'quote'
    | 'undo'
    | 'redo'
    | 'divider';

const defaultToolbar: ToolbarItem[] = [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'divider',
    'heading1',
    'heading2',
    'heading3',
    'divider',
    'bulletList',
    'orderedList',
    'divider',
    'link',
    'code',
    'codeBlock',
    'quote',
];

const toolbarIcons: Record<ToolbarItem, string> = {
    bold: 'B',
    italic: 'I',
    underline: 'U',
    strikethrough: 'S',
    heading1: 'H1',
    heading2: 'H2',
    heading3: 'H3',
    bulletList: '•',
    orderedList: '1.',
    link: '🔗',
    image: '🖼',
    code: '</>',
    codeBlock: '{ }',
    quote: '"',
    undo: '↶',
    redo: '↷',
    divider: '|',
};

export function RichTextEditor({
    value,
    defaultValue = '',
    onChange,
    placeholder = 'Start typing...',
    minHeight = 200,
    maxHeight = 600,
    disabled = false,
    readOnly = false,
    hideToolbar = false,
    className,
    toolbar = defaultToolbar,
}: RichTextEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

    const execCommand = useCallback((command: string, value?: string) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus();
        updateActiveFormats();
    }, []);

    const updateActiveFormats = useCallback(() => {
        const formats = new Set<string>();
        if (document.queryCommandState('bold')) formats.add('bold');
        if (document.queryCommandState('italic')) formats.add('italic');
        if (document.queryCommandState('underline')) formats.add('underline');
        if (document.queryCommandState('strikeThrough')) formats.add('strikethrough');
        if (document.queryCommandState('insertUnorderedList')) formats.add('bulletList');
        if (document.queryCommandState('insertOrderedList')) formats.add('orderedList');
        setActiveFormats(formats);
    }, []);

    const handleToolbarClick = useCallback((item: ToolbarItem) => {
        if (disabled || readOnly) return;

        switch (item) {
            case 'bold':
                execCommand('bold');
                break;
            case 'italic':
                execCommand('italic');
                break;
            case 'underline':
                execCommand('underline');
                break;
            case 'strikethrough':
                execCommand('strikeThrough');
                break;
            case 'heading1':
                execCommand('formatBlock', '<h1>');
                break;
            case 'heading2':
                execCommand('formatBlock', '<h2>');
                break;
            case 'heading3':
                execCommand('formatBlock', '<h3>');
                break;
            case 'bulletList':
                execCommand('insertUnorderedList');
                break;
            case 'orderedList':
                execCommand('insertOrderedList');
                break;
            case 'link':
                const url = prompt('Enter URL:');
                if (url) execCommand('createLink', url);
                break;
            case 'code':
                execCommand('formatBlock', '<pre>');
                break;
            case 'codeBlock':
                execCommand('formatBlock', '<pre>');
                break;
            case 'quote':
                execCommand('formatBlock', '<blockquote>');
                break;
            case 'undo':
                execCommand('undo');
                break;
            case 'redo':
                execCommand('redo');
                break;
        }
    }, [execCommand, disabled, readOnly]);

    const handleInput = useCallback(() => {
        if (onChange && editorRef.current) {
            onChange(editorRef.current.innerHTML);
        }
        updateActiveFormats();
    }, [onChange, updateActiveFormats]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        // Handle Tab for indentation
        if (e.key === 'Tab') {
            e.preventDefault();
            execCommand(e.shiftKey ? 'outdent' : 'indent');
        }
    }, [execCommand]);

    const handlePaste = useCallback((e: React.ClipboardEvent) => {
        // Paste as plain text by default
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        execCommand('insertText', text);
    }, [execCommand]);

    return (
        <div
            className={cn(
                'x-rich-text-editor',
                'rounded-xl overflow-hidden',
                'border border-white/[0.1]',
                'bg-white/[0.02]',
                disabled && 'opacity-50 cursor-not-allowed',
                className,
            )}
        >
            {/* Toolbar */}
            {!hideToolbar && (
                <div
                    className={cn(
                        'x-rte-toolbar',
                        'flex flex-wrap items-center gap-1',
                        'px-3 py-2',
                        'bg-white/[0.04]',
                        'border-b border-white/[0.08]',
                    )}
                >
                    {toolbar.map((item, index) => {
                        if (item === 'divider') {
                            return (
                                <div
                                    key={`divider-${index}`}
                                    className="w-px h-5 bg-white/[0.1] mx-1"
                                />
                            );
                        }

                        return (
                            <button
                                key={item}
                                type="button"
                                onClick={() => handleToolbarClick(item)}
                                disabled={disabled || readOnly}
                                className={cn(
                                    'x-rte-btn',
                                    'px-2 py-1 rounded',
                                    'text-sm font-medium',
                                    'transition-colors duration-150',
                                    'hover:bg-white/[0.08]',
                                    activeFormats.has(item)
                                        ? 'bg-[var(--x-primary)]/20 text-[var(--x-primary)]'
                                        : 'text-[var(--x-foreground)]',
                                    (disabled || readOnly) && 'cursor-not-allowed opacity-50',
                                )}
                                title={item.charAt(0).toUpperCase() + item.slice(1)}
                            >
                                {toolbarIcons[item]}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Editor */}
            <div
                ref={editorRef}
                contentEditable={!disabled && !readOnly}
                suppressContentEditableWarning
                className={cn(
                    'x-rte-content',
                    'p-4',
                    'outline-none',
                    'text-[var(--x-foreground)]',
                    'prose prose-invert max-w-none',
                    '[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-4',
                    '[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3',
                    '[&_h3]:text-lg [&_h3]:font-medium [&_h3]:mb-2',
                    '[&_p]:mb-2',
                    '[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-2',
                    '[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-2',
                    '[&_blockquote]:border-l-4 [&_blockquote]:border-[var(--x-primary)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[var(--x-mutedForeground)]',
                    '[&_pre]:bg-black/30 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:font-mono [&_pre]:text-sm [&_pre]:overflow-x-auto',
                    '[&_code]:bg-black/30 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:font-mono [&_code]:text-sm',
                    '[&_a]:text-[var(--x-primary)] [&_a]:underline',
                    'empty:before:content-[attr(data-placeholder)]',
                    'empty:before:text-[var(--x-mutedForeground)]',
                )}
                style={{
                    minHeight,
                    maxHeight,
                    overflowY: 'auto',
                }}
                data-placeholder={placeholder}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                onSelect={updateActiveFormats}
                dangerouslySetInnerHTML={{
                    __html: value !== undefined ? value : defaultValue,
                }}
            />
        </div>
    );
}

export default RichTextEditor;
