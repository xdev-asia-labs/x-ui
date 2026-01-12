import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { SwipeableRow, SwipeAction } from '@xdev-asia/x-ui-native';

const leftActions: SwipeAction[] = [
    {
        key: 'archive',
        label: 'Archive',
        color: '#3B82F6',
        onPress: () => console.log('Archive'),
    },
];

const rightActions: SwipeAction[] = [
    {
        key: 'edit',
        label: 'Edit',
        color: '#F59E0B',
        onPress: () => console.log('Edit'),
    },
    {
        key: 'delete',
        label: 'Delete',
        color: '#EF4444',
        onPress: () => console.log('Delete'),
    },
];

const RowContent = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <View style={styles.rowContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
);

const meta: Meta<typeof SwipeableRow> = {
    title: 'Native/SwipeableRow',
    component: SwipeableRow,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof SwipeableRow>;

export const Default: Story = {
    render: () => (
        <SwipeableRow rightActions={rightActions}>
            <RowContent title="Swipe me left" subtitle="To reveal delete action" />
        </SwipeableRow>
    ),
};

export const WithLeftActions: Story = {
    render: () => (
        <SwipeableRow leftActions={leftActions} rightActions={rightActions}>
            <RowContent title="Swipe both ways" subtitle="Left for archive, right for edit/delete" />
        </SwipeableRow>
    ),
};

export const MultipleRows: Story = {
    render: () => (
        <View style={{ gap: 2 }}>
            {['Item 1', 'Item 2', 'Item 3'].map((item, i) => (
                <SwipeableRow key={i} rightActions={rightActions}>
                    <RowContent title={item} subtitle={`Row ${i + 1} description`} />
                </SwipeableRow>
            ))}
        </View>
    ),
};

const styles = StyleSheet.create({
    rowContent: {
        padding: 16,
        backgroundColor: '#1F2937',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F9FAFB',
    },
    subtitle: {
        fontSize: 14,
        color: '#9CA3AF',
        marginTop: 4,
    },
});
