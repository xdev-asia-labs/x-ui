import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof FileUpload> = {
    title: 'Forms/FileUpload',
    component: FileUpload,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const ImagesOnly: Story = {
    args: {
        accept: 'image/*',
        multiple: true,
        maxFiles: 5,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const PDFOnly: Story = {
    args: {
        accept: '.pdf',
        maxSize: 5 * 1024 * 1024, // 5MB
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const WithCallbacks: Story = {
    args: {
        onUpload: (files: File[]) => {
            console.log('Uploaded files:', files);
            alert(`Uploaded ${files.length} file(s)`);
        },
        onError: (error: string) => {
            console.error('Upload error:', error);
            alert(`Error: ${error}`);
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ],
};

export const CustomContent: Story = {
    render: () => (
        <div style={{ width: '400px' }}>
            <FileUpload accept="image/*" multiple>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'white'
                }}>
                    <div style={{ fontSize: '48px' }}>📷</div>
                    <p style={{ fontWeight: 600 }}>Upload your photos</p>
                    <p style={{ fontSize: '14px', opacity: 0.7 }}>PNG, JPG, GIF up to 10MB</p>
                </div>
            </FileUpload>
        </div>
    ),
};
