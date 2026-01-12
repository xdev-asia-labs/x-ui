'use client';

import React from 'react';
import DocsLayout from '@docs/DocsLayout';
import CodeBlock from '@components/CodeBlock';

export default function TabsPage() {
    return (
        <DocsLayout>
            <div style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px', color: 'var(--x-foreground)' }}>
                    Tabs
                </h1>
                <p style={{ fontSize: '18px', color: 'var(--x-mutedForeground)', marginBottom: '40px', lineHeight: 1.7 }}>
                    A set of layered sections of content that display one panel at a time.
                </p>

                <section style={{ marginBottom: '32px' }}>
                    <CodeBlock language="tsx" code={`import { Tabs, TabList, Tab, TabPanel } from '@xdev-asia/x-ui-react';`} />
                </section>

                <section style={{ marginBottom: '48px' }}>
                    <CodeBlock language="tsx" code={`<Tabs defaultValue="account">
  <TabList>
    <Tab value="account">Account</Tab>
    <Tab value="security">Security</Tab>
    <Tab value="notifications">Notifications</Tab>
  </TabList>
  <TabPanel value="account">Account settings...</TabPanel>
  <TabPanel value="security">Security settings...</TabPanel>
  <TabPanel value="notifications">Notification settings...</TabPanel>
</Tabs>`} />
                </section>

                <section>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px', color: 'var(--x-foreground)' }}>
                        Props
                    </h2>
                    <ul style={{ color: 'var(--x-mutedForeground)', lineHeight: 2 }}>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>defaultValue</code> - Initially active tab</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>value</code> - Controlled active tab</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>onChange</code> - Tab change callback</li>
                        <li><code style={{ color: 'rgb(59, 130, 246)' }}>variant</code> - 'line' | 'enclosed' | 'pills'</li>
                    </ul>
                </section>
            </div>
        </DocsLayout>
    );
}
