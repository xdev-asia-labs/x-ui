import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['single', 'multiple'] },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: () => (
        <Accordion type="single" style={{ width: '400px' }}>
            <AccordionItem value="item-1">
                <AccordionTrigger>What is X-UI?</AccordionTrigger>
                <AccordionContent>
                    X-UI is a modern React component library with Liquid Glass design.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How do I install it?</AccordionTrigger>
                <AccordionContent>
                    Run npm install @xdev-asia/x-ui-react to get started.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes! X-UI follows WCAG 2.1 AA guidelines for accessibility.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};

export const Multiple: Story = {
    render: () => (
        <Accordion type="multiple" style={{ width: '400px' }}>
            <AccordionItem value="item-1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>Content for section 1</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>Content for section 2</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Section 3</AccordionTrigger>
                <AccordionContent>Content for section 3</AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
};
