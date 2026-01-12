import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@xdev-asia/x-ui-react';
import { useState } from 'react';

const meta: Meta<typeof Stepper> = {
    title: 'Navigation/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        orientation: {
            control: 'select',
            options: ['horizontal', 'vertical'],
        },
        colorScheme: {
            control: 'select',
            options: ['primary', 'secondary', 'success'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
    { title: 'Account', description: 'Create your account' },
    { title: 'Profile', description: 'Setup your profile' },
    { title: 'Review', description: 'Review and confirm' },
];

export const Default: Story = {
    args: {
        steps,
        activeStep: 1,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '600px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Vertical: Story = {
    args: {
        steps,
        activeStep: 1,
        orientation: 'vertical',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '300px' }}>
                <Story />
            </div>
        ),
    ],
};

export const ColorSchemes: Story = {
    render: () => (
        <div style={{ width: '600px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
                <p style={{ color: 'white', marginBottom: '16px', fontSize: '14px' }}>Primary</p>
                <Stepper steps={steps} activeStep={1} colorScheme="primary" />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '16px', fontSize: '14px' }}>Secondary</p>
                <Stepper steps={steps} activeStep={1} colorScheme="secondary" />
            </div>
            <div>
                <p style={{ color: 'white', marginBottom: '16px', fontSize: '14px' }}>Success</p>
                <Stepper steps={steps} activeStep={1} colorScheme="success" />
            </div>
        </div>
    ),
};

export const Interactive: Story = {
    render: () => {
        const [activeStep, setActiveStep] = useState(0);
        return (
            <div style={{ width: '600px' }}>
                <Stepper
                    steps={steps}
                    activeStep={activeStep}
                    onStepClick={setActiveStep}
                />
                <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
                    <button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid #444',
                            background: '#222',
                            color: 'white',
                            cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
                            opacity: activeStep === 0 ? 0.5 : 1,
                        }}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#6366f1',
                            color: 'white',
                            cursor: activeStep === steps.length - 1 ? 'not-allowed' : 'pointer',
                            opacity: activeStep === steps.length - 1 ? 0.5 : 1,
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    },
};

export const Completed: Story = {
    args: {
        steps,
        activeStep: 3,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '600px' }}>
                <Story />
            </div>
        ),
    ],
};
