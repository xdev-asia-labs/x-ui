import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from '@xdev-asia/x-ui-react';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['line', 'enclosed', 'pills'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => (
        <Tabs defaultIndex={0} style={{ width: '400px' }}>
            <TabList>
                <Tab>Account</Tab>
                <Tab>Security</Tab>
                <Tab>Notifications</Tab>
            </TabList>
            <TabPanel>Account settings content</TabPanel>
            <TabPanel>Security settings content</TabPanel>
            <TabPanel>Notification preferences</TabPanel>
        </Tabs>
    ),
};

export const Variants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div>
                <h4 style={{ marginBottom: '8px', color: 'var(--x-mutedForeground)' }}>Line</h4>
                <Tabs variant="line" style={{ width: '400px' }}>
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div>
                <h4 style={{ marginBottom: '8px', color: 'var(--x-mutedForeground)' }}>Enclosed</h4>
                <Tabs variant="enclosed" style={{ width: '400px' }}>
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
            <div>
                <h4 style={{ marginBottom: '8px', color: 'var(--x-mutedForeground)' }}>Pills</h4>
                <Tabs variant="pills" style={{ width: '400px' }}>
                    <TabList>
                        <Tab>Tab 1</Tab>
                        <Tab>Tab 2</Tab>
                        <Tab>Tab 3</Tab>
                    </TabList>
                </Tabs>
            </div>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Tabs style={{ width: '400px' }}>
            <TabList>
                <Tab>Active</Tab>
                <Tab isDisabled>Disabled</Tab>
                <Tab>Active</Tab>
            </TabList>
        </Tabs>
    ),
};
