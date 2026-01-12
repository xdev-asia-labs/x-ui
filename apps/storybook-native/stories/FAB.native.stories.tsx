import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import { FAB, FABAction } from '@xdev-asia/x-ui-native';

const PlusIcon = () => <Text style={{ color: '#FFF', fontSize: 24 }}>+</Text>;
const EditIcon = () => <Text style={{ color: '#FFF', fontSize: 18 }}>✏️</Text>;
const ShareIcon = () => <Text style={{ color: '#FFF', fontSize: 18 }}>📤</Text>;
const StarIcon = () => <Text style={{ color: '#FFF', fontSize: 18 }}>⭐</Text>;

const meta: Meta<typeof FAB> = {
    title: 'Native/FAB',
    component: FAB,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof FAB>;

const Container = ({ children }: { children: React.ReactNode }) => (
    <View style={styles.container}>
        <Text style={styles.content}>Content Area</Text>
        {children}
    </View>
);

export const Default: Story = {
    render: () => (
        <Container>
            <FAB icon={<PlusIcon />} onPress={() => console.log('FAB pressed')} />
        </Container>
    ),
};

export const BottomLeft: Story = {
    render: () => (
        <Container>
            <FAB icon={<PlusIcon />} position="bottom-left" onPress={() => { }} />
        </Container>
    ),
};

export const Extended: Story = {
    render: () => (
        <Container>
            <FAB
                icon={<PlusIcon />}
                extended
                label="Create"
                onPress={() => console.log('Create')}
            />
        </Container>
    ),
};

export const WithSpeedDial: Story = {
    render: () => {
        const actions: FABAction[] = [
            { key: 'edit', icon: <EditIcon />, label: 'Edit', onPress: () => console.log('Edit') },
            { key: 'share', icon: <ShareIcon />, label: 'Share', onPress: () => console.log('Share') },
            { key: 'star', icon: <StarIcon />, label: 'Favorite', onPress: () => console.log('Star') },
        ];

        return (
            <Container>
                <FAB icon={<PlusIcon />} actions={actions} />
            </Container>
        );
    },
};

export const SecondaryVariant: Story = {
    render: () => (
        <Container>
            <FAB icon={<PlusIcon />} variant="secondary" onPress={() => { }} />
        </Container>
    ),
};

export const SmallSize: Story = {
    render: () => (
        <Container>
            <FAB icon={<PlusIcon />} size="small" onPress={() => { }} />
        </Container>
    ),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 400,
        backgroundColor: '#111827',
        position: 'relative',
    },
    content: {
        flex: 1,
        color: '#6B7280',
        textAlign: 'center',
        paddingTop: 180,
        fontSize: 16,
    },
});
