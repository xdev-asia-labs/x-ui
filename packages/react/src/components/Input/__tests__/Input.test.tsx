import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('Input', () => {
    it('renders correctly', () => {
        render(<Input placeholder="Enter text" />);
        expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
    });

    it('renders label when provided', () => {
        render(<Input label="Email" />);
        expect(screen.getByText('Email')).toBeInTheDocument();
    });

    it('handles value changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} />);

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });

        expect(handleChange).toHaveBeenCalled();
    });

    it('shows error message when invalid', () => {
        render(<Input isInvalid errorMessage="Invalid input" />);
        expect(screen.getByText('Invalid input')).toBeInTheDocument();
    });

    it('shows helper text when provided', () => {
        render(<Input helperText="This is helpful" />);
        expect(screen.getByText('This is helpful')).toBeInTheDocument();
    });

    it('is disabled when isDisabled is true', () => {
        render(<Input isDisabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('is readonly when isReadOnly is true', () => {
        render(<Input isReadOnly />);
        expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('renders left and right elements', () => {
        render(
            <Input
                leftElement={<span data-testid="left">$</span>}
                rightElement={<span data-testid="right">.00</span>}
            />
        );

        expect(screen.getByTestId('left')).toBeInTheDocument();
        expect(screen.getByTestId('right')).toBeInTheDocument();
    });

    it('applies variant classes correctly', () => {
        const { rerender } = render(<Input variant="outline" />);
        expect(screen.getByRole('textbox').parentElement).toHaveClass('x-input--outline');

        rerender(<Input variant="filled" />);
        expect(screen.getByRole('textbox').parentElement).toHaveClass('x-input--filled');
    });

    it('applies size classes correctly', () => {
        const { rerender } = render(<Input size="sm" />);
        expect(screen.getByRole('textbox')).toHaveClass('x-input--sm');

        rerender(<Input size="lg" />);
        expect(screen.getByRole('textbox')).toHaveClass('x-input--lg');
    });
});
