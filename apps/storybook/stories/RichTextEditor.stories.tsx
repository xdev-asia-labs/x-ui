import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RichTextEditor } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof RichTextEditor> = {
    title: 'Forms/RichTextEditor',
    component: RichTextEditor,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
    render: () => <RichTextEditor placeholder="Start typing your content..." />,
};

export const Controlled: Story = {
    render: () => {
        const [value, setValue] = useState('<p>Hello, <strong>World!</strong></p>');
        return (
            <div>
                <RichTextEditor value={value} onChange={setValue} />
                <div className="mt-4 p-4 bg-white/5 rounded-lg">
                    <p className="text-xs text-gray-400 mb-2">HTML Output:</p>
                    <code className="text-xs text-emerald-400">{value}</code>
                </div>
            </div>
        );
    },
};

export const WithDefaultContent: Story = {
    render: () => (
        <RichTextEditor
            defaultValue={`
                <h2>Welcome to RichTextEditor</h2>
                <p>This is a <strong>WYSIWYG</strong> editor with support for:</p>
                <ul>
                    <li>Bold, italic, underline text</li>
                    <li>Headings (H1-H3)</li>
                    <li>Lists (ordered and unordered)</li>
                    <li>Code blocks</li>
                </ul>
                <blockquote>Try editing this content!</blockquote>
            `}
        />
    ),
};

export const MinimalToolbar: Story = {
    render: () => (
        <RichTextEditor
            placeholder="Simple editor..."
            toolbar={['bold', 'italic', 'underline', 'divider', 'link']}
        />
    ),
};

export const NoToolbar: Story = {
    render: () => (
        <RichTextEditor
            placeholder="Just type here..."
            hideToolbar
        />
    ),
};

export const CustomHeight: Story = {
    render: () => (
        <RichTextEditor
            placeholder="Tall editor..."
            minHeight={400}
            maxHeight={800}
        />
    ),
};

export const Disabled: Story = {
    render: () => (
        <RichTextEditor
            defaultValue="<p>This editor is <strong>disabled</strong>.</p>"
            disabled
        />
    ),
};

export const ReadOnly: Story = {
    render: () => (
        <RichTextEditor
            defaultValue="<p>This content is <em>read-only</em>. You can view but not edit.</p>"
            readOnly
        />
    ),
};
