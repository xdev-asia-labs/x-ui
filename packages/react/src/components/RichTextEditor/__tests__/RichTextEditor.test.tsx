import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RichTextEditor } from '../RichTextEditor';

describe('RichTextEditor', () => {
    it('renders the editor with toolbar', () => {
        render(<RichTextEditor />);

        // Check toolbar buttons exist by title
        expect(screen.getByTitle('Bold')).toBeInTheDocument();
        expect(screen.getByTitle('Italic')).toBeInTheDocument();
    });

    it('renders with default value', () => {
        render(<RichTextEditor defaultValue="<p>Hello World</p>" />);

        const editor = document.querySelector('.x-rte-content');
        expect(editor?.innerHTML).toContain('Hello World');
    });

    it('renders with placeholder attribute', () => {
        render(<RichTextEditor placeholder="Start typing..." />);

        const editor = document.querySelector('.x-rte-content');
        expect(editor).toHaveAttribute('data-placeholder', 'Start typing...');
    });

    it('has contenteditable attribute', () => {
        render(<RichTextEditor />);

        const editor = document.querySelector('.x-rte-content');
        expect(editor).toHaveAttribute('contenteditable', 'true');
    });

    it('shows disabled state when readOnly', () => {
        render(<RichTextEditor readOnly />);

        const editor = document.querySelector('.x-rte-content');
        expect(editor).toHaveAttribute('contenteditable', 'false');
    });

    it('renders toolbar with formatting buttons', () => {
        render(<RichTextEditor />);

        // Verify common toolbar items by title
        expect(screen.getByTitle('Underline')).toBeInTheDocument();
        expect(screen.getByTitle('Heading1')).toBeInTheDocument();
        expect(screen.getByTitle('BulletList')).toBeInTheDocument();
    });
});
