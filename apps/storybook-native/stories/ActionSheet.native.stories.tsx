import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionSheet, ActionSheetAction } from '@xdev-asia/x-ui-native';

const meta: Meta<typeof ActionSheet> = {
    title: 'Native/ActionSheet',
    component: ActionSheet,
    parameters: {
        layout: 'padded',
    },
};

export default meta;
type Story = StoryObj<typeof ActionSheet>;

const ActionSheetDemo = () => {
    const [visible, setVisible] = useState(false);

    const actions: ActionSheetAction[] = [
        { key: 'share', label: 'Share', onPress: () => console.log('Share') },
        { key: 'copy', label: 'Copy Link', onPress: () => console.log('Copy') },
        { key: 'save', label: 'Save to Library', onPress: () => console.log('Save') },
        { key: 'delete', label: 'Delete', destructive: true, onPress: () => console.log('Delete') },
    ];

    return (
        <View style={styles.container}>
            <Button title="Show ActionSheet" onPress={() => setVisible(true)} />
            <ActionSheet
                visible={visible}
                onClose={() => setVisible(false)}
                title="Options"
                message="Choose an action"
                actions={actions}
            />
        </View>
    );
};

export const Default: Story = {
    render: () => <ActionSheetDemo />,
};

const SimpleActionSheetDemo = () => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Button title="Show Simple ActionSheet" onPress={() => setVisible(true)} />
            <ActionSheet
                visible={visible}
                onClose={() => setVisible(false)}
                actions={[
                    { key: 'edit', label: 'Edit', onPress: () => { } },
                    { key: 'duplicate', label: 'Duplicate', onPress: () => { } },
                ]}
            />
        </View>
    );
};

export const Simple: Story = {
    render: () => <SimpleActionSheetDemo />,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
