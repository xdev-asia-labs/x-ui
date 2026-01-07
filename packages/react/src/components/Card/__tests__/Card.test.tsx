import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card';

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card>Card content</Card>);
        expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('applies variant classes', () => {
        const { rerender } = render(<Card variant="elevated">Elevated</Card>);
        expect(screen.getByText('Elevated').parentElement).toHaveClass('x-card--elevated');

        rerender(<Card variant="outlined">Outlined</Card>);
        expect(screen.getByText('Outlined').parentElement).toHaveClass('x-card--outlined');

        rerender(<Card variant="glass">Glass</Card>);
        expect(screen.getByText('Glass').parentElement).toHaveClass('x-card--glass');
    });

    it('applies padding classes', () => {
        const { rerender } = render(<Card padding="sm">Small padding</Card>);
        expect(screen.getByText('Small padding').parentElement).toHaveClass('x-card--padding-sm');

        rerender(<Card padding="lg">Large padding</Card>);
        expect(screen.getByText('Large padding').parentElement).toHaveClass('x-card--padding-lg');
    });

    it('is interactive when isHoverable is true', () => {
        render(<Card isHoverable>Hoverable</Card>);
        expect(screen.getByText('Hoverable').parentElement).toHaveClass('x-card--hoverable');
    });

    it('is pressable when isPressable is true', () => {
        const handleClick = vi.fn();
        render(<Card isPressable onClick={handleClick}>Pressable</Card>);

        fireEvent.click(screen.getByText('Pressable').parentElement!);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

describe('Card subcomponents', () => {
    it('renders CardHeader correctly', () => {
        render(<CardHeader>Header content</CardHeader>);
        expect(screen.getByText('Header content')).toBeInTheDocument();
    });

    it('renders CardTitle correctly', () => {
        render(<CardTitle>Title</CardTitle>);
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    it('renders CardDescription correctly', () => {
        render(<CardDescription>Description text</CardDescription>);
        expect(screen.getByText('Description text')).toBeInTheDocument();
    });

    it('renders CardContent correctly', () => {
        render(<CardContent>Content area</CardContent>);
        expect(screen.getByText('Content area')).toBeInTheDocument();
    });

    it('renders CardFooter correctly', () => {
        render(<CardFooter>Footer content</CardFooter>);
        expect(screen.getByText('Footer content')).toBeInTheDocument();
    });

    it('renders complete card structure', () => {
        render(
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description</CardDescription>
                </CardHeader>
                <CardContent>Main content</CardContent>
                <CardFooter>Footer</CardFooter>
            </Card>
        );

        expect(screen.getByText('Card Title')).toBeInTheDocument();
        expect(screen.getByText('Card description')).toBeInTheDocument();
        expect(screen.getByText('Main content')).toBeInTheDocument();
        expect(screen.getByText('Footer')).toBeInTheDocument();
    });
});
