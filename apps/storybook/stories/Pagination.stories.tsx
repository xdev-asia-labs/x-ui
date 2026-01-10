import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Pagination> = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
        variant: { control: 'select', options: ['solid', 'outline', 'ghost'] },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        totalPages: 10,
        currentPage: 1,
        onPageChange: (page: number) => console.log('Page:', page),
    },
};

export const Sizes: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Pagination totalPages={10} currentPage={1} size="sm" onPageChange={() => { }} />
            <Pagination totalPages={10} currentPage={5} size="md" onPageChange={() => { }} />
            <Pagination totalPages={10} currentPage={10} size="lg" onPageChange={() => { }} />
        </div>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Pagination totalPages={10} currentPage={3} variant="solid" onPageChange={() => { }} />
            <Pagination totalPages={10} currentPage={3} variant="outline" onPageChange={() => { }} />
            <Pagination totalPages={10} currentPage={3} variant="ghost" onPageChange={() => { }} />
        </div>
    ),
};
