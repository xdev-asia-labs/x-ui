import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['elevated', 'outlined', 'filled', 'glass'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
        isInteractive: { control: 'boolean' },
        isSelected: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: () => (
        <Card style={{ width: '320px' }}>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
                <p style={{ margin: 0, color: 'rgb(var(--x-mutedForeground))' }}>
                    Your content here
                </p>
            </CardContent>
        </Card>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <Card style={{ width: '320px' }}>
            <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Manage your subscription</CardDescription>
            </CardHeader>
            <CardContent>
                <p style={{ margin: 0, color: 'rgb(var(--x-mutedForeground))' }}>
                    You are on the Pro plan.
                </p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Upgrade</Button>
            </CardFooter>
        </Card>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Card variant="elevated" style={{ width: '200px' }}>
                <CardTitle>Elevated</CardTitle>
                <CardDescription>With shadow</CardDescription>
            </Card>
            <Card variant="outlined" style={{ width: '200px' }}>
                <CardTitle>Outlined</CardTitle>
                <CardDescription>With border</CardDescription>
            </Card>
            <Card variant="filled" style={{ width: '200px' }}>
                <CardTitle>Filled</CardTitle>
                <CardDescription>Muted background</CardDescription>
            </Card>
            <Card variant="glass" style={{ width: '200px' }}>
                <CardTitle>Glass</CardTitle>
                <CardDescription>Backdrop blur</CardDescription>
            </Card>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '16px' }}>
            <Card isInteractive style={{ width: '200px', cursor: 'pointer' }}>
                <CardTitle>Hover me!</CardTitle>
                <CardDescription>Interactive card</CardDescription>
            </Card>
            <Card isInteractive isSelected style={{ width: '200px' }}>
                <CardTitle>Selected</CardTitle>
                <CardDescription>With ring effect</CardDescription>
            </Card>
        </div>
    ),
};

/**
 * Interactive Playground - Try all the props!
 */
export const Playground: Story = {
    args: {
        variant: 'elevated',
        padding: 'md',
        isInteractive: false,
        isSelected: false,
    },
    render: (args) => (
        <Card {...args} style={{ width: '320px' }}>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description</CardDescription>
            </CardHeader>
            <CardContent>
                <p style={{ margin: 0, color: 'var(--x-mutedForeground)' }}>
                    Card content goes here. Try the controls below!
                </p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
            </CardFooter>
        </Card>
    ),
    parameters: {
        docs: {
            description: {
                story: '🎮 **Interactive Playground** - Use the Controls panel to experiment with all Card props.',
            },
        },
    },
};
